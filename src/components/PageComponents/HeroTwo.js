import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { B1Black, Btn1Grey, H3Grey } from "../../styles/helpers"
import { Link } from "gatsby"

const HeroTwo = ({ data }) => {
  console.log(data)
  const imageDisplay = getImage(
    data.image.localFile.childImageSharp.gatsbyImageData
  )
  const imageAlt = data.image.altText
  return (
    <HeroTwoStyled>
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
          <div dangerouslySetInnerHTML={{ __html: data.content }} />
        </div>
        <div className="hero-content__link">
          <Link to={`/${data.buttonSlug}`}>{data.buttonText}</Link>
        </div>
      </div>
    </HeroTwoStyled>
  )
}

const HeroTwoStyled = styled.section`
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
    bottom: 12.5rem;
    right: 0;
    width: 60rem;

    &__inner {
      padding: 2.5rem 10rem 2.5rem 5rem;
      background-color: rgba(255, 255, 255, 0.7);
      p {
        ${H3Grey};
        margin: 0;
      }
    }

    &__link {
      margin-top: 1rem;

      a {
        ${Btn1Grey};
      }
    }
  }
`

export default HeroTwo
