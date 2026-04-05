import { redirect } from "next/navigation";

import { AccountLayoutShell } from "@/components/account/AccountLayoutShell";
import { getCurrentUser } from "@/lib/getCurrentUser";
import { buildSeoMetadata } from "@/lib/seo/buildSeoMetadata";
import { getSiteSeoConfig } from "@/lib/seo/getSiteSeoConfig";
import { resolveGenericPageSeo } from "@/lib/seo/resolveSeoFallbacks";

export async function generateMetadata() {
  const site = await getSiteSeoConfig();
  const seo = resolveGenericPageSeo(site, {
    title: "Account",
    description:
      "Manage your Havenstone account, view your investments, and access secure personal retirement planning tools.",
  });

  return buildSeoMetadata({
    site,
    ...seo,
    noIndex: true,
    noFollow: true,
  });
}

export default async function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let user = null;
  try {
    user = await getCurrentUser();
  } catch (error) {
    console.error("Error fetching current user:", error);
    user = null;
  }

  if (!user) {
    redirect("/auth/login");
  }

  return <AccountLayoutShell user={user}>{children}</AccountLayoutShell>;
}
