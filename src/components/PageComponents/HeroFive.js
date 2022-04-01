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
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const HeroFive = ({ data }) => {
  const imageDisplay = getImage(
    data.image.localFile.childImageSharp.gatsbyImageData
  )
  const imageAlt = data.image.altText

  useEffect(() => {
    gsap.fromTo(
      "#hero-five-tigger .hero-content__inner",
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
    <HeroFourStyled id="hero-five-tigger">
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
          <div className="hero-content__inner">
            <div className="title">
              <h2>{data.topTitle}</h2>
              <h3>{data.mainTitle}</h3>
            </div>
            <div dangerouslySetInnerHTML={{ __html: data.content }} />
          </div>
        </div>
      </div>
    </HeroFourStyled>
  )
}

const HeroFourStyled = styled.div`
  .hero-Wrap {
    position: relative;

    @media (min-width: 768px) {
      height: 45rem;
    }

    @media (min-width: 1025px) {
      height: 65rem;
    }
  }

  .hero-image {
    position: relative;
    height: 30rem;

    @media (min-width: 768px) {
      position: absolute;
      top: 0;
      left: 0;
      width: 101%;
      height: 100%;
    }

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

    &__inner {
      position: relative;
      width: calc(100%);
      margin: auto;
      padding: 1rem 0;
      background-color: #fff;
      z-index: 100;

      @media (min-width: 768px) {
        width: calc(60%);
        margin-top: -27.5rem;
        padding: 2.5rem 7.1rem;
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
        text-align: center;

        a {
          ${Btn1Grey};
          margin-right: 1rem;
          margin-bottom: 2rem;
          margin-left: 1rem;
        }
      }
    }
  }
`

export default HeroFive
