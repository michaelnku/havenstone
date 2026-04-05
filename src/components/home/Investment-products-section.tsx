"use client";

import Link from "next/link";
import {
  ArrowRight,
  Bitcoin,
  Building2,
  ChartNoAxesCombined,
  Landmark,
  TrendingUp,
} from "lucide-react";

import { SectionHeading } from "@/components/home/section-heading";
import { SectionShell } from "@/components/home/section-shell";

const investments = [
  {
    name: "Crypto Investments",
    icon: Bitcoin,
    description:
      "Structured digital asset exposure with long-term positioning.",
  },
  {
    name: "Real Estate",
    icon: Building2,
    description:
      "Stable, asset-backed investment programs with long-term value.",
  },
  {
    name: "ETFs",
    icon: ChartNoAxesCombined,
    description: "Diversified portfolios designed for steady financial growth.",
  },
  {
    name: "Bonds",
    icon: Landmark,
    description:
      "Lower-risk investment structures focused on capital preservation.",
  },
  {
    name: "Stocks",
    icon: TrendingUp,
    description: "Equity-based programs for long-term wealth accumulation.",
  },
];

export function InvestmentProductsSection() {
  return (
    <SectionShell id="investment-products" className="py-20 sm:py-24">
      <SectionHeading
        eyebrow="Investment Products"
        title="Structured investment categories built for long-term growth"
        description="Explore investment categories designed to support different levels of participation, risk preference, and long-term financial planning."
      />

      {/* CAROUSEL */}
      <div className="relative mt-12">
        {/* gradient edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-10 bg-gradient-to-r from-[#050b1f] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-10 bg-gradient-to-l from-[#050b1f] to-transparent" />

        <div className="flex gap-6 overflow-x-auto px-1 pb-4 snap-x snap-mandatory scrollbar-hide">
          {investments.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.name}
                className="group relative min-w-[300px] max-w-[320px] flex-shrink-0 snap-start"
              >
                {/* glow */}
                <div className="absolute inset-0 rounded-[2rem] bg-blue-500/10 opacity-0 blur-xl transition group-hover:opacity-100" />

                <div className="relative h-full rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(15,23,42,0.92),rgba(8,17,37,0.98))] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.25)] transition duration-300 group-hover:-translate-y-1 group-hover:border-white/12">
                  {/* icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[linear-gradient(145deg,rgba(37,99,235,0.22),rgba(59,130,246,0.06))]">
                    <Icon className="h-5 w-5 text-blue-200" />
                  </div>

                  {/* title */}
                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {item.name}
                  </h3>

                  {/* description */}
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>

                  {/* CTA */}
                  <Link
                    href="#investment-plans"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-blue-200 transition group-hover:text-white"
                  >
                    View plans
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
