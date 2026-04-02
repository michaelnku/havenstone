"use server";

import { upsertCurrentUserInvestorProfile } from "@/actions/profile/upsert-current-user-investor-profile";

export async function createInvestorProfileAction(input: unknown) {
  return upsertCurrentUserInvestorProfile(input, {
    markOnboardingComplete: true,
  });
}
