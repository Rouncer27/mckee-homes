import React from "react"
import BGImg from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const getData = graphql`
  {
    image: file(relativePath: { eq: "background-pattern-brick.png" }) {
      childImageSharp {
        fluid(maxWidth: 4000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const BgPatternBrick = () => {
  const data = useStaticQuery(getData)
  const heroImage = data.image.childImageSharp.fluid
  return (
    <BgPatternBrickStyled>
      <BGImg tag="div" fluid={heroImage} />
    </BgPatternBrickStyled>
  )
}

const BgPatternBrickStyled = styled.div`
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
      background-size: calc(4116px / 3) calc(1329px / 3) !important;
    }
  }
`

export default BgPatternBrick
