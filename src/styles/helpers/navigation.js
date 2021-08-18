import { colors } from "./index"
import { fonts, fontSizer } from "./index"

export const Nav1Base = `
  ${fontSizer(1.4, 1.6, 76.8, 150, 1.8)};
  font-family: ${fonts.fontPrimary};
  font-weight: normal;
  font-stretch: condensed;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: normal;
  transition: all 0.3s ease;
  cursor: pointer;

  &:focus {
    box-shadow: 0 0 0 0.5rem ${colors.colorSecondary};
  }

  &:hover {
    color: ${colors.colorAccent};
  }
`
export const Nav1White = `
  ${Nav1Base};
  color: ${colors.white};
`

export const Nav1Slate = `
  ${Nav1Base};
  color: ${colors.colorShad};
`

export const Nav1Green = `
  ${Nav1Base};
  color: ${colors.colorSecondary};
`

export const Nav1Blue = `
  ${Nav1Base};
  color: ${colors.colorPrimary};
`

export const Nav2Base = `
  ${fontSizer(1.2, 1.2, 76.8, 150, 1.6)};
  font-family: ${fonts.fontPrimary};
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  transition: all 0.3s ease;
  cursor: pointer;

  &:focus {
    box-shadow: 0 0 0 0.5rem ${colors.colorSecondary};
  }

  &:hover {
    color: ${colors.colorTertiary};
  }
`

export const Nav2White = `
  ${Nav2Base};
  color: ${colors.white};
`
