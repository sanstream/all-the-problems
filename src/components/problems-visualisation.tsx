import worldProblems, { WorldProblem } from "@/data/problems"
import { arc } from "d3-shape"
import { css } from "../../styled-system/css"

type AreaDimensions = {
  height: number,
  width: number,
}

type ProblemVisualizationProps = {
  areaSize: AreaDimensions,
  connectedWorldProblems: Map<string, WorldProblem>
}

const fullCircle = Math.PI * 2 // in radians
const sliceEdgeWidth = 8 * 1
const sliceEdgeSpacing = 0.08 // radians
const ProblemsVisualization:FC<React.HTMLAttributes<HTMLElement>> = ({areaSize, connectedWorldProblems}: ProblemVisualizationProps) => {
  const problemsAsArray = [...connectedWorldProblems.values()]
  const computeArc = arc()
    .innerRadius(areaSize.width / 2 - sliceEdgeWidth)
    .outerRadius(areaSize.width / 2)
    .padAngle(sliceEdgeSpacing)
    // .startAngle(0)
    // .endAngle(fullCircle)
  const computeDimsForArcSection = (index:number) => {
    return computeArc({
      startAngle: (index / connectedWorldProblems.size) * fullCircle,
      endAngle: ((index + 1) / connectedWorldProblems.size) * fullCircle,
    })
  }

  return <svg viewBox={`-${areaSize.width/2} -${areaSize.height/2} ${areaSize.width} ${areaSize.height}`}>
    {problemsAsArray.map((worldProblem, index) => (
      <path key={worldProblem.id}
        d={computeDimsForArcSection(index)}
        className={css({
          fill: 'support.yellow'
        })}
      >
        <title>{worldProblem.id}</title>
      </path>
    ))}
  </svg>
}

export default ProblemsVisualization
