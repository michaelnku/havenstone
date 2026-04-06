"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/home/section-heading";
import { SectionShell } from "@/components/home/section-shell";
import { useState } from "react";

const team = [
  {
    name: "Michael Nku",
    role: "Founder & Strategy Lead",
    description:
      "Oversees product direction, investment structure, and long-term platform vision.",
    featured: true,
  },
  {
    name: "Adaeze Okonkwo",
    role: "Operations Lead",
    description:
      "Responsible for program execution, organizational onboarding, and platform operations.",
  },
  {
    name: "Daniel Adeyemi",
    role: "Financial Oversight",
    description:
      "Ensures structured financial processes, reporting integrity, and long-term stability.",
  },
];

export function ManagementTeamSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const featured = team[activeIndex];
  const others = team.filter((_, i) => i !== activeIndex);

  return (
    <SectionShell id="team" className="relative py-20 sm:py-24 overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="https://3mnjvkl4rh.ufs.sh/f/obiqfDxUd1AJER91OtJQdY0fW6Xhc7KoRLHNpBrns9tQ8kJG"
          alt="Background"
          className="h-full w-full object-cover brightness-[0.6] contrast-[1.1] scale-105"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-[rgba(5,11,31,0.7)]" />

        {/* GRADIENT (top → bottom) */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,11,31,0.9)_0%,rgba(5,11,31,0.7)_40%,rgba(5,11,31,0.95)_100%)]" />

        {/* BLUE ACCENT GLOW */}
        <div className="absolute inset-0">
          <div className="absolute left-1/3 top-[-120px] h-[400px] w-[400px] rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute bottom-[-120px] right-[10%] h-[350px] w-[350px] rounded-full bg-blue-400/20 blur-3xl" />
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10">
        <SectionHeading
          eyebrow="Management Team"
          title="Built and guided by experienced leadership"
          description="Havenstone is led by a team focused on structured financial systems, operational clarity, and long-term trust."
          align="center"
        />

        {/* RESPONSIVE LAYOUT */}
        <div className="mt-16">
          {/* MOBILE (CLEAN STACK — NO CRAMPING) */}
          <div className="flex flex-col items-center gap-6 sm:gap-8 md:hidden">
            <Card
              member={featured}
              featured
              onFocus={() => setActiveIndex(activeIndex)}
            />

            <div className="flex flex-col items-center gap-6">
              <Card
                member={others[0]}
                onFocus={() => setActiveIndex(team.indexOf(others[0]))}
              />

              <Card
                member={others[1]}
                onFocus={() => setActiveIndex(team.indexOf(others[1]))}
              />
            </div>
          </div>

          {/* TABLET (LIGHT LAYERING) */}
          <div className="relative hidden md:block lg:hidden h-[420px]">
            {/* LEFT */}
            <div className="absolute left-[10%] top-[65%] -translate-y-1/2 scale-[0.9] opacity-80">
              <Card
                member={others[0]}
                onFocus={() => setActiveIndex(team.indexOf(others[0]))}
              />
            </div>

            {/* RIGHT */}
            <div className="absolute right-[10%] top-[65%] -translate-y-1/2 scale-[0.9] opacity-80">
              <Card
                member={others[1]}
                onFocus={() => setActiveIndex(team.indexOf(others[1]))}
              />
            </div>

            {/* CENTER */}
            <div className="absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 z-10">
              <Card
                member={featured}
                featured
                onFocus={() => setActiveIndex(activeIndex)}
              />
            </div>
          </div>

          {/* DESKTOP (FULL PREMIUM LAYER) */}
          <div className="relative hidden lg:block h-[480px]">
            {/* LEFT */}
            <motion.div
              layout="position"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 0.75, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 25,
              }}
              className="absolute left-[8%] top-[60%] -translate-y-1/2 scale-[0.92] blur-[0.5px]"
            >
              <Card
                member={others[0]}
                onFocus={() => setActiveIndex(team.indexOf(others[0]))}
              />
            </motion.div>

            {/* RIGHT */}
            <motion.div
              layout="position"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 0.75, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 25,
              }}
              className="absolute right-[8%] top-[60%] -translate-y-1/2 scale-[0.92] blur-[0.5px]"
            >
              <Card
                member={others[1]}
                onFocus={() => setActiveIndex(team.indexOf(others[1]))}
              />
            </motion.div>

            {/* CENTER */}
            <motion.div
              layout="position"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 25,
              }}
              className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 z-20"
            >
              {/* glow */}
              <motion.div
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-[2rem] bg-blue-500/20 blur-2xl"
              />

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Card
                  member={featured}
                  featured
                  onFocus={() => setActiveIndex(activeIndex)}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

/* CARD */
function Card({
  member,
  featured = false,
  onFocus,
}: {
  member: (typeof team)[0];
  featured?: boolean;
  onFocus?: () => void;
}) {
  return (
    <motion.div
      layout="position"
      onMouseEnter={onFocus}
      onClick={onFocus}
      whileHover={{ y: -6, scale: 1.02 }}
      className={`relative cursor-pointer w-[260px] sm:w-[300px] rounded-[2rem] border p-5 sm:p-6 text-center transition-all duration-300 ease-out
        ${
          featured
            ? "border-blue-400/20 bg-[linear-gradient(135deg,rgba(37,99,235,0.22),rgba(15,23,42,0.96))] shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
            : "border-white/8 bg-[linear-gradient(180deg,rgba(15,23,42,0.92),rgba(8,17,37,0.98))]"
        }`}
    >
      {/* glow only if active */}
      {featured && (
        <div className="absolute inset-0 rounded-[2rem] bg-blue-500/20 blur-2xl" />
      )}

      {/* avatar */}
      <div className="relative mx-auto flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full border text-lg sm:text-xl font-semibold text-white border-white/10 bg-blue-500/20">
        {member.name
          .split(" ")
          .map((n) => n[0])
          .join("")}
      </div>

      <h3 className="mt-4 sm:mt-5 text-base sm:text-lg font-semibold text-white">
        {member.name}
      </h3>

      <p className="mt-1 text-xs sm:text-sm text-blue-200">{member.role}</p>

      <p className="mt-3 sm:mt-4 text-xs sm:text-sm leading-6 sm:leading-7 text-slate-400">
        {member.description}
      </p>
    </motion.div>
  );
}
