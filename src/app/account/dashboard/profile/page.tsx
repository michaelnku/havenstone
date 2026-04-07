import { Suspense } from "react";
import {
  UserProfileCard,
  type CurrentProfileUser,
} from "@/components/profile/UserProfileCard";

import { redirect } from "next/navigation";

import { getCurrentUser } from "@/lib/getCurrentUser";
import { getUserByEmail } from "@/components/helper/data";
import ProfilePageSkeleton from "@/components/skeletons/ProfilePageSkeleton";

async function ProfilePageContent() {
  const sessionUser = await getCurrentUser();
  if (!sessionUser?.email) {
    redirect("/auth/login");
  }

  const dbUser = await getUserByEmail(sessionUser.email);
  if (!dbUser) {
    redirect("/auth/login");
  }

  const fullName = (dbUser.name ?? sessionUser.name ?? "").trim();
  const [firstName, ...rest] = fullName.split(/\s+/);
  const profileUser: CurrentProfileUser = {
    id: dbUser.id,
    email: dbUser.email,
    role: sessionUser.role,
    image: sessionUser.image ?? dbUser.image ?? null,
    createdAt: dbUser.createdAt,
    firstName: firstName || null,
    lastName: rest.length > 0 ? rest.join(" ") : null,
  };

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="space-y-6">
        <header className="space-y-1">
          <h1 className="text-2xl font-semibold text-white/90">My Profile</h1>
          <p className="text-sm text-gray-500 dark:text-zinc-400">
            Manage your personal account information and security.
          </p>
        </header>

        <UserProfileCard user={profileUser} />
      </div>
    </main>
  );
}

export default function ProfilePage() {
  return (
    <Suspense fallback={<ProfilePageSkeleton />}>
      <ProfilePageContent />
    </Suspense>
  );
}
