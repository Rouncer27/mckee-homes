import React, { useContext } from "react"
import styled from "styled-components"
import { B1Black, H3Navy, Btn1Danger } from "../../../styles/helpers"
import { UserContext } from "../../../context/UserContext"
import { AlertContext } from "../../../context/AlertContext"

import deletePlan from "../AppActions/deletePlan"

const NoteCardNot = ({ plan, url }) => {
  const [, userDispatch] = useContext(UserContext)
  const [, alertDispatch] = useContext(AlertContext)

  const handleOnDelete = () => {
    deletePlan(userDispatch, alertDispatch, plan.id, url)
  }

  return (
    <HomeCard key={plan.id}>
      <p className="title">
        {plan.title} <span>No longer available</span>
      </p>
      <div className="notes">
        <div className="notes__actions">
          <button className="notes__actions--delete" onClick={handleOnDelete}>
            Remove
          </button>
        </div>
      </div>
    </HomeCard>
  )
}

const HomeCard = styled.div`
  width: calc(100% / 3);
  padding: 2rem;

  .title {
    ${H3Navy};
    margin: 0;
    font-weight: 600;

    a {
      ${H3Navy};
      margin: 0;
      font-weight: 600;
    }
  }

  .notes {
    width: 100%;

    &__title {
      ${B1Black};
    }

    &__actions {
      width: 100%;
      margin-top: 2.5rem;
      margin-bottom: 2.5rem;

      &--delete {
        ${Btn1Danger};
        margin-left: 1rem;
      }
    }
  }
`

export default NoteCardNot
