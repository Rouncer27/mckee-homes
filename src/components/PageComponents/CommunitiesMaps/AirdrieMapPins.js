import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import AirdrieMap from "./AirdrieMap"

import baysideEstates from "../../../images/pin-bayside-estates.png"
import chinookgate from "../../../images/pin-chinookgate.png"
import cooperscrossing from "../../../images/pin-cooperscrossing.png"
import kingsHeights from "../../../images/pin-kings-heights.png"
import lanarklanding from "../../../images/pin-lanarklanding.png"
import ravenswood from "../../../images/pin-ravenswood.png"

const AirdrieMapPins = () => {
  return (
    <DivStyled>
      <AirdrieMap />
      <div className="pins">
        <div className="pin pins__baysideEstates">
          <Link to="/communities/bayside-estates">
            <img src={baysideEstates} alt="bayside estates" />
          </Link>
        </div>
        <div className="pin pins__chinookgate">
          <Link to="/communities/chinook-gate">
            <img src={chinookgate} alt="chinookgate" />
          </Link>
        </div>
        <div className="pin pins__cooperscrossing">
          <Link to="/communities/coopers-crossing">
            <img src={cooperscrossing} alt="coopers crossing" />
          </Link>
        </div>
        <div className="pin pins__kingsHeights">
          <Link to="/communities/kings-heights">
            <img src={kingsHeights} alt="Kings Heights" />
          </Link>
        </div>
        <div className="pin pins__lanarklanding">
          <Link to="/communities/lanark-landing">
            <img src={lanarklanding} alt="lanark landing" />
          </Link>
        </div>
        <div className="pin pins__ravenswood">
          <Link to="/communities/ravenswood">
            <img src={ravenswood} alt="ravenswood" />
          </Link>
        </div>
      </div>
    </DivStyled>
  )
}

const DivStyled = styled.div`
  position: relative;

  .pins {
    .pin {
      position: absolute;
      width: 12vw;
      z-index: 500;

      @media (min-width: 768px) {
        width: 10rem;
      }
    }

    &__baysideEstates {
      left: 30vw;
      bottom: 50%;
    }

    &__chinookgate {
      left: 15vw;
      bottom: 30%;
    }

    &__cooperscrossing {
      left: 45vw;
      bottom: 5%;
    }

    &__kingsHeights {
      right: 22.5vw;
      bottom: 27.5%;
    }

    &__lanarklanding {
      right: 22.5vw;
      bottom: 5%;
    }

    &__ravenswood {
      right: 10vw;
      bottom: 20%;
    }
  }
`

export default AirdrieMapPins
