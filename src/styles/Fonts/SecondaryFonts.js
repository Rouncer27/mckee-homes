import * as secondary from "./secondary"
import { css } from "styled-components"

const SecondaryFonts = css`
  @font-face {
    font-family: "Roboto Slab";
    font-style: normal;
    font-weight: 400;
    src: local(""), url("${secondary.WOFF2_4}") format("woff2"),
      url("${secondary.WOFF_4}") format("woff");
  }

  @font-face {
    font-family: "Roboto Slab";
    font-style: normal;
    font-weight: 700;
    src: local(""), url("${secondary.WOFF2_7}") format("woff2"),
      url("${secondary.WOFF_7}") format("woff");
  }
`

export default SecondaryFonts
