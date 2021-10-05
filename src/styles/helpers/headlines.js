import { colors } from "./index"
import { fonts, fontSizer } from "./index"
import { css } from "styled-components"

// Headline Styles #1 //
export const H1Base = css`
  ${fontSizer(2.8, 4.2, 76.8, 150, 3.0)};
  font-family: ${fonts.fontSecondary};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.23px;
`

export const H1Navy = css`
  ${H1Base};
  color: ${colors.colorPrimary};
`

export const H1Black = css`
  ${H1Base};
  color: ${colors.colorSecondary};
`

export const H1White = css`
  ${H1Base};
  color: ${colors.white};
`

// Headline Styles #2 //
export const H2Base = css`
  ${fontSizer(2.6, 3.5, 76.8, 150, 2.6)}
  font-family: ${fonts.fontSecondary};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
`

export const H2Navy = css`
  ${H2Base};
  color: ${colors.colorPrimary};
`
export const H2Grey = css`
  ${H2Base};
  color: ${colors.colorSecondary};
`

export const H2White = css`
  ${H2Base};
  color: ${colors.white};
`

export const H2Black = css`
  ${H2Base};
  color: ${colors.colorSecondary};
`

// Headline Styles #3 //
export const H3Base = css`
  ${fontSizer(2.2, 2.5, 76.8, 150, 2)}
  font-family: ${fonts.fontSecondary};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.45;
  letter-spacing: normal;
`
export const H3Navy = css`
  ${H3Base};
  color: ${colors.colorPrimary};
`
export const H3Grey = css`
  ${H3Base};
  color: ${colors.colorSecondary};
`
export const H3Black = css`
  ${H3Base};
  color: ${colors.black};
`

// Headline Styles #4 //
export const H4Base = css`
  ${fontSizer(2.2, 2.5, 76.8, 160, 2)};
  font-family: ${fonts.fontPrimary};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
`
export const H4Navy = css`
  ${H4Base};
  color: ${colors.colorPrimary};
`
export const H4Grey = css`
  ${H4Base};
  color: ${colors.colorSecondary};
`

export const H4White = css`
  ${H4Base};
  color: ${colors.white};
`

// Headline Styles #5 //
export const HCalloutBase = css`
  ${fontSizer(2.4, 3.4, 76.8, 160, 2.2)};
  font-family: ${fonts.fontSecondary};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.53;
  letter-spacing: normal;
`
// Headline Styles #6 //
export const HIntroBase = css`
  ${fontSizer(2, 2.2, 76.8, 160, 2)};
  font-family: ${fonts.fontPrimary};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.41;
  letter-spacing: normal;
`
