import React from "react"
import styled from "styled-components"
import {
  B1White,
  Btn1Danger,
  Btn1White,
  colors,
  H2White,
} from "../../styles/helpers"

import trashCan from "../../images/trash-can.png"

const ConfirmDelete = ({ closeModal, deleteAccount }) => {
  return (
    <StyledDiv>
      <div className="inner">
        <div className="inner__wrap">
          <div className="icon">
            <img src={trashCan} alt="Delete My Favourites Account." />
          </div>
          <div className="content">
            <h3>Are you sure you want to delete?</h3>
            <p>Once you delete your account it can’t be undone.</p>
            <button className="btn-delete" onClick={() => deleteAccount(false)}>
              Delete Account
            </button>
            <button className="btn-close" onClick={() => closeModal(false)}>
              Cancel
            </button>
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
    width: 60vw;
    transform: translate(-50%, -50%);
    background-color: ${colors.colorPrimary};
    z-index: 99999999;

    &__wrap {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin: 5rem;
      padding: 5rem;
      border: solid 0.2rem ${colors.colorAlt};

      .icon {
        width: calc(15% - 1rem);
        margin-right: 1rem;
      }

      .content {
        width: calc(85% - 1rem);
        margin-left: 1rem;

        h3 {
          ${H2White};
          margin-top: 0;
        }

        p {
          ${B1White};
        }

        .btn-delete {
          ${Btn1Danger};
        }

        .btn-close {
          ${Btn1White};
          margin-left: 2rem;
        }
      }
    }
  }
`

export default ConfirmDelete
