import React, { useContext, useState } from "react"
import { UserContext } from "../../context/UserContext"
import { AlertContext } from "../../context/AlertContext"
import { Link } from "gatsby"
import axios from "axios"
import styled from "styled-components"
import {
  standardWrapper,
  Btn1Danger,
  Btn1Primary,
  Btn1Secondary,
  Btn1Success,
  B1Black,
} from "../../styles/helpers"

import handleLogout from "./AppActions/handleLogout"

const Account = () => {
  const [editState, setEditState] = useState(false)
  const [userState, userDispatch] = useContext(UserContext)
  const [, alertDispatch] = useContext(AlertContext)

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:1337/users/${userState.user._id}`, {
        withCredentials: true,
      })
      userDispatch({ type: "USER_LOGOUT" })
    } catch (err) {
      console.log(err.response.data.message)
      console.dir(err)
    }
  }

  const handleEdit = () => {
    setEditState(true)
  }

  const handleSave = () => {
    setEditState(false)
  }

  return (
    <StyledDiv>
      <div className="wrapper">
        <div className="title">
          <h2>Account Settings</h2>
        </div>
        <div className="actions">
          <Link to="/app/dashboard" className="btn">
            My Favourites
          </Link>
          {editState ? (
            <button className="btn success" onClick={handleSave}>
              Save Account
            </button>
          ) : (
            <button className="btn secondary" onClick={handleEdit}>
              Edit Account
            </button>
          )}

          <button
            className="btn"
            onClick={() => handleLogout(userDispatch, alertDispatch)}
          >
            Logout
          </button>
          <button className="btn danger" onClick={handleDelete}>
            Delete Account
          </button>
        </div>
        <div className="details">
          <h3>Account Details</h3>
          <p>
            Username:{" "}
            {editState ? (
              <input
                type="text"
                id="username"
                value={userState.user.username}
              />
            ) : (
              <span>{userState.user.username}</span>
            )}
          </p>
          <p>
            Email: <span>{userState.user.email}</span>
          </p>
          <p>
            Email Confirmed:{" "}
            <span>
              {userState.user.confirmed
                ? "Yes"
                : "No, please confirm your email account."}
            </span>
          </p>
        </div>
      </div>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  .wrapper {
    ${standardWrapper};
  }

  .title {
    width: 100%;
  }

  .actions {
    width: 100%;

    .btn {
      ${Btn1Primary};
      margin-right: 2.5rem;
    }

    .success {
      ${Btn1Success};
    }

    .secondary {
      ${Btn1Secondary};
    }

    .danger {
      ${Btn1Danger};
    }
  }

  .details {
    width: 100%;
    margin-top: 4rem;

    p {
      ${B1Black};
      margin-bottom: 0.75rem;
    }
  }
`

export default Account
