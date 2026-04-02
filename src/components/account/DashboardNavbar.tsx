"use client";

import Image from "next/image";
import Link from "next/link";
import { Bell, ChevronDown, LogOut, Menu, Settings, User2 } from "lucide-react";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

type DashboardRole = "USER" | "MODERATOR" | "ADMIN" | "SUPER_ADMIN";

const DASHBOARD_HOME_BY_ROLE: Record<DashboardRole, string> = {
  USER: "/account/dashboard/user",
  MODERATOR: "/account/dashboard/moderator",
  ADMIN: "/account/dashboard/admin",
  SUPER_ADMIN: "/account/dashboard/super-admin",
};

type DashboardNavbarUser = {
  name?: string | null;
  email?: string | null;
  image?: string | null;
  role: DashboardRole;
};

type DashboardNavbarProps = {
  user: DashboardNavbarUser;
  onMenuClick?: () => void;
  onLogout?: () => void;
};

function getRoleLabel(role: DashboardRole) {
  switch (role) {
    case "SUPER_ADMIN":
      return "Super Admin";
    case "ADMIN":
      return "Admin";
    case "MODERATOR":
      return "Moderator";
    default:
      return "Client";
  }
}

function getPageTitle(pathname: string, role: DashboardRole) {
  const base = DASHBOARD_HOME_BY_ROLE[role];

  if (pathname === base) return "Dashboard";

  const segments = pathname.split("/").filter(Boolean);
  const last = segments[segments.length - 1] ?? "dashboard";

  return last
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function DashboardNavbar({
  user,
  onMenuClick,
  onLogout,
}: DashboardNavbarProps) {
  const pathname = usePathname();

  const avatarFallback =
    user.name?.trim()?.charAt(0) || user.email?.trim()?.charAt(0) || "H";
  const firstName = user.name?.trim()?.split(" ")[0] || "Account";
  const roleLabel = getRoleLabel(user.role);
  const pageTitle = getPageTitle(pathname, user.role);
  const dashboardHome = DASHBOARD_HOME_BY_ROLE[user.role];

  return (
    <nav className="sticky top-0 z-40 border-b border-white/10 bg-[linear-gradient(180deg,rgba(11,23,40,0.92),rgba(8,20,38,0.86))] shadow-[0_16px_42px_rgba(0,0,0,0.22)] backdrop-blur-xl">
      <div className="mx-auto flex min-h-[76px] w-full items-center justify-between gap-4 px-4 py-3 sm:min-h-[82px] sm:px-6 sm:py-4">
        <div className="flex min-w-0 items-center gap-3">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={onMenuClick}
            className="rounded-2xl border border-white/10 bg-white/[0.03] text-slate-200 transition-all duration-200 hover:border-white/15 hover:bg-white/[0.08] hover:text-white hover:shadow-[0_10px_24px_rgba(0,0,0,0.18)] lg:hidden"
            aria-label="Open dashboard navigation"
          >
            <Menu className="h-5 w-5" />
          </Button>

          <Link
            href={dashboardHome}
            className="flex min-w-0 items-center gap-3 rounded-2xl pr-2 transition-colors hover:bg-white/[0.03]"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[#3c9ee0]/20 bg-[linear-gradient(135deg,rgba(60,158,224,0.18),rgba(60,158,224,0.08))] shadow-[0_12px_30px_rgba(60,158,224,0.12)]">
              <span className="text-sm font-semibold tracking-[0.18em] text-[#9ad4f4]">
                HS
              </span>
            </span>

            <div className="min-w-0">
              <p className="truncate text-sm font-semibold tracking-wide text-white">
                Havenstone
              </p>
              <div className="mt-1 flex items-center gap-2">
                <p className="truncate text-xs text-slate-400">{pageTitle}</p>
                <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:inline-block" />
                <span className="hidden rounded-full border border-[#3c9ee0]/20 bg-[#3c9ee0]/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8dcdf3] sm:inline-flex">
                  {roleLabel}
                </span>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex items-center gap-2.5 sm:gap-3">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="rounded-2xl border border-white/10 bg-white/[0.03] text-slate-300 transition-all duration-200 hover:border-white/15 hover:bg-white/[0.08] hover:text-white hover:shadow-[0_10px_24px_rgba(0,0,0,0.18)]"
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className={cn(
                  "group flex min-h-11 items-center gap-3 rounded-[1.35rem] border border-white/10 bg-white/[0.03] px-3 py-2 text-slate-300 transition-all duration-200",
                  "hover:border-white/15 hover:bg-white/[0.08] hover:text-white hover:shadow-[0_10px_24px_rgba(0,0,0,0.18)]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/35",
                )}
                aria-label="Open account menu"
              >
                {user.image ? (
                  <Image
                    src={user.image}
                    alt={user.name ?? "User avatar"}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-[1.1rem] border border-white/10 object-cover shadow-sm"
                  />
                ) : (
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-[1.1rem] border border-[#3c9ee0]/20 bg-[#3c9ee0]/10 text-sm font-semibold uppercase text-[#9ad4f4] shadow-sm">
                    {avatarFallback}
                  </span>
                )}

                <div className="hidden min-w-0 text-left md:block">
                  <p className="max-w-[140px] truncate text-sm font-medium leading-tight text-white">
                    {firstName}
                  </p>
                  <p className="mt-0.5 max-w-[176px] truncate text-[11px] leading-tight text-slate-400 transition-colors duration-200 group-hover:text-slate-300">
                    {user.email ?? "No email"}
                  </p>
                </div>

                <ChevronDown className="hidden h-3.5 w-3.5 text-slate-400 transition-colors duration-200 md:block" />
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="end"
              sideOffset={8}
              className="w-[min(20rem,calc(100vw-1.5rem))] min-w-[15.5rem] max-w-[calc(100vw-1.5rem)] rounded-2xl border border-white/10 bg-[#0b1728]/96 p-2 text-white shadow-[0_22px_54px_rgba(0,0,0,0.32)] backdrop-blur-xl sm:w-[18rem]"
            >
              <div className="px-3 py-3">
                <div className="flex items-center gap-3">
                  {user.image ? (
                    <Image
                      src={user.image}
                      alt={user.name ?? "User avatar"}
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-2xl border border-white/10 object-cover shadow-sm"
                    />
                  ) : (
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-[#3c9ee0]/20 bg-[#3c9ee0]/10 text-sm font-semibold uppercase text-[#9ad4f4] shadow-sm">
                      {avatarFallback}
                    </span>
                  )}

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-white">
                      {user.name || "Havenstone User"}
                    </p>
                    <p className="mt-1 break-all text-[11px] leading-5 text-slate-400">
                      {user.email}
                    </p>
                    <div className="mt-2.5 inline-flex rounded-full border border-[#3c9ee0]/20 bg-[#3c9ee0]/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8dcdf3]">
                      {roleLabel}
                    </div>
                  </div>
                </div>
              </div>

              <DropdownMenuSeparator className="my-1.5 bg-white/5" />

              <DropdownMenuItem
                asChild
                className="cursor-pointer rounded-xl px-3 py-3 text-slate-200 transition-[background-color,color,backdrop-filter] duration-200 focus:bg-white/10 focus:text-white focus:backdrop-blur-md data-[highlighted]:bg-white/10 data-[highlighted]:text-white data-[highlighted]:backdrop-blur-md"
              >
                <Link
                  href={`${dashboardHome}/profile`}
                  className="flex items-center gap-3"
                >
                  <User2 className="h-4 w-4" />
                  Profile
                </Link>
              </DropdownMenuItem>

              <DropdownMenuSeparator className="my-1.5 bg-white/5" />

              <DropdownMenuItem
                asChild
                className="cursor-pointer rounded-xl px-3 py-3 text-slate-200 transition-[background-color,color,backdrop-filter] duration-200 focus:bg-white/10 focus:text-white focus:backdrop-blur-md data-[highlighted]:bg-white/10 data-[highlighted]:text-white data-[highlighted]:backdrop-blur-md"
              >
                <Link
                  href={`${dashboardHome}/settings`}
                  className="flex items-center gap-3"
                >
                  <Settings className="h-4 w-4" />
                  Settings
                </Link>
              </DropdownMenuItem>

              <DropdownMenuSeparator className="my-1.5 bg-white/5" />

              <DropdownMenuItem
                onClick={onLogout}
                className="cursor-pointer rounded-xl px-3 py-3 text-red-300 transition-[background-color,color,backdrop-filter] duration-200 focus:bg-red-500/10 focus:text-red-200 focus:backdrop-blur-md data-[highlighted]:bg-red-500/10 data-[highlighted]:text-red-200 data-[highlighted]:backdrop-blur-md"
              >
                <LogOut className="mr-3 h-4 w-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
