import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  B2Black,
  B1White,
  B2Grey,
  Btn1Grey,
  colors,
  H1Navy,
  standardWrapper,
} from "../../styles/helpers"
import { Link } from "gatsby"

const HomePlanFloorPlan = ({ home }) => {
  const floorImg = getImage(
    home.acfHomePlans.floorPlanImage.localFile?.childImageSharp?.gatsbyImageData
  )
  const floorImgAlt = home.acfHomePlans.floorPlanImage.altText
  return (
    <SectionStyled>
      <div className="back-btn">
        <Link to="/home-plans">Back To Listings</Link>
      </div>
      <div className="floorplan-wrapper">
        <div className="floorplan-wrapper__inner">
          <div className="floorplan-wrapper__title">
            <h2>Floor Plan</h2>
          </div>
          <div className="floorplan-wrapper__plan">
            <p>{home.title}</p>

            <div className="floorplan-wrapper__plan--image">
              <GatsbyImage
                image={floorImg}
                alt={floorImgAlt}
                layout="fullWidth"
                formats={["auto", "webp", "avif"]}
              />
            </div>
          </div>
          <div className="floorplan-wrapper__like">
            <a
              className="floorplan-wrapper__like--download"
              target="_blank"
              rel="noreferrer"
              href={home.acfHomePlans.floorPlanPdf.localFile.publicURL}
            >
              Download Floor Plan
            </a>
            <button
              className="floorplan-wrapper__like--save"
              onClick={() => console.log("LIKE!!")}
            >
              Save Floor Plan
            </button>
          </div>
        </div>
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  .back-btn {
    padding: 4.5rem 2rem;
    background-color: #a5b6ba;
    text-align: center;
    text-transform: uppercase;

    a {
      ${B1White};
    }
  }

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
