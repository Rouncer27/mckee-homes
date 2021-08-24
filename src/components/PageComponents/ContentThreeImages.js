import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { B1Black, H2Navy, medWrapper, Btn1Grey } from "../../styles/helpers"
import BgPatternOne from "../Graphics/BgPatternOne"

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
  return (
    <ContentThreeImagesSection>
      <div className="wrapper">
        <div className="content">
          <h2>{data.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: data.content }} />
          <div>
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
    width: calc(50%);
    padding: 7.5rem 5rem;

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
    width: calc(50% - 1rem);
    margin-left: 1rem;

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
