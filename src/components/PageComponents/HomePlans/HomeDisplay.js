import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { B1Black, B2Black, colors, H4Navy } from "../../../styles/helpers"

const HomeDisplay = ({ home }) => {
  const imgSrc = getImage(
    home.acfHomePlans.mainImage.localFile.childImageSharp.gatsbyImageData
  )
  const imgAlt = home.acfHomePlans.mainImage.altText
  return (
    <HomePlanStyled to={`/home-plans/${home.slug}`}>
      <div className="image">
        <div className="image__wrap">
          <GatsbyImage
            image={imgSrc}
            alt={imgAlt}
            layout="fullWidth"
            formats={["auto", "webp", "avif"]}
          />
        </div>
      </div>
      <div className="content">
        <div className="content__title">
          <h2>{home.title}</h2>
        </div>
        <div className="content__details">
          <p>
            <span></span>
            {home.acfHomePlans.squareFootage} <br />
            SQFT
          </p>
          <p>
            <span></span>
            {home.acfHomePlans.numberOfBedrooms} <br />
            BEDROOM
          </p>
          <p>
            <span></span>
            {home.acfHomePlans.numberOfBathrooms} <br />
            BATHROOM
          </p>
        </div>
        <div className="content__type">
          <p>
            {home.homeTypes.nodes.map(type => (
              <span key={type.slug}>{type.name}</span>
            ))}
          </p>
          <p>
            {home.homeStyles.nodes.map(style => (
              <span key={style.slug}>{style.name}</span>
            ))}
          </p>
        </div>
      </div>
    </HomePlanStyled>
  )
}

const HomePlanStyled = styled(Link)`
  width: 100%;
  margin-bottom: 5rem;
  border: solid 0.3rem #a2a3a5;
  background-color: #efefef;

  @media (min-width: 768px) {
    width: calc(100% / 2);
  }

  @media (min-width: 1025px) {
    width: calc((100% / 3) - 2rem);
    margin: 1rem;
  }

  .image {
    position: relative;
    width: 100%;
    height: 25rem;

    @media (min-width: 768px) {
      height: 30rem;
    }

    @media (min-width: 1025px) {
      height: 30rem;
    }

    &__wrap {
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
      }
    }
  }

  .content {
    width: 100%;
    padding: 2rem 3rem;

    &__title {
      h2 {
        ${H4Navy};
      }
    }

    &__details {
      display: flex;

      p {
        ${B2Black};
        padding: 0 1rem;
        border-right: 0.1rem solid ${colors.colorAlt};

        &:first-of-type {
          padding-left: 0;
        }

        &:last-of-type {
          border-right: none;
        }
      }
    }

    &__type {
      p {
        ${B1Black};
        margin: 0;
      }
    }
  }
`

export default HomeDisplay
