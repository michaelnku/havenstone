"use client";

import Link from "next/link";
import { Mail, Building2, MapPin, X, Phone } from "lucide-react";

const footerLinkGroups = [
  {
    title: "Company",
    links: [
      { href: "#why-havenstone", label: "Why Havenstone" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Platform",
    links: [
      { href: "#how-it-works", label: "How It Works" },
      { href: "#investment-products", label: "Investment Products" },
      { href: "#investment-plans", label: "Investment Plans" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
      { href: "/compliance", label: "Compliance" },
    ],
  },
  {
    title: "Support",
    links: [
      { href: "#faq", label: "FAQ" },
      { href: "/contact", label: "Help Center" },
    ],
  },
];

function HavenstoneMark() {
  return (
    <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 bg-[linear-gradient(145deg,rgba(37,99,235,0.20),rgba(59,130,246,0.05))] shadow-[0_12px_34px_rgba(37,99,235,0.16)]">
      <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--gradient-brand)] text-sm font-semibold text-white">
        H
      </span>
    </span>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-auto border-t border-white/8 bg-[linear-gradient(180deg,rgba(5,11,31,0.85),rgba(5,11,31,0.98))]">
      {/* top glow line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(96,165,250,0.28),transparent)]" />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_repeat(4,minmax(0,1fr))]">
          {/* BRAND */}
          <div className="max-w-md">
            <Link href="/" className="inline-flex items-center gap-3">
              <HavenstoneMark />
              <div>
                <p className="text-lg font-semibold text-white">Havenstone</p>
                <p className="text-xs uppercase tracking-[0.14em] text-slate-400">
                  Financial Growth Platform
                </p>
              </div>
            </Link>

            <p className="mt-5 text-sm leading-7 text-slate-300">
              Havenstone enables individuals and organizations to save and
              invest through structured financial products designed for clarity,
              accessibility, and long-term growth.
            </p>

            {/* TRUST + CONTACT + IDENTITY */}
            <div className="mt-6 space-y-4 text-sm text-slate-400">
              {/* CONTACT */}
              <div className="space-y-4">
                <div>
                  <p className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-blue-300" />
                    support@havenstone.com
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-blue-300" />
                    +44 123 456 789, +1 (123) 456-7890
                  </p>
                </div>

                <div>
                  {/* HEADQUARTERS */}
                  <p className="flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 text-blue-300" />
                    <span>
                      12 Financial District Avenue,
                      <br />
                      London, United Kingdom
                    </span>
                  </p>

                  {/* REGISTRATION */}
                  <p className="flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-blue-300" />
                    Havenstone LLC — Reg No: 14583927
                  </p>
                </div>
              </div>

              {/* SOCIALS */}
              <div className="mt-6 flex items-center gap-3">
                <Link
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] transition"
                >
                  <Mail className="h-4 w-4 text-white" />
                </Link>

                <Link
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] transition"
                >
                  <X className="h-4 w-4 text-white" />
                </Link>
              </div>
            </div>
          </div>

          {/* LINKS */}
          {footerLinkGroups.map((group) => (
            <nav key={group.title}>
              <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-200">
                {group.title}
              </h2>

              <ul className="mt-5 space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* LEGAL / DISCLAIMER */}
        <div className="mt-14 rounded-2xl border border-white/8 bg-white/[0.03] p-6">
          <p className="text-xs leading-6 text-slate-400">
            Havenstone provides access to structured savings and investment
            products. All returns displayed on the platform are estimates and
            are not guaranteed. Investments involve risk, and the value of
            investments may fluctuate over time. Havenstone does not provide
            financial advice, and users are encouraged to make independent
            financial decisions based on their individual circumstances.
          </p>
        </div>

        {/* BOTTOM */}
        <div className="mt-10 pt-6">
          <div className="divider-premium" />

          <div className="flex flex-col gap-3 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
            <p>© {year} Havenstone. All rights reserved.</p>

            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-white">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-white">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
