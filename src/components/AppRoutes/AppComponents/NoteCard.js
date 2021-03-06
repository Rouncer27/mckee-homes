import React, { useState, useEffect, useContext } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import {
  B1Black,
  B1Navy,
  H3Navy,
  Btn1Primary,
  Btn1Success,
  colors,
  Btn1Secondary,
  Btn1Danger,
} from "../../../styles/helpers"
import { UserContext } from "../../../context/UserContext"
import { AlertContext } from "../../../context/AlertContext"

import updateNotes from "../AppActions/updateNotes"
import deletePlan from "../AppActions/deletePlan"

const NoteCard = ({ plan, url }) => {
  const [, userDispatch] = useContext(UserContext)
  const [, alertDispatch] = useContext(AlertContext)
  const [editActive, setEditActive] = useState(false)
  const [myNotes, setMyNotes] = useState("")
  const [isDirty, setIsDirty] = useState(false)

  useEffect(() => {
    setMyNotes(plan.notes)
  }, [])

  useEffect(() => {
    if (myNotes !== plan.notes) {
      setIsDirty(true)
    } else {
      setIsDirty(false)
    }
  }, [myNotes])

  const handleOnChange = event => setMyNotes(event.target.value)
  const handleOnEdit = () => setEditActive(true)
  const handleOnSave = async () => {
    if (isDirty)
      await updateNotes(userDispatch, alertDispatch, myNotes, plan.id, url)
    setEditActive(false)
  }
  const handleOnDelete = () => {
    deletePlan(userDispatch, alertDispatch, plan.id, url)
  }

  return (
    <HomeCard>
      <div className="title">
        <Link to={`/${url}/${plan.slug}`}>
          <p>{plan.title}</p>
          <div>
            <img src={plan.image} alt={plan.title} />
          </div>
        </Link>
      </div>
      <div className="notes">
        <div className="notes__container">
          <p className="notes__title">My notes:</p>
          <div className="notes__content">
            {editActive ? (
              <textarea
                name="myNotes"
                value={myNotes}
                onChange={handleOnChange}
                rows="4"
              />
            ) : (
              plan.notes !== "" && <p>{myNotes}</p>
            )}
          </div>
        </div>

        <div className="notes__actions">
          {editActive ? (
            <button
              className={`notes__actions--save${!isDirty ? " btn-cancel" : ""}`}
              onClick={handleOnSave}
            >
              {isDirty ? "Save Notes" : "Cancel"}
            </button>
          ) : (
            <button className="notes__actions--edit" onClick={handleOnEdit}>
              Edit Notes
            </button>
          )}

          <button className="notes__actions--delete" onClick={handleOnDelete}>
            Delete House
          </button>
        </div>
      </div>
    </HomeCard>
  )
}

const HomeCard = styled.div`
  width: calc(100% / 1);
  margin-top: 2.5rem;

  @media (min-width: 768px) {
    width: calc(100% / 3);
    padding: 2rem;
  }

  .title {
    p {
      ${B1Navy};
      margin: 0;
      text-transform: uppercase;
      font-weight: 600;
    }
  }

  .notes {
    width: 100%;

    &__title {
      ${B1Black};
    }

    &__container {
      border-bottom: 0.1rem solid ${colors.greyMed};
    }

    &__content {
      p {
        ${B1Black};
      }

      textarea {
        ${B1Black};
        width: 100%;
        padding: 1rem;
        border: 0.1rem solid ${colors.colorPrimary};
        background-color: rgba(255, 255, 255, 0.5);
      }
    }

    &__actions {
      width: 100%;
      margin-top: 2.5rem;
      margin-bottom: 2.5rem;

      &--edit {
        ${Btn1Primary};
      }

      &--save {
        ${Btn1Success};
      }

      &--save.btn-cancel {
        ${Btn1Secondary};
      }

      &--delete {
        ${Btn1Danger};
        margin-left: 1rem;
      }
    }
  }
`

export default NoteCard
