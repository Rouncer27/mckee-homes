import React from "react"
import styled from "styled-components"
import { B1Black, Btn1Grey, H4Navy } from "../../styles/helpers"

import showhome from "../../images/icons/townhomes.png"

const ShowHours = ({ hours, map, directions }) => {
  return (
    <StyledDiv>
      <div className="wrapper">
        <div className="map">
          <div dangerouslySetInnerHTML={{ __html: map }} />
        </div>
        <div className="hours">
          <div className="hours__title">
            <h2>
              <span>
                <img src={showhome} alt="" />
              </span>{" "}
              Show Home Hours
            </h2>
          </div>
          <div
            className="hours__content"
            dangerouslySetInnerHTML={{ __html: hours }}
          />
          {directions ? (
            <div className="hours__directions">
              <a target="_blank" rel="noreferrer" href={directions}>
                Directions to show home
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  padding: 2rem 0;

  .wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .map {
    width: calc(100%);

    @media (min-width: 768px) {
      width: calc(50%);
    }

    @media (min-width: 1025px) {
      width: calc(40%);
    }

    iframe {
      width: 100% !important;
    }
  }

  .hours {
    width: calc(100%);
    padding: 2rem 6rem;

    @media (min-width: 768px) {
      width: calc(50%);
    }

    @media (min-width: 1025px) {
      width: calc(60%);
    }

    &__title {
      h2 {
        ${H4Navy};
        position: relative;
        padding-top: 8.5rem;
        text-transform: uppercase;

        span {
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: 11.1rem;
        }
      }
    }

    &__content {
      p {
        ${B1Black};
      }
    }

    &__directions {
      a {
        ${Btn1Grey};
      }
    }
  }
`

export default ShowHours
