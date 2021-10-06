import React, { useContext } from "react"
import styled from "styled-components"
import { B1Black, Btn1Navy, H1Black, medWrapper } from "../../styles/helpers"
import { UserContext } from "../../context/UserContext"
import Intro from "./Intro"
import { Link } from "gatsby"

const Dashboard = () => {
  const [userState, userDispatch] = useContext(UserContext)

  return (
    <SectionStyled>
      <div className="wrapper">
        <Intro intropage="dashboard" />
        <div className="title">
          <h2>My Dashboard</h2>
          <p>Welcome {userState.user.username}</p>
        </div>
        <div className="actions">
          <Link to="/app/account">Account Settings</Link>
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

    h2 {
      ${H1Black};
    }

    p {
      ${B1Black};
    }
  }

  .actions {
    width: 100%;

    button,
    a {
      ${Btn1Navy};
      margin: 2rem;

      &:first-of-type {
        margin-left: 0;
      }
    }
  }
`

export default Dashboard
