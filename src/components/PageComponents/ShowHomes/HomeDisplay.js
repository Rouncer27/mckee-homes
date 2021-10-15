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
import Heart from "../../Images/Heart"

const HomeDisplay = ({ home }) => {
  const [isLiked, setIsLiked] = useState(false)
  const [userState] = useContext(UserContext)

  const imgSrc = getImage(
    home.acfShowHomes.mainImage.localFile.childImageSharp.gatsbyImageData
  )
  const imgAlt = home.acfShowHomes.mainImage.altText

  useEffect(() => {
    if (
      userState.profile &&
      userState.profile.show_homes &&
      userState.profile.show_homes.length > 0
    ) {
      const res = userState.profile.show_homes.find(
        plan => parseInt(plan.wordpress_id) === home.databaseId
      )

      if (!res) {
        setIsLiked(false)
      } else {
        setIsLiked(true)
      }
    }
  }, [userState.profile])

  return (
    <ShowHomeStyled to={`/show-homes/${home.slug}`}>
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
        {home.acfShowHomes.optionalAddedNoteReq && (
          <OptionalNotes className="optional-notes">
            <p>{home.acfShowHomes.optionalAddedNote}</p>
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
              {home.acfShowHomes.squareFootage} <br />
              SQFT
            </span>
          </p>
          <p>
            <span className="icon icon-bed">
              <img src={bed} alt="Logo" />
            </span>
            <span>
              {home.acfShowHomes.numberOfBedrooms} <br />
              BEDROOM
            </span>
          </p>
          <p>
            <span className="icon icon-bath">
              <img src={bath} alt="Logo" />
            </span>
            <span>
              {home.acfShowHomes.numberOfBathrooms} <br />
              BATHROOM
            </span>
          </p>
        </div>
        <div className="content__address">
          <p>{home.acfShowHomes.address}</p>
        </div>
      </div>
    </ShowHomeStyled>
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

    &__address {
      p {
        ${B1Grey};
        margin: 0;
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
