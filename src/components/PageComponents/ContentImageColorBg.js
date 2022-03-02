import React, { useEffect } from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { B1Black, Btn1Grey, H2Black, medWrapper } from "../../styles/helpers"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const ContentImageColorBg = ({ data }) => {
  const imageTopDisplay = getImage(
    data.imageTop.localFile.childImageSharp.gatsbyImageData
  )
  const imageTopAlt = data.imageTop.altText

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#content-image-color-bg",
          markers: false,
          start: "top 45%",
          toggleActions: "play none none none",
        },
      })
      .add("start")
      .fromTo(
        "#content-image-color-bg .content",
        {
          autoAlpha: 0,
          x: -250,
          duration: 1,
        },
        {
          autoAlpha: 1,
          x: 0,
        }
      )
      .fromTo(
        "#content-image-color-bg .image",
        {
          autoAlpha: 0,
          x: 250,
          duration: 1,
        },
        {
          autoAlpha: 1,
          x: 0,
        },
        "start"
      )
  }, [])

  return (
    <SectionStyled id="content-image-color-bg">
      <div className="wrapper">
        <div className="content">
          <div className="title">
            <h2>{data.title}</h2>
          </div>
          <div
            className="paragraph"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
          <div className="button">
            <Link to={`/${data.buttonSlug}`}>{data.buttonText}</Link>
          </div>
        </div>
        <div className="image">
          <div className="image__top">
            <GatsbyImage
              image={imageTopDisplay}
              alt={imageTopAlt}
              layout="fullWidth"
              formats={["auto", "webp", "avif"]}
            />
          </div>
        </div>
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  padding: 5rem 0;
  background-color: rgba(165, 182, 186, 0.22);

  .wrapper {
    ${medWrapper};
  }

  .content {
    width: calc(100%);
    padding-bottom: 3rem;

    @media (min-width: 768px) {
      width: calc(50%);
      padding: 2rem;
    }
  }

  .title {
    h2 {
      ${H2Black};
    }
  }

  .paragraph {
    p {
      ${B1Black};
    }
  }

  .button {
    a {
      ${Btn1Grey};
    }
  }

  .image {
    width: calc(100%);

    @media (min-width: 768px) {
      width: calc(50%);
    }

    &__top {
      width: 100%;
      margin: 0 auto;

      @media (min-width: 768px) {
        width: 90%;
      }
    }

    &__bot {
      width: 100%;
      margin: 2rem auto;

      @media (min-width: 768px) {
        width: 65%;
        margin: 4rem auto 0;
      }
    }
  }
`

export default ContentImageColorBg
