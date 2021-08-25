import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Btn1GreyBlue, B1White, H2White } from "../../styles/helpers"
import { Link } from "gatsby"

const HeroThree = ({ data }) => {
  console.log("HeroThree: ", data)
  const imageDisplay = getImage(
    data.image.localFile.childImageSharp.gatsbyImageData
  )
  const imageAlt = data.image.altText
  return (
    <HeroThreeStyled>
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
          <div className="hero-content__title">
            <h2>{data.title}</h2>
          </div>
          <div dangerouslySetInnerHTML={{ __html: data.content }} />
          <div className="hero-content__link">
            <Link to={`/${data.buttonSlug}`}>{data.buttonText}</Link>
          </div>
        </div>
      </div>
      <div className="hero-overlay" />
    </HeroThreeStyled>
  )
}

const HeroThreeStyled = styled.section`
  position: relative;
  height: 50rem;

  @media (min-width: 768px) {
    height: 60rem;
  }

  @media (min-width: 1025px) {
    height: 70rem;
  }

  .hero-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 101%;
    height: 100%;
    z-index: 1;

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
    top: 50%;
    left: 50%;
    width: 75rem;
    transform: translate(-50%, -50%);
    z-index: 10;

    &__inner {
      padding: 2.5rem 10rem 2.5rem 5rem;

      p {
        ${B1White};
        margin: 0;
      }
    }

    &__title {
      h2 {
        ${H2White};
        font-weight: bold;
      }
    }

    &__link {
      margin-top: 3rem;

      a {
        ${Btn1GreyBlue};
      }
    }
  }

  .hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(66, 69, 74, 0.56);
    z-index: 5;
  }
`

export default HeroThree
