"use client";

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
        title="Trusted by organizations that value clarity and long-term credibility"
        description="Havenstone is chosen by teams that require a structured, reliable, and professional financial experience."
        align="center"
      />

      {/* CAROUSEL */}
      <div className="relative mt-12">
        {/* edge fades */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[#050b1f] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[#050b1f] to-transparent" />

        <div className="flex gap-6 overflow-x-auto px-2 pb-6 snap-x snap-mandatory scrollbar-hide">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="group min-w-[320px] max-w-[380px] flex-shrink-0 snap-center"
            >
              <figure className="relative h-full rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(15,23,42,0.92),rgba(8,17,37,0.98))] p-7 shadow-[0_24px_60px_rgba(0,0,0,0.28)] transition duration-300 group-hover:-translate-y-1 group-hover:border-white/12">
                {/* glow */}
                <div className="absolute inset-0 rounded-[2rem] bg-blue-500/10 opacity-0 blur-xl transition group-hover:opacity-100" />

                {/* icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[linear-gradient(145deg,rgba(37,99,235,0.22),rgba(59,130,246,0.06))]">
                  <Quote className="h-5 w-5 text-blue-200" />
                </div>

                {/* quote */}
                <blockquote className="mt-6 text-base leading-8 text-slate-200">
                  “{testimonial.quote}”
                </blockquote>

                {/* footer */}
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
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
