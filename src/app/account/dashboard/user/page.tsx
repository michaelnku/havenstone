import { getUserDashboardDataAction } from "@/actions/dashboard/get-user-dashboard-data";
import UserDashboardPage from "./_components/UserDashboardPage";

export default async function Page() {
  const { userName, stats } = await getUserDashboardDataAction();

  return <UserDashboardPage userName={userName} stats={stats} />;
}
