import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import {
  B1Black,
  Btn1Grey,
  H1Navy,
  H3Grey,
  H4Navy,
  medWrapper,
  standardWrapper,
} from "../../styles/helpers"

import twoStory from "../../images/two-story-house.png"

const HeroEleven = ({ data }) => {
  const imageDisplay = getImage(
    data.image.localFile.childImageSharp.gatsbyImageData
  )
  const imageAlt = data.image.altText
  return (
    <HeroElevenStyled>
      <div className="hero-Wrap">
        <div className="hero-image">
          <GatsbyImage
            image={imageDisplay}
            alt={imageAlt}
            layout="fullWidth"
            formats={["auto", "webp", "avif"]}
          />
        </div>
        <div className="hero-content">
          <div className="title">
            <h2>{data.topTitle}</h2>
            <h3>{data.mainTitle}</h3>
          </div>
          <div dangerouslySetInnerHTML={{ __html: data.content }} />
        </div>
      </div>

      <div className="side-content">
        <div className="side-content__wrapper">
          <div className="icon">
            <img src={twoStory} alt={`Show Home Hours`} />
          </div>
          <h2>{data.sideTitle}</h2>
          <div className="side-content__paragraph">
            <p dangerouslySetInnerHTML={{ __html: data.sideContent }} />
          </div>
        </div>
      </div>
    </HeroElevenStyled>
  )
}

const HeroElevenStyled = styled.div`
  position: relative;
  margin-bottom: 15rem;

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
    position: absolute;
    bottom: -10rem;
    left: 0;
    width: calc(100%);
    padding: 2.5rem;
    background-color: #fff;
    z-index: 100;

    @media (min-width: 768px) {
      bottom: -20rem;
      width: 70rem;

      padding: 2.5rem 10rem;
    }

    h2 {
      ${H3Grey};
      text-align: center;
    }

    h3 {
      ${H1Navy};
      text-align: center;
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

  .side-content {
    margin-left: 55%;
    padding-top: 5.85rem;

    &__wrapper {
      ${standardWrapper};
    }

    .icon {
      max-width: 9.2rem;
      margin: 0;
      margin-right: auto;
    }

    h2 {
      ${H4Navy};
      width: 100%;
    }

    &__paragraph {
      width: 100%;

      p {
        ${B1Black};
      }
    }
  }
`

export default HeroEleven
