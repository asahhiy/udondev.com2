import GitStatsCard from "../feature/gitStatsCard";
import UserIcon from "../feature/userIcon";

export default function HeroSection() {
  return (
    <div>
      <div className="w-full flex items-center">
        <UserIcon />
        <div className="mx-4  h-full w-full flex flex-col">
          <span className="font-bebas font-bold text-6xl">Udon</span>
          <span className="font-bebas text-2xl">Student Engineer</span>
        </div>
      </div>

      <GitStatsCard />
    </div>
  )
}

