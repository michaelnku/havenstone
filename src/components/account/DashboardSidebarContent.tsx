"use client";

import Link from "next/link";
import { ChevronDown, ChevronRight, LogOut } from "lucide-react";
import { usePathname } from "next/navigation";

import {
  DASHBOARD_HOME_BY_ROLE,
  getDashboardMenu,
  type DashboardRole,
} from "@/constants/dashboard-menu";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useState, useEffect } from "react";

type DashboardSidebarContentProps = {
  role: DashboardRole;
  onNavigate?: () => void;
  onLogout?: () => void;
  className?: string;
};

function isLinkActive(
  pathname: string,
  href: string,
  exact?: boolean,
): boolean {
  if (exact) {
    return pathname === href;
  }

  if (href === DASHBOARD_HOME_BY_ROLE.USER && pathname === href) return true;
  if (href === DASHBOARD_HOME_BY_ROLE.MODERATOR && pathname === href)
    return true;
  if (href === DASHBOARD_HOME_BY_ROLE.ADMIN && pathname === href) return true;
  if (href === DASHBOARD_HOME_BY_ROLE.SUPER_ADMIN && pathname === href) {
    return true;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function DashboardSidebarContent({
  role,
  onNavigate,
  onLogout,
  className,
}: DashboardSidebarContentProps) {
  const pathname = usePathname();
  const sections = getDashboardMenu(role);

  const [openSections, setOpenSections] = useState<Record<string, boolean>>(
    () =>
      Object.fromEntries(
        sections.map((section) => {
          const hasActiveChild = section.links.some((link) =>
            isLinkActive(pathname, link.href, link.exact),
          );

          return [section.title, hasActiveChild || true];
        }),
      ),
  );

  useEffect(() => {
    setOpenSections((prev) => {
      const next = { ...prev };

      for (const section of sections) {
        const hasActiveChild = section.links.some((link) =>
          isLinkActive(pathname, link.href, link.exact),
        );

        if (hasActiveChild) {
          next[section.title] = true;
        } else if (!(section.title in next)) {
          next[section.title] = true;
        }
      }

      return next;
    });
  }, [pathname, sections]);

  return (
    <div className={cn("flex h-full flex-col", className)}>
      <div className="flex-1 space-y-6 overflow-y-auto px-3 py-4">
        {sections.map((section) => {
          const isOpen = openSections[section.title] ?? true;

          return (
            <section key={section.title} className="space-y-2">
              <button
                type="button"
                onClick={() =>
                  setOpenSections((prev) => ({
                    ...prev,
                    [section.title]: !isOpen,
                  }))
                }
                className={cn(
                  "group flex w-full items-center justify-between rounded-2xl px-3 py-2 text-left transition",
                  "text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400",
                  "hover:bg-white/[0.04] hover:text-slate-200",
                )}
              >
                <span>{section.title} </span>
                {isOpen ? (
                  <ChevronDown className="h-4 w-4 text-slate-500 transition group-hover:text-slate-300" />
                ) : (
                  <ChevronRight className="h-4 w-4 text-slate-500 transition group-hover:text-slate-300" />
                )}
              </button>

              {isOpen ? (
                <div className="space-y-1">
                  {section.links.map((link) => {
                    const Icon = link.icon;
                    const active = isLinkActive(
                      pathname,
                      link.href,
                      link.exact,
                    );

                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={onNavigate}
                        className={cn(
                          "group relative flex items-center gap-3 rounded-2xl border px-3 py-3 text-sm transition-all",
                          active
                            ? "border-[#3c9ee0]/30 bg-[linear-gradient(135deg,rgba(60,158,224,0.16),rgba(60,158,224,0.06))] text-white shadow-[0_10px_30px_rgba(60,158,224,0.10)]"
                            : "border-transparent text-slate-300 hover:border-white/10 hover:bg-white/[0.04] hover:text-white",
                        )}
                      >
                        <span
                          className={cn(
                            "inline-flex h-10 w-10 items-center justify-center rounded-2xl border transition",
                            active
                              ? "border-[#3c9ee0]/30 bg-[#3c9ee0]/10 text-[#7bc1ef]"
                              : "border-white/10 bg-white/[0.03] text-slate-400 group-hover:text-slate-200",
                          )}
                        >
                          <Icon className="h-4 w-4" />
                        </span>

                        <div className="flex min-w-0 flex-1 items-center justify-between gap-2">
                          <span className="truncate font-medium">
                            {link.name}
                          </span>

                          {link.badge ? (
                            <span className="rounded-full border border-[#3c9ee0]/20 bg-[#3c9ee0]/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#8bcbf2]">
                              {link.badge}
                            </span>
                          ) : null}
                        </div>
                      </Link>
                    );
                  })}
                </div>
              ) : null}
            </section>
          );
        })}
      </div>

      <div className="px-3 pb-4">
        <Separator className="mb-4 bg-white/10" />

        <Button
          type="button"
          variant="ghost"
          onClick={onLogout}
          className="h-12 w-full justify-start rounded-2xl border border-white/10 bg-white/[0.03] px-3 text-slate-300 hover:bg-red-500/10 hover:text-red-200"
        >
          <LogOut className="mr-3 h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  );
}
