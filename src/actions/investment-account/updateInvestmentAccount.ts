"use server";

import { prisma } from "@/lib/prisma";
import { getCurrentSessionUser } from "@/lib/getCurrentSessionUser";
import { AccountStatus } from "@/generated/prisma";

export async function updateInvestmentAccount(formData: FormData) {
  const user = await getCurrentSessionUser();

  if (!user?.id) {
    throw new Error("Unauthorized");
  }

  const accountId = formData.get("accountId") as string;
  const status = formData.get("status") as AccountStatus;

  if (!accountId || !status) {
    throw new Error("Invalid request");
  }

  const account = await prisma.investmentAccount.findFirst({
    where: {
      id: accountId,
      investorProfile: {
        userId: user.id,
      },
    },
    select: { id: true },
  });

  if (!account) {
    throw new Error("Account not found");
  }

  await prisma.investmentAccount.update({
    where: { id: accountId },
    data: {
      status,
      closedAt: status === "CLOSED" ? new Date() : null,
    },
  });

  return { success: true };
}
