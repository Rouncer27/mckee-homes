import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Btn1GreyBlue, B1White, H2White } from "../../styles/helpers"
import { Link } from "gatsby"

const HeroTwelve = ({ data }) => {
  console.log("HeroTwelve: ", data)
  const imageDisplay = getImage(
    data.image.localFile.childImageSharp.gatsbyImageData
  )
  const imageAlt = data.image.altText
  return (
    <HeroTwelveStyled>
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
            <Link to={`/${data.buttonOneSlug}`}>{data.buttonOneText}</Link>
            <Link to={`/${data.buttonTwoSlug}`}>{data.buttonTwoText}</Link>
          </div>
        </div>
        <div className="hero-content__logos">
          {data.awardLogos.map((logo, index) => {
            const logoDisplay = getImage(
              logo.logo.localFile.childImageSharp.gatsbyImageData
            )
            const logoAlt = logo.logo.altText
            return (
              <div className="single-logo" key={index}>
                <GatsbyImage
                  image={logoDisplay}
                  alt={logoAlt}
                  layout="fullWidth"
                  formats={["auto", "webp", "avif"]}
                />
              </div>
            )
          })}
        </div>
      </div>
      <div className="hero-overlay" />
    </HeroTwelveStyled>
  )
}

const HeroTwelveStyled = styled.section`
  position: relative;
  height: 75rem;

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
    width: 100%;
    transform: translate(-50%, -50%);
    z-index: 10;

    @media (min-width: 768px) {
    }

    &__inner {
      width: 100%;
      padding: 5rem 2.5rem;

      @media (min-width: 768px) {
        width: 75rem;
        margin: 0 auto;
        padding: 2.5rem;
      }

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
        margin-right: 3rem;
      }
    }

    &__logos {
      display: flex;
      align-items: flex-end;
      justify-content: flex-start;
      flex-wrap: wrap;
      width: 100%;
      margin-top: 5rem;

      @media (min-width: 768px) {
        max-width: 90rem;
        margin: 5rem auto 0;
      }

      .single-logo {
        width: calc((100% / 5) - 1rem);
        margin: 0 0.5rem;

        @media (min-width: 768px) {
          width: calc((100% / 5) - 4rem);
        }

        @media (min-width: 1025px) {
          width: calc((100% / 5) - 4rem);
        }
      }

      .single-logo:first-of-type {
        margin-left: 0;
      }

      .single-logo:last-of-type {
        margin-right: 0;
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

export default HeroTwelve
