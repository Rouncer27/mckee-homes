import React, { useContext } from "react"
import styled from "styled-components"
import { css } from "@emotion/react"
import FadeLoader from "react-spinners/ClipLoader"
import { UserContext } from "../../context/UserContext"

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`

const Loading = () => {
  const [state] = useContext(UserContext)
  return (
    <LoadingModalStyled loadingactive={state.loading}>
      <div className="inner">
        <div>
          <FadeLoader color="#154290" loading={true} size={150} />
        </div>
      </div>
    </LoadingModalStyled>
  )
}

const LoadingModalStyled = styled.div`
  display: ${props => (props.loadingactive ? "block" : "none")};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(165, 182, 186, 0.6);
  z-index: 99999999;
  opacity: ${props => (props.loadingactive ? 1 : 0)};
  visibility: ${props => (props.loadingactive ? "visible" : "hidden")};

  .inner {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 32rem;
    width: 50vw;
    min-height: 32rem;
    transform: translate(-50%, -50%);
    z-index: 99999999;
  }
`

export default Loading
