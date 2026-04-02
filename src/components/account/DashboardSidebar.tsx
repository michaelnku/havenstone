"use client";

import Link from "next/link";
import { Building2 } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import type { DashboardRole } from "@/constants/dashboard-menu";
import { DashboardSidebarContent } from "./DashboardSidebarContent";

type DashboardSidebarProps = {
  role: DashboardRole;
  mobileOpen: boolean;
  onMobileOpenChange: (open: boolean) => void;
  onLogout: () => void;
};

export function DashboardSidebar({
  role,
  mobileOpen,
  onMobileOpenChange,
  onLogout,
}: DashboardSidebarProps) {
  return (
    <>
      {/* Desktop sidebar */}
      <aside className="border border-white ">
        <DashboardSidebarContent role={role} onLogout={onLogout} />
      </aside>

      {/* Mobile sidebar */}
      <Sheet open={mobileOpen} onOpenChange={onMobileOpenChange}>
        <SheetContent
          side="left"
          className="w-[290px] border-white/10 bg-[linear-gradient(180deg,#06111f_0%,#0a1528_100%)] p-0 text-white sm:w-[320px]"
        >
          <SheetHeader className="border-b border-white/10 px-4 py-4 text-left">
            <SheetTitle className="flex items-center gap-3 text-white">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-[#3c9ee0]/20 bg-[#3c9ee0]/10 text-[#8bcbf2]">
                <Building2 className="h-5 w-5" />
              </span>

              <span className="flex flex-col">
                <span className="text-sm font-semibold tracking-wide">
                  Havenstone
                </span>
                <span className="text-xs font-normal text-slate-400">
                  Account menu
                </span>
              </span>
            </SheetTitle>
          </SheetHeader>

          <DashboardSidebarContent
            role={role}
            onNavigate={() => onMobileOpenChange(false)}
            onLogout={onLogout}
          />
        </SheetContent>
      </Sheet>
    </>
  );
}
