const tokens = {
  "colors.neutral.100": {
    "value": "#D5CEE3",
    "variable": "var(--colors-neutral-100)"
  },
  "colors.neutral.200": {
    "value": "#B5ABC9",
    "variable": "var(--colors-neutral-200)"
  },
  "colors.neutral.300": {
    "value": "#897AA7",
    "variable": "var(--colors-neutral-300)"
  },
  "colors.neutral.400": {
    "value": "#716192",
    "variable": "var(--colors-neutral-400)"
  },
  "colors.neutral.500": {
    "value": "#4D4261",
    "variable": "var(--colors-neutral-500)"
  },
  "colors.neutral.600": {
    "value": "#352E42",
    "variable": "var(--colors-neutral-600)"
  },
  "colors.neutral.700": {
    "value": "#292433",
    "variable": "var(--colors-neutral-700)"
  },
  "colors.support.red": {
    "value": "#ED351C",
    "variable": "var(--colors-support-red)"
  },
  "colors.support.yellow": {
    "value": "#F1B51A",
    "variable": "var(--colors-support-yellow)"
  },
  "colors.support.green": {
    "value": "#B7EE19",
    "variable": "var(--colors-support-green)"
  },
  "colors.support.blue": {
    "value": "#327BED",
    "variable": "var(--colors-support-blue)"
  },
  "sizes.base": {
    "value": "8px",
    "variable": "var(--sizes-base)"
  },
  "sizes.breakpoint-sm": {
    "value": "640px",
    "variable": "var(--sizes-breakpoint-sm)"
  },
  "sizes.breakpoint-md": {
    "value": "768px",
    "variable": "var(--sizes-breakpoint-md)"
  },
  "sizes.breakpoint-lg": {
    "value": "1024px",
    "variable": "var(--sizes-breakpoint-lg)"
  },
  "sizes.breakpoint-xl": {
    "value": "1280px",
    "variable": "var(--sizes-breakpoint-xl)"
  },
  "sizes.breakpoint-2xl": {
    "value": "1536px",
    "variable": "var(--sizes-breakpoint-2xl)"
  },
  "fonts.montserrat": {
    "value": "var(--font-montserrat), sans-serif",
    "variable": "var(--fonts-montserrat)"
  },
  "breakpoints.sm": {
    "value": "640px",
    "variable": "var(--breakpoints-sm)"
  },
  "breakpoints.md": {
    "value": "768px",
    "variable": "var(--breakpoints-md)"
  },
  "breakpoints.lg": {
    "value": "1024px",
    "variable": "var(--breakpoints-lg)"
  },
  "breakpoints.xl": {
    "value": "1280px",
    "variable": "var(--breakpoints-xl)"
  },
  "breakpoints.2xl": {
    "value": "1536px",
    "variable": "var(--breakpoints-2xl)"
  },
  "colors.page.backgroundColor": {
    "value": "var(--colors-page-background-color)",
    "variable": "var(--colors-page-background-color)"
  },
  "colors.page.textColor": {
    "value": "var(--colors-page-text-color)",
    "variable": "var(--colors-page-text-color)"
  },
  "colors.page.headingHighlightColor": {
    "value": "var(--colors-page-heading-highlight-color)",
    "variable": "var(--colors-page-heading-highlight-color)"
  },
  "spacing.body": {
    "value": "var(--spacing-body)",
    "variable": "var(--spacing-body)"
  },
  "spacing.-body": {
    "value": "var(--spacing-body)",
    "variable": "var(--spacing-body)"
  },
  "colors.colorPalette.100": {
    "value": "var(--colors-color-palette-100)",
    "variable": "var(--colors-color-palette-100)"
  },
  "colors.colorPalette.200": {
    "value": "var(--colors-color-palette-200)",
    "variable": "var(--colors-color-palette-200)"
  },
  "colors.colorPalette.300": {
    "value": "var(--colors-color-palette-300)",
    "variable": "var(--colors-color-palette-300)"
  },
  "colors.colorPalette.400": {
    "value": "var(--colors-color-palette-400)",
    "variable": "var(--colors-color-palette-400)"
  },
  "colors.colorPalette.500": {
    "value": "var(--colors-color-palette-500)",
    "variable": "var(--colors-color-palette-500)"
  },
  "colors.colorPalette.600": {
    "value": "var(--colors-color-palette-600)",
    "variable": "var(--colors-color-palette-600)"
  },
  "colors.colorPalette.700": {
    "value": "var(--colors-color-palette-700)",
    "variable": "var(--colors-color-palette-700)"
  },
  "colors.colorPalette.red": {
    "value": "var(--colors-color-palette-red)",
    "variable": "var(--colors-color-palette-red)"
  },
  "colors.colorPalette.yellow": {
    "value": "var(--colors-color-palette-yellow)",
    "variable": "var(--colors-color-palette-yellow)"
  },
  "colors.colorPalette.green": {
    "value": "var(--colors-color-palette-green)",
    "variable": "var(--colors-color-palette-green)"
  },
  "colors.colorPalette.blue": {
    "value": "var(--colors-color-palette-blue)",
    "variable": "var(--colors-color-palette-blue)"
  },
  "colors.colorPalette.backgroundColor": {
    "value": "var(--colors-color-palette-background-color)",
    "variable": "var(--colors-color-palette-background-color)"
  },
  "colors.colorPalette.textColor": {
    "value": "var(--colors-color-palette-text-color)",
    "variable": "var(--colors-color-palette-text-color)"
  },
  "colors.colorPalette.headingHighlightColor": {
    "value": "var(--colors-color-palette-heading-highlight-color)",
    "variable": "var(--colors-color-palette-heading-highlight-color)"
  }
}

export function token(path, fallback) {
  return tokens[path]?.value || fallback
}

function tokenVar(path, fallback) {
  return tokens[path]?.variable || fallback
}

token.var = tokenVar