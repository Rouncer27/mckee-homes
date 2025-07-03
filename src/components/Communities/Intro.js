import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  B1Black,
  Btn1Grey,
  H2Grey,
  H2White,
  medWrapper,
} from "../../styles/helpers"
import { fontSizer } from "../../styles/helpers"
import scrollTo from "gatsby-plugin-smoothscroll"

const Intro = ({ logo, title, content, blocks, details, url, scroll }) => {
  const imageDisplay = getImage(logo.localFile.childImageSharp.gatsbyImageData)
  const imageAlt = logo.altText

  return (
    <StyledSection>
      <div className="community-wrapper">
        <div className="community-intro">
          <div className="community-intro-logo">
            <GatsbyImage
              image={imageDisplay}
              alt={imageAlt}
              layout="fullWidth"
              formats={["auto", "webp", "avif"]}
            />
          </div>

          <div className="community-intro-title">
            <h2>{title}</h2>
          </div>
          <div className="community-intro-content">
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </div>

        <div className="community-blocks">
          {blocks.map((block, index) => {
            console.log("block", block)
            const blockDisplay = getImage(
              block.image.localFile.childImageSharp.gatsbyImageData
            )
            const blockAlt = block.image.altText
            return (
              <div
                className={`community-block${
                  index % 2 !== 0 ? " community-block-reverse" : ""
                }`}
                key={index}
              >
                <div className="community-block-image">
                  <div className="community-block-image-container">
                    <GatsbyImage
                      image={blockDisplay}
                      alt={blockAlt}
                      layout="fullWidth"
                      formats={["auto", "webp", "avif"]}
                    />

                    <div className="community-block-image-overlay">
                      <div className="community-block-image-overlay-inner">
                        <p>{block.imageText}</p>
                        <p>{block.imageBigText}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="community-block-content">
                  <div
                    className="community-block-content-inner"
                    dangerouslySetInnerHTML={{ __html: block.content }}
                  />
                  {block.buttonRequired ? (
                    <div className="community-block-content-buttons">
                      <a href={block.buttonLink}>{block.buttonText}</a>
                    </div>
                  ) : null}
                </div>
              </div>
            )
          })}
        </div>

        <div className="community-details">
          <div
            className="community-details-content"
            dangerouslySetInnerHTML={{ __html: details }}
          />
          <div className="community-details-buttons">
            {url && (
              <div className="logo__btn">
                <a rel="noopener" target="_blank" href={url}>
                  Explore Community
                </a>
              </div>
            )}
            {scroll && (
              <div className="logo__btn">
                <button
                  onClick={() => {
                    scrollTo("#lot-picker-map")
                  }}
                >
                  Explore Lots
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  .community-wrapper {
    ${medWrapper};
  }

  .community-intro {
    width: 100%;

    @media (min-width: 768px) {
      padding: 2rem 10rem;
    }

    &-logo {
      width: 100%;
      max-width: 25rem;
    }

    &-title {
      width: 100%;
      padding: 0 2rem;

      h2 {
        ${H2Grey};
        margin: 0;
        margin-bottom: 2rem;
      }
    }

    &-content {
      width: 100%;
      padding: 0 2rem;

      P {
        ${B1Black};
      }
    }
  }

  .community-blocks {
    width: 100%;
  }

  .community-block {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin-bottom: 4rem;

    @media (min-width: 768px) {
      margin-bottom: 1.6rem;
    }

    &.community-block-reverse {
      flex-direction: row-reverse;
    }

    &-image {
      position: relative;
      width: calc(100%);

      @media (min-width: 768px) {
        width: calc(52.5% - 2rem);
        margin-right: 2rem;
      }

      &-container {
        position: relative;
        z-index: 1;
      }

      &-overlay {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(153, 141, 135, 0.75);
        z-index: 5;

        &-inner {
          max-width: 50rem;
          text-align: center;

          p:first-of-type {
            ${H2White};
            margin: 0;
          }

          p:last-of-type {
            ${fontSizer(6, 9, 76.8, 150, 6)};
            margin: 0;
            color: #fff;
            font-weight: 600;
          }
        }
      }
    }

    &-content {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: calc(100%);
      margin-top: 2.5rem;

      @media (min-width: 768px) {
        width: calc(47.5% - 2rem);
        margin-top: 0;
        margin-left: 2rem;
      }

      &-inner {
        width: 100%;
        p {
          ${B1Black};
          margin-bottom: 3rem;
        }
      }

      &-buttons {
        width: 100%;

        a {
          ${Btn1Grey};
          min-width: 25rem;
        }
      }
    }

    &.community-block-reverse {
      @media (min-width: 768px) {
        flex-direction: row-reverse;
      }

      .community-block-image {
        @media (min-width: 768px) {
          margin-right: 0;
          margin-left: 2rem;
        }
      }
      .community-block-content {
        @media (min-width: 768px) {
          margin-right: 2rem;
          margin-left: 0rem;
        }
      }
    }
  }

  .community-details {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin-top: 5rem;

    &-content {
      width: calc(100%);

      @media (min-width: 768px) {
        width: calc(60% - 2rem);
        margin-right: 2rem;
      }

      p {
        ${B1Black};
      }
    }

    &-buttons {
      width: calc(100%);

      @media (min-width: 768px) {
        width: calc(40% - 2rem);
        margin-left: 2rem;
        text-align: center;
      }

      a,
      button {
        ${Btn1Grey};
        min-width: 25rem;
      }

      a {
        margin-bottom: 1.5rem;
      }
    }
  }
`

export default Intro
