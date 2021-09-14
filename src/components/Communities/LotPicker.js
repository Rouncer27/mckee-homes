import React from "react"
import styled from "styled-components"
import { standardWrapper, H2Grey } from "../../styles/helpers"

const LotPicker = () => {
  return (
    <StyledSection>
      <div className="wrapper">
        <div className="title">
          <h2>Find your perfect lot</h2>
        </div>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  .wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .title {
    width: 100%;
    margin: 3.5rem auto;
    text-align: center;

    h2 {
      ${H2Grey};
      margin: 0;
    }
  }
`

export default LotPicker
