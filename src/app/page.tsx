import EmphasizedText from "@/components/highlighted-text"
import { css } from "../../styled-system/css"
import { center, flex } from "../../styled-system/patterns"
import Link from "next/link"
import AtpButton from "@/components/link-button"
import ButtonLink from "@/components/button-link"

export default function Home() {
  return (
    <div
      className={`${center({
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        height: "100%",
        gap: "16",
      })}`}
    >
      <h1
        className={css({
          textStyle: "heroHeading",
          color: "page.textColor",
          fontSize: {
            mdToLg: "4xl",
            lg: "6xl",
            xlTo2xl: "8xl",
          },
        })}
      >
        <EmphasizedText>All</EmphasizedText> the&nbsp;
        <EmphasizedText>problems</EmphasizedText> <br /> in the&nbsp;
        <EmphasizedText>world</EmphasizedText>
      </h1>
      <p
        className={css({
          maxWidth: "xl",
          textStyle: "heroBody",
          fontSize: {
            lg: "1xl",
            xlTo2xl: "2xl",
          },
        })}
      >
        All the world&apos;s major problems are connected. Problems like{" "}
        <EmphasizedText>Hunger</EmphasizedText>,{" "}
        <EmphasizedText>Climate Change</EmphasizedText> and{" "}
        <EmphasizedText>Epidemics</EmphasizedText> do not exist on their own,
        but affect each other in sometimes unexpected ways.
        <br />
        <br />I hope that this can show you how doing something can affect many
        things, for the better.
      </p>

      <ButtonLink href="/story/0">Go to the visualization</ButtonLink>
    </div>
  )
}
