import { notFound, redirect } from "next/navigation";

import { getInvestmentAccountDetails } from "@/actions/investment-account/getInvestmentAccountDetails";
import { UpdateInvestmentAccountForm } from "../../../_components/UpdateInvestmentAccountForm";

type PageProps = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: PageProps) {
  const account = await getInvestmentAccountDetails(params.id);

  if (!account) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-xl space-y-6">
      <div>
        <h1 className="text-xl font-semibold">Manage account</h1>
        <p className="text-sm text-muted-foreground">
          Update account status and manage lifecycle.
        </p>
      </div>

      <div className="rounded-xl border p-4 space-y-1">
        <p className="text-sm font-medium">{account.title}</p>
        <p className="text-xs text-muted-foreground">
          {account.plan.periodLabel} • {account.currency}
        </p>
        <p className="text-xs text-muted-foreground">
          Status: {account.statusLabel}
        </p>
      </div>

      <UpdateInvestmentAccountForm
        accountId={account.id}
        currentStatus={account.status}
      />
    </div>
  );
}
