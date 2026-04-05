"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/home/section-heading";
import { SectionShell } from "@/components/home/section-shell";

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
  const featured = team.find((m) => m.featured);
  const others = team.filter((m) => !m.featured);

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

        {/* YOUR EXISTING LAYOUT */}
        <div className="relative mt-20 h-[420px] sm:h-[460px] lg:h-[480px]">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 0.75, x: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute left-[2%] sm:left-[6%] lg:left-[8%] top-[65%] sm:top-[60%] -translate-y-1/2 scale-[0.85] sm:scale-[0.92] blur-[0.5px]"
          >
            <Card member={others[0]} />
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 0.75, x: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute right-[2%] sm:right-[6%] lg:right-[8%] top-[65%] sm:top-[60%] -translate-y-1/2 scale-[0.85] sm:scale-[0.92] blur-[0.5px]"
          >
            <Card member={others[1]} />
          </motion.div>

          {/* CENTER */}
          {featured && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="absolute left-1/2 top-[50%] sm:top-[48%] lg:top-[45%] z-20 -translate-x-1/2 -translate-y-1/2"
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
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Card member={featured} featured />
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </SectionShell>
  );
}

/* CARD */
function Card({
  member,
  featured = false,
}: {
  member: (typeof team)[0];
  featured?: boolean;
}) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      className={`relative w-[260px] sm:w-[300px] rounded-[2rem] border p-5 sm:p-6 text-center transition
        ${
          featured
            ? "border-blue-400/20 bg-[linear-gradient(135deg,rgba(37,99,235,0.22),rgba(15,23,42,0.96))] shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
            : "border-white/8 bg-[linear-gradient(180deg,rgba(15,23,42,0.92),rgba(8,17,37,0.98))]"
        }`}
    >
      {/* AVATAR */}
      <div
        className={`mx-auto flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full border text-lg sm:text-xl font-semibold text-white
          ${
            featured
              ? "border-blue-400/30 bg-blue-500/20"
              : "border-white/10 bg-[linear-gradient(145deg,rgba(37,99,235,0.25),rgba(59,130,246,0.08))]"
          }`}
      >
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
