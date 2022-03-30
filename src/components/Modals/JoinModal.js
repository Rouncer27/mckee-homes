import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import {
  B1White,
  Btn1Grey,
  Btn1Success,
  colors,
  H2White,
} from "../../styles/helpers"

import keyHeart from "../../images/heart-key-grey.png"

const JoinModal = ({ closeModal }) => {
  return (
    <StyledDiv>
      <div className="inner">
        <div className="inner__wrap">
          <div className="icon">
            <img src={keyHeart} alt="Create My Favourites Account." />
          </div>
          <div className="content">
            <h3>Create My Favourites Account</h3>
            <p>
              Create an account so that you can save your favourite home plans,
              show homes and quick possessions, as well as learn about exclusive
              offers and deals.
            </p>
            <Link to="/signup">Get Started</Link>
            <button onClick={() => closeModal(false)}>Close</button>
          </div>
        </div>
      </div>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  display: block;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(165, 182, 186, 0.6);
  z-index: 99999999;
  opacity: 1;
  visibility: visible;

  .inner {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 32rem;
    width: 100%;
    transform: translate(-50%, -50%);
    background-color: ${colors.colorPrimary};
    z-index: 99999999;

    @media (min-width: 768px) {
      width: 60vw;
    }

    &__wrap {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin: 1rem;
      padding: 1rem;
      border: solid 0.2rem ${colors.colorAlt};

      @media (min-width: 768px) {
        margin: 5rem;
        padding: 5rem;
      }

      .icon {
        width: calc(15% - 1rem);
        margin-right: 1rem;

        @media (min-width: 768px) {
          width: calc(15% - 1rem);
        }
      }

      .content {
        width: calc(100%);

        @media (min-width: 768px) {
          width: calc(85% - 1rem);
          margin-left: 1rem;
        }

        h3 {
          ${H2White};
          margin-top: 0;
        }

        p {
          ${B1White};
        }

        a {
          ${Btn1Grey};
        }
        button {
          ${Btn1Success};
          margin-left: 2rem;
        }
      }
    }
  }
`

export default JoinModal
