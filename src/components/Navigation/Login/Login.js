import React, { useContext } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import axios from "axios"
import { B2Black } from "../../../styles/helpers"
import { UserContext } from "../../../context/UserContext"

const Login = () => {
  const [userState, userDispatch] = useContext(UserContext)
  const linkSlug =
    Object.keys(userState.user).length === 0 ? "login" : "app/dashboard"

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

  return (
    <LoginStyled>
      <ul>
        <li>
          <Link to={`/${linkSlug}`}>
            <span> &#9829;</span>My Favourites
          </Link>
        </li>
        <li>
          {Object.keys(userState.user).length === 0 ? (
            <Link to={`/login`}>My Home Sign In</Link>
          ) : (
            <button onClick={handleLogout}>Logout</button>
          )}
        </li>
      </ul>
    </LoginStyled>
  )
}

const LoginStyled = styled.div`
  width: 100%;

  ul {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    padding: 0 5rem;

    li {
      margin: 0 2rem;

      a,
      button {
        ${B2Black};
        background: transparent;
        border: none;
        transition: all 0.3s ease-out;
        color: #42454a;
        text-transform: uppercase;

        span {
          padding-right: 1rem;
          transition: all 0.3s ease-out;
        }

        &:hover {
          color: #154290;

          span {
            color: #ff0000;
          }
        }
      }
    }
  }
`

export default Login
