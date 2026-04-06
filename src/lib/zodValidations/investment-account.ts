import { z } from "zod";

export const createInvestmentAccountSchema = z.object({
  investmentPlanId: z.string().min(1, "Select an investment plan."),
});

export type CreateInvestmentAccountInput = z.infer<
  typeof createInvestmentAccountSchema
>;
