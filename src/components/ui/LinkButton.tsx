'use client'
import Link from "next/link"
import Image from "next/image"


export default function LinkButton({ name, iconUrl, href }: { name: string, iconUrl: string, href: string }) {

  return (
    <div className="flex justify-end w-full">
      {/* 親要素で右寄せ（justify-end）にするのが左へ広げるための必須条件です */}
      <div className="flex justify-end p-1 w-full max-w-sm">

        {/* ボタン本体（rounded-[28px] に変更して変形を滑らかに） */}
        <Link className="group relative flex items-center w-10 h-10 hover:w-48 bg-slate-100 hover:bg-slate-200 rounded-[28px] hover:rounded-xl transition-all duration-300 ease-out overflow-hidden shadow-md"
          href={href}
        >

          {/* テキスト部分（普段は透明、ホバーでフェードイン） */}
          <span className="absolute left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out whitespace-nowrap text-black font-bold">
            {name}
          </span>

          {/* アイコン部分（常に右端の丸いエリアに固定） */}
          <div className="absolute right-0 w-10 h-10 flex items-center justify-center shrink-0">
            <Image src={iconUrl} alt={name} width={15} height={15} />
          </div>

        </Link>

      </div>
    </div>

  )
}

