import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import {
  B1White,
  B2White,
  Btn1Grey,
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

const QuickPossesionsForm = ({ homeSlug, title, community }) => {
  // ✅ reCAPTCHA
  const recaptchaRef = useRef(null)
  // ✅ reCAPTCHA
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false)

  const [formData, setFormData] = useState({
    yourname: "",
    email: "",
    phone: "",
    community: "all",
    title: "",
    questions: "",
    newsletterChecked: false,
    realtor: "no",
    newsletter: "No Thank You",
    type: "Quick Possessions",
  })

  // ✅ reCAPTCHA
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    errorWarnDisplay: false,
    success: false,
    errors: [],
    captachError: false,
  })

  useEffect(() => {
    setFormData({
      ...formData,
      newsletter: formData.newsletterChecked
        ? "Yes I want to sign up to your newsletter"
        : "No Thank You",
    })
  }, [formData.newsletterChecked])

  useEffect(() => {
    setFormData({
      ...formData,
      title: title,
      community: community,
      type: `Quick Possessions - ${title}`,
    })
  }, [])

  const onRealtorChange = value => {
    setFormData({
      ...formData,
      realtor: value,
    })
  }

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
  const handleOnCheck = () => {
    setFormData({
      ...formData,
      newsletterChecked: !formData.newsletterChecked,
    })
  }

  const getFormId = community => {
    switch (community) {
      case "bayside-estates":
        return 2198
      case "chinook-gate":
        return 2199
      case "coopers-crossing":
        return 2200
      case "goldwyn":
        return 8564
      case "kings-heights":
        return 2201
      case "lanark-landing":
        return 2202
      case "lewiston":
        return 8565
      case "ravenswood":
        return 2203
      case "vista-crossing":
        return 2204
      default:
        return 2205
    }
  }

  console.log("community", community)

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

    const formId = getFormId(community)

    setFormStatus({
      ...formStatus,
      submitting: true,
    })
    const formDataArray = Object.entries(formData)
    const bodyFormData = new FormData()
    formDataArray.forEach(field => {
      bodyFormData.append(field[0], field[1])
    })

    const response = await submitToServer(formId, bodyFormData)

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
      // ✅ Reset reCAPTCHA
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
      yourname: "",
      email: "",
      phone: "",
      community: "all",
      title: "",
      questions: "",
      newsletterChecked: false,
      realtor: "no",
      newsletter: "No Thank You",
      type: "Quick Possessions",
    })
  }

  return (
    <SectionStyled>
      <div id="more-information-form" className="wrapper">
        <div className="title">
          <h2>Send me more information On this Quick Possession</h2>
        </div>
        <div className="form">
          <p>
            We will send you more information about this home and plan. If you
            are looking for more information on what is included on each
            attribute level visit us at a show home or call us today.
          </p>
          <form onSubmit={handleOnSubmit}>
            <InputField>
              <label htmlFor="firstName">
                Your Name <span className="required">(required)</span>
                <span
                  className={`error-message${
                    formStatus.errors.findIndex(
                      error => error.idref === "yourname"
                    ) !== -1
                      ? " error-active"
                      : " "
                  }`}
                >
                  You must input a name.
                </span>
                <input
                  name="yourname"
                  type="text"
                  value={formData.yourname}
                  id="yourname"
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
                phone number
                <input
                  name="phone"
                  type="text"
                  value={formData.phone}
                  id="phone"
                  onChange={handleOnChange}
                />
              </label>
            </InputField>

            <RadioBtnField>
              <p id="radio-btn-title">Are you working with a realtor?</p>
              <input
                type="radio"
                id="realtorChoice1"
                name="realtor"
                value="yes"
                checked={formData.realtor === "yes"}
                onChange={() => onRealtorChange("yes")}
              />
              <label htmlFor="realtorChoice1">Yes</label>

              <input
                type="radio"
                id="realtorChoice2"
                name="realtor"
                value="no"
                checked={formData.realtor === "no"}
                onChange={() => onRealtorChange("no")}
              />
              <label htmlFor="realtorChoice2">No</label>
            </RadioBtnField>

            <InputField>
              <label htmlFor="questions">
                Questions/comments
                <textarea
                  name="questions"
                  value={formData.questions}
                  id="questions"
                  onChange={handleOnChange}
                  rows="3"
                />
              </label>
            </InputField>

            <CheckboxField>
              <input
                name="send"
                type="checkbox"
                value={formData.newsletterChecked}
                id="send"
                onChange={handleOnCheck}
              />
              <label htmlFor="send">
                Send me monthly news, promotions and updates
              </label>
            </CheckboxField>

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
                Send Me More Info
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="back-btn">
        <Link to={`/${homeSlug}`}>Back To Listings</Link>
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

  .back-btn {
    padding: 4.5rem 2rem;
    background-color: #a5b6ba;
    text-align: center;
    text-transform: uppercase;

    a {
      ${B1White};
    }
  }

  .wrapper {
    ${standardWrapper};
  }

  .title {
    width: 100%;
    border-bottom: solid 0.2rem ${colors.white};
    text-align: center;

    h2 {
      ${H2White};
    }
  }

  .form {
    width: 100%;
    max-width: 90rem;
    margin: 0 auto;

    form {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      width: 100%;
    }

    p {
      ${B1White};
      width: calc(100%);
      margin: 2rem auto;

      @media (min-width: 768px) {
        width: calc(100% - 4rem);
        margin: 2rem;
      }
    }

    //  ✅ reCAPTCHA //
    .captcha-container {
      width: 100%;
      margin-top: 1rem;
      margin-bottom: 1rem;
      padding-left: 2rem;

      p {
        ${B1White};
        margin: 0;
        margin-bottom: 0.75rem;
        color: red;
      }
    }

    .btn-submit {
      width: 100%;
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

const RadioBtnField = styled.div`
  width: calc(100%);
  margin: 0 auto;

  @media (min-width: 768px) {
    width: calc(50% - 4rem);
    margin: 0 2rem;
    padding: 1rem 0;
  }

  p#radio-btn-title {
    ${B2White};
    display: block;
    position: relative;
    margin-bottom: 1rem;
    margin-left: 0;
    padding-right: 5rem;
    cursor: pointer;
  }

  label {
    ${B2White};
    display: block;
    position: relative;
    margin-bottom: 1rem;
    padding-right: 7.5rem;
    max-width: 5rem;
    cursor: pointer;

    &::before {
      display: block;
      position: absolute;
      top: -1rem;
      right: -2rem;
      width: 3rem;
      height: 3rem;
      transition: all 0.3s ease-out;
      color: ${colors.colorTertiary};
      font-family: "FontAwesome";
      font-size: 2.5rem;
      content: "\f1db";
    }

    .error-message {
      display: none;
    }

    .error-active {
      display: inline-block;
      color: red;
      padding-left: 2rem;
    }
  }

  input {
    position: absolute;
    opacity: 0;

    &:checked + label {
      &::before {
        color: #fff !important;
        content: "\f058";
      }
    }
  }
`

const CheckboxField = styled.div`
  width: calc(100%);
  margin: 0 auto;

  @media (min-width: 768px) {
    width: calc(50% - 4rem);
    margin: 0 2rem;
    padding: 1rem 0;
  }

  label {
    ${B2White};
    position: relative;
    padding-right: 5rem;
    cursor: pointer;

    &::before {
      display: block;
      position: absolute;
      top: -1rem;
      right: -2rem;
      width: 3rem;
      height: 3rem;
      transition: all 0.3s ease-out;
      color: ${colors.colorTertiary};
      font-family: "FontAwesome";
      font-size: 2.5rem;
      content: "\f1db";
    }

    .error-message {
      display: none;
    }

    .error-active {
      display: inline-block;
      color: red;
      padding-left: 2rem;
    }
  }

  input {
    position: absolute;
    opacity: 0;

    &:checked + label {
      &::before {
        color: #fff !important;
        content: "\f058";
      }
    }
  }
`

const InputField = styled.div`
  width: calc(100%);
  margin: 0 auto;

  @media (min-width: 768px) {
    width: calc(50% - 4rem);
    margin: 0 2rem;
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
    textarea,
    select {
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

export default QuickPossesionsForm
