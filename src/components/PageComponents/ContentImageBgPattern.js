import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  B1Black,
  colors,
  H2Navy,
  medWrapper,
  Btn1Navy,
} from "../../styles/helpers"

import BgPatternBrick from "../Graphics/BgPatternBrick"

const ContentImageBgPattern = ({ data }) => {
  let imageDisplay
  let imageAlt
  const isGif = data.image.localFile.url.endsWith("gif")

  if (!isGif) {
    imageDisplay = getImage(
      data?.image?.localFile?.childImageSharp?.gatsbyImageData
    )
    imageAlt = data?.image?.altText
  }
  return (
    <ContentImageBgPatternSection>
      <div className="wrapper">
        <div className="image">
          {isGif ? (
            <>
              <img src={data.image.localFile.url} />
            </>
          ) : (
            <>
              <GatsbyImage
                image={imageDisplay}
                alt={imageAlt}
                layout="fullWidth"
                formats={["auto", "webp", "avif"]}
              />
            </>
          )}
        </div>
        <div className="content">
          <div className="content__title">
            <h2>{data.title}</h2>
          </div>
          <div
            className="content__paragraph"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />

          {data.buttonType !== "external" ? (
            <div className="content__button">
              <Link to={`/${data.buttonSlug}`}>{data.buttonText}</Link>
            </div>
          ) : (
            <div className="content__button">
              <a target="_balnk" rel="noreferrer" href={`${data.buttonLink}`}>
                {data.buttonText}
              </a>
            </div>
          )}
        </div>
        <div className="graphic">
          <BgPatternBrick />
        </div>
      </div>
    </ContentImageBgPatternSection>
  )
}

const ContentImageBgPatternSection = styled.section`
  position: relative;
  padding: 2rem 0rem;

  @media (min-width: 768px) {
    padding: 10rem 0rem;
  }

  .wrapper {
    ${medWrapper};
    align-items: center;
  }

  .content {
    width: calc(100%);
    padding-left: 3rem;
    border-left: 0.3rem solid ${colors.colorTertiary};

    @media (min-width: 768px) {
      width: calc(85%);
    }

    &__title {
      width: 100%;
      margin-bottom: 2rem;

      h2 {
        ${H2Navy};
        margin: 0;
      }
    }

    &__paragraph {
      margin-bottom: 2rem;

      p {
        ${B1Black};
        &:last-of-type {
          margin: 0;
        }
      }
    }

    &__button {
      a {
        ${Btn1Navy};
      }
    }
  }

  .image {
    width: calc(30%);
    margin-bottom: 5rem;

    @media (min-width: 768px) {
      width: calc(15% - 5rem);
      margin-right: 5rem;
      margin-bottom: 0;
    }
  }

  .graphic {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
`

export default ContentImageBgPattern
