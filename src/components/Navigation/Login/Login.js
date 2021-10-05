import React, { useContext } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { B2Black } from "../../../styles/helpers"
import { UserContext } from "../../../context/UserContext"

const Login = () => {
  const [userState] = useContext(UserContext)
  const linkText =
    Object.keys(userState.user).length === 0
      ? "My Home Sign In"
      : "My Home Dahsboard"
  const linkSlug =
    Object.keys(userState.user).length === 0 ? "login" : "app/dashboard"

  return (
    <LoginStyled>
      <ul>
        <li>
          <Link to="/">
            <span> &#9829;</span>My Favourites
          </Link>
        </li>
        <li>
          <Link to={`/${linkSlug}`}>{linkText}</Link>
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

      a {
        ${B2Black};
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
