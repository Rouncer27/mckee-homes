import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ThreeImagesRow = ({ data }) => {
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
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  padding-top: 2.5rem;

  .images {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;

    .image {
      width: calc(100% / 1);
      margin-bottom: 1rem;
      padding: 0 1.25rem;

      @media (min-width: 768px) {
        width: calc(100% / 3);
        margin-bottom: 0;
      }
    }

    &__left {
      @media (min-width: 768px) {
        padding-right: 2.5rem !important;
        padding-left: 0 !important;
      }
    }

    &__right {
      @media (min-width: 768px) {
        padding-right: 0 !important;
        padding-left: 2.5rem !important;
      }
    }
  }
`

export default ThreeImagesRow
