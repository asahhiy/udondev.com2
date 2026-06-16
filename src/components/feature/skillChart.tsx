"use client"
import { Pie } from "@visx/shape"
import { Group } from "@visx/group"
import { useTransition, animated, to } from "@react-spring/web"
import { useEffect, useState } from "react"

const sampledata = [
  { label: "Swift", usage: 60, color: "#4285F4", iconClass: "devicon-swift-plain colored" },
  { label: "", usage: 20, color: "#000000", iconClass: "devicon-typescript-plain colored" },
  { label: "Golang", usage: 10, color: "#FF7139", iconClass: "devicon-go-plain colored" },
]

const getUsage = (d: any) => d.usage

function AnimatedArcs({ arcs, path }: { arcs: any[]; path: any }) {
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
        // ★ ここが超重要ポイント1：このピースの「ど真ん中の座標」を取得する
        const [centroidX, centroidY] = path.centroid(arc)

        // ピースが小さすぎる場合にアイコンを隠すための判定（オプション）
        const hasSpace = arc.endAngle - arc.startAngle > 0.2

        return (
          <g key={arc.data.label}>
            {/* 1. 扇形の描画（ここは変更なし） */}
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

            {/* 2. アイコンとテキストの描画 */}
            {/* ★ ここが超重要ポイント2：SVG内にHTMLを入れるための foreignObject */}
            {hasSpace && (
              <animated.foreignObject
                // xとyの座標を、要素の幅・高さの半分だけズラして「ど真ん中」に合わせる
                x={centroidX - 30}
                y={centroidY - 30}
                width={60}
                height={60}
                style={{ opacity: props.opacity, pointerEvents: "none" }}
              >
                {/* ここから下は普通のTailwindを使ったHTMLが書けます！ */}
                <div className="flex flex-col items-center justify-center w-full h-full leading-none">

                  {/* Deviconsのアイコン */}
                  {/* 文字色を白にして、影をつけて読みやすくしています */}
                  <i
                    className={`${arc.data.iconClass} text-2xl text-white drop-shadow-md`}
                    style={{ color: "white" }} // Deviconのcoloredを上書きして白一色にする場合
                  ></i>
                  <span className="text-creamwhite font-pathway drop-shadow-md">
                    {arc.data.label}
                  </span>

                  {/* 数値テキスト */}
                  <span className="text-xs font-bold text-white drop-shadow-md mt-1">
                    {arc.data.usage}%
                  </span>

                </div>
              </animated.foreignObject>
            )}
          </g>
        )
      })}
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

