import React, { useState, useContext, useEffect } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  B1Grey,
  colors,
  H4Navy,
  B2Grey,
  B1White,
} from "../../../styles/helpers"
import { UserContext } from "../../../context/UserContext"

import sqft from "../../../images/icons/sqft.png"
import bed from "../../../images/icons/bed.png"
import bath from "../../../images/icons/bath.png"
import widthIcon from "../../../images/icons/width.png"
import Heart from "../../Images/Heart"

const HomeDisplay = ({ home }) => {
  const [isLiked, setIsLiked] = useState(false)
  const [userState] = useContext(UserContext)

  const imgSrc = getImage(
    home.acfHomePlans.mainImage.localFile.childImageSharp.gatsbyImageData
  )
  const imgAlt = home.acfHomePlans.mainImage.altText

  useEffect(() => {
    if (
      userState.profile &&
      userState.profile.home_plans &&
      userState.profile.home_plans.length > 0
    ) {
      const res = userState.profile.home_plans.find(plan => {
        return parseInt(plan.wordpress_id) === home.databaseId
      })

      if (!res) {
        setIsLiked(false)
      } else {
        setIsLiked(true)
      }
    }
  }, [userState.profile])

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
          {isLiked && (
            <div className="liked">
              <div className="liked-heart">
                <Heart />
              </div>
            </div>
          )}
        </div>
        {home.acfHomePlans.optionalAddedNoteReq && (
          <OptionalNotes className="optional-notes">
            <p>{home.acfHomePlans.optionalAddedNote}</p>
          </OptionalNotes>
        )}
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
              {home.acfHomePlans.squareFootage} <br />
              SQFT
            </span>
          </p>
          <p>
            <span className="icon icon-bed">
              <img src={bed} alt="Logo" />
            </span>
            <span>
              {home.acfHomePlans.numberOfBedrooms} <br />
              BEDROOM
            </span>
          </p>
          <p>
            <span className="icon icon-bath">
              <img src={bath} alt="Logo" />
            </span>
            <span>
              {home.acfHomePlans.numberOfBathrooms} <br />
              BATHROOM
            </span>
          </p>
          {home.acfHomePlans.floorPlanWidth ? (
            <p>
              <span className="icon icon-width">
                <img src={widthIcon} alt="Logo" />
              </span>
              <span>{home.acfHomePlans.floorPlanWidth} FT WIDE LOT</span>
            </p>
          ) : null}
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

const OptionalNotes = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 0.5rem 1rem;
  background-color: rgba(66, 69, 74, 0.7);

  p {
    ${B1White};
    margin: 0;
  }
`

const HomePlanStyled = styled(Link)`
  width: 100%;
  margin-bottom: 5rem;
  border: solid 0.3rem #a2a3a5;
  ${"" /* box-shadow: 0.3rem 0.5rem 0.6rem 0 rgba(0, 0, 0, 0.3); */}
  transition: all 0.3s ease-out;
  background-color: #efefef;

  @media (min-width: 768px) {
    width: calc((100% / 2) - 2rem);
    margin: 1rem;
  }

  @media (min-width: 1025px) {
    width: calc((100% / 2) - 2rem);
    margin: 1rem;
  }

  @media (min-width: 1200px) {
    width: calc((100% / 3) - 2rem);
    margin: 1rem;
  }

  &:hover {
    box-shadow: 0.3rem 0.5rem 1rem 0 rgba(0, 0, 0, 0.6);
    box-shadow: 3px 7px 9px 0 rgba(77, 88, 113, 0.55);
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

      .liked {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 5rem;
        height: 5rem;
        padding: 0.75rem;
        background-color: rgba(66, 69, 74, 0.9);

        .liked-heart {
          position: relative;
          width: 3rem;
          height: 3rem;
          margin: auto;

          div.gatsby-image-wrapper {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }

  .content {
    width: 100%;
    padding: 2rem 1rem;

    @media (min-width: 768px) {
      padding: 2rem 3rem;
    }

    &__title {
      h2 {
        ${H4Navy};
        margin-bottom: 2rem;
        font-weight: bold;
      }
    }

    &__details {
      display: flex;
      flex-wrap: wrap;

      p {
        ${B2Grey};
        width: 33.3333%;
        display: flex;
        align-items: center;
        padding: 0 1rem;
        border-right: 0.1rem solid ${colors.colorAlt};
        font-size: 1.2rem;
        line-height: 1;

        @media (min-width: 768px) {
          ${B2Grey};
        }

        &:first-of-type {
          padding-left: 0;
        }

        &:last-of-type,
        &:nth-of-type(3) {
          border-right: none;
        }

        &:nth-of-type(4) {
          width: 100%;
          padding-left: 0;
        }

        .icon {
          display: inline-block;
          width: 2.5rem;
          margin-right: 1rem;
        }
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
