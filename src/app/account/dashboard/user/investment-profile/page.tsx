import Link from "next/link";
import {
  ArrowLeft,
  BadgeCheck,
  CalendarDays,
  CircleAlert,
  FileText,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  UserCircle2,
} from "lucide-react";

export default function UserInvestmentProfilePage() {
  const profile = {
    fullName: "Michael Nku",
    email: "michael@example.com",
    phoneNumber: "+234 800 000 0000",
    dateOfBirth: "1998-04-14",
    country: "Nigeria",
    state: "FCT Abuja",
    city: "Abuja",
    addressLine1: "12 Example Crescent",
    addressLine2: "Wuse 2",
    kycStatus: "Not started",
    profileCompleted: false,
    completionPercent: 62,
  };

  const profileFields = [
    {
      label: "Full name",
      value: profile.fullName,
      icon: UserCircle2,
    },
    {
      label: "Email address",
      value: profile.email,
      icon: Mail,
    },
    {
      label: "Phone number",
      value: profile.phoneNumber,
      icon: Phone,
    },
    {
      label: "Date of birth",
      value: profile.dateOfBirth,
      icon: CalendarDays,
    },
    {
      label: "Country",
      value: profile.country,
      icon: MapPin,
    },
    {
      label: "State",
      value: profile.state,
      icon: MapPin,
    },
    {
      label: "City",
      value: profile.city,
      icon: MapPin,
    },
    {
      label: "Address line 1",
      value: profile.addressLine1,
      icon: MapPin,
    },
    {
      label: "Address line 2",
      value: profile.addressLine2,
      icon: MapPin,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link
            href="/account/dashboard/user"
            className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to dashboard
          </Link>

          <h1 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
            Investment Profile
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Review and maintain your personal information to keep your
            Havenstone investment account accurate, secure, and ready for future
            account setup and verification.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/account/dashboard/user/investment-profile/edit"
            className="btn-primary inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold"
          >
            Edit profile
          </Link>
        </div>
      </div>

      <section className="card-premium rounded-[2rem] p-6 sm:p-8">
        <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl border border-white/10 bg-[linear-gradient(145deg,rgba(37,99,235,0.20),rgba(59,130,246,0.08))]">
              <UserCircle2 className="h-8 w-8 text-blue-200" />
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-xl font-semibold tracking-[-0.03em] text-white sm:text-2xl">
                  {profile.fullName}
                </h2>

                <span
                  className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                    profile.profileCompleted
                      ? "border border-emerald-400/20 bg-emerald-400/10 text-emerald-300"
                      : "border border-amber-400/20 bg-amber-400/10 text-amber-300"
                  }`}
                >
                  {profile.profileCompleted
                    ? "Profile completed"
                    : "Profile incomplete"}
                </span>
              </div>

              <p className="mt-2 text-sm text-slate-400">{profile.email}</p>

              <div className="mt-5 flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.04] px-3 py-2 text-xs text-slate-300">
                  <ShieldCheck className="h-4 w-4 text-blue-300" />
                  Secure account profile
                </div>

                <div className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.04] px-3 py-2 text-xs text-slate-300">
                  <FileText className="h-4 w-4 text-blue-300" />
                  KYC status: {profile.kycStatus}
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-sm rounded-3xl border border-white/8 bg-white/[0.03] p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-slate-500">
                  Completion
                </p>
                <p className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-white">
                  {profile.completionPercent}%
                </p>
              </div>

              <div className="rounded-2xl border border-white/8 bg-[#0b1229]/70 px-3 py-2 text-right">
                <p className="text-xs uppercase tracking-[0.14em] text-slate-500">
                  Status
                </p>
                <p className="mt-1 text-sm font-medium text-white">
                  {profile.profileCompleted ? "Ready" : "Needs attention"}
                </p>
              </div>
            </div>

            <div className="mt-5 h-2.5 rounded-full bg-white/6">
              <div
                className="h-2.5 rounded-full bg-[linear-gradient(90deg,#2563eb_0%,#3b82f6_55%,#60a5fa_100%)] shadow-[0_0_18px_rgba(59,130,246,0.35)]"
                style={{
                  width: `${Math.max(0, Math.min(profile.completionPercent, 100))}%`,
                }}
              />
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              Complete all key personal details to prepare your account for
              verification and future retirement plan participation.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="card-premium rounded-[2rem] p-6 sm:p-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold tracking-[-0.03em] text-white">
                Personal details
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                These details help Havenstone maintain an accurate investment
                profile for your account.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {profileFields.map((field) => {
              const Icon = field.icon;

              return (
                <div
                  key={field.label}
                  className="rounded-3xl border border-white/8 bg-white/[0.03] p-5"
                >
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-blue-300" />
                    <p className="text-xs uppercase tracking-[0.12em] text-slate-500">
                      {field.label}
                    </p>
                  </div>

                  <p className="mt-3 text-sm font-medium leading-6 text-white">
                    {field.value || "Not added yet"}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="space-y-6">
          <section className="glass-strong rounded-[2rem] p-6">
            <h2 className="text-lg font-semibold text-white">
              Profile readiness
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Review the key areas below to improve account completeness.
            </p>

            <div className="mt-5 space-y-3">
              <div className="rounded-2xl border border-emerald-400/15 bg-emerald-400/8 p-4">
                <div className="flex items-start gap-3">
                  <BadgeCheck className="mt-0.5 h-4 w-4 text-emerald-300" />
                  <div>
                    <p className="text-sm font-medium text-white">
                      Core identity information added
                    </p>
                    <p className="mt-1 text-sm text-slate-300">
                      Your personal details have been partially completed.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-amber-400/15 bg-amber-400/8 p-4">
                <div className="flex items-start gap-3">
                  <CircleAlert className="mt-0.5 h-4 w-4 text-amber-300" />
                  <div>
                    <p className="text-sm font-medium text-white">
                      KYC not started
                    </p>
                    <p className="mt-1 text-sm text-slate-300">
                      Identity verification is still pending for this account.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                <div className="flex items-start gap-3">
                  <FileText className="mt-0.5 h-4 w-4 text-blue-300" />
                  <div>
                    <p className="text-sm font-medium text-white">
                      Investment account setup pending
                    </p>
                    <p className="mt-1 text-sm text-slate-400">
                      Complete your profile and future verification steps before
                      investment account activation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="card-premium rounded-[2rem] p-6">
            <h2 className="text-lg font-semibold text-white">Next actions</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Keep your profile current to support future account activation and
              investment participation.
            </p>

            <div className="mt-5 space-y-3">
              <Link
                href="/account/dashboard/user/investment-profile/edit"
                className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/[0.05] hover:text-white"
              >
                <span>Update personal details</span>
                <span className="text-slate-500">→</span>
              </Link>

              <Link
                href="/account/dashboard/user/documents"
                className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/[0.05] hover:text-white"
              >
                <span>Prepare verification documents</span>
                <span className="text-slate-500">→</span>
              </Link>

              <Link
                href="/account/dashboard/user/settings"
                className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/[0.05] hover:text-white"
              >
                <span>Review account settings</span>
                <span className="text-slate-500">→</span>
              </Link>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
