import React, { useEffect } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { B1Black, H2Navy, medWrapper, Btn1Grey } from "../../styles/helpers"
import BgPatternOne from "../Graphics/BgPatternOne"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const ContentThreeImages = ({ data }) => {
  const topImg = getImage(
    data.topImage.localFile.childImageSharp.gatsbyImageData
  )
  const topImgAlt = data.topImage.altText
  const leftImg = getImage(
    data.bottomLeft.localFile.childImageSharp.gatsbyImageData
  )
  const leftImgAlt = data.bottomLeft.altText
  const rightImg = getImage(
    data.bottomRight.localFile.childImageSharp.gatsbyImageData
  )
  const rightImgAlt = data.bottomRight.altText

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#content-three-images",
          markers: false,
          start: "top 40%",
          toggleActions: "play none none none",
        },
      })
      .add("start")
      .fromTo(
        "#content-three-images .content h2",
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
        "#content-three-images .bg-pattern",
        {
          autoAlpha: 0,
          duration: 0.25,
        },
        {
          autoAlpha: 1,
        },
        "start"
      )
      .add("starttwo")
      .fromTo(
        "#content-three-images .content .paragraphs",
        {
          autoAlpha: 0,
          y: 100,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
        }
      )
      .fromTo(
        "#content-three-images .content .links",
        {
          autoAlpha: 0,
          y: 100,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
        },
        "-=0.5"
      )
      .fromTo(
        "#content-three-images .images__top",
        {
          autoAlpha: 0,
          x: 200,
        },
        {
          autoAlpha: 1,
          x: 0,
          duration: 1,
        },
        "starttwo"
      )
      .fromTo(
        "#content-three-images .images__bot-left",
        {
          autoAlpha: 0,
          y: 100,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
        },
        "starttwo+=0.5"
      )
      .fromTo(
        "#content-three-images .images__bot-right",
        {
          autoAlpha: 0,
          x: 200,
        },
        {
          autoAlpha: 1,
          x: 0,
          duration: 1,
        },
        "starttwo+=0.5"
      )
  }, [])

  return (
    <ContentThreeImagesSection id="content-three-images">
      <div className="wrapper">
        <div className="content">
          <h2>{data.title}</h2>
          <div
            className="paragraphs"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
          <div className="links">
            <Link to={`/${data.buttonSlug}`}>{data.buttonText}</Link>
          </div>
          <div className="bg-pattern">
            <BgPatternOne />
            <div className="bg-pattern__overlay" />
          </div>
        </div>
        <div className="images">
          <div className="images__top">
            <GatsbyImage
              image={topImg}
              alt={topImgAlt}
              layout="fullWidth"
              formats={["auto", "webp", "avif"]}
            />
          </div>
          <div className="images__bot-left">
            <GatsbyImage
              image={leftImg}
              alt={leftImgAlt}
              layout="fullWidth"
              formats={["auto", "webp", "avif"]}
            />
          </div>
          <div className="images__bot-right">
            <GatsbyImage
              image={rightImg}
              alt={rightImgAlt}
              layout="fullWidth"
              formats={["auto", "webp", "avif"]}
            />
          </div>
        </div>
      </div>
    </ContentThreeImagesSection>
  )
}

const ContentThreeImagesSection = styled.section`
  .wrapper {
    ${medWrapper};
  }

  .content {
    position: relative;
    width: calc(100%);
    padding: 7.5rem 5rem;

    @media (min-width: 768px) {
      width: calc(50%);
    }

    h2 {
      ${H2Navy};
    }

    p {
      ${B1Black};
    }

    a {
      ${Btn1Grey};
    }

    .bg-pattern {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;

      &__overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #a5b6ba;
        opacity: 0.4;
      }
    }
  }

  .images {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: calc(100%);
    margin-top: 2rem;

    @media (min-width: 768px) {
      width: calc(50% - 1rem);
      margin-top: 0;
      margin-left: 1rem;
    }

    &__top {
      width: 100%;
      padding-bottom: 1rem;
    }

    &__bot-left {
      width: calc(50%);
      padding-right: 1rem;
    }

    &__bot-right {
      width: calc(50%);
    }
  }
`

export default ContentThreeImages
