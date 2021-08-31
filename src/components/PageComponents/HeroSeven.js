import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { B1Black, H1Navy, H3Grey, medWrapper } from "../../styles/helpers"

const HeroSeven = ({ data }) => {
  const imageDisplay = getImage(
    data.image.localFile.childImageSharp.gatsbyImageData
  )
  const imageAlt = data.image.altText
  return (
    <HeroSevenStyled>
      <div className="hero-Wrap">
        <div className="hero-image">
          <GatsbyImage
            image={imageDisplay}
            alt={imageAlt}
            layout="fullWidth"
            formats={["auto", "webp", "avif"]}
          />
        </div>
      </div>
      <div className="wrapper">
        <div className="hero-content">
          <div className="title">
            <h2>{data.topTitle}</h2>
            <h3>{data.mainTitle}</h3>
          </div>
          <div dangerouslySetInnerHTML={{ __html: data.content }} />
        </div>
      </div>
    </HeroSevenStyled>
  )
}

const HeroSevenStyled = styled.div`
  .hero-Wrap {
    position: relative;
    height: 30rem;

    @media (min-width: 768px) {
      height: 40rem;
    }

    @media (min-width: 1025px) {
      height: 47rem;
    }
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

  .wrapper {
    ${medWrapper};
  }

  .hero-content {
    padding: 5rem 2.5rem;

    h2 {
      ${H3Grey};
    }

    h3 {
      ${H1Navy};
    }

    p {
      ${B1Black};
    }
  }
`

export default HeroSeven
