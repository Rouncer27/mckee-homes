import React, { useEffect } from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { medWrapper } from "../../styles/helpers"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const ContentImagesLogo5050 = ({ data }) => {
  const botImg = getImage(
    data.bottomImage.localFile.childImageSharp.gatsbyImageData
  )
  const botImgAlt = data.bottomImage.altText

  const leftImg = getImage(
    data.topLeftImage.localFile.childImageSharp.gatsbyImageData
  )
  const leftImgAlt = data.topLeftImage.altText
  const rightImg = getImage(
    data.topRightImage.localFile.childImageSharp.gatsbyImageData
  )
  const rightImgAlt = data.topRightImage.altText

  const logoUrl = getImage(data.logo.localFile.childImageSharp.gatsbyImageData)
  const logoAlt = data.logo.altText

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#content-images-logo",
          markers: false,
          start: "top 45%",
          toggleActions: "play none none none",
        },
      })
      .fromTo(
        "#content-images-logo .content",
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
      .fromTo(
        "#content-images-logo .images",
        {
          autoAlpha: 0,
          x: -150,
          duration: 1,
        },
        {
          autoAlpha: 1,
          x: 0,
        }
      )
  }, [])

  return (
    <SectionStyled id="content-images-logo">
      <div className="wrapper">
        <div className="content">
          <div dangerouslySetInnerHTML={{ __html: data.content }} />
        </div>
        <div className="images">
          <div className="images__top-left">
            <GatsbyImage
              image={leftImg}
              alt={leftImgAlt}
              layout="fullWidth"
              formats={["auto", "webp", "avif"]}
            />
          </div>
          <div className="images__top-right">
            <GatsbyImage
              image={rightImg}
              alt={rightImgAlt}
              layout="fullWidth"
              formats={["auto", "webp", "avif"]}
            />
          </div>
          <div className="images__bot">
            <GatsbyImage
              image={botImg}
              alt={botImgAlt}
              layout="fullWidth"
              formats={["auto", "webp", "avif"]}
            />
          </div>
          <div className="images__logo">
            <GatsbyImage
              image={logoUrl}
              alt={logoAlt}
              layout="fullWidth"
              formats={["auto", "webp", "avif"]}
            />
          </div>
        </div>
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.div`
  .wrapper {
    ${medWrapper};
    align-items: center;
    flex-direction: row-reverse;
  }

  .content {
    position: relative;
    width: calc(100%);

    @media (min-width: 768px) {
      width: calc(50%);
      padding: 7.5rem 5rem;
    }
  }

  .images {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: calc(100%);

    @media (min-width: 768px) {
      width: calc(50% - 1rem);
      margin-left: 1rem;
    }

    &__bot {
      width: 100%;
      padding-top: 1rem;
    }

    &__top-left {
      width: calc(50%);
      padding-right: 0.5rem;
    }

    &__top-right {
      width: calc(50%);
      padding-left: 0.5rem;
    }

    &__logo {
      position: absolute;
      bottom: -10rem;
      right: 0;
      left: 0;
      margin: auto;
      width: 27.5rem;
    }
  }
`

export default ContentImagesLogo5050
