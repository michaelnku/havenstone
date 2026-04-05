import Link from "next/link";
import { ArrowRight, Landmark, ShieldCheck, TrendingUp } from "lucide-react";

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Built for trust",
    description: "Secure, structured, and designed for long-term reliability.",
  },
  {
    icon: Landmark,
    title: "Clear account structure",
    description: "Investment plans, accounts, and contributions fully visible.",
  },
  {
    icon: TrendingUp,
    title: "Measured growth",
    description: "Track progress over time with stable, predictable reporting.",
  },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-180px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-500/12 blur-3xl" />
        <div className="absolute right-[-120px] top-24 h-[320px] w-[320px] rounded-full bg-blue-400/10 blur-3xl" />
        <div className="absolute bottom-[-140px] left-[-120px] h-[300px] w-[300px] rounded-full bg-blue-600/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-14 px-4 pb-20 pt-16 sm:px-6 md:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:px-8 lg:pb-28 lg:pt-24">
        {/* LEFT */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium tracking-[0.12em] text-blue-100 uppercase">
            Financial Growth Platform
          </div>

          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Structured investment plans designed for long-term financial
            confidence
          </h1>

          <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
            Havenstone provides a clear, structured environment for managing
            investment plans, tracking contributions, and maintaining full
            visibility into account growth — all within a calm, secure, and
            premium financial experience.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/auth/get-started"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[linear-gradient(135deg,#2563eb,#3b82f6,#60a5fa)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(37,99,235,0.28)] transition hover:-translate-y-0.5"
            >
              Start investing
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="#investment-plans"
              className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-medium text-slate-200 transition hover:bg-white/8 hover:text-white"
            >
              Explore plans
            </Link>
          </div>

          {/* TRUST STRIP */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {trustPoints.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/8 bg-white/[0.04] p-5 backdrop-blur-sm"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-[linear-gradient(145deg,rgba(37,99,235,0.22),rgba(59,130,246,0.08))]">
                    <Icon className="h-5 w-5 text-blue-300" />
                  </div>

                  <h3 className="mt-4 text-sm font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-400">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="relative">
          <div className="absolute inset-0 rounded-[2rem] bg-blue-500/10 blur-2xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.96),rgba(8,17,37,0.98))] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
            {/* HEADER */}
            <div className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-3">
              <div>
                <p className="text-xs uppercase text-slate-400">
                  Investment Account
                </p>
                <p className="text-sm text-slate-200">Growth overview</p>
              </div>

              <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                Stable
              </span>
            </div>

            {/* MAIN VALUE */}
            <div className="mt-6 rounded-3xl border border-white/8 bg-white/[0.04] p-6">
              <p className="text-sm text-slate-400">Account value</p>

              <p className="mt-3 text-4xl font-semibold text-white">$18.4M</p>

              <div className="mt-4 h-2.5 rounded-full bg-white/6">
                <div className="h-2.5 w-[74%] rounded-full bg-gradient-to-r from-blue-500 to-blue-400" />
              </div>
            </div>

            {/* CONTRIBUTIONS */}
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/8 bg-white/[0.04] p-5">
                <p className="text-sm text-slate-400">Employer</p>
                <p className="mt-2 text-xl text-white">$420,000</p>
              </div>

              <div className="rounded-3xl border border-white/8 bg-white/[0.04] p-5">
                <p className="text-sm text-slate-400">Employee</p>
                <p className="mt-2 text-xl text-white">$280,000</p>
              </div>
            </div>

            {/* FOOT */}
            <div className="mt-5 rounded-3xl border border-white/8 bg-white/[0.03] p-5">
              <p className="text-sm text-white">
                Structured plans. Clear contributions. Predictable growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
