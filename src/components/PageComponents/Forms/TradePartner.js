import React, { useState, useRef } from "react"
import styled from "styled-components"
import {
  B1White,
  Btn1Grey,
  B2White,
  colors,
  H2White,
  standardWrapper,
} from "../../../styles/helpers"

import submitToServer from "../../FormParts/functions/submitToServer"
import FormSuccess from "../../FormParts/formModals/FormSuccess"
import FormSubmit from "../../FormParts/formModals/FormSubmit"
import FormErrors from "../../FormParts/formModals/FormErrors"
// ✅ reCAPTCHA
import ReCAPTCHA from "react-google-recaptcha"

const TradePartner = ({ data }) => {
  // ✅ reCAPTCHA
  const recaptchaRef = useRef(null)
  // ✅ reCAPTCHA
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false)

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    help: "",
  })
  // ✅ reCAPTCHA
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    errorWarnDisplay: false,
    success: false,
    errors: [],
    captachError: false,
  })
  // ✅ reCAPTCHA
  const onChangeRecaptcha = value => {
    setIsCaptchaVerified(!!value)

    setFormStatus(prev => ({
      ...prev,
      captachError: false,
    }))
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
      setFormStatus({
        ...formStatus,
        captachError: true,
      })
      return
    }

    setFormStatus({
      ...formStatus,
      submitting: true,
    })
    const formDataArray = Object.entries(formData)
    const bodyFormData = new FormData()
    formDataArray.forEach(field => {
      bodyFormData.append(field[0], field[1])
    })

    const response = await submitToServer(1896, bodyFormData)

    if (!response.errors) {
      // ✅ Reset reCAPTCHA
      setFormStatus({
        ...formStatus,
        submitting: false,
        errorWarnDisplay: false,
        success: true,
        errors: [],
        captachError: false,
      })
      // ✅ Reset reCAPTCHA
      recaptchaRef.current.reset()
      setIsCaptchaVerified(false)
    } else {
      setFormStatus({
        ...formStatus,
        submitting: false,
        errorWarnDisplay: true,
        success: false,
        errors: response.errorMessages,
        captachError: false,
      })
      // ✅ Reset reCAPTCHA
      recaptchaRef.current.reset()
      setIsCaptchaVerified(false)
    }
  }

  const handleErrorModalClose = () => {
    setFormStatus({
      ...formStatus,
      submitting: false,
      errorWarnDisplay: false,
      success: false,
    })
  }

  const handleSuccessModalClose = () => {
    // ✅ Reset reCAPTCHA
    setFormStatus({
      ...formStatus,
      submitting: false,
      errorWarnDisplay: false,
      success: false,
      errors: [],
      captachError: false,
    })

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      help: "",
    })
  }

  return (
    <SectionStyled>
      <div className="wrapper">
        <div className="title">
          <h2>Interested in being a trade partner?</h2>
          <p>
            We are always looking for valued trade partners to work with us. If
            you are interested please send us your contact information and a bit
            about how you want to help and we will be in touch.{" "}
          </p>
        </div>
        <form onSubmit={handleOnSubmit}>
          <InputField>
            <label htmlFor="firstName">
              First Name <span className="required">(required)</span>
              <span
                className={`error-message${
                  formStatus.errors.findIndex(
                    error => error.idref === "firstName"
                  ) !== -1
                    ? " error-active"
                    : " "
                }`}
              >
                You must input a name.
              </span>
              <input
                name="firstName"
                type="text"
                value={formData.firstName}
                id="firstName"
                onChange={handleOnChange}
                aria-required="true"
                required
              />
            </label>
          </InputField>
          <InputField>
            <label htmlFor="lastName">
              Last Name <span className="required">(required)</span>
              <span
                className={`error-message${
                  formStatus.errors.findIndex(
                    error => error.idref === "lastName"
                  ) !== -1
                    ? " error-active"
                    : " "
                }`}
              >
                You must input a name.
              </span>
              <input
                name="lastName"
                type="text"
                value={formData.lastName}
                id="lastName"
                onChange={handleOnChange}
                aria-required="true"
                required
              />
            </label>
          </InputField>
          <InputField>
            <label htmlFor="email">
              Email <span className="required">(required)</span>
              <span
                className={`error-message${
                  formStatus.errors.findIndex(
                    error => error.idref === "email"
                  ) !== -1
                    ? " error-active"
                    : " "
                }`}
              >
                You must input a email.
              </span>
              <input
                name="email"
                type="email"
                value={formData.email}
                id="email"
                onChange={handleOnChange}
                aria-required="true"
                required
              />
            </label>
          </InputField>
          <InputField>
            <label htmlFor="phone">
              phone number <span className="required">(required)</span>
              <span
                className={`error-message${
                  formStatus.errors.findIndex(
                    error => error.idref === "phone"
                  ) !== -1
                    ? " error-active"
                    : " "
                }`}
              >
                You must input a phone number.
              </span>
              <input
                name="phone"
                type="text"
                value={formData.phone}
                id="phone"
                onChange={handleOnChange}
                aria-required="true"
                required
              />
            </label>
          </InputField>
          <InputField>
            <label htmlFor="help">
              How do you want to help?
              <span className="required">(required)</span>
              <span
                className={`error-message${
                  formStatus.errors.findIndex(
                    error => error.idref === "help"
                  ) !== -1
                    ? " error-active"
                    : " "
                }`}
              >
                You must input a phone number.
              </span>
              <textarea
                name="help"
                rows={8}
                value={formData.help}
                id="help"
                onChange={handleOnChange}
                aria-required="true"
                required
              />
            </label>
          </InputField>
          {/*  ✅ reCAPTCHA */}
          <div className="captcha-container">
            {formStatus.captachError && (
              <p>
                The form will not submit until you have checked the reCAPCHA.
              </p>
            )}
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={process.env.GATSBY_RECAPTCHA_SITE_KEY}
              onChange={onChangeRecaptcha}
              onExpired={() => setIsCaptchaVerified(false)}
            />
          </div>
          <div className="btn-submit">
            <button
              disabled={!isCaptchaVerified || formStatus.submitting}
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
      <FormSubmit isActive={formStatus.submitting} />
      <FormSuccess
        isActive={formStatus.success}
        handleClose={handleSuccessModalClose}
      />
      <FormErrors
        isActive={formStatus.errorWarnDisplay}
        handleClose={handleErrorModalClose}
      />
    </SectionStyled>
  )
}

