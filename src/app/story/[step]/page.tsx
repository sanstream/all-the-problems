import ProblemsVisualization from "@/components/problems-visualisation";
import worldProblems from "@/data/problems";
import { css } from "../../../../styled-system/css";
import { hstack } from "../../../../styled-system/patterns";
import EmphasizedText from "@/components/highlighted-text";
import Link from "next/link";

export default function DefaultStory() {
  return (
    <>
      <header className={css({
          paddingY: 'sectionPart',
          borderBottomColor: 'support.yellow',
          borderBottomWidth: '1px',
          borderBottomStyle: 'solid',
          width: '100%',
        })}>
        <Link href="/">
          <h1 className={css({
            textStyle: 'standardHeading',
          })}>
            <EmphasizedText>
            All
          </EmphasizedText> the&nbsp;
          <EmphasizedText>
          problems</EmphasizedText> in the&nbsp;
          <EmphasizedText>
          world
          </EmphasizedText>
          </h1>
          </Link>
      </header>
      <figure className={`${css({
          width: '100%',
        })}
        ${hstack({
          gap:'pagePart'
        })}`}>
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
