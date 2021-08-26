import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import {
  Btn1Grey,
  H2Black,
  H3Black,
  standardWrapper,
} from "../../styles/helpers"
import Wysiwyg from "./Wysiwyg"

const WysiwygButton = ({ data }) => {
  return (
    <SectionStyled>
      <div className="wrapper">
        <div className="title">
          <h2>{data.title}</h2>
        </div>
        <div className="side-title">
          <h3>{data.sideTitle}</h3>
        </div>
        <div className="content">
          <Wysiwyg data={{ wysiwyg: data.content }} />
        </div>
        <div className="button">
          <Link to={`/${data.buttonSlug}`}>{data.buttonText}</Link>
        </div>
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  .wrapper {
    ${standardWrapper};
    position: relative;
  }

  .title {
    width: 100%;

    h2 {
      ${H2Black};
    }
  }

  .side-title {
    position: absolute;
    top: 20rem;
    left: -5rem;
    transform-origin: center left;
    transform: rotate(-90deg);

    h3 {
      ${H3Black};
      text-transform: uppercase;
    }
  }

  .button {
    width: 100%;

    a {
      ${Btn1Grey};
    }
  }
`

export default WysiwygButton
