"use server";

import { prisma } from "@/lib/prisma";

import { revalidatePath } from "next/cache";
import { UTApi } from "uploadthing/server";
// import { ensureFileAsset } from "@/lib/file-assets";
// import { touchOrMarkFileAssetOrphaned } from "@/lib/product-images";
// import { userProfileAvatarInclude } from "@/lib/media-views";
import { getCurrentSessionUser } from "@/lib/getCurrentSessionUser";
import {
  updateUserSchema,
  updateUserSchemaType,
} from "@/lib/zodValidations/user";

const utapi = new UTApi();

export const deleteProfileAvatarAction = async () => {
  const user = await getCurrentSessionUser();
  if (!user) return { error: "Unauthorized" };

  try {
    const dbUser = await prisma.user.findUnique({
      where: { id: user.id },
      select: {
        profileAvatarFileAssetId: true,
        profileAvatarFileAsset: {
          select: {
            storageKey: true,
          },
        },
      },
    });

    if (!dbUser?.profileAvatarFileAssetId) {
      return { error: "No profile avatar to delete" };
    }

    const avatarKey = dbUser.profileAvatarFileAsset?.storageKey;

    if (avatarKey) {
      await utapi.deleteFiles([avatarKey]);
    }

    await prisma.$transaction(async (tx) => {
      const previousProfileAvatarFileAssetId = dbUser.profileAvatarFileAssetId;

      await tx.user.update({
        where: { id: user.id },
        data: {
          profileAvatarFileAssetId: null,
        },
      });

      //   if (previousProfileAvatarFileAssetId) {
      //     await touchOrMarkFileAssetOrphaned(
      //       tx,
      //       previousProfileAvatarFileAssetId,
      //     );
      //   }
    });

    return { success: true };
  } catch (err) {
    console.error(err);
    return { error: "Could not delete profile image" };
  }
};

//update user profile action
export async function updateUserProfile(values: updateUserSchemaType) {
  const parsed = updateUserSchema.safeParse(values);
  if (!parsed.success) {
    return { error: "Invalid profile data" };
  }

  const { name, username, profileAvatar } = parsed.data;

  const user = await getCurrentSessionUser();
  if (!user) return { error: "Unauthorized" };

  if (username) {
    const existing = await prisma.user.findFirst({
      where: {
        username,
        NOT: { id: user.id },
      },
    });

    if (existing) {
      return { error: "Username already taken" };
    }
  }

  await prisma.$transaction(async (tx) => {
    const currentUser = await tx.user.findUnique({
      where: { id: user.id },
      //  include: userProfileAvatarInclude,
    });

    let nextProfileAvatarFileAssetId: string | null | undefined = undefined;
    let previousProfileAvatarFileAssetId: string | null = null;

    if (profileAvatar !== undefined) {
      previousProfileAvatarFileAssetId =
        currentUser?.profileAvatarFileAssetId ?? null;

      if (profileAvatar === null) {
        nextProfileAvatarFileAssetId = null;
      } else {
        // const asset = await ensureFileAsset(tx, {
        //   uploadedById: user.id,
        //   file: profileAvatar,
        //   category: "PROFILE_IMAGE",
        //   kind: "IMAGE",
        //   isPublic: true,
        // });
        // nextProfileAvatarFileAssetId = asset.id;
      }
    }

    await tx.user.update({
      where: { id: user.id },
      data: {
        name,
        username,
        profileAvatarFileAssetId: nextProfileAvatarFileAssetId,
      },
    });

    // if (
    //   previousProfileAvatarFileAssetId &&
    //   previousProfileAvatarFileAssetId !== nextProfileAvatarFileAssetId
    // ) {
    //   await touchOrMarkFileAssetOrphaned(tx, previousProfileAvatarFileAssetId);
    // }
  });

  revalidatePath("/account/dashboard/profile/update");

  return { success: true };
}
