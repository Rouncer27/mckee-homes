import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  B1Navy,
  B2Black,
  B2Grey,
  Btn1Grey,
  colors,
  H1Navy,
  standardWrapper,
} from "../../styles/helpers"

const HomePlanFloorPlan = ({
  floorPlanPdf,
  title,
  propelFloorPlanReq,
  propelFloorPlan,
  designerFloorPlanReq,
  designerFloorPlan,
  signatureFloorPlanReq,
  signatureFloorPlan,
}) => {
  const [floorPlanDisplay, setFloorPlanDisplay] = useState("propel")
  let propel
  let designer
  let signature

  useEffect(() => {
    if (propelFloorPlanReq) {
      setFloorPlanDisplay("propel")
    } else if (designerFloorPlanReq) {
      setFloorPlanDisplay("designer")
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

  if (designerFloorPlanReq) {
    designer = getImage(
      designerFloorPlan.localFile?.childImageSharp?.gatsbyImageData
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
  } else if (floorPlanDisplay === "designer") {
    displayImage = (
      <GatsbyImage
        image={designer}
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

  if (floorPlanDisplay === "") return null

  return (
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
              <span>Attributes: </span>
              {propelFloorPlanReq && (
                <button onClick={() => setFloorPlanDisplay("propel")}>
                  Propel
                </button>
              )}
              {designerFloorPlanReq && (
                <button onClick={() => setFloorPlanDisplay("designer")}>
                  Designer
                </button>
              )}
              {signatureFloorPlanReq && (
                <button onClick={() => setFloorPlanDisplay("signature")}>
                  Signature
                </button>
              )}
            </div>

            <div className="floorplan-wrapper__plan--image">{displayImage}</div>
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
            <button
              className="floorplan-wrapper__like--save"
              onClick={() => console.log("LIKE!!")}
            >
              Save Home
            </button>
          </div>
        </div>
      </div>
    </SectionStyled>
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
      p {
        ${H1Navy};
        margin-top: 2rem;
        margin-bottom: 2rem;
      }

      &--nav {
        span {
          ${B1Navy};
        }

        button {
          ${B1Navy};
          display: inline-block;
          padding: 0.5rem 2rem;
          background-color: transparent;
          border: none;
          cursor: pointer;
        }
      }
    }

    &__like {
      width: 100%;
      margin-top: 3rem;
      padding-top: 2.5rem;
      border-top: solid 0.25rem ${colors.colorTertiary};

      &--download {
        ${Btn1Grey};
        margin-right: 2.5rem;
      }

      &--save {
        ${B2Grey};
        border: none;
        background-color: transparent;
        text-transform: uppercase;
      }
    }
  }
`

export default HomePlanFloorPlan
