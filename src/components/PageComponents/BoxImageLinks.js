import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { H2Grey, medWrapper } from "../../styles/helpers"

const BoxImageLinks = ({ data }) => {
  return (
    <StyledSection>
      <div className="box-image-wrapper">
        <div className="box-image-title">
          <h2>{data.sectionTitle}</h2>
        </div>
      </div>
    </StyledSection>
  )
}

export default BoxImageLinks

const StyledSection = styled.section`
  .box-image-wrapper {
    ${medWrapper};
  }

  .box-image-title {
    width: 100%;
    text-align: center;

    h2 {
      ${H2Grey};
    }
  }
`
