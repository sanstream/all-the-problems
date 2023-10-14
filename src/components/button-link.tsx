"use client"
import Link, { LinkProps } from "next/link"
import { FC, ReactNode } from "react"
import { css } from "../../styled-system/css"

type ButtonLinkProps = {
  children: ReactNode
} & LinkProps

const ButtonLink = ({ children, href }: ButtonLinkProps) => {
  return (
    <Link
      className={css({
        backgroundColor: "support.yellow",
        display: "inline-block",
        color: "neutral.700",
        textStyle: "heroBody",
        paddingX: "4",
        borderRadius: "sm",
        height: "2.5rem",
        lineHeight: "2.5rem",
      })}
      href={href}
    >
      {children}
    </Link>
  )
}

export default ButtonLink
