import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import {
  B2Black,
  Btn1Grey,
  Btn1Navy,
  colors,
  H1Navy,
  H3Black,
  B2Grey,
} from "../../styles/helpers"

import sqft from "../../images/icons/sqft.png"
import bed from "../../images/icons/bed.png"
import bath from "../../images/icons/bath.png"

const ShowHomeHeader = ({ home }) => {
  const mainImg = getImage(
    home.acfShowHomes.mainImage.localFile.childImageSharp.gatsbyImageData
  )
  const mainImgAlt = home.acfShowHomes.mainImage.altText
  return (
    <StyledSection>
      <div className="wrapper">
        <div className="image">
          <GatsbyImage
            image={mainImg}
            alt={mainImgAlt}
            layout="fullWidth"
            formats={["auto", "webp", "avif"]}
          />
        </div>
        <div className="header">
          <div className="header__title">
            <p>Home Plans</p>
            <h1>{home.title}</h1>
          </div>
          <div className="header__sizes">
            <p>
              <span className="icon icon-sqft">
                <img src={sqft} alt="Logo" />
              </span>
              <span>{home.acfShowHomes.squareFootage} SQFT</span>
            </p>
            <p>
              <span className="icon icon-bed">
                <img src={bed} alt="Logo" />
              </span>
              <span>{home.acfShowHomes.numberOfBedrooms}BEDROOM</span>
            </p>
            <p>
              <span className="icon icon-bath">
                <img src={bath} alt="Logo" />
              </span>
              <span>{home.acfShowHomes.numberOfBathrooms}BATHROOM</span>
            </p>
          </div>
          <div className="header__address">
            <p>{home.acfShowHomes.address}</p>
          </div>

          <div className="header__plans">
            <a
              className="header__plans--pdf"
              target="_blank"
              rel="noreferrer"
              href={home.acfShowHomes.floorPlanPdf.localFile.publicURL}
            >
              Download Floor Plan
            </a>

            <a
              className="header__plans--tour"
              target="_blank"
              rel="noreferrer"
              href={home.acfShowHomes.virtualTour}
            >
              Take A Virtual Tour
            </a>
          </div>

          <div className="header__more">
            <Link to="/contact">Need More Information</Link>
          </div>
        </div>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  .wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  .image {
    width: calc(50%);
  }

  .header {
    width: calc(50%);
    max-width: 65rem;
    margin-right: auto;
    margin-left: 0;
    padding: 5rem;

    &__title {
      width: 100%;
      padding: 5rem 0 2.5rem;
      border-bottom: 0.3rem solid ${colors.colorTertiary};

      p {
        ${H3Black};
        margin: 0;
      }

      h1 {
        ${H1Navy};
        margin: 0;
      }
    }

    &__sizes {
      display: flex;
      justify-content: flex-start;
      width: 100%;
      padding-top: 2.5rem;

      p {
        ${B2Grey};
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-right: 5rem;
        margin-left: 0;
      }

      .icon {
        width: 2.5rem;
        margin-right: 1rem;
      }
    }

    &__address {
      width: 100%;
      margin: 2rem auto 4rem;

      p {
        ${B2Grey};
        margin: 0;
      }
    }

    &__plans {
      width: 100%;
      margin-top: 2.5rem;

      &--pdf {
        ${Btn1Grey};
        margin-right: 2rem;
      }

      &--tour {
        ${Btn1Navy};
      }
    }

    &__more {
      margin-top: 4rem;

      a {
        ${B2Black};
      }
    }
  }
`

export default ShowHomeHeader
