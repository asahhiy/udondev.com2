import SkillChart from "../feature/skillChart"
import UsingLibraryTable from "../feature/usingLibraryTable"

export default function SkillLayout() {
  return (
    <div className="p-1">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-12">
          <SkillChart />
        </div>

        <div className="col-span-12 md:col-span-12">
          <UsingLibraryTable />
        </div>
      </div>
    </div>
  )

}


