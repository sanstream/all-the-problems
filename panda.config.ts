import { defineConfig } from "@pandacss/dev"

export default defineConfig({
    // Whether to use css reset
    preflight: true,
    
    // Where to look for your css declarations
    include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

    // Files to exclude
    exclude: [],

    // Useful for theme customization
    theme: {
      extend: {
        tokens: {
          colors: {
            neutral: {
              100: {
                value: '#D5CEE3',
              },
              200: {
                value: '#BEB1D7',
              },
              300: {
                value: '#8774AC',
              },
              400: {
                value: '#685592',
              },
              500: {
                value: '#3B2E55',
              },
              600: {
                value: '#1D152E',
              },
              700: {
                value: '#0F091B',
              },
            },
            support: {
              red: { value:'#ED351C', },
              yellow: { value:'#F1B51A', },
              green: { value:'#B7EE19', },
              blue: { value:'#327BED', },
            },
          },
          sizes: {
            base: {value: '8px'},
          },
          fonts: {
            montserrat: {
              value: 'var(--font-montserrat), sans-serif',
            }
          }
        },
        semanticTokens: {
          colors: {
            page: {
              backgroundColor: {
                value: {
                  _dark: '{colors.neutral.700}',
                  _light: '{colors.neutral.100}',
                },
              },
              textColor: {
                value: {
                  _dark: '{colors.neutral.100}',
                  _light: '{colors.neutral.700}',
                },
              },
              headingHighlightColor: {
                value: '{colors.support.yellow}',
              },
            },
          },
          spacing: {
            body: {
              value: '{tokens.sizes.base}',
            }
          },
        },
        textStyles: {
          body: {
            value: {
              fontFamily: '{fonts.montserrat}',
              fontWeight: '400',
              fontSize: '16px',
              lineHeight: '1.4em',
              letterSpacing: '0',
              textDecoration: 'None',
              textTransform: 'None'
            }
          },
          standardHeading: {
            value: {
              fontFamily: '{fonts.montserrat}',
              fontWeight: '600',
              fontSize: '20px',
              lineHeight: '0.9em',
              letterSpacing: '0',
              textDecoration: 'None',
              textTransform: 'uppercase'
            }
          },
          heroBody: {
            value: {
              fontFamily: '{fonts.montserrat}',
              fontWeight: '400',
              fontSize: '16px',
              lineHeight: '1.4em',
              letterSpacing: '0',
              textDecoration: 'None',
              textTransform: 'None'
            }
          },
          heroHeading: {
            value: {
              fontFamily: '{fonts.montserrat}',
              fontWeight: '600',
              fontSize: '20px',
              lineHeight: '0.9em',
              letterSpacing: '0',
              textDecoration: 'None',
              textTransform: 'uppercase'
            }
          }
        }
      }
    },

    // The output directory for your css system
    outdir: "styled-system",
})