export type OrderFieldName =
  | "investmentType"
  | "planCategory"
  | "investmentPlanId"
  | "amount";

export type CreateInvestmentOrderActionState = {
  status: "idle" | "error";
  message?: string;
  fieldErrors?: Partial<Record<OrderFieldName, string>>;
};

export const initialCreateInvestmentOrderActionState: CreateInvestmentOrderActionState =
  {
    status: "idle",
  };
