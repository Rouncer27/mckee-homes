import React, { useContext } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { B2Black, colors } from "../../../styles/helpers"
import { UserContext } from "../../../context/UserContext"
import { AlertContext } from "../../../context/AlertContext"

import handleLogout from "../../../components/AppRoutes/AppActions/handleLogout"

const Login = () => {
  const [userState, userDispatch] = useContext(UserContext)
  const [, alertDispatch] = useContext(AlertContext)
  const linkSlug =
    Object.keys(userState.user).length === 0 ? "login" : "app/dashboard"

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
            <button onClick={() => handleLogout(userDispatch, alertDispatch)}>
              Logout
            </button>
          )}
        </li>
      </ul>
    </LoginStyled>
  )
}

const LoginStyled = styled.div`
  width: 100%;

  ul {
    display: none;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;

    @media (min-width: 768px) {
      display: flex;
      justify-content: flex-end;
      padding: 0 5rem;
    }

    li {
      margin: 0.5rem;
      text-align: center;

      @media (max-width: 767px) {
        width: 100%;
      }

      a,
      button {
        ${B2Black};
        display: block;
        padding: 0.5rem 2rem;
        background: transparent;
        border: 0.1rem solid ${colors.colorSecondary};
        transition: all 0.3s ease-out;
        color: #42454a;
        text-transform: uppercase;
        cursor: pointer;

        span {
          padding-right: 1rem;
          transition: all 0.3s ease-out;
        }

        &:hover {
          background-color: ${colors.colorPrimary};
          color: #fff;

          span {
            color: #ff0000;
          }
        }

        &[aria-current="page"] {
          background-color: ${colors.colorPrimary};
          color: #fff;
          cursor: inherit;

          span {
            color: #ff0000;
          }
        }
      }
    }
  }
`

export default Login
