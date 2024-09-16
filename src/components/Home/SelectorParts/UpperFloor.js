import React, { useState, useEffect } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { colors, B2White, B2Navy, B2Black } from "../../../styles/helpers"
import styled from "styled-components"

const UpperFloor = ({ data, setSeletedPlans }) => {
  const [activePlan, setActivePlan] = useState(1)

  const ChangeActivePlan = event => {
    setActivePlan(parseInt(event.target.value, 10))
  }

  useEffect(() => {
    setSeletedPlans(prevState => {
      return {
        ...prevState,
        upperFloor: data[activePlan - 1]?.planPdf?.mediaItemUrl,
        upperFloorTitle: data[activePlan - 1]?.planTitle,
      }
    })
  }, [activePlan])

  return (
    <div>
      <div className="select-floorplan-plans-main-title">
        <h3>Upper Floor</h3>
      </div>
      <div className="select-floorplan-plans-main-selector">
        <div className="select-floorplan-plans-main-selector-current-img">
          {data.map((img, index) => {
            return (
              <div
                key={index}
                style={{ display: activePlan === index + 1 ? "block" : "none" }}
              >
                <GatsbyImage
                  image={getImage(
                    img.planImage.localFile.childImageSharp.gatsbyImageData
                  )}
                  alt={``}
                  layout="fullWidth"
                  formats={["auto", "webp", "avif"]}
                />
              </div>
            )
          })}
        </div>
        <div className="select-floorplan-plans-main-selector-options">
          <RadioStyles>
            <p>Plan Options</p>
            {data.map((optionTitle, index) => {
              return (
                <div key={index}>
                  <input
                    type="radio"
                    name="upperfloor"
                    id={`upperfloor-${index + 1}`}
                    value={index + 1}
                    checked={activePlan === index + 1}
                    onChange={evt => ChangeActivePlan(evt)}
                  />
                  <label htmlFor={`upperfloor-${index + 1}`}>
                    {optionTitle.planTitle}
                  </label>
                </div>
              )
            })}
          </RadioStyles>
        </div>
      </div>
    </div>
  )
}

const RadioStyles = styled.div`
  width: calc(100%);
  margin: 0 auto;

  @media (min-width: 768px) {
    width: calc(100%);
    margin: 0;
    padding: 1rem 0;
  }

  p#radio-btn-title {
    ${B2Black};
    display: block;
    position: relative;
    margin-bottom: 1rem;
    margin-left: 0;
    padding-right: 5rem;
    cursor: pointer;
  }

  label {
    ${B2Black};
    display: block;
    position: relative;
    margin-bottom: 1rem;
    padding-left: 3.5rem;
    max-width: 100%;
    cursor: pointer;

    &::before {
      display: block;
      position: absolute;
      top: -0.8rem;
      left: 0rem;
      width: 3rem;
      height: 3rem;
      transition: all 0.3s ease-out;
      color: ${colors.colorTertiary};
      font-family: "FontAwesome";
      font-size: 2.5rem;
      content: "\f1db";
    }

    .error-message {
      display: none;
    }

    .error-active {
      display: inline-block;
      color: red;
      padding-left: 2rem;
    }
  }

  input {
    position: absolute;
    opacity: 0;

    &:checked + label {
      &::before {
        color: ${colors.black} !important;
        content: "\f058";
      }
    }
  }
`

export default UpperFloor
