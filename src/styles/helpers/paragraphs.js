import { colors } from "./index"
import { fonts, fontSizer } from "./index"
import { css } from "styled-components"

// Body copy ONE //
export const B1Base = css`
  ${fontSizer(1.6, 2, 76.8, 150, 1.8)};
  font-family: ${fonts.fontPrimary};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
`

export const B1Black = css`
  ${B1Base};
  color: ${colors.black};
`

export const B1Grey = css`
  ${B1Base};
  color: ${colors.colorSecondary};
`

export const B1White = css`
  ${B1Base};
  color: ${colors.white};
`

export const B1Navy = css`
  ${B1Base};
  color: ${colors.colorPrimary};
`

// Body copy TWO //
export const B2Base = css`
  ${fontSizer(1.4, 1.6, 76.8, 150, 1.4)};
  font-family: ${fonts.fontPrimary};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.75;
  letter-spacing: normal;
`

export const B2Black = css`
  ${B2Base};
  color: ${colors.black};
`

export const B2Grey = css`
  ${B2Base};
  color: ${colors.colorSecondary};
`

export const B2White = css`
  ${B2Base};
  color: ${colors.white};
`
export const B2Navy = css`
  ${B2Base};
  color: ${colors.colorPrimary};
`
