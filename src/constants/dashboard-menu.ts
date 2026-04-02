import type { LucideIcon } from "lucide-react";
import {
  LayoutDashboard,
  User,
  Wallet,
  ShieldCheck,
  FileText,
  Landmark,
  LineChart,
  Bell,
  Settings,
  BadgeCheck,
  FolderCheck,
  Users,
  SearchCheck,
  ClipboardList,
  Activity,
  Briefcase,
  Building2,
  ScrollText,
  BarChart3,
  CircleDollarSign,
  UserCog,
} from "lucide-react";

export type DashboardRole = "USER" | "MODERATOR" | "ADMIN" | "SUPER_ADMIN";

export type DashboardMenuLink = {
  name: string;
  href: string;
  icon: LucideIcon;
  badge?: string;
  exact?: boolean;
};

export type DashboardMenuSection = {
  title: string;
  links: DashboardMenuLink[];
};

export const DASHBOARD_HOME_BY_ROLE: Record<DashboardRole, string> = {
  USER: "/account/dashboard/user",
  MODERATOR: "/account/dashboard/moderator",
  ADMIN: "/account/dashboard/admin",
  SUPER_ADMIN: "/account/dashboard/super-admin",
};

export const DASHBOARD_MENU: Record<DashboardRole, DashboardMenuSection[]> = {
  USER: [
    {
      title: "Overview",
      links: [
        {
          name: "Dashboard",
          href: "/account/dashboard/user",
          icon: LayoutDashboard,
          exact: true,
        },
      ],
    },
    {
      title: "Portfolio",
      links: [
        {
          name: "Investment Profile",
          href: "/account/dashboard/user/profile",
          icon: User,
        },
        {
          name: "Investment Accounts",
          href: "/account/dashboard/user/accounts",
          icon: Wallet,
        },
        {
          name: "Retirement Plans",
          href: "/account/dashboard/user/retirement-plans",
          icon: Landmark,
        },
        {
          name: "Performance",
          href: "/account/dashboard/user/performance",
          icon: LineChart,
        },
      ],
    },
    {
      title: "Verification",
      links: [
        {
          name: "KYC Verification",
          href: "/account/dashboard/user/kyc",
          icon: BadgeCheck,
        },
        {
          name: "Documents",
          href: "/account/dashboard/user/documents",
          icon: FileText,
        },
      ],
    },
    {
      title: "Account",
      links: [
        {
          name: "Notifications",
          href: "/account/dashboard/user/notifications",
          icon: Bell,
        },
        {
          name: "Settings",
          href: "/account/dashboard/user/settings",
          icon: Settings,
        },
      ],
    },
  ],

  MODERATOR: [
    {
      title: "Overview",
      links: [
        {
          name: "Dashboard",
          href: "/account/dashboard/moderator",
          icon: LayoutDashboard,
          exact: true,
        },
      ],
    },
    {
      title: "Review Queue",
      links: [
        {
          name: "KYC Reviews",
          href: "/account/dashboard/moderator/kyc-reviews",
          icon: SearchCheck,
        },
        {
          name: "Document Reviews",
          href: "/account/dashboard/moderator/document-reviews",
          icon: FolderCheck,
        },
        {
          name: "Testimonials",
          href: "/account/dashboard/moderator/testimonies",
          icon: ClipboardList,
        },
      ],
    },
    {
      title: "Monitoring",
      links: [
        {
          name: "Audit Logs",
          href: "/account/dashboard/moderator/audit-logs",
          icon: ScrollText,
        },
        {
          name: "Activity Feed",
          href: "/account/dashboard/moderator/activity",
          icon: Activity,
        },
      ],
    },
    {
      title: "Account",
      links: [
        {
          name: "Settings",
          href: "/account/dashboard/moderator/settings",
          icon: Settings,
        },
      ],
    },
  ],

  ADMIN: [
    {
      title: "Overview",
      links: [
        {
          name: "Dashboard",
          href: "/account/dashboard/admin",
          icon: LayoutDashboard,
          exact: true,
        },
        {
          name: "Analytics",
          href: "/account/dashboard/admin/analytics",
          icon: BarChart3,
        },
      ],
    },
    {
      title: "Operations",
      links: [
        {
          name: "Users",
          href: "/account/dashboard/admin/users",
          icon: Users,
        },
        {
          name: "Investor Profiles",
          href: "/account/dashboard/admin/investors",
          icon: Briefcase,
        },
        {
          name: "Investment Accounts",
          href: "/account/dashboard/admin/investment-accounts",
          icon: CircleDollarSign,
        },
        {
          name: "KYC Management",
          href: "/account/dashboard/admin/kyc",
          icon: ShieldCheck,
        },
      ],
    },
    {
      title: "Content & Compliance",
      links: [
        {
          name: "Testimonials",
          href: "/account/dashboard/admin/testimonies",
          icon: FileText,
        },
        {
          name: "Audit Logs",
          href: "/account/dashboard/admin/audit-logs",
          icon: ScrollText,
        },
      ],
    },
    {
      title: "System",
      links: [
        {
          name: "Notifications",
          href: "/account/dashboard/admin/notifications",
          icon: Bell,
        },
        {
          name: "Settings",
          href: "/account/dashboard/admin/settings",
          icon: Settings,
        },
      ],
    },
  ],

  SUPER_ADMIN: [
    {
      title: "Executive Overview",
      links: [
        {
          name: "Dashboard",
          href: "/account/dashboard/super-admin",
          icon: LayoutDashboard,
          exact: true,
        },
        {
          name: "Platform Analytics",
          href: "/account/dashboard/super-admin/analytics",
          icon: BarChart3,
        },
        {
          name: "System Health",
          href: "/account/dashboard/super-admin/system-health",
          icon: Activity,
        },
      ],
    },
    {
      title: "Administration",
      links: [
        {
          name: "Admins",
          href: "/account/dashboard/super-admin/admins",
          icon: UserCog,
        },
        {
          name: "Moderators",
          href: "/account/dashboard/super-admin/moderators",
          icon: ShieldCheck,
        },
        {
          name: "Users",
          href: "/account/dashboard/super-admin/users",
          icon: Users,
        },
      ],
    },
    {
      title: "Platform Control",
      links: [
        {
          name: "Investor Profiles",
          href: "/account/dashboard/super-admin/investors",
          icon: Briefcase,
        },
        {
          name: "Investment Accounts",
          href: "/account/dashboard/super-admin/investment-accounts",
          icon: Wallet,
        },
        {
          name: "Audit Logs",
          href: "/account/dashboard/super-admin/audit-logs",
          icon: ScrollText,
        },
        {
          name: "Platform Settings",
          href: "/account/dashboard/super-admin/settings",
          icon: Building2,
        },
      ],
    },
  ],
};

export function getDashboardMenu(role: DashboardRole) {
  return DASHBOARD_MENU[role] ?? DASHBOARD_MENU.USER;
}
