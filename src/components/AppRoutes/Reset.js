import { Link, navigate } from "gatsby"
import queryString from "query-string"
import React, { useState, useContext, useEffect } from "react"
import styled from "styled-components"
import axios from "axios"

import { UserContext } from "../../context/UserContext"
import { AlertContext } from "../../context/AlertContext"

import Input from "./Input"

import { B1Black, Btn1Navy, colors, H3Navy } from "../../styles/helpers"

const Reset = ({ location }) => {
  const [code, setCode] = useState("")
  const [, dispatch] = useContext(UserContext)
  const [, alertDispatch] = useContext(AlertContext)

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
    dispatch({
      type: "USER_LOADING",
      payload: { loading: true },
    })
    try {
      const response = await axios.post(
        `${process.env.GATSBY_API_URL}/auth/reset-password`,
        {
          code: code,
          password: formData.password,
          passwordConfirmation: formData.password2,
        }
      )

      if (response.status === 200) {
        dispatch({
          type: "USER_LOADING",
          payload: { loading: false },
        })
        resetFormData()
        alertDispatch({
          type: "USER_SUCCESS",
          payload: {
            successMessage:
              "You have successfully reset your password. Please contiune to login with new password",
            successAutoClear: true,
            successAnimateOut: true,
          },
        })
        navigate("/app/dashboard", { replace: true })
      } else {
        alertDispatch({
          type: "USER_ERROR",
          payload: {
            errMessage: "Something when wrong. Please try again later.",
          },
        })
        dispatch({
          type: "USER_LOADING",
          payload: { loading: false },
        })
      }
    } catch (err) {
      const errMessage =
        err.response.data &&
        err.response.data.message &&
        typeof err.response.data.message === "object"
          ? err.response.data.message[0] &&
            err.response.data.message[0].messages[0] &&
            err.response.data.message[0].messages[0].message
          : typeof err.response.data.message === "string"
          ? err.response.data.message
          : "Something went wrong. Please try again later"
      alertDispatch({
        type: "USER_ERROR",
        payload: { errMessage },
      })
      dispatch({
        type: "USER_LOADING",
        payload: { loading: false },
      })
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
                theme="dark"
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
                theme="dark"
              />
              <div className="submitButton">
                <button type="submit">Submit</button>
              </div>
            </fieldset>
          </form>
          <div className="appnav">
            <p>
              Remembered your password? <Link to="/login">Back To Login</Link>
            </p>
          </div>
        </div>
      </div>
    </DivStyled>
  )
}

const DivStyled = styled.div`
  .wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 55rem;
    margin: 2rem auto;
    padding: 4rem 2rem;
    border: 0.1rem solid ${colors.colorPrimary};
    box-shadow: 0.5rem 0.7rem 1.2rem 0.3rem rgba(0, 0, 0, 0.3);
  }

  .mainTitle {
    width: 100%;

    h2 {
      ${H3Navy};
    }
  }

  .mainForm {
    width: 100%;

    fieldset {
      border: none;

      .submitButton {
        width: 100%;
        padding-top: 3rem;
        padding-left: 0.5rem;

        button {
          ${Btn1Navy};
        }
      }
    }
  }

  .appnav {
    width: 100%;
    margin-top: 5rem;

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

export default Reset
