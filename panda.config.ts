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
      tokens: {
        colors: {
          neutral: {
            100: {
              value: '#D5CEE3',
            },
            200: {
              value: '#B5ABC9',
            },
            300: {
              value: '#897AA7',
            },
            400: {
              value: '#716192',
            },
            500: {
              value: '#4D4261',
            },
            600: {
              value: '#352E42',
            },
            700: {
              value: '#292433',
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
      extend: {
        textStyles: {
          body: {
            value: {
              fontFamily: '{fonts.montserrat}',
              fontWeight: '500',
              fontSize: '16',
              lineHeight: '1.4em',
              letterSpacing: '0',
              textDecoration: 'None',
              textTransform: 'None'
            }
          }
        }
      }
    },

    // The output directory for your css system
    outdir: "styled-system",
    
    
})