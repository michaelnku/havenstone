import { BriefcaseBusiness, Clock3, Eye, Shield, TrendingUp, Users } from "lucide-react";

import { SectionHeading } from "@/components/home/section-heading";
import { SectionShell } from "@/components/home/section-shell";

const benefitGroups = [
  {
    title: "For organizations",
    items: [
      {
        icon: BriefcaseBusiness,
        title: "Institutional polish",
        description:
          "Offer retirement support through a platform that reflects professionalism and long-term stewardship.",
      },
      {
        icon: Users,
        title: "Member confidence",
        description:
          "Give employees a clearer, calmer way to understand participation and account value.",
      },
      {
        icon: Eye,
        title: "Operational visibility",
        description:
          "Reduce ambiguity with transparent records and a more consistent account experience.",
      },
    ],
  },
  {
    title: "For members",
    items: [
      {
        icon: TrendingUp,
        title: "Long-term perspective",
        description:
          "See progress in a format designed to support thoughtful financial planning rather than short-term distraction.",
      },
      {
        icon: Shield,
        title: "Trustworthy access",
        description:
          "Interact with retirement information through secure, premium surfaces built for confidence.",
      },
      {
        icon: Clock3,
        title: "Less friction",
        description:
          "Find the information that matters quickly, with less complexity between the user and the account.",
      },
    ],
  },
];

export function BenefitsSection() {
  return (
    <SectionShell id="benefits" className="py-20 sm:py-24">
      <SectionHeading
        eyebrow="Benefits"
        title="Meaningful value for both program sponsors and account holders."
        description="Havenstone is built to support the institutional side of retirement planning while still delivering a premium experience for the people relying on it."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {benefitGroups.map((group) => (
          <section
            key={group.title}
            className="rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(15,23,42,0.88),rgba(11,18,41,0.98))] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.2)] sm:p-7"
          >
            <h3 className="text-xl font-semibold tracking-[-0.02em] text-white">
              {group.title}
            </h3>

            <div className="mt-6 grid gap-4">
              {group.items.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="rounded-[1.5rem] border border-white/8 bg-white/[0.04] p-5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-[linear-gradient(145deg,rgba(37,99,235,0.22),rgba(59,130,246,0.06))]">
                        <Icon className="h-5 w-5 text-blue-200" />
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-white">
                          {item.title}
                        </h4>
                        <p className="mt-2 text-sm leading-7 text-slate-400">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </SectionShell>
  );
}
