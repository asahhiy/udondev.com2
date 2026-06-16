import SkillChart from "@/components/feature/skillChart"


export default function Home() {
  return (
    <div className="h-300 bg-amber-300 m-4">
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-12 bg-amber-100 w-full h-100 md:col-span-4">
          a
        </div>
        <div className="col-span-12 w-full h-100 bg-amber-100 md:col-span-8">
          <SkillChart />
        </div>

        <div className="col-span-12 bg-amber-100 h-30">
          app scroll horizantal
        </div>

      </div>
    </div>
  )
}

