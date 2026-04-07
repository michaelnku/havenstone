import ProfileForm from "@/app/account/_components/ProfileForm";
import { getCurrentUser } from "@/lib/getCurrentUser";

export default async function Page() {
  const user = await getCurrentUser();
  if (!user) return null;

  return (
    <div className="max-w-4xl mx-auto space-y-10 px-4 md:px-8">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold">Update Profile</h1>
        <p className="text-sm text-muted-foreground">
          Manage your personal account information and password.
        </p>
      </header>

      <ProfileForm userData={user} />
    </div>
  );
}
