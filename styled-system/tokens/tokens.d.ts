/* eslint-disable */
export type Token = "colors.neutral.100" | "colors.neutral.200" | "colors.neutral.300" | "colors.neutral.400" | "colors.neutral.500" | "colors.neutral.600" | "colors.neutral.700" | "colors.support.red" | "colors.support.yellow" | "colors.support.green" | "colors.support.blue" | "sizes.base" | "sizes.breakpoint-sm" | "sizes.breakpoint-md" | "sizes.breakpoint-lg" | "sizes.breakpoint-xl" | "sizes.breakpoint-2xl" | "breakpoints.sm" | "breakpoints.md" | "breakpoints.lg" | "breakpoints.xl" | "breakpoints.2xl" | "colors.page.backgroundColor" | "colors.page.textColor" | "colors.page.headingHighlightColor" | "spacing.body" | "spacing.-body" | "colors.colorPalette.100" | "colors.colorPalette.200" | "colors.colorPalette.300" | "colors.colorPalette.400" | "colors.colorPalette.500" | "colors.colorPalette.600" | "colors.colorPalette.700" | "colors.colorPalette.red" | "colors.colorPalette.yellow" | "colors.colorPalette.green" | "colors.colorPalette.blue" | "colors.colorPalette.backgroundColor" | "colors.colorPalette.textColor" | "colors.colorPalette.headingHighlightColor"

export type ColorPalette = "neutral" | "support" | "page"

export type ColorToken = "neutral.100" | "neutral.200" | "neutral.300" | "neutral.400" | "neutral.500" | "neutral.600" | "neutral.700" | "support.red" | "support.yellow" | "support.green" | "support.blue" | "page.backgroundColor" | "page.textColor" | "page.headingHighlightColor" | "colorPalette.100" | "colorPalette.200" | "colorPalette.300" | "colorPalette.400" | "colorPalette.500" | "colorPalette.600" | "colorPalette.700" | "colorPalette.red" | "colorPalette.yellow" | "colorPalette.green" | "colorPalette.blue" | "colorPalette.backgroundColor" | "colorPalette.textColor" | "colorPalette.headingHighlightColor"

export type SizeToken = "base" | "breakpoint-sm" | "breakpoint-md" | "breakpoint-lg" | "breakpoint-xl" | "breakpoint-2xl"

export type BreakpointToken = "sm" | "md" | "lg" | "xl" | "2xl"

export type SpacingToken = "body" | "-body"

export type Tokens = {
		colors: ColorToken
		sizes: SizeToken
		breakpoints: BreakpointToken
		spacing: SpacingToken
} & { [token: string]: never }

export type TokenCategory = "zIndex" | "opacity" | "colors" | "fonts" | "fontSizes" | "fontWeights" | "lineHeights" | "letterSpacings" | "sizes" | "shadows" | "spacing" | "radii" | "borders" | "durations" | "easings" | "animations" | "blurs" | "gradients" | "breakpoints" | "assets"