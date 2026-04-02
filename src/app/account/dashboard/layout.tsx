import { redirect } from "next/navigation";

import { DashboardShell } from "@/components/account/DashboardShell";
import { getCurrentUser } from "@/lib/getCurrentUser";

export default async function AccountDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/auth/login");
  }

  return <DashboardShell user={user}>{children}</DashboardShell>;
}