const SectionStyled = styled.div`
  background-color: ${colors.colorPrimary};

  .wrapper {
    ${standardWrapper};
  }
  .title {
    width: 100%;
    text-align: center;

    h2 {
      ${H2White};
      margin-bottom: 2rem;
      padding-bottom: 2rem;
      border-bottom: 0.1rem solid ${colors.colorTertiary};
    }

    p {
      ${B1White};
      padding: 0 5rem;
    }
  }

  form {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100%;

    //  ✅ reCAPTCHA //
    .captcha-container {
      width: 100%;
      margin-top: 1rem;
      margin-bottom: 1rem;
      padding-left: 2rem;

      p {
        ${B2White};
        margin: 0;
        margin-bottom: 0.75rem;
        color: red;
      }
    }

    .btn-submit {
      margin-top: 5rem;

      @media (min-width: 768px) {
        margin: 2rem;
      }

      button {
        ${Btn1Grey};
      }
    }
  }
`

const InputField = styled.div`
  width: calc(100%);
  margin: 1rem auto;

  @media (min-width: 768px) {
    width: calc(50% - 4rem);
    margin: 1rem 2rem;
    padding: 1rem 0;
  }

  label {
    ${B2White};
    display: block;
    width: 100%;
    line-height: 1.5;

    .error-message {
      display: none;
    }

    .error-active {
      display: inline-block;
      color: red;
      padding-left: 2rem;
    }

    input,
    textarea {
      display: block;
      margin-top: 0.25rem;
      margin-bottom: 0.5rem;
      padding: 0.9rem 1rem;
      border-radius: 0.2rem;
      color: #444;
      margin-left: 0;
      margin-right: 0;
      width: 100%;
      border: 0.1rem ${colors.colorSecondary} solid;
    }
  }
`

export default TradePartner
