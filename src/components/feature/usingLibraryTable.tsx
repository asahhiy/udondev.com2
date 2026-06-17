export default function UsingLibraryTable() {
  return (
    <div className="max-w-4xl mx-auto my-8 overflow-x-auto bg-white sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-600">

        <thead className="text-sm text-gray-700 bg-gray-100 border-b-2 border-gray-200">
          <tr>
            <th scope="col" className="px-6 py-4 font-bold tracking-wider">
              Lang
            </th>
            <th scope="col" className="px-6 py-4 font-bold tracking-wider">
              Environment
            </th>
            <th scope="col" className="px-6 py-4 font-bold tracking-wider">
              Library
            </th>
            <th scope="col" className="px-6 py-4 font-bold tracking-wider">
              Framework
            </th>
            <th scope="col" className="px-6 py-4 font-bold tracking-wider">
              service
            </th>
            <th scope="col" className="px-6 py-4 font-bold tracking-wider">
              Editor
            </th>

          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr className="transition-colors hover:bg-gray-50 gap-1 h-50">
            <th
              scope="row"
              className="px-6 py-1 font-medium text-gray-900 whitespace-nowrap"
            >

              <img src="https://img.shields.io/badge/-Typescript-555.svg?logo=typescript&style=flat" />
              <img src="https://img.shields.io/badge/-Javascript-555.svg?logo=JavaScript&style=flat" />
              <img src="https://img.shields.io/badge/-HTML5-555.svg?logo=html5&amp;style=flat" height="30" />
              <img src="https://img.shields.io/badge/-CSS-555.svg?logo=CSS&amp;style=flat" height="30" />
              <img src="https://img.shields.io/badge/-Swift-555.svg?logo=Swift&amp;style=flat" height="30" />
              <img src="https://img.shields.io/badge/-Clang-555.svg?logo=C&amp;style=flat" height="30" />
            </th>
            <td className="px-6 py-4">
              <img src="https://img.shields.io/badge/-Windows-555.svg?logo=windows&amp;style=flat" height="30" />
              <img src="https://img.shields.io/badge/-mac-555.svg?logo=macOS&amp;style=flat" height="30" />
              <img src="https://img.shields.io/badge/-ubuntu-555.svg?logo=ubuntu&amp;style=flat" height="30" />
              <img src="https://img.shields.io/badge/-Debian-555.svg?logo=Debian&amp;style=flat" height="30" />
              <img src="https://img.shields.io/badge/-Kali-555.svg?logo=kalilinux&amp;style=flat" height="30" />
              <img src="https://img.shields.io/badge/-PostgreSQL-555.svg?logo=PostgreSQL&amp;style=flat" height="30" />

            </td>
            <td className="px-2">
              <img src="https://img.shields.io/badge/-Three.js-555.svg?logo=Three.js&amp;style=flat" height="30" />

              <img src="https://img.shields.io/badge/-Drizzle-555.svg?logo=Drizzle&amp;style=flat" height="30" />
              <img src="https://img.shields.io/badge/-Prisma-555.svg?logo=Prisma&amp;style=flat" height="30" />
            </td>

            <td className="px-2">
              <img src="https://img.shields.io/badge/-React-555.svg?logo=react&amp;style=flat" height="30" />
              <img src="https://img.shields.io/badge/-Next.js-555.svg?logo=Next.js&amp;style=flat" height="30" />
              <img src="https://img.shields.io/badge/-Expo-555.svg?logo=Expo&amp;style=flat" height="30" />
              <img src="https://img.shields.io/badge/-Hono-555.svg?logo=Hono&amp;style=flat" height="30" />
            </td>
            <td className="px-6 py-4">
              <img src="https://img.shields.io/badge/-Vercel-555.svg?logo=vercel&amp;style=flat" height="30" />
              <img src="https://img.shields.io/badge/-CloudFlare-555.svg?logo=cloudflare&amp;style=flat" height="30" />
              <img src="https://img.shields.io/badge/-NeonDB-555.svg?logo=Neon&amp;style=flat" height="30" />
            </td>
            <td className="px-2">
              <img src="https://img.shields.io/badge/-neovim-555.svg?logo=neovim&amp;style=flat" />
              <img src="https://img.shields.io/badge/-Xcode-555.svg?logo=Xcode&amp;style=flat" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
