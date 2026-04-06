import InboxLayout from "@/components/inbox/InboxLayout";
import { getCurrentUserId } from "@/lib/getCurrentUser";
import { getUserConversations } from "@/lib/support/getUserConversations";

export default async function MessagesPage({
  searchParams,
}: {
  searchParams: Promise<{ conversation?: string }>;
}) {
  const userId = await getCurrentUserId();

  if (!userId) {
    return (
      <div className="mx-auto h-[calc(100dvh-4rem)] min-h-0 max-w-5xl overflow-hidden bg-white px-4 py-4 dark:bg-neutral-950 sm:px-6 lg:px-8">
        <div className="flex h-full flex-col items-center justify-center gap-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Please log in to view your support messages.
          </h2>
        </div>
      </div>
    );
  }

  const conversations = await getUserConversations(userId);
  const { conversation } = await searchParams;
  const initialActiveId = conversations.some((item) => item.id === conversation)
    ? conversation
    : null;

  return (
    <div className="mx-auto h-[calc(100dvh-7rem)]  min-h-0 max-w-5xl px-4 py-4">
      <InboxLayout
        conversations={conversations}
        currentUserId={userId}
        initialActiveId={initialActiveId}
      />
    </div>
  );
}
