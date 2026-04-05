import Link from "next/link";
import { ArrowRight, BadgeCheck } from "lucide-react";

import { SectionHeading } from "@/components/home/section-heading";
import { SectionShell } from "@/components/home/section-shell";

const plans = [
  {
    name: "Core Growth Plan",
    duration: "90 days",
    roi: "8% - 12%",
    min: "$500",
    featured: true,
    highlight: "Balanced entry for structured growth",
  },
  {
    name: "Advanced Plan",
    duration: "180 days",
    roi: "12% - 18%",
    min: "$2,000",
    highlight: "For more consistent long-term positioning",
  },
  {
    name: "Elite Plan",
    duration: "365 days",
    roi: "18% - 25%",
    min: "$10,000",
    highlight: "Maximum growth exposure with extended duration",
  },
];

export function InvestmentPlansSection() {
  const featured = plans.find((p) => p.featured);
  const others = plans.filter((p) => !p.featured);

  return (
    <SectionShell id="investment-plans" className="py-20 sm:py-24">
      <SectionHeading
        eyebrow="Investment Plans"
        title="Choose a plan aligned with your long-term financial goals"
        description="Each Havenstone plan is structured to provide clarity, defined contribution expectations, and predictable growth ranges over time."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
        {/* FEATURED PLAN */}
        {featured && (
          <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(37,99,235,0.22),rgba(15,23,42,0.96))] p-8 shadow-[0_32px_80px_rgba(0,0,0,0.35)]">
            {/* glow */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute top-0 right-0 h-40 w-40 bg-blue-500/10 blur-3xl" />
            </div>

            <p className="text-xs uppercase tracking-[0.2em] text-blue-200">
              Featured Plan
            </p>

            <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white">
              {featured.name}
            </h3>

            <p className="mt-3 text-sm text-blue-100/80">
              {featured.highlight}
            </p>

            {/* METRICS */}
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              <div>
                <p className="text-xs uppercase text-slate-400">Duration</p>
                <p className="mt-1 text-xl font-semibold text-white">
                  {featured.duration}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase text-slate-400">Return Range</p>
                <p className="mt-1 text-xl font-semibold text-white">
                  {featured.roi}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase text-slate-400">Minimum</p>
                <p className="mt-1 text-xl font-semibold text-white">
                  {featured.min}
                </p>
              </div>
            </div>

            {/* TRUST */}
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300">
                <BadgeCheck className="h-4 w-4 text-blue-300" />
                Structured investment plan
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300">
                Predictable return range
              </span>
            </div>

            {/* CTA */}
            <Link
              href="/auth/get-started"
              className="btn-primary mt-10 inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold"
            >
              Start with this plan
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}

        {/* OTHER PLANS */}
        <div className="flex flex-col gap-6">
          {others.map((plan) => (
            <div
              key={plan.name}
              className="group relative rounded-[1.8rem] border border-white/8 bg-white/[0.04] p-6 transition hover:border-white/12 hover:bg-white/[0.06]"
            >
              <h4 className="text-lg font-semibold text-white">{plan.name}</h4>

              <p className="mt-2 text-sm text-slate-400">{plan.highlight}</p>

              <div className="mt-5 grid grid-cols-3 gap-3 text-sm">
                <div>
                  <p className="text-slate-500">Duration</p>
                  <p className="text-white">{plan.duration}</p>
                </div>

                <div>
                  <p className="text-slate-500">ROI</p>
                  <p className="text-white">{plan.roi}</p>
                </div>

                <div>
                  <p className="text-slate-500">Minimum</p>
                  <p className="text-white">{plan.min}</p>
                </div>
              </div>

              <Link
                href="/auth/get-started"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-blue-200 transition group-hover:text-white"
              >
                Choose plan
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
