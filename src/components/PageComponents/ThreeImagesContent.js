import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  B1Black,
  H2Black,
  H3Black,
  standardWrapper,
} from "../../styles/helpers"

const ThreeImagesContent = ({ data }) => {
  const leftImg = getImage(
    data.imageLeft.localFile.childImageSharp.gatsbyImageData
  )
  const leftImgAlt = data.imageLeft.altText
  const centerImg = getImage(
    data.imageCenter.localFile.childImageSharp.gatsbyImageData
  )
  const centerImgAlt = data.imageCenter.altText
  const rightImg = getImage(
    data.imageRight.localFile.childImageSharp.gatsbyImageData
  )
  const rightImgAlt = data.imageRight.altText
  return (
    <SectionStyled>
      <div className="wrapper">
        <div className="title">
          <h2>{data.topTitle}</h2>
        </div>
      </div>
      <div className="images">
        <div className="image images__left">
          <GatsbyImage
            image={leftImg}
            alt={leftImgAlt}
            layout="fullWidth"
            formats={["auto", "webp", "avif"]}
          />
        </div>
        <div className="image images__center">
          <GatsbyImage
            image={centerImg}
            alt={centerImgAlt}
            layout="fullWidth"
            formats={["auto", "webp", "avif"]}
          />
        </div>
        <div className="image images__right">
          <GatsbyImage
            image={rightImg}
            alt={rightImgAlt}
            layout="fullWidth"
            formats={["auto", "webp", "avif"]}
          />
        </div>
      </div>
      <div className="bot-wrapper">
        <div className="bot-title">
          <h3>{data.bottomTitle}</h3>
        </div>
        <div dangerouslySetInnerHTML={{ __html: data.bottomContent }} />
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  .wrapper {
    ${standardWrapper};
  }

  .bot-wrapper {
    ${standardWrapper};
    max-width: 75rem !important;
  }

  .title {
    max-width: 70rem;
    margin: 0 auto 5rem auto;
    text-align: center;

    h2 {
      ${H3Black};
    }
  }

  .bot-title {
    width: 100%;

    h3 {
      ${H2Black};
      width: 100%;
    }
  }

  p {
    ${B1Black};
    width: 100%;
  }

  .images {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;

    .image {
      width: calc(100% / 3);
      padding: 0 1.25rem;
    }

    &__left {
      padding-right: 2.5rem !important;
      padding-left: 0 !important;
    }

    &__right {
      padding-right: 0 !important;
      padding-left: 2.5rem !important;
    }
  }
`

export default ThreeImagesContent
