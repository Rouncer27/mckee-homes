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
  B1White,
} from "../../styles/helpers"
import scrollTo from "gatsby-plugin-smoothscroll"

import sqft from "../../images/icons/sqft.png"
import bed from "../../images/icons/bed.png"
import bath from "../../images/icons/bath.png"
import whiteHeart from "../../images/heart-white.png"
import redHeart from "../../images/heart-red.png"
import widthIcon from "../../images/icons/width.png"
import Heart from "../Images/Heart"
import HomeSlider from "./HomeSlider"

import addPlan from "../AppRoutes/AppActions/addPlan"
import JoinModal from "../Modals/JoinModal"

const HomePlanHeader = ({ home }) => {
  const [isLiked, setIsLiked] = useState(false)
  const [isJoinActive, setIsJoinActive] = useState(false)
  const [userState, userDispatch] = useContext(UserContext)
  const [, alertDispatch] = useContext(AlertContext)

  const mainImg = getImage(
    home.acfHomePlans.mainImage.localFile.childImageSharp.gatsbyImageData
  )
  const mainImgAlt = home.acfHomePlans.mainImage.altText

  const handleOnClick = async () =>
    await addPlan(
      home,
      userState,
      userDispatch,
      alertDispatch,
      "home-plans",
      home.acfHomePlans.mainImage.mediaItemUrl
    )

  const alreadyLiked = () => {
    if (
      userState.profile &&
      userState.profile.home_plans &&
      userState.profile.home_plans.length > 0
    ) {
      const res = userState.profile.home_plans.find(
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

  const imageGallery = home.acfHomePlans.mainImageGallery
    ? home.acfHomePlans.mainImageGallery
    : []
  const gallery = [home.acfHomePlans.mainImage, ...imageGallery]

  return (
    <>
      <StyledSection>
        <div className="wrapper">
          <div className="image">
            <div>
              {/* <GatsbyImage
                image={mainImg}
                alt={mainImgAlt}
                layout="fullWidth"
                formats={["auto", "webp", "avif"]}
              /> */}
              <HomeSlider images={gallery} />
            </div>
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
                <button
                  className="my-favs-actions__save"
                  onClick={handleOnClick}
                >
                  Save Home
                </button>
              )}
            </div>
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
                <span>{home.acfHomePlans.squareFootage} SQFT</span>
              </p>
              <p>
                <span className="icon icon-bed">
                  <img src={bed} alt="Logo" />
                </span>
                <span>{home.acfHomePlans.numberOfBedrooms} BEDROOM</span>
              </p>
              <p>
                <span className="icon icon-bath">
                  <img src={bath} alt="Logo" />
                </span>
                <span>{home.acfHomePlans.numberOfBathrooms} BATHROOM</span>
              </p>

              {home.acfHomePlans.floorPlanWidth ? (
                <p>
                  <span className="icon icon-width">
                    <img src={widthIcon} alt="Logo" />
                  </span>
                  <span>{home.acfHomePlans.floorPlanWidth} FT WIDE</span>
                </p>
              ) : null}
            </div>

            {home.acfHomePlans.floorPlanPdf.mediaItemUrl !== null ||
            home.acfHomePlans.virtualTour !== null ? (
              <div className="header__plans">
                {home.acfHomePlans.floorPlanPdf.mediaItemUrl && (
                  <a
                    className="header__plans--pdf"
                    target="_blank"
                    rel="noreferrer"
                    href={home.acfHomePlans.floorPlanPdf.mediaItemUrl}
                  >
                    Download Floor Plan
                  </a>
                )}
                {home.acfHomePlans.virtualTour && (
                  <a
                    className="header__plans--tour"
                    target="_blank"
                    rel="noreferrer"
                    href={home.acfHomePlans.virtualTour}
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
            </div>
          </div>
        </div>
      </StyledSection>
      {isJoinActive && <JoinModal closeModal={setIsJoinActive} />}
    </>
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
      }

      h1 {
        ${H1Navy};
        margin: 0;
      }
    }

    &__sizes {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      width: 100%;
      padding-top: 2.5rem;

      p {
        ${B2Grey};
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-right: 1rem;
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

    &__more {
      margin-top: 4rem;

      button {
        ${B2Black};
        background-color: transparent;
        border: none;
        cursor: pointer;
      }
    }
  }
`

export default HomePlanHeader
