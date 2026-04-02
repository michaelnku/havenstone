import Link from "next/link";
import { ArrowRight, FileText, Landmark } from "lucide-react";

type UserInvestmentsEmptyStateProps = {
  hasInvestorProfile: boolean;
};

export function UserInvestmentsEmptyState({
  hasInvestorProfile,
}: UserInvestmentsEmptyStateProps) {
  const title = hasInvestorProfile
    ? "No investment orders yet"
    : "Complete your investment profile first";

  const description = hasInvestorProfile
    ? "When you create an investment order, Havenstone will list it here with its status, plan details, and next steps."
    : "Your investor profile needs to be completed before you can create and manage investment orders from this workspace.";

  const href = hasInvestorProfile
    ? "/account/dashboard/user/investments/new"
    : "/account/dashboard/user/investment-profile/edit";

  const ctaLabel = hasInvestorProfile
    ? "Start a new investment"
    : "Complete investment profile";

  return (
    <section className="card-premium rounded-[2rem] p-8 text-center sm:p-10">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-3xl border border-white/10 bg-white/[0.04]">
        {hasInvestorProfile ? (
          <Landmark className="h-6 w-6 text-blue-300" />
        ) : (
          <FileText className="h-6 w-6 text-blue-300" />
        )}
      </div>

      <h2 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-white">
        {title}
      </h2>
      <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-400">
        {description}
      </p>

      <Link
        href={href}
        className="btn-primary mt-6 inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold"
      >
        {ctaLabel}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </section>
  );
}
