import React from "react"
import styled from "styled-components"
import { B1Black, H3Navy, medWrapper } from "../../styles/helpers"

const SideBySideParagraphs = ({ data }) => {
  return (
    <StyledSection>
      <div className="wrapper">
        <div className="para-wrap left-para">
          <div>
            <h2>{data.titleLeft}</h2>
          </div>
          <div dangerouslySetInnerHTML={{ __html: data.contentLeft }} />
        </div>
        <div className="para-wrap right-para">
          <div>
            <h2>{data.titleRight}</h2>
          </div>
          <div dangerouslySetInnerHTML={{ __html: data.contentRight }} />
        </div>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  .wrapper {
    ${medWrapper};
  }

  .para-wrap {
    width: 100%;

    @media (min-width: 768px) {
      width: calc(50% - 6rem);
      margin: 2rem 3rem;
    }

    h2 {
      ${H3Navy};
    }

    p {
      ${B1Black};
    }
  }
`

export default SideBySideParagraphs
