'use client'
import Image from "next/image"
import { useUserProfileImage } from "@/hooks/useUserProfile"


export default function UserIcon() {

  const { username, avatarUrl, isLoading, error } = useUserProfileImage("asahhiy")


  if (isLoading) return (
    <div>
      Loading....
    </div>
  )

  if (error) return (
    <div>
      sorry, image fetch error.
    </div>
  )
  return (
    <div>

      <Image
        className="rounded-2xl shadow-2xl"
        src={avatarUrl}
        alt={username || ""}
        width={100}
        height={100}
        priority
      />

    </div>
  )
}

