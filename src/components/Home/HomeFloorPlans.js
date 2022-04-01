import React, { useContext, useState, useEffect } from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { UserContext } from "../../context/UserContext"
import { AlertContext } from "../../context/AlertContext"
import {
  B1Navy,
  B2Black,
  B2White,
  Btn1Grey,
  colors,
  H1Navy,
  standardWrapper,
  Btn1Primary,
} from "../../styles/helpers"
import whiteHeart from "../../images/heart-white.png"
import redHeart from "../../images/heart-red.png"
import Heart from "../Images/Heart"
import addPlan from "../AppRoutes/AppActions/addPlan"
import JoinModal from "../Modals/JoinModal"

const HomeFloorPlans = ({
  home,
  homeType,
  homeId,
  data,
  title,
  floorPlanPdf,
  appImage,
  colors,
}) => {
  console.log("TREVOR TREOVR Home Floor Plans", data)
  const [floorPlanDisplay, setFloorPlanDisplay] = useState(0)

  // ********************************************** Need to check if this plan is already liked ********************************************** //

  // for the like button. //
  const [isLiked, setIsLiked] = useState(false)
  const [isJoinActive, setIsJoinActive] = useState(false)
  const [userState, userDispatch] = useContext(UserContext)
  const [, alertDispatch] = useContext(AlertContext)

  const handleOnClick = async () =>
    await addPlan(
      home,
      userState,
      userDispatch,
      alertDispatch,
      homeType,
      appImage
    )

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

  // ********************************************** END END Need to check if this plan is already liked END END ********************************************** //

  const handleOnChange = event => {
    setFloorPlanDisplay(event.target.value)
  }

  if (data === null) return

  let displayImage = getImage(
    data[floorPlanDisplay]?.floorPlanImage?.localFile?.childImageSharp
      ?.gatsbyImageData
  )
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
                <InputField>
                  <label for="floor-plan">Specification Grade:</label>
                  <select
                    name="floor-plans"
                    id="floor-plan"
                    onChange={handleOnChange}
                  >
                    {data.map((plan, index) => {
                      return <option value={index}>{plan.floorPlanName}</option>
                    })}
                  </select>
                </InputField>
              </div>
              <div className="floorplan-wrapper__plan--image">
                <GatsbyImage
                  image={displayImage}
                  alt={``}
                  layout="fullWidth"
                  formats={["auto", "webp", "avif"]}
                />
              </div>
            </div>
            <div className="floorplan-wrapper__like">
              {floorPlanPdf && (
                <a
                  className="floorplan-wrapper__like--download"
                  target="_blank"
                  rel="noreferrer"
                  href={floorPlanPdf}
                >
                  Download Floor Plan
                </a>
              )}

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
        width: 100%;

        @media (min-width: 768px) {
          width: 50%;
        }
      }

      &--nav {
        width: 100%;

        @media (min-width: 768px) {
          width: 50%;
        }

        span {
          ${B1Navy};
          text-transform: uppercase;
        }

        button {
          ${B1Navy};
          display: inline-block;
          margin: 0 0.5rem;
          padding: 0.5rem 2rem;
          transition: all 0.3s ease-out;
          background-color: transparent;
          border: 0.1rem solid ${colors.colorPrimary};
          border-radius: 0.5rem;
          text-transform: uppercase;
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
        margin-bottom: 2.5rem;
        margin-right: 2.5rem;

        @media (min-width: 768px) {
          margin-bottom: 0;
        }
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

const InputField = styled.div`
  label {
    ${B1Navy};
    margin-right: 1rem;
    text-transform: uppercase;

    select {
      display: block;
      margin-left: 1rem;
      padding: 0.9rem 1rem;
      border-radius: 0.2rem;
      color: #444;
      margin-left: 0;
      margin-right: 0;
      width: 100%;
      border: 0.3rem ${colors.colorPrimary} solid;
    }
  }
`

export default HomeFloorPlans
