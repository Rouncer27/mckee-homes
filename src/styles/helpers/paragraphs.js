import { colors } from "./index"
import { fonts, fontSizer } from "./index"
import { css } from "styled-components"

// Body copy ONE //
export const B1Base = css`
  ${fontSizer(1.6, 2, 76.8, 150, 1.8)};
  font-family: ${fonts.fontPrimary};
  font-weight: normal;
  font-stretch: condensed;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
`

export const B1Slate = css`
  ${B1Base};
  color: ${colors.colorShad};
`

export const B1White = css`
  ${B1Base};
  color: ${colors.white};
`

// Body copy TWO //
export const B2Base = css`
  ${fontSizer(1.4, 1.6, 76.8, 150, 1.4)};
  font-family: ${fonts.fontPrimary};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
`
