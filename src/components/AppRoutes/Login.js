import React, { useContext, useEffect, useState } from "react"
import { UserContext } from "../../context/UserContext"
import { navigate, Link } from "gatsby"
import styled from "styled-components"
import Input from "./Input"
import axios from "axios"

import {
  H1White,
  B1White,
  colors,
  medWrapper,
  Btn1Grey,
  H1Navy,
  Btn1Navy,
  B1Black,
} from "../../styles/helpers"

import Intro from "./Intro"

const Login = () => {
  const [userState, userDispatch] = useContext(UserContext)

  useEffect(() => {
    const userRole =
      userState.user && userState.user.role && userState.user.role.type
    if (userRole === "authenticated")
      navigate("/app/dashboard", { replace: true })
  }, [userState.user])

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleOnChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  const handleOnSubmit = async event => {
    event.preventDefault()
    try {
      const response = await axios.post(
        `http://localhost:1337/auth/local`,

        {
          identifier: formData.email,
          password: formData.password,
        },
        {
          withCredentials: true,
        }
      )

      userDispatch({
        type: "USER_LOGIN",
        payload: { user: response.data.user },
      })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <DivStyled>
      <div className="wrapper">
        <Intro intropage="login" />
      </div>

      <div className="form">
        <div className="form__wrapper">
          <div className="form__title">
            <h2>Sign In</h2>
          </div>
          <form onSubmit={event => handleOnSubmit(event)}>
            <fieldset>
              <Input
                label="email"
                name="email"
                type="text"
                placeholder="email"
                value={formData.email}
                onChange={handleOnChange}
                fieldvalid={true}
                required={false}
                size="full"
                theme="dark"
              />
              <Input
                label="password"
                name="password"
                type="password"
                placeholder="password"
                value={formData.password}
                onChange={handleOnChange}
                fieldvalid={true}
                required={false}
                size="full"
                theme="dark"
              />

              <div className="submitButton">
                <button type="submit">Submit</button>
              </div>
            </fieldset>
          </form>
          <div className="appnav">
            <p>
              Forgot Password?{" "}
              <Link to="/forgot-password">Reset Your Password</Link>
            </p>
            <p>
              Don't Have an account? <Link to="/signup">Get Started Here</Link>
            </p>
          </div>
        </div>
      </div>
    </DivStyled>
  )
}

const DivStyled = styled.div`
  .wrapper {
    ${medWrapper}
  }

  .main-title {
    width: 100%;
  }

  .form {
    width: 100%;
    padding: 5rem;
    background-color: #efefef;

    &__wrapper {
      ${medWrapper};
      margin: auto;
      padding: 0;
    }

    &__title {
      width: 100%;
      margin-left: 25%;

      h2 {
        ${H1Navy};
      }
    }

    form {
      width: 100%;
      max-width: 40rem;
      margin-right: auto;
      margin-left: 25%;

      fieldset {
        border: none;
        padding: 0;
      }

      .submitButton {
        margin-top: 4rem;

        button {
          ${Btn1Grey};

          &:hover {
            background: ${colors.colorSecondary};
            border-color: ${colors.colorSecondary};
          }
        }
      }
    }
  }

  .appnav {
    width: 100%;
    margin-top: 5rem;
    margin-left: 25%;

    p,
    a {
      ${B1Black};
    }

    p {
      margin-bottom: 0.75rem;
    }

    a:hover {
      color: ${colors.colorPrimary};
    }
  }
`

export default Login
