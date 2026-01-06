import React, { useState, useContext, useRef } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { UserContext } from "../../context/UserContext"
import { AlertContext } from "../../context/AlertContext"
import {
  H1White,
  B1White,
  colors,
  medWrapper,
  Btn1Grey,
  B2White,
} from "../../styles/helpers"

import Input from "./Input"
import Intro from "./Intro"

import handleResister from "./AppActions/handleResister"

// ✅ reCAPTCHA
import ReCAPTCHA from "react-google-recaptcha"

const Signup = () => {
  // ✅ reCAPTCHA
  const recaptchaRef = useRef(null)
  // ✅ reCAPTCHA
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false)

  const [, userDispatch] = useContext(UserContext)
  const [, alertDispatch] = useContext(AlertContext)

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password2: "",
  })

  const resetFormData = () => {
    setFormData({
      email: "",
      password: "",
      password2: "",
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
    handleResister(formData, resetFormData, userDispatch, alertDispatch)
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

      //  ✅ reCAPTCHA //
      .captcha-container {
        width: 100%;
        margin-top: 2.5rem;

        p {
          ${B2White};
          margin: 0;
          margin-bottom: 0.75rem;
          color: red;
        }
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
