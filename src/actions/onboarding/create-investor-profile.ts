"use server";

import { upsertCurrentUserInvestorProfile } from "@/actions/profile/upsert-current-user-investor-profile";

export async function createInvestorProfileAction(input: unknown) {
  await upsertCurrentUserInvestorProfile(input, {
    markOnboardingComplete: true,
  });

  return { success: true } as const;
}
