import React from "react"
import styled from "styled-components"
import { B1Grey, medWrapper, colors } from "../../styles/helpers"

const RelatedPosts = () => {
  return (
    <StyledSection>
      <div className="wrapper">
        <div className="title">
          <h2>What's New In This Community</h2>
        </div>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  .wrapper {
    ${medWrapper};
  }

  .title {
    width: 100%;
    margin-bottom: 3rem;
    padding-top: 5rem;
    border-bottom: 0.25rem solid ${colors.colorTertiary};

    h2 {
      ${B1Grey};
      margin: 0;
      text-transform: uppercase;
    }
  }
`

export default RelatedPosts
