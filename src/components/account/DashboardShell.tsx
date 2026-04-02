"use client";

import type { DashboardRole } from "@/constants/dashboard-menu";
import { signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { DashboardNavbar } from "./DashboardNavbar";
import { DashboardSidebar } from "./DashboardSidebar";

type DashboardShellUser = {
  name?: string | null;
  email?: string | null;
  image?: string | null;
  role: DashboardRole;
};

type DashboardShellProps = {
  user: DashboardShellUser;
  children: React.ReactNode;
};

export function DashboardShell({ user, children }: DashboardShellProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    await signOut();
    setMobileOpen(false);
    router.push("/auth/login");
    router.refresh();
  };

  return (
    <div>
      <DashboardNavbar
        user={user}
        onMenuClick={() => setMobileOpen(true)}
        onLogout={handleLogout}
      />

      <div className="flex">
        <DashboardSidebar
          role={user.role}
          mobileOpen={mobileOpen}
          onMobileOpenChange={setMobileOpen}
          onLogout={handleLogout}
        />

        <main className="min-w-0 flex-1 px-4 py-4 sm:px-6 sm:py-6 lg:ml-[280px]">
          {children}
        </main>
      </div>
    </div>
  );
}
