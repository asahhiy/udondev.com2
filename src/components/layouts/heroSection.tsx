import GitStatsCard from "../feature/gitStatsCard";
import UserIcon from "../feature/userIcon";
import LinkButton from "../ui/LinkButton";

export default function HeroSection() {
  return (
    <div className="relative">
      <div className="w-full flex items-center">
        <UserIcon />
        <div className="mx-4  h-full flex flex-col w-full">
          <span className="font-bebas font-bold text-6xl">Udon</span>
          <span className="font-bebas text-2xl">Student Engineer</span>
        </div>
        <div className="flex flex-col absolute right-0">
          <LinkButton iconUrl="x.svg" name="X@a429092" href="https://x.com/a429092" />
          <LinkButton iconUrl="github.svg" name="Github@asahhiy" href="https://github.com/asahhiy" />
        </div>
      </div>
      <GitStatsCard />
      <div className="mt-8">
        セキュリティ・ネットワーク専攻の学生エンジニアです。<br />
        メインはTypeScriptやSwiftを用いたフロントエンド・モバイルアプリ開発で、<br />
        「心地よいモーション」や「わかりやすいデザイン」を追求するのが好きです。<br />
        最近はGolangでのサーバーサイドやインフラ環境にも手を広げ、フルスタックな開発力を磨いています。
      </div>
    </div>
  )
}

