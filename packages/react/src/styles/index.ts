import { createStitches, defaultThemeMap } from '@stitches/react'
import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
} from '@bfay/tokens'

export const {
  css,
  getCssText,
  globalCss,
  keyframes,
  theme,
  config,
  createTheme,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },

  theme: {
    colors,
    fontSizes,
    fontWeights,
    radii,
    space,
    lineHeights,
    fonts,
  },
})
