import { redirect } from "next/navigation";

import { DASHBOARD_HOME_BY_ROLE } from "@/constants/dashboard-menu";
import { getCurrentUser } from "@/lib/getCurrentUser";

export default async function AccountDashboardPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/auth/login");
  }

  redirect(DASHBOARD_HOME_BY_ROLE[user.role] ?? "/");
}
