import { css } from "styled-components"
import { colors, Nav1Blue } from "../../../styles/helpers"

const radioField = css`
  width: 100%;
  margin: 1rem auto;
  padding: 1rem 0;

  label {
    ${Nav1Blue};
    display: block;
    width: 100%;
    line-height: 1.5;
    cursor: pointer;

    &:hover {
      color: ${colors.colorPrimary};
      cursor: initial;
    }

    .error-message {
      display: none;
    }

    .error-active {
      display: block;
      margin-bottom: 0.75rem;
      color: red;
    }

    input {
      display: inline-block;
      margin-right: 2.5rem;
      cursor: pointer;
    }
  }
`

export default radioField
