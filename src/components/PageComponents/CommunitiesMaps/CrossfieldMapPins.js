import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import CrossfieldMap from "./CrossfieldMap"
import vistaCrossing from "../../../images/pin-vista-crossing.png"

const CrossfieldMapPins = () => {
  return (
    <DivStyled>
      <CrossfieldMap />
      <div className="pins">
        <div className="pin pins__vistaCrossing">
          <Link to="/communities/vista-crossing">
            <img src={vistaCrossing} alt="Vista Crossing" />
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
      width: 10rem;
      z-index: 500;
    }

    &__vistaCrossing {
      left: 18vw;
      top: 30%;
    }
  }
`

export default CrossfieldMapPins
