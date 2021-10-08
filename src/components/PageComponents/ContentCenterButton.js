import { Link } from "@reach/router"
import React from "react"
import styled from "styled-components"
import {
  B1Black,
  Btn1Grey,
  H1Navy,
  standardWrapper,
} from "../../styles/helpers"

const ContentCenterButton = ({ data }) => {
  return (
    <StyedSection>
      <div className="wrapper">
        <div className="title">
          <h2>{data.title}</h2>
        </div>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
        <div className="button">
          <Link to={`/${data.buttonSlug}`}>{data.buttonText}</Link>
        </div>

        <div
          className="content-bottom"
          dangerouslySetInnerHTML={{ __html: data.bottomContent }}
        />
      </div>
    </StyedSection>
  )
}

const StyedSection = styled.section`
  .wrapper {
    ${standardWrapper};
    text-align: center;
  }

  .title {
    width: 100%;

    h2 {
      ${H1Navy};
    }
  }

  .content {
    width: 100%;

    p {
      ${B1Black};
    }
  }

  .button {
    width: 100%;

    a {
      ${Btn1Grey};
    }
  }

  .content-bottom {
    width: 100%;
    margin-top: 3rem;

    p {
      ${B1Black};
    }
  }
`

export default ContentCenterButton
