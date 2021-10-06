import React, { useEffect, useContext, useState } from "react"
import styled from "styled-components"

import { AlertContext } from "../../context/AlertContext"
import { B1Black, colors, Btn1Success } from "../../styles/helpers"

const Success = () => {
  const [autoCall, setAutoCall] = useState(false)
  const [alertState, alertDispatch] = useContext(AlertContext)

  const handleClear = () => {
    alertDispatch({ type: "USER_SUCCESS_CLEAR" })
  }

  const handleAutoClear = () => {
    alertDispatch({ type: "USER_SUCCESS_CLEAR_AUTO" })
  }

  useEffect(() => {
    if (alertState.successAutoClear && !autoCall) {
      setAutoCall(true)
      handleAutoClear()
      setTimeout(handleClear, 2500)
    }
  }, [])

  return (
    <StyledDiv
      successactive={alertState.success}
      animateout={alertState.successAnimateOut}
    >
      <div className="message">
        <div className="inner">
          <p>{alertState.successMessage}</p>
          {!alertState.successAnimateOut && (
            <button onClick={handleClear}>Clear</button>
          )}
        </div>
      </div>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  display: ${props => (props.successactive ? "block" : "none")};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(40, 167, 69, 1);
  background-color: rgba(165, 182, 186, 0.6);
  z-index: 99999999;
  opacity: ${props => (props.successactive ? 1 : 0)};
  visibility: ${props => (props.successactive ? "visible" : "hidden")};

  @keyframes nudge {
    0% {
      transform: translate(-50%, -50%);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, calc(-50% - 30rem));
      opacity: 0;
    }
  }

  .message {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 50rem;
    transform: translate(-50%, -50%);
    background-color: ${colors.white};

    ${props =>
      props.animateout
        ? `
    animation-name: nudge;
    animation-duration: 2s;
    animation-delay: 0.5s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    `
        : ""}
  }

  .inner {
    margin: 2rem;
    padding: 4rem;
    border: solid 0.2rem rgba(40, 167, 69, 1);
    text-align: center;

    p {
      ${B1Black};
      margin-bottom: 0;
    }

    button {
      ${Btn1Success};
      margin-top: 2.5rem;
    }
  }
`

export default Success
