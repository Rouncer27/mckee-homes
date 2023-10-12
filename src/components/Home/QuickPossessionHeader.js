import React, { useContext, useState, useEffect } from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { UserContext } from "../../context/UserContext"
import { AlertContext } from "../../context/AlertContext"
import {
  B2Black,
  Btn1Grey,
  Btn1Navy,
  colors,
  H1Navy,
  H3Black,
  B2Grey,
  B1Black,
  B1White,
  fontSizer,
} from "../../styles/helpers"
import scrollTo from "gatsby-plugin-smoothscroll"

import sqft from "../../images/icons/sqft.png"
import bed from "../../images/icons/bed.png"
import bath from "../../images/icons/bath.png"
import whiteHeart from "../../images/heart-white.png"
import redHeart from "../../images/heart-red.png"
import Heart from "../Images/Heart"

import addPlan from "../AppRoutes/AppActions/addPlan"
import JoinModal from "../Modals/JoinModal"

const QuickPossessionHeader = ({ home }) => {
  const [isLiked, setIsLiked] = useState(false)
  const [isJoinActive, setIsJoinActive] = useState(false)
  const [userState, userDispatch] = useContext(UserContext)
  const [, alertDispatch] = useContext(AlertContext)

  const mainImg = getImage(
    home.acfQuickPossessions.mainImage.localFile.childImageSharp.gatsbyImageData
  )
  const mainImgAlt = home.acfQuickPossessions.mainImage.altText

  const priceComma = home.acfQuickPossessions.price
    ? home.acfQuickPossessions.price
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    : null

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

  const alreadyLiked = () => {
    if (
      userState.profile &&
      userState.profile.quick_possessions &&
      userState.profile.quick_possessions.length > 0
    ) {
      const res = userState.profile.quick_possessions.find(
        plan => parseInt(plan.wordpress_id) === home.databaseId
      )

      if (!res) {
        setIsLiked(false)
      } else {
        setIsLiked(true)
      }
    }
  }

  useEffect(() => {
    alreadyLiked()
  }, [])

  useEffect(() => {
    alreadyLiked()
  }, [userState.profile])

  const handleOnJoinFavs = () => {
    setIsJoinActive(!isJoinActive)
  }

  const handleOnClick = async () =>
    await addPlan(
      home,
      userState,
      userDispatch,
      alertDispatch,
      "quick-possessions",
      home.acfQuickPossessions.mainImage.mediaItemUrl
    )

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
          <div className="my-favs-actions">
            {isLiked ? (
              <div className="my-favs-actions__heart">
                <Heart />
              </div>
            ) : Object.keys(userState.user).length === 0 ? (
              <button
                className="my-favs-actions__save"
                onClick={handleOnJoinFavs}
              >
                Save Home
                <span className="heart-white">
                  <img src={whiteHeart} alt="" />
                </span>
                <span className="heart-red">
                  <img src={redHeart} alt="" />
                </span>
              </button>
            ) : (
              <button className="my-favs-actions__save" onClick={handleOnClick}>
                Save Home
              </button>
            )}
          </div>
        </div>
        <div className="header">
          <div className="header__title">
            <p>Quick Possessions</p>
            <h1>{home.title}</h1>
            {priceComma && <p className="price">&#36;{priceComma}</p>}
            <p className="disclaimer">
              The images and elevations supplied my not be indicative of
              included items.
            </p>
          </div>
          <div className="header__sizes">
            <p>
              <span className="icon icon-sqft">
                <img src={sqft} alt="Logo" />
              </span>
              <span>{home.acfQuickPossessions.squareFootage} SQFT</span>
            </p>
            <p>
              <span className="icon icon-bed">
                <img src={bed} alt="Logo" />
              </span>
              <span>{home.acfQuickPossessions.numberOfBedrooms} BEDROOM</span>
            </p>
            <p>
              <span className="icon icon-bath">
                <img src={bath} alt="Logo" />
              </span>
              <span>{home.acfQuickPossessions.numberOfBathrooms} BATHROOM</span>
            </p>
          </div>
          <div className="header__address">
            <p className="header__address--details">
              {`${home.acfQuickPossessions.address}, ${home.communities.nodes[0].name}, ${home.communities.nodes[0].acfCommunities.city}`}
            </p>
            {home?.acfQuickPossessions?.homeFeatures?.length > 0 && (
              <p className="header__address--features">
                Home Features: <br />{" "}
                {home?.acfQuickPossessions?.homeFeatures?.map(
                  (feature, index) => {
                    const isLast =
                      index >= home.acfQuickPossessions.homeFeatures.length - 1
                    return (
                      <React.Fragment key={index}>
                        {feature.split(/(?=[A-Z])/).join(" ")}
                        {isLast ? "" : ", "}
                      </React.Fragment>
                    )
                  }
                )}
              </p>
            )}
            <p className="header__address--possession">
              Time to possession: {timeframe}
            </p>
          </div>

          {home.acfQuickPossessions.floorPlanPdf.mediaItemUrl !== null ||
          home.acfQuickPossessions.virtualTour !== null ? (
            <div className="header__plans">
              {home.acfQuickPossessions.floorPlanPdf.mediaItemUrl && (
                <a
                  className="header__plans--pdf"
                  target="_blank"
                  rel="noreferrer"
                  href={home.acfQuickPossessions.floorPlanPdf.mediaItemUrl}
                >
                  Download Floor Plan
                </a>
              )}
              {home.acfQuickPossessions.virtualTour && (
                <a
                  className="header__plans--tour"
                  target="_blank"
                  rel="noreferrer"
                  href={home.acfQuickPossessions.virtualTour}
                >
                  Take A Virtual Tour
                </a>
              )}
            </div>
          ) : null}

          <div className="header__more">
            <button onClick={() => scrollTo("#more-information-form")}>
              <span>&gt; </span>Need More Information?
            </button>
            <button onClick={() => scrollTo("#connect-with-us")}>
              <span>&gt; </span>Connect With Us
            </button>
          </div>
        </div>
      </div>
      {isJoinActive && <JoinModal closeModal={setIsJoinActive} />}
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
    position: relative;
    width: calc(100%);

    @media (min-width: 768px) {
      width: calc(50%);
    }

    .my-favs-actions {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 20rem;
      padding: 0.75rem;
      background-color: rgba(66, 69, 74, 0.7);

      &__save {
        ${B1White};
        position: relative;
        display: block;
        margin: auto;
        background: transparent;
        border: none;
        transition: all 0.3s ease-out;
        text-transform: uppercase;
        cursor: pointer;

        span {
          position: absolute;
          top: 0.25rem;
          right: -3rem;
          display: inline-block;
          width: 2.4rem;
          margin-left: 1rem;
          transition: all 0.3s ease-out;

          img {
            width: 100%;
          }
        }
        .heart-white {
          opacity: 1;
          visibility: visible;
        }

        .heart-red {
          opacity: 0;
          visibility: hidden;
        }

        &:hover {
          color: rgba(255, 0, 0, 1);

          .heart-white {
            opacity: 0;
            visibility: hidden;
          }

          .heart-red {
            opacity: 1;
            visibility: visible;
          }
        }
      }

      &__heart {
        width: 5rem;
        margin: auto;
      }
    }
  }

  .header {
    width: calc(100%);
    margin-right: auto;
    margin-left: 0;
    padding: 0 2rem;

    @media (min-width: 768px) {
      width: calc(50%);
      max-width: 65rem;
      padding: 5rem;
    }

    &__title {
      width: 100%;
      padding: 5rem 0 2.5rem;
      border-bottom: 0.3rem solid ${colors.colorTertiary};

      p {
        ${H3Black};
        margin: 0;
        text-transform: uppercase;
      }

      p.price {
        ${B1Black};
      }

      p.disclaimer {
        ${B2Black};
        ${fontSizer(1, 1.4, 76.8, 150, 1.4)};
        margin: 0;
        text-transform: capitalize;
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
        ${fontSizer(1, 1.4, 76.8, 150, 1.2)};
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-right: 1.5rem;
        margin-left: 0;

        @media (min-width: 768px) {
          margin-right: 5rem;
        }
      }

      .icon {
        width: 2.5rem;
        margin-right: 1rem;
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

      a {
        width: 100%;
        margin-bottom: 2.5rem;

        @media (min-width: 768px) {
          width: auto;
        }
      }
    }

    &__address {
      p {
        ${B1Black};
      }

      &--details {
        margin-top: 2rem;
        margin-bottom: 2rem;
      }

      &--features {
        text-transform: capitalize;
      }
    }

    &__more {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      margin-top: 4rem;

      button {
        ${B2Black};
        background-color: transparent;
        border: none;
        cursor: pointer;

        &:nth-of-type(2) {
          margin-left: 2rem;
        }
      }
    }
  }
`

export default QuickPossessionHeader
