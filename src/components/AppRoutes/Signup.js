import React, { useState, useContext } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import axios from "axios"

import { UserContext } from "../../context/UserContext"
import {
  H1White,
  B1White,
  colors,
  medWrapper,
  Btn1Grey,
} from "../../styles/helpers"

import Input from "./Input"
import Intro from "./Intro"

const Signup = () => {
  const [, dispatch] = useContext(UserContext)

  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    password2: "",
  })

  const resetFormData = () => {
    setFormData({
      email: "",
      username: "",
      password: "",
      password2: "",
    })
  }

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
        `http://localhost:1337/auth/local/register`,
        {
          email: formData.email,
          username: formData.username,
          password: formData.password,
        },
        {
          withCredentials: true,
        }
      )

      if (response.data.ok) {
        resetFormData()
      }
    } catch (err) {
      console.dir(err)
    }
  }

  return (
    <DivStyled>
      <div className="wrapper">
        <Intro />
      </div>
      <div className="form">
        <div className="form__wrapper">
          <div className="form__title">
            <h2>Sign Up</h2>
          </div>
          <form onSubmit={event => handleOnSubmit(event)}>
            <fieldset>
              <Input
                label="username"
                name="username"
                type="text"
                placeholder="username"
                value={formData.username}
                onChange={handleOnChange}
                fieldvalid={true}
                required={false}
                size="full"
              />
              <Input
                label="email"
                name="email"
                type="email"
                placeholder="email"
                value={formData.email}
                onChange={handleOnChange}
                fieldvalid={true}
                required={false}
                size="full"
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
              />
              <Input
                label="confirm password"
                name="password2"
                type="password"
                placeholder="confirm password"
                value={formData.password2}
                onChange={handleOnChange}
                fieldvalid={true}
                required={false}
                size="full"
              />
              <div className="submitButton">
                <button type="submit">Submit</button>
              </div>
            </fieldset>
          </form>
          <div className="appnav">
            <p>
              Already have an account? <Link to="/login">Login Here</Link>
            </p>
          </div>
        </div>
      </div>
    </DivStyled>
  )
}

const DivStyled = styled.div`
  .wrapper {
    ${medWrapper};
  }

  .form {
    width: 100%;
    padding: 5rem;
    background-color: ${colors.colorPrimary};

    &__wrapper {
      ${medWrapper};
      margin: auto;
      padding: 0;
    }

    &__title {
      width: 100%;
      margin-left: 25%;

      h2 {
        ${H1White};
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
      ${B1White};
    }

    a:hover {
      color: ${colors.colorSecondary};
    }
  }
`
export default Signup
