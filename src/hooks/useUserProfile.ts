'use client'
import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/hono";


export const useUserProfileImage = (username: string) => {


  const { data, isLoading, error } = useQuery({
    //キャッシュ管理のkeyとして動作する
    queryKey: ['userProfileImage', username],

    queryFn: async () => {
      const res = await client.api.userprofileIcon[':username'].$get({
        param: { username }
      })

      if (!res.ok) {
        throw new Error('user not found ')
      }

      return res.json()


    },

    enabled: !!username


  })


  return {
    avatarUrl: data?.avatar_url,
    username: data?.username,
    isLoading,
    error: error instanceof Error ? error.message : null
  }

}
