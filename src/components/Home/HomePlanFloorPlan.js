import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { B2Black, colors, standardWrapper } from "../../styles/helpers"

const HomePlanFloorPlan = ({ home }) => {
  const floorImg = getImage(
    home.acfHomePlans.floorPlanImage.localFile?.childImageSharp?.gatsbyImageData
  )
  const floorImgAlt = home.acfHomePlans.floorPlanImage.altText
  return (
    <SectionStyled>
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
  }
`

export default HomePlanFloorPlan
