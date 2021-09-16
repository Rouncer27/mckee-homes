import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { B1Black, H1Navy } from "../../styles/helpers"

const HeroOne = ({ data }) => {
  const imageDisplay = getImage(
    data.backgroundImage.localFile.childImageSharp.gatsbyImageData
  )
  const imageAlt = data.backgroundImage.altText
  return (
    <HeroOneSection>
      <div className="hero-image">
        <GatsbyImage
          image={imageDisplay}
          alt={imageAlt}
          layout="fullWidth"
          formats={["auto", "webp", "avif"]}
        />
      </div>
      <div className="hero-content">
        <div className="hero-content__inner">
          <div className="title">
            <h2>{data.title}</h2>
          </div>
          <div dangerouslySetInnerHTML={{ __html: data.content }} />
        </div>
      </div>
    </HeroOneSection>
  )
}

const HeroOneSection = styled.section`
  position: relative;
  height: 50rem;

  @media (min-width: 768px) {
    height: 60rem;
  }

  @media (min-width: 1025px) {
    height: 65rem;
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

      img,
      picture {
      }
    }
  }

  .hero-content {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 5rem 3rem;
    background-color: rgba(255, 255, 255, 0.9);

    @media (min-width: 768px) {
      width: 60rem;
      padding: 5rem 7.5rem 5rem 10rem;
    }

    .title {
      h2 {
        ${H1Navy};
        margin: 0;
        margin-bottom: 1.5rem;
      }
    }

    p {
      ${B1Black};
      margin: 0;
    }
  }
`

export default HeroOne
