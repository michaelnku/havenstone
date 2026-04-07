import { prisma } from "@/lib/prisma";

export type TransactionType = "INVESTMENT" | "WITHDRAWAL" | "EARNING";

export type TransactionItem = {
  id: string;
  type: TransactionType;
  amount: number;
  status: string;
  createdAt: Date;

  reference: string;
  planName?: string;
  description?: string;

  direction: "CREDIT" | "DEBIT";
};

export async function getUserTransactions(userId: string) {
  const profile = await prisma.investorProfile.findUnique({
    where: { userId },
    select: { id: true },
  });

  if (!profile) return [];

  const [orders, withdrawals, earnings] = await Promise.all([
    prisma.investmentOrder.findMany({
      where: { investorProfileId: profile.id },
      include: {
        investmentPlan: {
          select: { name: true },
        },
      },
    }),

    prisma.withdrawalOrder.findMany({
      where: { investorProfileId: profile.id },
    }),

    prisma.investmentEarning.findMany({
      where: {
        investmentOrder: {
          investorProfileId: profile.id,
        },
      },
      include: {
        investmentOrder: {
          include: {
            investmentPlan: {
              select: { name: true },
            },
          },
        },
      },
    }),
  ]);

  const investmentTx: TransactionItem[] = orders.map((order) => ({
    id: order.id,
    type: "INVESTMENT",
    amount: Number(order.amount),
    status: order.status,
    createdAt: order.createdAt,
    reference: `INV-${order.id.slice(0, 6).toUpperCase()}`,
    planName: order.investmentPlan?.name,
    description: `Investment into ${order.investmentPlan?.name ?? "plan"}`,
    direction: "DEBIT",
  }));

  const withdrawalTx: TransactionItem[] = withdrawals.map((w) => ({
    id: w.id,
    type: "WITHDRAWAL",
    amount: Number(w.amount),
    status: w.status,
    createdAt: w.createdAt,
    reference: `WDL-${w.id.slice(0, 6).toUpperCase()}`,
    description: "Withdrawal request",
    direction: "DEBIT",
  }));

  const earningTx: TransactionItem[] = earnings.map((e) => ({
    id: e.id,
    type: "EARNING",
    amount: Number(e.amount),
    status: "COMPLETED",
    createdAt: e.date,
    reference: `ERN-${e.id.slice(0, 6).toUpperCase()}`,
    planName: e.investmentOrder?.investmentPlan?.name,
    description: "Investment profit",
    direction: "CREDIT",
  }));

  const transactions = [...investmentTx, ...withdrawalTx, ...earningTx].sort(
    (a, b) => b.createdAt.getTime() - a.createdAt.getTime(),
  );

  return transactions;
}
