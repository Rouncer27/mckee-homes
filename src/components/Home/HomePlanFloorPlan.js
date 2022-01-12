import React, { useContext, useState, useEffect } from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { UserContext } from "../../context/UserContext"
import { AlertContext } from "../../context/AlertContext"

import {
  B1Navy,
  B2Black,
  B2Grey,
  Btn1Grey,
  colors,
  H1Navy,
  B1White,
  standardWrapper,
  B1Black,
  Btn1Primary,
} from "../../styles/helpers"
import whiteHeart from "../../images/heart-white.png"
import redHeart from "../../images/heart-red.png"
import Heart from "../Images/Heart"
import addPlan from "../AppRoutes/AppActions/addPlan"
import JoinModal from "../Modals/JoinModal"

const HomePlanFloorPlan = ({
  home,
  homeType,
  homeId,
  floorPlanPdf,
  title,
  propelFloorPlanReq,
  propelFloorPlan,
  signatureFloorPlanReq,
  signatureFloorPlan,
}) => {
  const [floorPlanDisplay, setFloorPlanDisplay] = useState("propel")
  let propel
  let signature

  useEffect(() => {
    if (propelFloorPlanReq) {
      setFloorPlanDisplay("propel")
    } else if (signatureFloorPlanReq) {
      setFloorPlanDisplay("signature")
    } else {
      setFloorPlanDisplay("")
    }
  }, [])

  if (propelFloorPlanReq) {
    propel = getImage(
      propelFloorPlan.localFile?.childImageSharp?.gatsbyImageData
    )
  }

  if (signatureFloorPlanReq) {
    signature = getImage(
      signatureFloorPlan.localFile?.childImageSharp?.gatsbyImageData
    )
  }

  let displayImage

  if (floorPlanDisplay === "propel") {
    displayImage = (
      <GatsbyImage
        image={propel}
        alt={``}
        layout="fullWidth"
        formats={["auto", "webp", "avif"]}
      />
    )
  } else if (floorPlanDisplay === "signature") {
    displayImage = (
      <GatsbyImage
        image={signature}
        alt={``}
        layout="fullWidth"
        formats={["auto", "webp", "avif"]}
      />
    )
  }

  // for the lick button. //
  const [isLiked, setIsLiked] = useState(false)
  const [isJoinActive, setIsJoinActive] = useState(false)
  const [userState, userDispatch] = useContext(UserContext)
  const [, alertDispatch] = useContext(AlertContext)

  const handleOnClick = async () =>
    await addPlan(home, userState, userDispatch, alertDispatch, homeType)

  const alreadyLiked = () => {
    if (homeType === "home-plans") {
      if (
        userState.profile &&
        userState.profile.home_plans &&
        userState.profile.home_plans.length > 0
      ) {
        const res = userState.profile.home_plans.find(
          plan => parseInt(plan.wordpress_id) === homeId
        )

        if (!res) {
          setIsLiked(false)
        } else {
          setIsLiked(true)
        }
      }
    } else if (homeType === "quick-possessions") {
      if (
        userState.profile &&
        userState.profile.quick_possessions &&
        userState.profile.quick_possessions.length > 0
      ) {
        const res = userState.profile.quick_possessions.find(
          plan => parseInt(plan.wordpress_id) === homeId
        )

        if (!res) {
          setIsLiked(false)
        } else {
          setIsLiked(true)
        }
      }
    } else if (homeType === "show-homes") {
      if (
        userState.profile &&
        userState.profile.show_homes &&
        userState.profile.show_homes.length > 0
      ) {
        const res = userState.profile.show_homes.find(
          plan => parseInt(plan.wordpress_id) === homeId
        )

        if (!res) {
          setIsLiked(false)
        } else {
          setIsLiked(true)
        }
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

  if (floorPlanDisplay === "") return null

  return (
    <>
      <SectionStyled>
        <div className="floorplan-wrapper">
          <div className="floorplan-wrapper__inner">
            <div className="floorplan-wrapper__title">
              <h2>Floor Plan</h2>
            </div>
            <div className="floorplan-wrapper__plan">
              <div className="floorplan-wrapper__plan--title">
                <p>{title}</p>
              </div>
              <div className="floorplan-wrapper__plan--nav">
                <span>Specification Grade: </span>
                {propelFloorPlanReq && (
                  <button
                    className={
                      floorPlanDisplay === "propel" ? "active-plan" : ""
                    }
                    onClick={() => setFloorPlanDisplay("propel")}
                  >
                    Propel
                  </button>
                )}
                {signatureFloorPlanReq && (
                  <button
                    className={
                      floorPlanDisplay === "signature" ? "active-plan" : ""
                    }
                    onClick={() => setFloorPlanDisplay("signature")}
                  >
                    Signature
                  </button>
                )}
              </div>

              <div className="floorplan-wrapper__plan--image">
                {displayImage}
              </div>
            </div>
            <div className="floorplan-wrapper__like">
              <a
                className="floorplan-wrapper__like--download"
                target="_blank"
                rel="noreferrer"
                href={floorPlanPdf}
              >
                Download Floor Plan
              </a>

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
                  <span className="heart-white">
                    <img src={whiteHeart} alt="" />
                  </span>
                  <span className="heart-red">
                    <img src={redHeart} alt="" />
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>
      </SectionStyled>
      {isJoinActive && <JoinModal closeModal={setIsJoinActive} />}
    </>
  )
}

const SectionStyled = styled.section`
  .floorplan-wrapper {
    background-color: #efefef;

    &__title {
      width: 100%;
      border-bottom: 0.25rem solid ${colors.colorTertiary};

      h2 {
        ${B2Black};
      }
    }

    &__inner {
      ${standardWrapper};
    }

    &__plan {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      width: 100%;

      p {
        ${H1Navy};
        margin-top: 2rem;
        margin-bottom: 2rem;
      }

      &--title {
        width: 50%;
      }

      &--nav {
        width: 50%;

        span {
          ${B1Navy};
        }

        button {
          ${B1Navy};
          display: inline-block;
          margin: 0 0.5rem;
          padding: 0.5rem 2rem;
          transition: all 0.3s ease-out;
          background-color: transparent;
          border: none;
          cursor: pointer;

          &:hover {
            background-color: ${colors.colorTertiary};
            color: ${colors.white};
          }

          &.active-plan {
            background-color: ${colors.colorTertiary};
            color: ${colors.white};
            cursor: inherit;
          }
        }
      }

      &--image {
        max-width: 60rem;
        margin: auto;
      }
    }

    &__like {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: flex-start;
      width: 100%;
      margin-top: 3rem;
      padding-top: 2.5rem;
      border-top: solid 0.25rem ${colors.colorTertiary};

      &--download {
        ${Btn1Grey};
        margin-right: 2.5rem;
      }

      .my-favs-actions__save {
        ${Btn1Primary};
        padding-right: 5rem;
        position: relative;

        span {
          position: absolute;
          top: 1.5rem;
          right: 1rem;
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

      .my-favs-actions__heart {
        display: inline-block;
        width: 4rem;
      }
    }
  }
`

export default HomePlanFloorPlan
