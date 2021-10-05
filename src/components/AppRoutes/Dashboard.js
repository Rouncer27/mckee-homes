import React, { useContext } from "react"
import styled from "styled-components"
import { B1Black, Btn1Navy, H1Black, medWrapper } from "../../styles/helpers"
import { UserContext } from "../../context/UserContext"
import axios from "axios"

const Dashboard = () => {
  const [userState, userDispatch] = useContext(UserContext)

  const handleLogout = async () => {
    try {
      await axios.post(
        `http://localhost:1337/logout`,
        {},
        {
          withCredentials: true,
        }
      )
      userDispatch({ type: "USER_LOGOUT" })
    } catch (err) {
      console.log(err.response.data.message)
      console.log(err)
    }
  }

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

  return (
    <SectionStyled>
      <div className="wrapper">
        <div className="title">
          <h1>My Dashboard</h1>
          <p>Welcome {userState.user.username}</p>
        </div>
        <div className="actions">
          <button onClick={handleLogout}>Logout</button>
          <button onClick={handleDelete}>Delete Account</button>
        </div>
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  .wrapper {
    ${medWrapper};
  }

  .title {
    width: 100%;

    h1 {
      ${H1Black};
    }

    p {
      ${B1Black};
    }
  }

  .actions {
    width: 100%;

    button {
      ${Btn1Navy};
      margin: 2rem;

      &:first-of-type {
        margin-left: 0;
      }
    }
  }
`

export default Dashboard
