import React, { useState, useEffect, useContext } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import {
  B1Black,
  H3Navy,
  Btn1Primary,
  Btn1Success,
  B2Base,
  colors,
  Btn1Secondary,
} from "../../../styles/helpers"
import { UserContext } from "../../../context/UserContext"
import { AlertContext } from "../../../context/AlertContext"
import { HomesContext } from "../../../context/HomesContext"

import updateNotes from "../AppActions/updateNotes"

const NoteCard = ({ plan }) => {
  const [userState, userDispatch] = useContext(UserContext)
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
      await updateNotes(userDispatch, alertDispatch, myNotes, plan.id)
    setEditActive(false)
  }

  return (
    <HomeCard>
      <p className="title">
        <Link to={`/home-plans/${plan.slug}`}>{plan.title}</Link>
      </p>
      <div className="notes">
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
        </div>
        <p className="notes__title">Notes:</p>
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

    &__content {
      p {
        ${B2Base};
      }

      textarea {
        ${B2Base};
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
    }
  }
`

export default NoteCard
