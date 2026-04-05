"use client";

import { FileCheck2, Landmark, LineChart, UserRoundCheck } from "lucide-react";

import { SectionHeading } from "@/components/home/section-heading";
import { SectionShell } from "@/components/home/section-shell";

const steps = [
  {
    icon: Landmark,
    step: "01",
    title: "Program setup",
    description:
      "Organizations define structured investment plans with clear contribution rules and account expectations.",
  },
  {
    icon: UserRoundCheck,
    step: "02",
    title: "Member onboarding",
    description:
      "Members enter a guided environment with full visibility into profiles, plans, and contribution context.",
  },
  {
    icon: FileCheck2,
    step: "03",
    title: "Contribution tracking",
    description:
      "Employer and member contributions remain organized and consistently visible over time.",
  },
  {
    icon: LineChart,
    step: "04",
    title: "Growth visibility",
    description:
      "Track account development through structured reporting designed for clarity and long-term confidence.",
  },
];

export function HowItWorksSection() {
  return (
    <SectionShell id="how-it-works" className="py-20 sm:py-24">
      <div className="rounded-[2.2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(15,23,42,0.9),rgba(8,17,37,0.98))] px-6 py-10 shadow-[0_28px_70px_rgba(0,0,0,0.28)] sm:px-10">
        <SectionHeading
          eyebrow="How It Works"
          title="A structured journey from onboarding to long-term growth"
          description="Havenstone is designed as a clear, step-by-step financial system — from plan setup to contribution tracking and long-term account visibility."
        />

        {/* DESKTOP TIMELINE */}
        <div className="relative mt-14 hidden lg:block">
          {/* LINE */}
          <div className="absolute left-0 top-8 h-[2px] w-full bg-white/10" />

          <div className="grid grid-cols-4 gap-6">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div key={step.title} className="relative">
                  {/* DOT */}
                  <div className="absolute left-0 top-7 z-10 h-4 w-4 rounded-full bg-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.6)]" />

                  <div className="ml-6 rounded-[1.8rem] border border-white/8 bg-white/[0.04] p-6">
                    {/* HEADER */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium tracking-[0.2em] text-blue-200 uppercase">
                        Step {step.step}
                      </span>

                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-[linear-gradient(145deg,rgba(37,99,235,0.2),rgba(59,130,246,0.05))]">
                        <Icon className="h-5 w-5 text-blue-200" />
                      </div>
                    </div>

                    <h3 className="mt-6 text-lg font-semibold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* MOBILE CAROUSEL */}
        <div className="mt-10 flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide lg:hidden">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="min-w-[280px] snap-start rounded-[1.8rem] border border-white/8 bg-white/[0.04] p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium tracking-[0.2em] text-blue-200 uppercase">
                    Step {step.step}
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-[linear-gradient(145deg,rgba(37,99,235,0.2),rgba(59,130,246,0.05))]">
                    <Icon className="h-5 w-5 text-blue-200" />
                  </div>
                </div>

                <h3 className="mt-6 text-lg font-semibold text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
