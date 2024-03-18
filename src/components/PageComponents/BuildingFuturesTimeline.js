import React, { useState } from "react"
import styled from "styled-components"
import {
  Btn1Navy,
  Btn1Secondary,
  H2Navy,
  colors,
  medWrapper,
} from "../../styles/helpers"
import Timeline from "../buildingFutures/Timeline"

const BuildingFuturesTimeline = ({ data }) => {
  const [yearActive, setYearActive] = useState(0)

  return (
    <StyledSection>
      <div className="wrapper">
        <div className="main-title">
          <h2>{data.title}</h2>
        </div>

        <div className="years">
          {data.classYear.map((year, index) => {
            return (
              <div key={index}>
                <button
                  className={`${index > 0 ? "btn-spacer" : ""}${
                    yearActive === index ? " btn-active" : ""
                  }`}
                  type="button"
                  onClick={() => {
                    setYearActive(index)
                  }}
                  disabled={yearActive === index}
                >
                  {year.classYear}
                </button>
              </div>
            )
          })}
        </div>
        <Timeline classYear={data.classYear} yearActive={yearActive} />
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  background-color: rgba(168, 181, 185, 0.24);
  padding: 5rem 0;

  .wrapper {
    ${medWrapper};
  }

  .main-title {
    width: 100%;
    text-align: center;

    h2 {
      ${H2Navy};
    }
  }

  .years {
    display: flex;
    width: 100%;
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;

    button {
      ${Btn1Secondary};
      background-color: #a8b5b9;
      border-color: #a8b5b9;
      color: #fff;

      &.btn-active {
        ${Btn1Navy};
      }

      &:disabled {
        opacity: 1 !important;
      }

      &.btn-spacer {
        margin-left: 2.5rem;
      }
    }
  }

  .timeline {
    width: 100%;
  }
`

export default BuildingFuturesTimeline
