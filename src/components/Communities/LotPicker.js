import React from "react"
import styled from "styled-components"
import { standardWrapper, H2Grey } from "../../styles/helpers"

const LotPicker = ({ lotPicker }) => {
  return (
    <StyledSection>
      <div className="wrapper">
        <div className="title">
          <h2>Find your perfect lot</h2>
        </div>
        <div
          className="lotpicker"
          dangerouslySetInnerHTML={{ __html: lotPicker }}
        />
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  .wrapper {
    ${standardWrapper};
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

  .lotpicker {
    width: 100%;
    height: 750px;

    #gmapdiv {
      width: 100%;
      height: 750px;
    }

    .map {
      width: 100%;
      height: 750px;
    }
  }
`

export default LotPicker
