import { colors } from "./index"
import { fontSizer } from "./index"
import { css } from "styled-components"
import fonts from "./fonts"

const Btn1Base = css`
  ${fontSizer(1.6, 1.8, 76.8, 150, 1.8)};
  display: inline-block;
  padding: 0.5rem 2.5rem;
  border: none;
  border-radius: 0.25rem;
  transition: all 0.3s ease;
  font-family: ${fonts.fontPrimary};
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.14;
  letter-spacing: normal;
  text-align: center;
  text-transform: uppercase;
  outline: none;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const Btn1Green = css`
  ${Btn1Base};
  background: ${colors.white};
  border: solid 0.2rem ${colors.colorSecondary};
  color: ${colors.colorSecondary};

  &:hover {
    background: ${colors.colorSecondary};
    color: ${colors.white};
  }

  &:focus {
    outline: 0.4rem solid #003b49;
    transition: all 0.35s ease-in-out;
  }

  &:disabled {
    &:hover {
      background: ${colors.colorTertiary};
      color: ${colors.colorPrimary};
    }
  }
`
