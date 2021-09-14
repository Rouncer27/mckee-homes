import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { B1Grey, colors, H4Navy, B2Grey } from "../../../styles/helpers"

import sqft from "../../../images/icons/sqft.png"
import bed from "../../../images/icons/bed.png"
import bath from "../../../images/icons/bath.png"

const HomeDisplay = ({ home }) => {
  const imgSrc = getImage(
    home.acfQuickPossessions.mainImage.localFile.childImageSharp.gatsbyImageData
  )
  const imgAlt = home.acfQuickPossessions.mainImage.altText
  const priceComma = home.acfQuickPossessions.price
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  const possessionDate = Date.parse(
    new Date(
      home.acfQuickPossessions.possessionTimeline.split("/")[2],
      home.acfQuickPossessions.possessionTimeline.split("/")[1],
      home.acfQuickPossessions.possessionTimeline.split("/")[0]
    )
  )
  const dateNow = Date.parse(new Date())
  const difference = (possessionDate - dateNow) / (1000 * 3600 * 24) / 30

  const timeframe =
    difference > 3
      ? "> 3 Months"
      : difference > 0 && difference < 3
      ? "< 3 Months"
      : difference < 0
      ? "Immediate"
      : ""

  return (
    <ShowHomeStyled to={`/quick-possessions/${home.slug}`}>
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
            <span className="icon icon-sqft">
              <img src={sqft} alt="Logo" />
            </span>
            <span>
              {home.acfQuickPossessions.squareFootage} <br />
              SQFT
            </span>
          </p>
          <p>
            <span className="icon icon-bed">
              <img src={bed} alt="Logo" />
            </span>
            <span>
              {home.acfQuickPossessions.numberOfBedrooms} <br />
              BEDROOM
            </span>
          </p>
          <p>
            <span className="icon icon-bath">
              <img src={bath} alt="Logo" />
            </span>
            <span>
              {home.acfQuickPossessions.numberOfBathrooms} <br />
              BATHROOM
            </span>
          </p>
        </div>
        <div className="content__meta">
          <p className="content__meta--address">
            {home.acfQuickPossessions.address}
          </p>
          <p>{timeframe} possession</p>
          <p>&#36;{priceComma}</p>
        </div>
      </div>
    </ShowHomeStyled>
  )
}

const ShowHomeStyled = styled(Link)`
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
        margin-bottom: 2rem;
        font-weight: bold;
      }
    }

    &__details {
      display: flex;

      p {
        ${B2Grey};
        width: 100%;
        display: flex;
        align-items: center;
        padding: 0 1rem;
        border-right: 0.1rem solid ${colors.colorAlt};
        line-height: 1;

        &:first-of-type {
          padding-left: 0;
        }

        &:last-of-type {
          border-right: none;
        }

        .icon {
          display: inline-block;
          width: 2.5rem;
          margin-right: 1rem;
        }
      }
    }

    &__meta {
      p {
        ${B1Grey};
        margin: 0;
      }

      &--address {
        margin-bottom: 2.5rem !important;
      }
    }

    &__type {
      p {
        ${B1Grey};
        margin: 0;
      }
    }
  }
`

export default HomeDisplay