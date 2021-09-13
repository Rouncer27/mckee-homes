import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

const Header = ({ hero }) => {
  const imageDisplay = getImage(hero.localFile.childImageSharp.gatsbyImageData)
  const imageAlt = hero.altText
  return (
    <DivStyled>
      <div className="hero-image">
        <GatsbyImage
          image={imageDisplay}
          alt={imageAlt}
          layout="fullWidth"
          formats={["auto", "webp", "avif"]}
        />
      </div>
    </DivStyled>
  )
}

const DivStyled = styled.div`
  position: relative;
  height: 40rem;

  @media (min-width: 768px) {
    height: 45rem;
  }

  @media (min-width: 1025px) {
    height: 47.5rem;
  }

  .hero-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 101%;
    height: 100%;

    .gatsby-image-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`

export default Header
