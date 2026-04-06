"use server";

import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { getCurrentSessionUser } from "@/lib/getCurrentSessionUser";
import { InvestmentCatalogStatus } from "@/generated/prisma";

type CreateInvestmentAccountState = {
  status: "idle" | "success" | "error";
  message?: string;
  accountId?: string;
};

function createErrorState(message: string): CreateInvestmentAccountState {
  return {
    status: "error",
    message,
  };
}

export async function createInvestmentAccount(
  _prevState: CreateInvestmentAccountState,
  formData: FormData,
): Promise<CreateInvestmentAccountState> {
  const user = await getCurrentSessionUser();

  if (!user?.id) {
    return createErrorState("Please sign in to continue.");
  }

  const investorProfile = await prisma.investorProfile.findUnique({
    where: {
      userId: user.id,
    },
    select: {
      id: true,
    },
  });

  if (!investorProfile) {
    return createErrorState(
      "Complete your investment profile before creating an account.",
    );
  }

  const investmentPlanId = formData.get("investmentPlanId");

  if (!investmentPlanId || typeof investmentPlanId !== "string") {
    return createErrorState("Invalid investment plan selected.");
  }

  const selectedPlan = await prisma.investmentPlan.findUnique({
    where: {
      id: investmentPlanId,
    },
    select: {
      id: true,
      currency: true,
      isActive: true,
      investment: {
        select: {
          id: true,
          name: true,
          isActive: true,
          status: true,
        },
      },
    },
  });

  if (!selectedPlan?.isActive) {
    return createErrorState(
      "The selected investment plan is no longer available.",
    );
  }

  if (
    !selectedPlan.investment.isActive ||
    selectedPlan.investment.status !== InvestmentCatalogStatus.ACTIVE
  ) {
    return createErrorState(
      "This investment product is currently unavailable.",
    );
  }

  const existingAccount = await prisma.investmentAccount.findFirst({
    where: {
      investorProfileId: investorProfile.id,
      investmentPlanId: selectedPlan.id,
    },
    select: {
      id: true,
    },
  });

  if (existingAccount) {
    return createErrorState(
      "You already have an account for this investment plan.",
    );
  }

  const account = await prisma.investmentAccount.create({
    data: {
      investorProfileId: investorProfile.id,
      investmentPlanId: selectedPlan.id,
      status: "ACTIVE",
      balance: 0,
      openedAt: new Date(),
      currency: selectedPlan.currency,
    },
    select: {
      id: true,
    },
  });
  return {
    status: "success",
    message: "Account created",
    accountId: account.id,
  };
}
