"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Check } from "lucide-react";
import { toast } from "sonner";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldContent,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldDescription,
} from "@/components/ui/field";

import {
  createInvestmentAccountSchema,
  type CreateInvestmentAccountInput,
} from "@/lib/zodValidations/investment-account";

import { createInvestmentAccount } from "@/actions/investment-account/createInvestmentAccount";

type Plan = {
  id: string;
  name: string;
  durationDays: number;
  currency: string;
  tiers: {
    roiPercent: number;
    minAmount: number;
    maxAmount: number;
  }[];
};

export function CreateInvestmentAccountForm({ plans }: { plans: Plan[] }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const form = useForm<CreateInvestmentAccountInput>({
    resolver: zodResolver(createInvestmentAccountSchema),
    defaultValues: {
      investmentPlanId: "",
    },
  });

  const handleSubmit = (values: CreateInvestmentAccountInput) => {
    startTransition(async () => {
      const formData = new FormData();
      formData.append("investmentPlanId", values.investmentPlanId);

      const result = await createInvestmentAccount(
        { status: "idle" },
        formData,
      );

      if (result.status === "error") {
        toast.error(result.message);
        return;
      }
      toast.success("Investment account created.");
      router.push(
        `/account/dashboard/user/investment-accounts/${result.accountId}`,
      );
    });
  };

  return (
    <form
      onSubmit={form.handleSubmit(handleSubmit)}
      className="space-y-6 text-white/[0.8]"
    >
      <FieldGroup>
        <Controller
          control={form.control}
          name="investmentPlanId"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid || undefined}>
              <FieldLabel>Select investment plan</FieldLabel>

              <FieldContent>
                <div className="grid gap-4 sm:grid-cols-2">
                  {plans.map((plan) => {
                    const isSelected = field.value === plan.id;

                    const minAmount = plan.tiers.length
                      ? Math.min(...plan.tiers.map((t) => Number(t.minAmount)))
                      : null;

                    const maxAmount = plan.tiers.length
                      ? Math.max(...plan.tiers.map((t) => Number(t.maxAmount)))
                      : null;

                    const avgRoi = plan.tiers.length
                      ? plan.tiers.reduce(
                          (acc, t) => acc + Number(t.roiPercent),
                          0,
                        ) / plan.tiers.length
                      : null;

                    const durationLabel =
                      plan.durationDays <= 7
                        ? "Short term"
                        : plan.durationDays <= 30
                          ? "Medium term"
                          : "Long term";

                    return (
                      <button
                        key={plan.id}
                        type="button"
                        onClick={() => field.onChange(plan.id)}
                        className={cn(
                          "relative rounded-2xl border p-4 text-left transition-all duration-200",
                          "hover:border-white/30 hover:bg-white/5",
                          "active:scale-[0.98]",
                          isSelected
                            ? "border-[var(--primary)] bg-[var(--primary)]/10"
                            : "border-white/10",
                        )}
                      >
                        {/* Selected indicator */}
                        {isSelected && (
                          <div className="absolute right-3 top-3">
                            <Check className="h-4 w-4 text-[var(--primary)]" />
                          </div>
                        )}

                        <div className="space-y-3">
                          {/* Title */}
                          <div>
                            <p className="text-sm font-semibold">{plan.name}</p>
                            <p className="text-xs text-muted-foreground">
                              Structured investment plan
                            </p>
                          </div>

                          {/* Metrics */}
                          <div className="flex flex-wrap gap-2 text-xs">
                            {avgRoi !== null && (
                              <span className="rounded-full border border-white/10 px-2 py-1">
                                {avgRoi.toFixed(1)}% ROI
                              </span>
                            )}

                            <span className="rounded-full border px-2 py-1">
                              {durationLabel}
                            </span>
                          </div>

                          {/* Range */}
                          {minAmount !== null && maxAmount !== null && (
                            <p className="text-xs text-muted-foreground">
                              {plan.currency} {minAmount.toLocaleString()} –{" "}
                              {maxAmount.toLocaleString()}
                            </p>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>

                <FieldDescription>
                  Each plan creates a dedicated account for tracking and
                  returns.
                </FieldDescription>

                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </FieldContent>
            </Field>
          )}
        />
      </FieldGroup>

      <div className="flex justify-end pt-2">
        <Button
          type="submit"
          disabled={isPending}
          className="btn-primary rounded-xl"
        >
          {isPending ? (
            <span className="inline-flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              Creating account...
            </span>
          ) : (
            "Create account"
          )}
        </Button>
      </div>
    </form>
  );
}
