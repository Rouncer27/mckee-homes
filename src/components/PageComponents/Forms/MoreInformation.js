import React from "react"
import styled from "styled-components"
import {
  B1White,
  colors,
  H2White,
  standardWrapper,
} from "../../../styles/helpers"

const MoreInformation = () => {
  return (
    <SectionStyled>
      <div className="wrapper">
        <div className="title">
          <h2>Send me more information</h2>
        </div>
        <div className="form">
          <p>
            Send us your contact information to learn more and we will be in
            touch to speak about{" "}
          </p>
        </div>
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.div`
  background-color: ${colors.colorPrimary};

  .wrapper {
    ${standardWrapper};
  }

  .title {
    width: 100%;
    border-bottom: solid 0.2rem ${colors.white};
    text-align: center;

    h2 {
      ${H2White};
    }
  }

  .form {
    width: calc(100%);
    max-width: 90rem;
    margin: 0 auto;

    p {
      ${B1White};
    }
  }
`

export default MoreInformation
