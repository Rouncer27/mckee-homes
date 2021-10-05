import { Link } from "gatsby"
import queryString from "query-string"
import React, { useState, useContext, useEffect } from "react"
import styled from "styled-components"
import axios from "axios"
import { UserContext } from "../../context/UserContext"

import Input from "./Input"

import {
  B2CharcoalGrey,
  Btn1DarkPurple,
  colors,
  H4Lavender,
  medWrapper,
} from "../../styles/helpers"

const Reset = ({ location }) => {
  const [code, setCode] = useState("")
  const [, dispatch] = useContext(UserContext)

  useEffect(() => {
    const queryData = queryString.parse(location)
    setCode(queryData.code)
  }, [])

  const [formData, setFormData] = useState({
    password: "",
    password2: "",
  })

  const resetFormData = () => {
    setFormData({
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
    console.log(formData.email)
    try {
      const response = await axios.post(
        `http://localhost:1337/auth/reset-password`,
        {
          code: code,
          password: formData.password,
          passwordConfirmation: formData.password2,
        }
      )

      console.log("RESET RESPONSE: ", response)

      if (response.data.ok) {
        dispatch({ type: "USER_RESET" })
        resetFormData()
      }
    } catch (err) {
      console.dir(err)
    }
  }
  return (
    <DivStyled>
      <div className="wrapper">
        <div className="mainTitle">
          <h2>Reset Your Password</h2>
        </div>
        <div className="mainForm">
          <form onSubmit={event => handleOnSubmit(event)}>
            <fieldset>
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
                type="password2"
                placeholder="password2"
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
          <div className="passForgot">
            <Link to="/login">Login Page</Link>
            <Link to="/signup">Sign Up Here.</Link>
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

  .mainTitle {
    width: 100%;

    h2 {
      ${H4Lavender};
    }
  }

  .mainForm {
    width: 100%;
    max-width: 55rem;
    margin: 0;
    margin-bottom: 2.5rem;
    padding-bottom: 5rem;
    border-bottom: solid 0.5rem ${colors.colorTertiary};

    fieldset {
      border: none;

      .submitButton {
        width: 100%;
        padding-top: 3rem;
        padding-left: 0.5rem;

        button {
          ${Btn1DarkPurple};
        }
      }
    }
  }

  .passForgot {
    margin-top: 2.5rem;
    padding-left: 2rem;

    a {
      ${B2CharcoalGrey};
      margin: 0;
    }
  }

  .mainNav {
    padding-left: 2rem;

    p,
    a {
      ${B2CharcoalGrey};
      margin: 0;
    }

    a {
      text-decoration: underline;
    }

    a:hover {
      color: ${colors.colorPrimary};
    }
  }
`

export default Reset