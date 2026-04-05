import { Landmark, ShieldCheck, Sparkles, WalletCards } from "lucide-react";

import { SectionHeading } from "@/components/home/section-heading";
import { SectionShell } from "@/components/home/section-shell";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Built around trust",
    description:
      "Secure investment structures with clear account ownership and long-term reliability at every level.",
  },
  {
    icon: Landmark,
    title: "Structured for clarity",
    description:
      "Investment plans, contributions, and account growth are presented with full transparency and consistency.",
  },
  {
    icon: WalletCards,
    title: "Financial growth, simplified",
    description:
      "A calm environment where members can follow structured progress without confusion or unnecessary complexity.",
  },
  {
    icon: Sparkles,
    title: "A modern experience",
    description:
      "Clean, premium interfaces designed to reflect the seriousness of long-term financial planning.",
  },
];

export function WhyHavenstoneSection() {
  return (
    <SectionShell id="why-havenstone" className="py-20 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        {/* LEFT */}
        <SectionHeading
          eyebrow="Why Havenstone"
          title="A structured approach to long-term financial growth"
          description="Havenstone is designed to bring clarity to investment plans, contributions, and account growth — delivering a calm, secure, and dependable financial experience."
        />

        {/* RIGHT - LAYERED */}
        <div className="grid gap-5">
          {/* PRIMARY CARD */}
          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(37,99,235,0.18),rgba(15,23,42,0.96))] p-7 shadow-[0_28px_70px_rgba(0,0,0,0.3)]">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10">
                <ShieldCheck className="h-5 w-5 text-blue-200" />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">
                  Built around trust and long-term stability
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Havenstone provides a secure environment where investment
                  accounts, structured plans, and contribution records are
                  designed to support long-term financial confidence.
                </p>
              </div>
            </div>
          </div>

          {/* SECONDARY GRID */}
          <div className="grid gap-5 sm:grid-cols-2">
            {pillars.slice(1, 3).map((pillar) => {
              const Icon = pillar.icon;

              return (
                <article
                  key={pillar.title}
                  className="card-premium rounded-[1.7rem] p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-[linear-gradient(145deg,rgba(37,99,235,0.22),rgba(59,130,246,0.06))]">
                    <Icon className="h-5 w-5 text-blue-200" />
                  </div>

                  <h3 className="mt-5 text-base font-semibold text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {pillar.description}
                  </p>
                </article>
              );
            })}
          </div>

          {/* TERTIARY */}
          <div className="rounded-[1.7rem] border border-white/8 bg-white/[0.03] p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-[linear-gradient(145deg,rgba(37,99,235,0.22),rgba(59,130,246,0.06))]">
                <Sparkles className="h-5 w-5 text-blue-200" />
              </div>

              <div>
                <h3 className="text-base font-semibold text-white">
                  Designed for a modern financial experience
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-400">
                  Every interaction is designed to feel calm, structured, and
                  reflective of a serious financial platform built for long-term
                  use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
