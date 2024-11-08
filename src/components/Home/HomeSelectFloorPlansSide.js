import React, { useState, useEffect } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import {
  colors,
  H1Navy,
  H3Navy,
  B1Black,
  fonts,
  BigWrapper,
} from "../../styles/helpers"

import MainFloor from "./SelectorParts/MainFloor"
import UpperFloor from "./SelectorParts/UpperFloor"
import BasementFloor from "./SelectorParts/BasementFloor"
import Form from "./SelectorParts/Form"
gsap.registerPlugin(ScrollTrigger)

const HomeSelectFloorPlansSide = ({ data }) => {
  const [isActive, setIsActive] = useState(false)
  const [selectedPlans, setSeletedPlans] = useState({
    mainFloor: "",
    mainFloorTitle: "",
    upperFloor: "",
    upperFloorTitle: "",
    basement: "",
    basementTitle: "",
  })

  useEffect(() => {
    let container = document.querySelector(".select-floorplan-plans")
    let races = document.querySelector(".select-floorplan-plans-slides")

    function getScrollAmount() {
      let racesWidth = races.scrollWidth
      return -(racesWidth - window.innerWidth)
    }

    const tween = gsap.to(races, {
      x: getScrollAmount,
      duration: 3,
      ease: "none",
    })

    let mm = gsap.matchMedia()

    mm.add(
      {
        isMobile: "(max-width: 767px)",
        isDesktop: "(min-width: 768px)",
      },
      context => {
        let { isMobile, isDesktop } = context.conditions

        if (isDesktop) {
          console.log("Hello")
          ScrollTrigger.create({
            trigger: container,
            start: "top 0%",
            end: () => `+=${getScrollAmount() * -1}`,
            pin: true,
            animation: tween,
            scrub: 1,
            invalidateOnRefresh: true,
            markers: false,
          })
        }
      }
    )

    setSeletedPlans({
      mainFloor:
        data.acfHomePlans.floorPlansSelectionComponent.mainFloor[0].planPdf
          .mediaItemUrl,
      mainFloorTitle:
        data.acfHomePlans.floorPlansSelectionComponent.mainFloor[0].planTitle,
      upperFloor:
        data.acfHomePlans.floorPlansSelectionComponent.upperFloorFloor[0]
          .planPdf.mediaItemUrl,
      upperFloorTitle:
        data.acfHomePlans.floorPlansSelectionComponent.upperFloorFloor[0]
          .planTitle,
      basement:
        data.acfHomePlans.floorPlansSelectionComponent.basementFloorFloor[0]
          .planPdf.mediaItemUrl,
      basementTitle:
        data.acfHomePlans.floorPlansSelectionComponent.basementFloorFloor[0]
          .planTitle,
    })
  }, [])

  const setPlansBackToStart = () => {
    setSeletedPlans({
      mainFloor:
        data.acfHomePlans.floorPlansSelectionComponent.mainFloor[0].planPdf
          .mediaItemUrl,
      mainFloorTitle:
        data.acfHomePlans.floorPlansSelectionComponent.mainFloor[0].planTitle,
      upperFloor:
        data.acfHomePlans.floorPlansSelectionComponent.upperFloorFloor[0]
          .planPdf.mediaItemUrl,
      upperFloorTitle:
        data.acfHomePlans.floorPlansSelectionComponent.upperFloorFloor[0]
          .planTitle,
      basement:
        data.acfHomePlans.floorPlansSelectionComponent.basementFloorFloor[0]
          .planPdf.mediaItemUrl,
      basementTitle:
        data.acfHomePlans.floorPlansSelectionComponent.basementFloorFloor[0]
          .planTitle,
    })
  }

  const mainImg = getImage(
    data?.acfHomePlans?.floorPlansSelectionComponent?.mainFloorBackgroundImage
      ?.localFile?.childImageSharp?.gatsbyImageData
  )
  const mainImgAlt =
    data?.acfHomePlans?.floorPlansSelectionComponent?.mainFloorBackgroundImage
      ?.altText

  const upperImg = getImage(
    data?.acfHomePlans?.floorPlansSelectionComponent?.upperFloorBackgroundImage
      ?.localFile?.childImageSharp?.gatsbyImageData
  )
  const upperImgAlt =
    data?.acfHomePlans?.floorPlansSelectionComponent?.upperFloorBackgroundImage
      ?.altText

  const baseImg = getImage(
    data?.acfHomePlans?.floorPlansSelectionComponent
      ?.basementFloorBackgroundImage?.localFile?.childImageSharp
      ?.gatsbyImageData
  )
  const baseImgAlt =
    data?.acfHomePlans?.floorPlansSelectionComponent
      ?.basementFloorBackgroundImage?.altText

  return (
    <StyledSection className="select-floorplan-main-container">
      <div className="select-floorplan-wrapper">
        <div className="select-floorplan-title">
          <div className="select-floorplan-title-inner">
            <h2>{data.title}</h2>
          </div>
        </div>
        <div className="select-floorplan-plans">
          <div className="select-floorplan-plans-slides">
            <div id="plan-slides" className="select-floorplan-plans-main">
              <div className="select-floorplan-plans-main-wrapper">
                {data?.acfHomePlans?.floorPlansSelectionComponent?.mainFloor
                  ?.length > 0 && (
                  <MainFloor
                    data={
                      data?.acfHomePlans?.floorPlansSelectionComponent
                        ?.mainFloor
                    }
                    setSeletedPlans={setSeletedPlans}
                  />
                )}
              </div>
              <div className="select-floorplan-plans-main-bgimage">
                <GatsbyImage
                  image={mainImg}
                  alt={mainImgAlt}
                  layout="fullWidth"
                  formats={["auto", "webp", "avif"]}
                />
              </div>
              <div className="select-floorplan-plans-main-overlay" />
            </div>
            <div id="plan-slides" className="select-floorplan-plans-upper">
              <div className="select-floorplan-plans-upper-wrapper">
                {data?.acfHomePlans?.floorPlansSelectionComponent
                  ?.upperFloorFloor?.length > 0 && (
                  <UpperFloor
                    data={
                      data?.acfHomePlans?.floorPlansSelectionComponent
                        ?.upperFloorFloor
                    }
                    setSeletedPlans={setSeletedPlans}
                  />
                )}
              </div>
              <div className="select-floorplan-plans-upper-bgimage">
                <GatsbyImage
                  image={upperImg}
                  alt={upperImgAlt}
                  layout="fullWidth"
                  formats={["auto", "webp", "avif"]}
                />
              </div>
              <div className="select-floorplan-plans-upper-overlay" />
            </div>
            <div id="plan-slides" className="select-floorplan-plans-basement">
              <div className="select-floorplan-plans-basement-wrapper">
                {data?.acfHomePlans?.floorPlansSelectionComponent
                  ?.basementFloorFloor?.length > 0 && (
                  <BasementFloor
                    data={
                      data?.acfHomePlans?.floorPlansSelectionComponent
                        ?.basementFloorFloor
                    }
                    setSeletedPlans={setSeletedPlans}
                  />
                )}
              </div>
              <div className="select-floorplan-plans-basement-bgimage">
                <GatsbyImage
                  image={baseImg}
                  alt={baseImgAlt}
                  layout="fullWidth"
                  formats={["auto", "webp", "avif"]}
                />
              </div>
              <div className="select-floorplan-plans-basement-overlay" />
            </div>
            <div id="plan-slides" className="select-floorplan-plans-form">
              <Form
                selectedPlans={selectedPlans}
                setPlansBackToStart={setPlansBackToStart}
                isActive={isActive}
                setIsActive={setIsActive}
              />
            </div>
            {isActive && (
              <div className="select-floorplan-plans-main-submit-overlay" />
            )}
          </div>
        </div>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  padding: 2.5rem 0;

  .select-floorplan-plans-main-submit-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    background: rgba(0, 0, 0, 0.5);
    z-index: 9;
  }

  .select-floorplan-plans-form {
    position: relative;
    z-index: 10 !important;
  }

  .select-floorplan-wrapper {
    @media (min-width: 768px) {
      overflow-x: hidden;
      overflow-y: hidden;
    }
  }

  .select-floorplan-plans-slides {
    @media (min-width: 768px) {
      width: fit-content;
      display: flex;
      flex-wrap: nowrap;
      max-height: 80vh;
      padding: 0 5rem;
    }

    #plan-slides {
      width: calc(100% - 2rem);
      margin: 1rem;

      @media (min-width: 768px) {
        position: relative;
        width: 60vw;
        height: 80vh;
        margin: 0;
        z-index: 5;
      }
    }
  }

  .select-floorplan-wrapper {
    width: 100%;
  }

  .select-floorplan-title {
    ${BigWrapper};
    padding-bottom: 0;
    width: 100%;

    &-inner {
      width: 100%;
      padding-left: 7.5rem;

      h2 {
        ${H1Navy};
        margin: 0;
        margin-bottom: 1rem;
      }
    }
  }

  .slick-list {
    padding-left: 10rem !important;
  }

  .select-floorplan-plans {
    width: calc(100%);

    &-main,
    &-upper,
    &-basement {
      position: relative;
    }

    &-main-wrapper,
    &-upper-wrapper,
    &-basement-wrapper {
      position: relative;
      z-index: 10;
    }

    &-main-bgimage,
    &-upper-bgimage,
    &-basement-bgimage {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;

      .gatsby-image-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }

    &-main-overlay,
    &-upper-overlay,
    &-basement-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.75);
      z-index: 1;
    }

    &-main {
      width: 100%;

      &-title {
        width: 100%;
        border-top: 0.2rem solid ${colors.colorPrimary};
        border-bottom: 0.2rem solid ${colors.colorPrimary};

        h3 {
          ${H3Navy};
          margin: 0.65rem 0;
          font-weight: bold;
          text-transform: uppercase;
        }
      }

      &-selector {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;

        &-current-img {
          width: calc(40%);
        }

        &-options {
          width: calc(60% - 10rem);
          margin-right: 5rem;
          margin-left: 5rem;
          padding-top: 5rem;

          p {
            ${B1Black};
            max-width: 45rem;
            text-transform: uppercase;
            font-weight: bold;
            border-bottom: 0.1rem solid ${colors.black};
          }
        }
      }
    }
  }
`

export default HomeSelectFloorPlansSide
