import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import {
  B1Black,
  Btn1Grey,
  H1Navy,
  H3Grey,
  standardWrapper,
} from "../../styles/helpers"

const Details = ({ city, title, details, logo, url }) => {
  const imageDisplay = getImage(logo.localFile.childImageSharp.gatsbyImageData)
  const imageAlt = logo.altText
  return (
    <SectionStyled>
      <div className="wrapper">
        <div className="details">
          <div className="details__title">
            <p>{city} Community</p>
            <h2>{title}</h2>
          </div>
          <div
            className="details__content"
            dangerouslySetInnerHTML={{ __html: details }}
          />
        </div>
        <div className="logo">
          <div className="logo__wrapper">
            <GatsbyImage
              image={imageDisplay}
              alt={imageAlt}
              layout="fullWidth"
              formats={["auto", "webp", "avif"]}
            />
          </div>
          {url && (
            <div className="logo__btn">
              <a rel="noreferrer" target="_blank" href={url}>
                Explore Community
              </a>
            </div>
          )}
        </div>
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  .wrapper {
    ${standardWrapper};
  }

  .details {
    width: calc(70%);
    padding: 0 2.5rem;

    &__title {
      p {
        ${H3Grey};
        margin: 0;
      }

      h2 {
        ${H1Navy};
        font-weight: 500;
      }
    }

    &__content {
      p {
        ${B1Black};
      }
    }
  }

  .logo {
    width: calc(30% - 5rem);
    margin-top: 2.5rem;
    margin-left: 5rem;
    text-align: center;

    &__wrapper {
      width: 100%;
      max-width: 25rem;
    }

    &__btn {
      a {
        ${Btn1Grey};
      }
    }
  }
`

export default Details
