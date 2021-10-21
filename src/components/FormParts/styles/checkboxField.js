import { css } from "styled-components"
import { colors, Nav1Blue } from "../../../styles/helpers"

const checkboxField = css`
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
      color: red;
      padding-bottom: 0.75rem;
    }

    input {
      display: inline-block;
      margin-right: 2.5rem;
      cursor: pointer;
    }
  }
`

export default checkboxField
