import { Quote } from "lucide-react";

import { SectionHeading } from "@/components/home/section-heading";
import { SectionShell } from "@/components/home/section-shell";

const testimonials = [
  {
    quote:
      "Havenstone gave our retirement program a more credible and polished experience. The platform feels calm, secure, and properly built for long-term engagement.",
    name: "Amina Okafor",
    role: "Head of People Operations",
    organization: "Northfield Advisory Group",
  },
  {
    quote:
      "The difference is clarity. Our team can actually understand contribution records and progress without feeling overwhelmed by the system.",
    name: "Daniel Eze",
    role: "Finance Director",
    organization: "Granite Ridge Holdings",
  },
  {
    quote:
      "The product language feels professional and trustworthy. That matters when people are making decisions tied to retirement and future stability.",
    name: "Chioma Bassey",
    role: "Program Lead",
    organization: "Meridian Workforce Trust",
  },
];

export function TestimonialsSection() {
  return (
    <SectionShell id="testimonials" className="py-20 sm:py-24">
      <SectionHeading
        eyebrow="Testimonials"
        title="Trusted by teams that value clarity, confidence, and long-term credibility."
        description="Organizations choose Havenstone when the retirement experience needs to feel premium, stable, and worthy of the responsibility it carries."
        align="center"
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <figure
            key={testimonial.name}
            className="card-premium rounded-[1.9rem] p-6"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[linear-gradient(145deg,rgba(37,99,235,0.22),rgba(59,130,246,0.06))]">
              <Quote className="h-5 w-5 text-blue-200" />
            </div>

            <blockquote className="mt-6 text-base leading-8 text-slate-200">
              “{testimonial.quote}”
            </blockquote>

            <figcaption className="mt-8 border-t border-white/8 pt-5">
              <p className="text-sm font-semibold text-white">
                {testimonial.name}
              </p>
              <p className="mt-1 text-sm text-slate-400">
                {testimonial.role}
              </p>
              <p className="mt-1 text-sm text-slate-500">
                {testimonial.organization}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </SectionShell>
  );
}
