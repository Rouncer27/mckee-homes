import React from "react"
import styled from "styled-components"
import { B1Black, H1Navy, H3Grey, standardWrapper } from "../../styles/helpers"

const ContentSimpleTitleSub = ({ data }) => {
  return (
    <StyledSection>
      <div className="wrapper">
        <div className="titles">
          <h2>{data.title}</h2>
          <h3>{data.subTitle}</h3>
        </div>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  padding: 5rem 0;

  .wrapper {
    ${standardWrapper};
  }

  .titles {
    width: 100%;

    h2 {
      ${H3Grey};
      margin: 0;
    }

    h3 {
      ${H1Navy};
      margin: 0;
    }
  }

  .content {
    width: 100%;
    margin-top: 4rem;

    p {
      ${B1Black};
    }
  }
`

export default ContentSimpleTitleSub
