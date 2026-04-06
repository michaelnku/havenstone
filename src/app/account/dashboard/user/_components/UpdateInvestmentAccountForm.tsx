"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldContent,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldDescription,
} from "@/components/ui/field";

import { updateInvestmentAccount } from "@/actions/investment-account/updateInvestmentAccount";

type FormValues = {
  status: "ACTIVE" | "FROZEN" | "CLOSED" | "PENDING";
};

export function UpdateInvestmentAccountForm({
  accountId,
  currentStatus,
}: {
  accountId: string;
  currentStatus: FormValues["status"];
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const form = useForm<FormValues>({
    defaultValues: {
      status: currentStatus,
    },
  });

  const handleSubmit = (values: FormValues) => {
    startTransition(async () => {
      try {
        const formData = new FormData();
        formData.append("accountId", accountId);
        formData.append("status", values.status);

        await updateInvestmentAccount(formData);

        toast.success("Account updated.");
        router.refresh();
      } catch (error) {
        toast.error(
          error instanceof Error ? error.message : "Failed to update account.",
        );
      }
    });
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-5">
      <FieldGroup>
        <Controller
          control={form.control}
          name="status"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid || undefined}>
              <FieldLabel>Account status</FieldLabel>
              <FieldContent>
                <select
                  {...field}
                  disabled={isPending}
                  className="input-premium h-11 w-full rounded-xl"
                >
                  <option value="PENDING">Pending</option>
                  <option value="ACTIVE">Active</option>
                  <option value="FROZEN">Frozen</option>
                  <option value="CLOSED">Closed</option>
                </select>

                <FieldDescription>
                  Control the lifecycle of this investment account.
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
              Updating...
            </span>
          ) : (
            "Update account"
          )}
        </Button>
      </div>
    </form>
  );
}
