import React from "react"
import styled from "styled-components"
import { B1Black, H2Black, medWrapper } from "../../styles/helpers"

const Intro = ({ data }) => {
  return (
    <SectionStyled>
      <div className="wrapper">
        <div className="title">
          <h1>{data.title}</h1>
        </div>
        <div className="content">
          <div dangerouslySetInnerHTML={{ __html: data.content }} />
        </div>
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  .wrapper {
    ${medWrapper};
  }

  .title {
    width: 100%;

    h1 {
      ${H2Black};
    }
  }

  .content {
    width: 100%;

    p {
      ${B1Black};
    }
  }
`

export default Intro
