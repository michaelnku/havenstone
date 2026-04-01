import { ArrowRight, FileCheck2, Landmark, LineChart, UserRoundCheck } from "lucide-react";

import { SectionHeading } from "@/components/home/section-heading";
import { SectionShell } from "@/components/home/section-shell";

const steps = [
  {
    icon: Landmark,
    step: "01",
    title: "Program setup",
    description:
      "Organizations establish a structured retirement or investment program with clear contribution rules and account expectations.",
  },
  {
    icon: UserRoundCheck,
    step: "02",
    title: "Member onboarding",
    description:
      "Eligible members are brought into a calm, guided experience with visibility into their profile, contribution records, and account context.",
  },
  {
    icon: FileCheck2,
    step: "03",
    title: "Contribution tracking",
    description:
      "Employer and employee contributions remain organized in one place, making status and progress easy to understand over time.",
  },
  {
    icon: LineChart,
    step: "04",
    title: "Long-term growth visibility",
    description:
      "Members can follow account development with premium reporting surfaces designed for stability, clarity, and confidence.",
  },
];

export function HowItWorksSection() {
  return (
    <SectionShell id="how-it-works" className="py-20 sm:py-24">
      <div className="rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(15,23,42,0.84),rgba(8,17,37,0.98))] px-5 py-8 shadow-[0_24px_60px_rgba(0,0,0,0.24)] sm:px-8 sm:py-10 lg:px-10">
        <SectionHeading
          eyebrow="How It Works"
          title="A clear journey from onboarding to long-term financial visibility."
          description="The Havenstone experience is intentionally straightforward: set the structure, onboard members, track contributions, and maintain a reliable view of growth over time."
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article
                key={step.title}
                className="relative rounded-[1.75rem] border border-white/8 bg-white/[0.04] p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium tracking-[0.18em] text-blue-200 uppercase">
                    Step {step.step}
                  </span>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-[linear-gradient(145deg,rgba(37,99,235,0.2),rgba(59,130,246,0.05))]">
                    <Icon className="h-5 w-5 text-blue-200" />
                  </div>
                </div>

                <h3 className="mt-8 text-lg font-semibold tracking-[-0.02em] text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {step.description}
                </p>

                {index < steps.length - 1 ? (
                  <ArrowRight className="absolute -bottom-6 left-8 hidden h-5 w-5 text-blue-200/45 lg:block" />
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
