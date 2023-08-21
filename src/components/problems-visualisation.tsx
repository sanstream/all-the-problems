import worldProblems, { WorldProblem } from "@/data/problems"
import { arc, curveBundle, lineRadial } from "d3-shape"
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

/** Generate a function that can generate path dims data from a set
 * of radial coordinates:
 */
const computeLine = lineRadial()
  /**
   * Defines how accurately the curve follows the coordinates
   * to lower the number the more relaxed the curve is and the
   * more it goes directly from point A to B.
   */
  .curve(curveBundle.beta(0.4))


const ProblemsVisualization:FC<React.HTMLAttributes<HTMLElement>> = ({areaSize, connectedWorldProblems}: ProblemVisualizationProps) => {
  const problemsAsArray = [...connectedWorldProblems.values()]
  const smallestDim = areaSize.width >=areaSize.height ? areaSize.height : areaSize.width
  const vizRadius = smallestDim / 2
  const innerRadiusWithOffset = vizRadius - sliceEdgeWidth - 8

  const computeArc = arc()
    .innerRadius(vizRadius - sliceEdgeWidth)
    .outerRadius(vizRadius)
    .padAngle(sliceEdgeSpacing)
  const computeDimsForArcSection = (index:number) => {
    return computeArc({
      startAngle: (index / connectedWorldProblems.size) * fullCircle,
      endAngle: ((index + 1) / connectedWorldProblems.size) * fullCircle,
    })
  }

const computeDimsForLine = (index:number, otherIndex:number) => {
  const alignmentCorrection = 0.5
  const lastIndex = connectedWorldProblems.size - 1
  let indexMean = (otherIndex + index) / 2
  if ((index === 0 && otherIndex === lastIndex) ||(index === lastIndex && otherIndex === 0)) {
    indexMean = -0.5
  }

  return computeLine([
    [
      ((index + alignmentCorrection) / connectedWorldProblems.size) * fullCircle,
      innerRadiusWithOffset,
    ],
    // define a coordinate to force a inward curve:
    [
      ((indexMean + alignmentCorrection) / connectedWorldProblems.size) * fullCircle,
      innerRadiusWithOffset / 4,
    ],
    [
      ((otherIndex  + alignmentCorrection) / connectedWorldProblems.size) * fullCircle,
      innerRadiusWithOffset,
    ]])
}

  return <svg viewBox={`-${areaSize.width/2} -${areaSize.height/2} ${areaSize.width} ${areaSize.height}`}>
    {problemsAsArray.map((worldProblem, index) => (
      <>
        <path key={worldProblem.id}
          d={computeDimsForArcSection(index)}
          className={css({
            fill: 'support.yellow'
          })}
        >
          <title>{worldProblem.id}</title>
        </path>
        <g key={`${worldProblem.id}-connectors`}>
          {Array.from(worldProblem.causes).map(cause =>(
            <path
              key={cause.id}
              className={css({
                stroke: 'support.yellow',
                strokeWidth: '1px',
                fill: 'none',
              })}
              d={computeDimsForLine(index, problemsAsArray.findIndex(problem => problem.id === cause.affects.id))}
            />
          ))}
        </g>
      </>
    ))}
  </svg>
}

export default ProblemsVisualization
