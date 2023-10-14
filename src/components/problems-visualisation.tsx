import worldProblems, {
  WorldProblem,
  WorldProblemEffect,
} from "@/data/problems"
import { arc, curveBundle, lineRadial } from "d3-shape"
import { css } from "../../styled-system/css"
import { FC } from "react"

type AreaDimensions = {
  height: number
  width: number
}

/** Decorating the WorldProblem type with some utility props
 * to help with calculations related to the visualization.
 */
type DecoratedWorldProblem = {
  incomingCauses: Set<WorldProblemEffect>
} & WorldProblem

type ProblemVisualizationProps = {
  areaSize: AreaDimensions
  connectedWorldProblems: Map<string, WorldProblem>
} & React.HTMLAttributes<HTMLElement>

const fullCircle = Math.PI * 2 // in radians
const sliceEdgeWidth = 8 * 0.5
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

const ProblemsVisualization: FC<ProblemVisualizationProps> = ({
  areaSize,
  connectedWorldProblems,
}) => {
  const problemsAsArray = [...connectedWorldProblems.values()]
  const smallestDim =
    areaSize.width >= areaSize.height ? areaSize.height : areaSize.width
  const vizRadius = smallestDim / 2
  const innerRadiusWithOffset = vizRadius - sliceEdgeWidth - 8

  const computeArc = arc()
    .innerRadius(vizRadius - sliceEdgeWidth)
    .outerRadius(vizRadius)
    .padAngle(sliceEdgeSpacing)
  const outerRadiusForSubArc = vizRadius - sliceEdgeWidth - sliceEdgeWidth / 2
  const computeSubArc = arc()
    .innerRadius(outerRadiusForSubArc - sliceEdgeWidth / 2)
    .outerRadius(outerRadiusForSubArc)
    .padAngle(sliceEdgeSpacing)

  const computeDimsForArcSection = (index: number) => {
    // @ts-ignore ts validation logic does not fully apply, even though the parameter is correct
    return computeArc({
      startAngle: (index / connectedWorldProblems.size) * fullCircle,
      endAngle: ((index + 1) / connectedWorldProblems.size) * fullCircle,
    })
  }
  const computeDimsForSubArcSection = (index: number, part: number) => {
    if (part === 1) {
      // @ts-ignore ts validation logic does not fully apply, even though the parameter is correct
      return computeSubArc({
        startAngle: (index / connectedWorldProblems.size) * fullCircle,
        endAngle: ((index + 0.55) / connectedWorldProblems.size) * fullCircle,
      })
    }
    // @ts-ignore ts validation logic does not fully apply, even though the parameter is correct
    return computeSubArc({
      startAngle: ((index + 0.45) / connectedWorldProblems.size) * fullCircle,
      endAngle: ((index + 1) / connectedWorldProblems.size) * fullCircle,
    })
  }

  const computeDimsForLine = (sourceIndex: number, targetIndex: number) => {
    const alignmentCorrection = 0.5
    const lastIndex = connectedWorldProblems.size - 1
    let indexDiff = (targetIndex + sourceIndex) / 2
    if (
      (sourceIndex === 0 && targetIndex === lastIndex) ||
      (sourceIndex === lastIndex && targetIndex === 0)
    ) {
      indexDiff = -0.5
    }

    return computeLine([
      [
        ((sourceIndex + alignmentCorrection) / connectedWorldProblems.size) *
          fullCircle,
        innerRadiusWithOffset,
      ],
      // define a coordinate to force a inward curve:
      [
        ((indexDiff + alignmentCorrection) / connectedWorldProblems.size) *
          fullCircle,
        innerRadiusWithOffset / 4,
      ],
      [
        ((targetIndex + alignmentCorrection) / connectedWorldProblems.size) *
          fullCircle,
        innerRadiusWithOffset,
      ],
    ])
  }

  return (
    <svg
      viewBox={`-${areaSize.width / 2} -${areaSize.height / 2} ${
        areaSize.width
      } ${areaSize.height}`}
    >
      {problemsAsArray.map((worldProblem, index) => (
        <>
          <path
            key={worldProblem.id}
            d={computeDimsForArcSection(index)}
            className={css({
              fill: "support.yellow",
            })}
          >
            <title>{worldProblem.id}</title>
          </path>
          <path
            key={worldProblem.id}
            d={computeDimsForSubArcSection(index, 1) || undefined}
            className={css({
              fill: "support.red",
            })}
          />
          <path
            key={worldProblem.id}
            d={computeDimsForSubArcSection(index, 2) || undefined}
            className={css({
              fill: "support.blue",
            })}
          />
          <g key={`${worldProblem.id}-connectors`}>
            {Array.from(worldProblem.causes).map((cause, causeIndex) => (
              <path
                key={cause.id}
                className={css({
                  stroke: "support.yellow",
                  // @ts-ignore
                  strokeWidth: "1px",
                  fill: "none",
                })}
                d={
                  computeDimsForLine(
                    index,
                    problemsAsArray.findIndex(
                      problem => problem.id === cause.affects.id
                    )
                  ) || undefined
                }
              />
            ))}
          </g>
        </>
      ))}
    </svg>
  )
}

export default ProblemsVisualization
