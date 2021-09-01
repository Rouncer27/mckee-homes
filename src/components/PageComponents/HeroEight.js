import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { B1Black, H1Navy, H3Grey, medWrapper } from "../../styles/helpers"

const HeroEight = ({ data }) => {
  const imageDisplay = getImage(
    data.image.localFile.childImageSharp.gatsbyImageData
  )
  const imageAlt = data.image.altText

  const imageTop = getImage(
    data.smallImageTop.localFile.childImageSharp.gatsbyImageData
  )
  const imageTopAlt = data.smallImageTop.altText

  const imageLeft = getImage(
    data.smallImageLeft.localFile.childImageSharp.gatsbyImageData
  )
  const imageLeftAlt = data.smallImageLeft.altText

  const imageRight = getImage(
    data.smallImageRight.localFile.childImageSharp.gatsbyImageData
  )
  const imageRightAlt = data.smallImageRight.altText
  return (
    <HeroEightStyled>
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
          <div className="images">
            <div className="images__img-top">
              <GatsbyImage
                image={imageTop}
                alt={imageTopAlt}
                layout="fullWidth"
                formats={["auto", "webp", "avif"]}
              />
            </div>

            <div className="images__img-left">
              <GatsbyImage
                image={imageLeft}
                alt={imageLeftAlt}
                layout="fullWidth"
                formats={["auto", "webp", "avif"]}
              />
            </div>

            <div className="images__img-right">
              <GatsbyImage
                image={imageRight}
                alt={imageRightAlt}
                layout="fullWidth"
                formats={["auto", "webp", "avif"]}
              />
            </div>
          </div>

          <div className="hero-content__inner">
            <div className="title">
              <h2>{data.topTitle}</h2>
              <h3>{data.mainTitle}</h3>
            </div>
            <div dangerouslySetInnerHTML={{ __html: data.content }} />
          </div>
        </div>
      </div>
    </HeroEightStyled>
  )
}

const HeroEightStyled = styled.div`
  .hero-Wrap {
    position: relative;
    height: 50rem;

    @media (min-width: 768px) {
      height: 60rem;
    }

    @media (min-width: 1025px) {
      height: 65rem;
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

      img,
      picture {
      }
    }
  }

  .wrapper {
    ${medWrapper};
  }

  .hero-content {
    display: flex;
    width: 100%;

    .images {
      display: flex;
      flex-wrap: wrap;
      width: calc(45%);

      &__img-top {
        width: 100%;
        margin-bottom: 1rem;
      }

      &__img-right {
        width: calc(50% - 0.5rem);
        margin-left: 0.5rem;
      }

      &__img-left {
        width: calc(50% - 0.5rem);
        margin-right: 0.5rem;
      }
    }

    &__inner {
      position: relative;
      width: calc(55%);
      margin: auto;
      margin-top: -27.5rem;
      margin-left: -5rem;
      padding: 5rem 6.5rem;
      background-color: #fff;
      z-index: 100;

      h2 {
        ${H3Grey};
        text-transform: uppercase;
      }

      h3 {
        ${H1Navy};
      }

      p {
        ${B1Black};
      }
    }
  }
`

export default HeroEight
