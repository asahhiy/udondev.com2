"use client"
import { Pie } from "@visx/shape"
import { Group } from "@visx/group"
import { useTransition, animated, to } from "@react-spring/web"
import { useEffect, useState } from "react"

const sampledata = [
  { label: "Chrome", usage: 60, color: "#4285F4", iconClass: "devicon-chrome-plain colored" },
  { label: "Safari", usage: 20, color: "#000000", iconClass: "devicon-safari-plain colored" },
  { label: "FireFox", usage: 10, color: "#FF7139", iconClass: "devicon-firefox-plain colored" },
]

const getUsage = (d: any) => d.usage

function AnimatedArcs({ arcs, path }: { arcs: any[]; path: any }) {
  //useTransitionで状態定義
  const transitions = useTransition(arcs, {
    from: { startAngle: 0, endAngle: 0, opacity: 0 },
    enter: (arc) => ({
      startAngle: arc.startAngle,
      endAngle: arc.endAngle,
      opacity: 1,
    }),
    update: (arc) => ({
      startAngle: arc.startAngle,
      endAngle: arc.endAngle,
      opacity: 1,
    }),
    keys: (arc) => arc.data.label

  })


  return (

    <>
      {transitions((props, arc) => {
        const [centroidX, centroidY] = path.centroid(arc)
        const hasSpace = arc.endAngle - arc.startAngle > 0.2
        return (
          <animated.path
            d={to(
              [props.startAngle, props.endAngle],
              (startAngle, endAngle) => path({ ...arc, startAngle, endAngle })
            )}
            fill={arc.data.color}
            stroke="white"
            strokeWidth={2}
            style={{ opacity: props.opacity }}
          />


        )
      }
      )
      }
    </>
  )
}


export default function SkillChart({ width = 400, height = 400 }) {

  const centerX = width / 2
  const centerY = height / 2
  const radius = Math.min(width, height) / 2
  const dounutThickness = 80

  const [data, setData] = useState<any[]>([])

  //読み込み時にセット
  useEffect(() => {
    setData(sampledata)
  }, [])

  return (
    <svg width={width} height={height}>
      <Group top={centerY} left={centerX}>
        <Pie
          data={data}
          pieValue={getUsage}
          outerRadius={radius}                     // 外側の半径
          innerRadius={radius - dounutThickness}    // 内側の半径（★ここがドーナツの要！）
        >
          {/* 4. 計算された角度データ(arcs)を元に、SVGの図形(path)を描画する */}
          {(pie) => <AnimatedArcs arcs={pie.arcs} path={pie.path} />}
        </Pie>
      </Group>
    </svg>
  )
}

