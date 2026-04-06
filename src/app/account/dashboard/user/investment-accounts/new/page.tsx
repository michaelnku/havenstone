import { redirect } from "next/navigation";

import { prisma } from "@/lib/prisma";
import { getCurrentSessionUser } from "@/lib/getCurrentSessionUser";
import { InvestmentCatalogStatus } from "@/generated/prisma";

import { CreateInvestmentAccountForm } from "../../_components/CreateInvestmentAccountForm";

export default async function Page() {
  const user = await getCurrentSessionUser();

  if (!user?.id) {
    redirect("/auth/login");
  }

  const investorProfile = await prisma.investorProfile.findUnique({
    where: { userId: user.id },
    select: { id: true },
  });

  if (!investorProfile) {
    redirect("/account/dashboard/user/investment-profile");
  }

  const rawPlans = await prisma.investmentPlan.findMany({
    where: {
      isActive: true,
      investment: {
        isActive: true,
        status: InvestmentCatalogStatus.ACTIVE,
      },
    },
    select: {
      id: true,
      name: true,
      durationDays: true,
      currency: true,
      tiers: {
        where: { isActive: true },
        orderBy: { level: "asc" },
        select: {
          roiPercent: true,
          minAmount: true,
          maxAmount: true,
        },
      },
    },
  });

  const plans = rawPlans.map((plan) => ({
    id: plan.id,
    name: plan.name,
    durationDays: plan.durationDays,
    currency: plan.currency,
    tiers: plan.tiers.map((tier) => ({
      roiPercent: tier.roiPercent.toNumber(),
      minAmount: tier.minAmount.toNumber(),
      maxAmount: tier.maxAmount.toNumber(),
    })),
  }));

  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <div>
        <h1 className="text-xl font-semibold text-white/90">
          Create investment account
        </h1>
        <p className="text-sm text-muted-foreground">
          Set up a dedicated account for a selected investment plan.
        </p>
      </div>

      <CreateInvestmentAccountForm plans={plans} />
    </div>
  );
}
