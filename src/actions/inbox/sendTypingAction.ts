"use server";

import { getCurrentUserId } from "@/lib/getCurrentUser";
import { pusherServer } from "@/lib/pusher";

export async function sendTypingAction({
  conversationId,
}: {
  conversationId: string;
}) {
  const userId = await getCurrentUserId();
  if (!userId) return;

  await pusherServer.trigger(
    `presence-conversation-${conversationId}`,
    "typing",
    {
      userId,
      timestamp: Date.now(),
    },
  );
}
