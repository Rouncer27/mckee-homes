import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  colors,
  medWrapper,
  Btn1Grey,
  H2Black,
  B1Black,
  H1White,
} from "../../styles/helpers"

const FaqsPageLinks = ({ data }) => {
  if (!data.displayFaqPageLinks) return null

  return (
    <StyledSection>
      <div className="wrapper">
        {data.faqPageLinks.map((faq, index) => {
          const imgSrc = getImage(
            faq.image.localFile.childImageSharp.gatsbyImageData
          )
          const imgAlt = faq.image.altText
          console.log(faq.buttonLink)
          return (
            <Block key={index}>
              <div
                className={`block-wrapper${
                  index % 2 === 0 ? " " : " block-wrapper-reverse"
                }`}
              >
                <div className="image">
                  <div className="image-container">
                    <GatsbyImage
                      image={imgSrc}
                      alt={imgAlt}
                      layout="fullWidth"
                      formats={["auto", "webp", "avif"]}
                    />
                    <div className="image-title">
                      <p>{faq.imageTitle}</p>
                    </div>
                    <div className="image-overlay"></div>
                  </div>
                </div>
                <div className="content">
                  <div>
                    <h2>{faq.title}</h2>
                  </div>
                  <div dangerouslySetInnerHTML={{ __html: faq.intro }} />
                  <div className="button">
                    <a href={`/faqs/${faq.buttonLink.slug}`}>
                      {faq.buttonText}
                    </a>
                  </div>
                </div>
              </div>
            </Block>
          )
        })}
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  .wrapper {
    ${medWrapper};
  }
`

const Block = styled.div`
  width: 100%;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  .block-wrapper {
    display: flex;
    align-items: stretch;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    height: 100%;

    &.block-wrapper-reverse {
      flex-direction: row-reverse;
    }
  }

  .image {
    position: relative;
    width: calc(100%);
    min-height: 30rem;

    @media (min-width: 768px) {
      width: calc(30%);
      height: 100%;
    }

    &-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      .gatsby-image-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .image-title {
        position: absolute;
        top: 50%;
        left: 50%;
        width: calc(100% - 2rem);
        padding: 0 1rem;
        transform: translate(-50%, -50%);
        text-align: center;
        z-index: 10;

        p {
          ${H1White};
          margin: 0%;
          text-transform: uppercase;
        }
      }

      .image-overlay {
        position: absolute;
        top: 0%;
        left: 0%;
        width: 100%;
        height: 100%;
        z-index: 5;
        background-color: ${colors.colorAccent};
        opacity: 0.6;
      }
    }
  }

  .content {
    width: calc(100%);
    padding: 2rem;
    border: 0.1rem solid ${colors.colorAccent};

    @media (min-width: 768px) {
      width: calc(70% - 1.5rem);
      margin-left: 1.5rem;
      padding: 5rem;
    }

    h2 {
      ${H2Black};
    }

    p {
      ${B1Black};
    }

    .button {
      width: 100%;

      @media (min-width: 768px) {
      }

      a {
        ${Btn1Grey};
      }
    }
  }

  .block-wrapper-reverse {
    .content {
      @media (min-width: 768px) {
        margin-right: 1.5rem;
        margin-left: 0;
      }
    }
  }
`

export default FaqsPageLinks
