import z from "zod";

export const supportFormSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email"),
  issueType: z.enum(
    [
      "payments",
      " technical_issues",
      "investment_inquiries",
      "account_issues",
      "other",
    ],
    "Please select an issue type",
  ),
  referenceId: z.string().optional(),
  message: z
    .string()
    .min(10, "Please describe your issue, minimum 10 characters required."),
});

export type SupportFormValues = z.infer<typeof supportFormSchema>;
