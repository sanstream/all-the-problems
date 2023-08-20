import ProblemsVisualization from "@/components/problems-visualisation";
import worldProblems from "@/data/problems";
import { css } from "../../../../styled-system/css";

export default function DefaultStory() {
  return (
    <>
      <header className={css({
          paddingY: '2',
          borderBottomColor: 'color.support.yellow',
          borderBottomWidth: '1px',
          borderBottomStyle: 'solid'
        })}>
        <h1 className={css({
          textStyle: 'standardHeading',
        })}>All the problems in the worlds</h1>
      </header>
      <figure>
        <ProblemsVisualization
          areaSize={{
            height: 340,
            width: 340,
          }}
          connectedWorldProblems={worldProblems}
        />
        <figcaption>
        <p>You can explore the visualization further by clicking on any of the major problems.</p>
        </figcaption>
      </figure>
    </>
  )
}
