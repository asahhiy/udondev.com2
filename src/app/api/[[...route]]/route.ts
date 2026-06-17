import { Hono } from "hono";
import { handle } from "hono/vercel";

//VercelのEdgeサーバで動くから動作が軽くなるらしい
export const runtime = 'edge'

const app = new Hono().basePath('/api')

//cはcontextオブジェクトで通信に関する情報が詰まっている
app.get('/userprofileIcon/:username', async (c) => {
  const username = c.req.param('username')

  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: { 'User-Agent': "Nextjs-Hono-App" }
    })

    if (!response.ok) {
      const status = response.status === 404 ? 404 : 500
      return c.json({ error: "user not found " }, status)
    }

    const data = await response.json()
    return c.json({
      username: username,
      avatar_url: data.avatar_url
    })

  } catch (error) {
    return c.json({ error: "failed API request." }, 500)
  }

})



export const GET = handle(app)
export const POST = handle(app)
export const PUT = handle(app)
export const DELETE = handle(app)


export type AppType = typeof app
