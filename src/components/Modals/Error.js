import React, { useContext } from "react"
import styled from "styled-components"

import { AlertContext } from "../../context/AlertContext"
import { B1Black, colors, Btn1Primary } from "../../styles/helpers"

const Error = () => {
  const [alertState, alertDispatch] = useContext(AlertContext)

  const handleClear = () => {
    alertDispatch({ type: "USER_CLEAR_ERROR" })
  }

  return (
    <StyledDiv erroractive={alertState.error}>
      <div className="message">
        <div className="inner">
          <p>{alertState.errMessage}</p>
          <button onClick={handleClear}>Clear</button>
        </div>
      </div>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  display: ${props => (props.erroractive ? "block" : "none")};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(220, 53, 69, 1);
  background-color: rgba(165, 182, 186, 0.6);
  z-index: 99999999;
  opacity: ${props => (props.erroractive ? 1 : 0)};
  visibility: ${props => (props.erroractive ? "visible" : "hidden")};

  .message {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 50rem;
    transform: translate(-50%, -50%);
    background-color: ${colors.white};
  }

  .inner {
    margin: 2rem;
    padding: 4rem;
    border: solid 0.2rem rgba(220, 53, 69, 1);
    text-align: center;

    p {
      ${B1Black};
      margin-bottom: 2.5rem;
    }

    button {
      ${Btn1Primary};
    }
  }
`

export default Error
