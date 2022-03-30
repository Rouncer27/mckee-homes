import React, { useEffect } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { B1Black, H1Navy } from "../../styles/helpers"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const HeroOne = ({ data }) => {
  const imageDisplay = getImage(
    data.backgroundImage.localFile.childImageSharp.gatsbyImageData
  )
  const imageAlt = data.backgroundImage.altText

  useEffect(() => {
    gsap.fromTo(
      "#hero-one-tigger .hero-content__inner .title",
      {
        autoAlpha: 0,
        x: -150,
        duration: 0.5,
      },
      {
        autoAlpha: 1,
        x: 0,
      }
    )
    gsap.fromTo(
      "#hero-one-tigger .hero-content__inner .content",
      {
        autoAlpha: 0,
        y: 100,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        stagger: {
          each: 0.3,
        },
      }
    )
  }, [])

  return (
    <HeroOneSection id="hero-one-tigger">
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
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
        </div>
      </div>
    </HeroOneSection>
  )
}

const HeroOneSection = styled.section`
  position: relative;

  @media (min-width: 768px) {
    height: 60rem;
  }

  @media (min-width: 1025px) {
    height: 65rem;
  }

  .hero-image {
    @media (min-width: 768px) {
      position: absolute;
      top: 0;
      left: 0;
      width: 101%;
      height: 100%;
    }

    .gatsby-image-wrapper {
      @media (min-width: 768px) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }

  .hero-content {
    width: 100%;
    padding: 5rem 3rem;
    background-color: rgba(255, 255, 255, 0.9);

    @media (min-width: 768px) {
      position: absolute;
      bottom: 0;
      left: 0;
    }

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
