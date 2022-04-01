import React, { useEffect } from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Btn1Grey, H3Grey } from "../../styles/helpers"
import { Link } from "gatsby"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const HeroTwo = ({ data }) => {
  const imageDisplay = getImage(
    data.image.localFile.childImageSharp.gatsbyImageData
  )
  const imageAlt = data.image.altText

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero-two-tigger",
          markers: false,
          start: "top 40%",
          toggleActions: "play none none none",
        },
      })
      .fromTo(
        "#hero-two-tigger .hero-content__inner",
        {
          autoAlpha: 0,
          x: 150,
          duration: 0.5,
        },
        {
          autoAlpha: 1,
          x: 0,
        }
      )
      .fromTo(
        "#hero-two-tigger .hero-content__link",
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
    <HeroTwoStyled id="hero-two-tigger">
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
  height: 45rem;

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
    bottom: 7.5rem;
    right: 0;
    width: 90%;

    @media (min-width: 768px) {
      width: 60rem;
      bottom: 12.5rem;
    }

    &__inner {
      padding: 2.5rem 2rem 2.5rem 5rem;
      background-color: rgba(255, 255, 255, 0.7);

      @media (min-width: 768px) {
        padding: 2.5rem 10rem 2.5rem 5rem;
      }

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
