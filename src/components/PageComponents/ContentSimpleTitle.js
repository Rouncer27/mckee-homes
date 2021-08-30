import React from "react"
import styled from "styled-components"
import { B1Black, colors, H2Black, standardWrapper } from "../../styles/helpers"

const ContentSimpleTitle = ({ data }) => {
  return (
    <StyledSection bgcolor={data.backgroundColour}>
      <div className="wrapper">
        <div className="title">
          <h2>{data.title}</h2>
        </div>
        <div dangerouslySetInnerHTML={{ __html: data.content }} />
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  background-color: ${props =>
    props.bgcolor ? colors.colorTertiary : "transparent"};

  .wrapper {
    ${standardWrapper};
    max-width: 75rem !important;
  }

  .title {
    width: 100%;

    h2 {
      ${H2Black};
    }
  }

  p {
    ${B1Black};
  }
`

export default ContentSimpleTitle
