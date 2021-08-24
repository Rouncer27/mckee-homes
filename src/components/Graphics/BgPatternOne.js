import React from "react"
import BGImg from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const getData = graphql`
  {
    image: file(relativePath: { eq: "background-pattern-one.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const BgPatternOne = () => {
  const data = useStaticQuery(getData)
  const heroImage = data.image.childImageSharp.fluid
  return (
    <BgPatternOneStyled>
      <BGImg tag="div" fluid={heroImage} />
    </BgPatternOneStyled>
  )
}

const BgPatternOneStyled = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 5;

  div {
    position: absolute !important;
    width: 100% !important;
    height: 100% !important;

    &::before,
    &::after {
      background-position: center top !important;
      background-repeat: repeat !important;
      background-size: calc(1196px / 3) calc(1122px / 3) !important;
    }
  }
`

export default BgPatternOne
