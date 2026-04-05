import { ChevronRight, ShieldCheck } from "lucide-react";

import { SectionHeading } from "@/components/home/section-heading";
import { SectionShell } from "@/components/home/section-shell";

const faqs = [
  {
    question: "Who is Havenstone built for?",
    answer:
      "Havenstone is designed for retirement and investment programs that require a structured, premium experience with clear contribution tracking and account visibility.",
    featured: true,
  },
  {
    question: "What makes the experience feel trustworthy?",
    answer:
      "The platform emphasizes structured investment plans, transparent contribution records, and secure access patterns that support long-term financial confidence.",
  },
  {
    question: "Can organizations use Havenstone for workforce programs?",
    answer:
      "Yes. Havenstone is built to support employer-backed retirement and investment programs with institutional-grade clarity and oversight.",
  },
  {
    question: "What can members see inside the platform?",
    answer:
      "Members can view contributions, account growth, plan participation, and long-term progress in a clear and structured format.",
  },
];

export function FaqSection() {
  const featured = faqs.find((f) => f.featured);
  const others = faqs.filter((f) => !f.featured);

  return (
    <SectionShell id="faq" className="py-20 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        {/* LEFT */}
        <SectionHeading
          eyebrow="FAQ"
          title="Common questions, clearly answered"
          description="Havenstone is designed to feel structured, transparent, and dependable. Here are answers to key questions about the platform and experience."
        />

        {/* RIGHT */}
        <div className="space-y-6">
          {/* FEATURED FAQ */}
          {featured && (
            <details
              open
              className="group rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(37,99,235,0.18),rgba(15,23,42,0.96))] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                <span className="text-lg font-semibold text-white">
                  {featured.question}
                </span>
                <ChevronRight className="mt-1 h-5 w-5 text-blue-200 transition group-open:rotate-90" />
              </summary>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                {featured.answer}
              </p>
            </details>
          )}

          {/* OTHER FAQS */}
          <div className="grid gap-4">
            {others.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-[1.7rem] border border-white/8 bg-white/[0.04] p-5 transition hover:border-white/12"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <span className="text-base font-semibold text-white">
                    {faq.question}
                  </span>
                  <ChevronRight className="mt-1 h-5 w-5 text-blue-200 transition group-open:rotate-90" />
                </summary>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          {/* SUPPORT PANEL */}
          <div className="rounded-[2rem] border border-white/8 bg-white/[0.03] p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-[linear-gradient(145deg,rgba(37,99,235,0.22),rgba(59,130,246,0.06))]">
                <ShieldCheck className="h-5 w-5 text-blue-200" />
              </div>

              <div>
                <h3 className="text-base font-semibold text-white">
                  Still have questions?
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  Our team can guide you through plan setup, onboarding, and
                  long-term participation.
                </p>

                <a
                  href="/contact"
                  className="mt-4 inline-flex items-center text-sm font-medium text-blue-200 hover:text-white"
                >
                  Contact support →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
