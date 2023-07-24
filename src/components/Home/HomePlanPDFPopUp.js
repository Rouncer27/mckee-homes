import React from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

const HomePlanPDFPopUp = ({ setFloorPlanPopUpActive, pdf }) => {
  return (
    <StyledDiv
      onClick={() => {
        setFloorPlanPopUpActive(false)
      }}
    >
      <div className="wrapper">
        <div className="pdf-wrap">
          <GatsbyImage
            image={pdf}
            alt={``}
            layout="fullWidth"
            formats={["auto", "webp", "avif"]}
          />
        </div>
        <div className="cls-btn">
          <button
            onClick={() => {
              setFloorPlanPopUpActive(false)
            }}
          >
            &#10005;
          </button>
        </div>
      </div>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999999999999;
  cursor: pointer;

  .wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    margin: auto;
  }

  .pdf-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    max-width: 100%;
    overflow: scroll;

    @media (min-width: 768px) {
      width: 90vw;
    }

    @media (min-width: 1025px) {
      width: 75vw;
    }

    .gatsby-image-wrapper {
      margin: auto !important;
    }
  }

  .cls-btn {
    position: absolute;
    top: 2rem;
    right: 2rem;
    width: 5rem;
    height: 5rem;

    button {
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      transition: all 0.3s ease-in-out;
      font-size: 3rem;
      border: none;
      background-color: #154290;
      color: #fff;
      cursor: pointer;

      &:hover {
        background-color: #a5b6ba;
        color: #000;
      }
    }
  }
`

export default HomePlanPDFPopUp
