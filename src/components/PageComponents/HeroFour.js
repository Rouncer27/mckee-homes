import React, { useEffect } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import {
  B1Black,
  Btn1Grey,
  H1Navy,
  H3Grey,
  medWrapper,
} from "../../styles/helpers"
import { Link } from "gatsby"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const HeroFour = ({ data }) => {
  const imageDisplay = getImage(
    data.image.localFile.childImageSharp.gatsbyImageData
  )
  const imageAlt = data.image.altText

  const imageLeft = getImage(
    data.smallImageLeft.localFile.childImageSharp.gatsbyImageData
  )
  const imageLeftAlt = data.smallImageLeft.altText

  const imageRight = getImage(
    data.smallImageRight.localFile.childImageSharp.gatsbyImageData
  )
  const imageRightAlt = data.smallImageRight.altText

  useEffect(() => {
    gsap.fromTo(
      "#hero-four-tigger .hero-content__inner",
      {
        autoAlpha: 0,
        y: 150,
        duration: 1,
      },
      {
        autoAlpha: 1,
        y: 0,
      }
    )
  }, [])

  return (
    <HeroFourStyled id="hero-four-tigger">
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
          <div className="hero-content__img-left">
            <GatsbyImage
              image={imageLeft}
              alt={imageLeftAlt}
              layout="fullWidth"
              formats={["auto", "webp", "avif"]}
            />
          </div>
          <div className="hero-content__inner">
            <div className="title">
              <h2>{data.topTitle}</h2>
              <h3>{data.mainTitle}</h3>
            </div>
            <div dangerouslySetInnerHTML={{ __html: data.content }} />
            <div className="buttons-wrap">
              {data.buttons.map((btn, index) => {
                if (btn.buttonType === "internal") {
                  return (
                    <Link key={index} to={`/${btn.buttonSlug}`}>
                      {btn.buttonText}
                    </Link>
                  )
                } else {
                  return null
                }
              })}
            </div>
          </div>
          <div className="hero-content__img-right">
            <GatsbyImage
              image={imageRight}
              alt={imageRightAlt}
              layout="fullWidth"
              formats={["auto", "webp", "avif"]}
            />
          </div>
        </div>
      </div>
    </HeroFourStyled>
  )
}

const HeroFourStyled = styled.div`
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
    }
  }

  .wrapper {
    ${medWrapper};
  }

  .hero-content {
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    &__img-left {
      width: calc(100%);

      @media (min-width: 768px) {
        width: calc(20%);
      }
    }

    &__inner {
      position: relative;
      width: calc(100%);
      margin: auto;
      padding: 2.5rem 0;
      background-color: #fff;
      z-index: 100;

      @media (min-width: 768px) {
        width: calc(60%);
        margin-top: -27.5rem;
        padding: 2.5rem;
      }

      h2 {
        ${H3Grey};
        @media (min-width: 768px) {
          text-align: center;
        }
      }

      h3 {
        ${H1Navy};

        @media (min-width: 768px) {
          text-align: center;
        }
      }

      p {
        ${B1Black};
      }

      .buttons-wrap {
        width: 100%;

        @media (min-width: 768px) {
          text-align: center;
        }

        a {
          ${Btn1Grey};
          margin-right: 1rem;
          margin-bottom: 2rem;
          margin-left: 1rem;
        }
      }
    }

    &__img-right {
      width: calc(100%);

      @media (min-width: 768px) {
        width: calc(20%);
      }
    }
  }
`

export default HeroFour
