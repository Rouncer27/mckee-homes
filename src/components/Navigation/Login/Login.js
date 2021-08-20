import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { B2Black } from "../../../styles/helpers"

const Login = () => {
  return (
    <LoginStyled>
      <ul>
        <li>
          <Link to="/">
            <span> &#9829;</span>My Favourites
          </Link>
        </li>
        <li>
          <Link to="/">My Home Sign In</Link>
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
