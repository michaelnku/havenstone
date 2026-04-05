import { SectionHeading } from "@/components/home/section-heading";
import { SectionShell } from "@/components/home/section-shell";

const team = [
  {
    name: "Michael Nku",
    role: "Founder & Strategy Lead",
    description:
      "Oversees product direction, investment structure, and long-term platform vision.",
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
  return (
    <SectionShell id="team" className="py-20 sm:py-24">
      <SectionHeading
        eyebrow="Management Team"
        title="Built and guided by experienced leadership"
        description="Havenstone is led by a team focused on delivering structured financial systems, operational clarity, and long-term trust."
        align="center"
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member) => (
          <div
            key={member.name}
            className="group rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(15,23,42,0.92),rgba(8,17,37,0.98))] p-6 text-center transition hover:border-white/12"
          >
            {/* AVATAR */}
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-[linear-gradient(145deg,rgba(37,99,235,0.25),rgba(59,130,246,0.08))] text-xl font-semibold text-white">
              {member.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>

            <h3 className="mt-5 text-lg font-semibold text-white">
              {member.name}
            </h3>

            <p className="mt-1 text-sm text-blue-200">{member.role}</p>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              {member.description}
            </p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
