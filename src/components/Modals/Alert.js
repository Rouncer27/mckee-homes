import React, { useContext } from "react"
import styled from "styled-components"

import { AlertContext } from "../../context/AlertContext"

const Alert = () => {
  const [alertState, alertDispatch] = useContext(AlertContext)
  return (
    <StyledDiv alertactive={alertState.alert}>
      <h1>Alert</h1>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  display: ${props => (props.alertactive ? "block" : "none")};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(66, 69, 74, 1);
  background-color: rgba(165, 182, 186, 0.6);
  z-index: 99999999;
  opacity: ${props => (props.alertactive ? 1 : 0)};
  visibility: ${props => (props.alertactive ? "visible" : "hidden")};
`

export default Alert
