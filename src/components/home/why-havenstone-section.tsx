import { Landmark, ShieldCheck, Sparkles, WalletCards } from "lucide-react";

import { SectionHeading } from "@/components/home/section-heading";
import { SectionShell } from "@/components/home/section-shell";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Built around trust",
    description:
      "A steady platform experience with secure access, transparent records, and a product language designed to reduce uncertainty.",
  },
  {
    icon: Landmark,
    title: "Structured for institutions",
    description:
      "Havenstone supports employer-backed retirement and investment programs with clear operational structure and dependable visibility.",
  },
  {
    icon: WalletCards,
    title: "Clear account ownership",
    description:
      "Members can understand contributions, balances, and long-term value without digging through fragmented systems or jargon.",
  },
  {
    icon: Sparkles,
    title: "Premium, calm experience",
    description:
      "Every surface is designed to feel professional, modern, and composed rather than noisy or overly transactional.",
  },
];

export function WhyHavenstoneSection() {
  return (
    <SectionShell id="why-havenstone" className="py-20 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <SectionHeading
          eyebrow="Why Havenstone"
          title="A retirement platform designed to feel dependable at every touchpoint."
          description="Havenstone combines disciplined product structure, premium presentation, and long-term account clarity so organizations can offer financial support with confidence."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <article
                key={pillar.title}
                className="card-premium rounded-[1.75rem] p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[linear-gradient(145deg,rgba(37,99,235,0.22),rgba(59,130,246,0.06))]">
                  <Icon className="h-5 w-5 text-blue-200" />
                </div>

                <h3 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-white">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {pillar.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
