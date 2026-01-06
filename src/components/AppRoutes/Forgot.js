import React, { useState, useContext, useRef } from "react"
import { Link, navigate } from "gatsby"
import styled from "styled-components"
import axios from "axios"

import { UserContext } from "../../context/UserContext"
import { AlertContext } from "../../context/AlertContext"
import Input from "./Input"
import {
  B1Black,
  B2Black,
  Btn1Navy,
  colors,
  H3Navy,
} from "../../styles/helpers"

// ✅ reCAPTCHA
import ReCAPTCHA from "react-google-recaptcha"

const Forgot = () => {
  // ✅ reCAPTCHA
  const recaptchaRef = useRef(null)
  // ✅ reCAPTCHA
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false)

  const [, dispatch] = useContext(UserContext)
  const [, alertDispatch] = useContext(AlertContext)

  const [formData, setFormData] = useState({
    email: "",
  })

  const resetFormData = () => {
    setFormData({
      email: "",
    })
  }

  // ✅ reCAPTCHA
  const onChangeRecaptcha = value => {
    setIsCaptchaVerified(!!value)
  }

  const handleOnChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  const handleOnSubmit = async event => {
    event.preventDefault()

    // ✅ reCAPTCHA
    const recaptchaValue = recaptchaRef.current.getValue()
    // ✅ reCAPTCHA
    if (recaptchaValue === "") {
      return
    }

    dispatch({
      type: "USER_LOADING",
      payload: { loading: true },
    })
    try {
      const response = await axios.post(
        `${process.env.GATSBY_API_URL}/auth/forgot-password`,
        {
          email: formData.email,
        }
      )

      if (response.data.ok) {
        dispatch({
          type: "USER_LOADING",
          payload: { loading: false },
        })
        resetFormData()
        alertDispatch({
          type: "USER_SUCCESS",
          payload: {
            successMessage:
              "Please check your email, we have sent you a reset link.",
            successAutoClear: true,
            successAnimateOut: true,
          },
        })
        navigate("/login", { replace: true })
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
          <h2>Forgot Your Password</h2>
          <p>Enter your email to reset your password.</p>
        </div>
        <div className="mainForm">
          <form onSubmit={event => handleOnSubmit(event)}>
            <fieldset>
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
                theme="dark"
              />
              {/*  ✅ reCAPTCHA */}
              <div className="captcha-container">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={process.env.GATSBY_RECAPTCHA_SITE_KEY}
                  onChange={onChangeRecaptcha}
                  onExpired={() => setIsCaptchaVerified(false)}
                />
              </div>
              <div className="submitButton">
                <button disabled={!isCaptchaVerified} type="submit">
                  Submit
                </button>
              </div>
            </fieldset>
          </form>
          <div className="appnav">
            <p>
              Remembered your password? <Link to="/login">Back To Login</Link>
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

    //  ✅ reCAPTCHA //
    .captcha-container {
      width: 100%;
      margin-top: 2.5rem;

      p {
        ${B2Black};
        margin: 0;
        margin-bottom: 0.75rem;
        color: red;
      }
    }

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

export default Forgot
