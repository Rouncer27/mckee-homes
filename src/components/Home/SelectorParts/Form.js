import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import { B2Black, Btn1Navy, colors, H3Navy } from "../../../styles/helpers"
import submitToServer from "../../FormParts/functions/submitToServer"
import FormSuccess from "../../FormParts/formModals/FormSuccess"
import FormSubmit from "../../FormParts/formModals/FormSubmit"
import FormErrors from "../../FormParts/formModals/FormErrors"

// ✅ reCAPTCHA
import ReCAPTCHA from "react-google-recaptcha"

const Form = ({
  selectedPlans,
  setPlansBackToStart,
  isActive,
  setIsActive,
}) => {
  // ✅ reCAPTCHA
  const recaptchaRef = useRef(null)
  // ✅ reCAPTCHA
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false)

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    community: "all",
    mainFloor: "",
    mainFloorTitle: "",
    upperFloor: "",
    upperFloorTitle: "",
    basement: "",
    basementTitle: "",
    send: false,
  })

  // ✅ reCAPTCHA
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    errorWarnDisplay: false,
    success: false,
    errors: [],
    captachError: false,
  })

  const createNewUrl = baseUrl => {
    return baseUrl
      .split("/")
      .filter(part => {
        const isTrue =
          part === "https:"
            ? false
            : part === "mckeehomes.swbdatabases.ca"
            ? false
            : part === "wp-content"
            ? false
            : true

        if (isTrue) return part
      })
      .join("/")
  }

  useEffect(() => {
    setFormData(prevState => {
      return {
        ...prevState,
        mainFloor: createNewUrl(selectedPlans.mainFloor),
        mainFloorTitle: selectedPlans.mainFloorTitle,
        upperFloor: createNewUrl(selectedPlans.upperFloor),
        upperFloorTitle: selectedPlans.upperFloorTitle,
        basement: createNewUrl(selectedPlans.basement),
        basementTitle: selectedPlans.basementTitle,
      }
    })
  }, [selectedPlans])

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

  const handleErrorModalClose = () => {
    setFormStatus({
      ...formStatus,
      submitting: false,
      errorWarnDisplay: false,
      success: false,
    })
  }

  // ✅ reCAPTCHA
  const handleSuccessModalClose = () => {
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
      community: "all",
      mainFloor: "",
      mainFloorTitle: "",
      upperFloor: "",
      upperFloorTitle: "",
      basement: "",
      basementTitle: "",
      send: false,
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

    const response = await submitToServer(11435, bodyFormData)

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
      setPlansBackToStart()
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

  useEffect(() => {
    if (formStatus.submitting) {
      setIsActive(true)
    } else if (formStatus.success) {
      setIsActive(true)
    } else if (formStatus.errorWarnDisplay) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }, [formStatus])

  return (
    <StyledSection>
      <div className="select-floorplan-plans-main-title">
        <h3>Send Floor Plan</h3>
      </div>
      <div className="floor-plans-form">
        <h3>Email Me This Floor Plan</h3>
        <p>
          Fill out this form to receive your customized floorplan in your email.
          We will also add you to our McKee Homes communications including
          promotions and events etc.
        </p>
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
            <label htmlFor="community">
              Community Interested In?
              <select
                value={formData.community}
                name="community"
                id="community"
                onChange={handleOnChange}
              >
                <option value="all">All Communities</option>
                <option value="bayside-estates">Bayside Estates</option>
                <option value="chinook-gate">Chinook Gate</option>
                <option value="coopers-crossing">Coopers Crossing</option>
                <option value="goldwyn">Goldwyn</option>
                {/* <option value="kings-heights">King's Heights</option> */}
                <option value="lanark-landing">Lanark Landing</option>
                <option value="lewiston">Lewiston</option>
                {/* <option value="ravenswood">Ravenswood</option> */}
                <option value="vista-crossing">Vista Crossing</option>
                <option value="mandalay-estates">Mandalay Estates</option>
              </select>
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
              Receive my customized floorplan
            </button>
            <p>
              &#42; Disclaimer: selected upgrades may change the price of the
              home.
            </p>
          </div>
        </form>
      </div>
      {isActive && (
        <div className="floor-plans-models">
          <FormSubmit isActive={formStatus.submitting} />
          <FormSuccess
            isActive={formStatus.success}
            handleClose={handleSuccessModalClose}
            message="Check your email for your customized floorplan details."
          />
          <FormErrors
            isActive={formStatus.errorWarnDisplay}
            handleClose={handleErrorModalClose}
          />
        </div>
      )}
    </StyledSection>
  )
}

const StyledSection = styled.section`
  position: relative;
  width: calc(100%);
  height: 100%;

  .floor-plans-form {
    width: calc(100% - 2rem);
    margin: 1rem;
    padding: 5rem;
    border: 0.2rem solid ${colors.colorPrimary};

    @media (min-width: 768xp) {
      width: calc(100% - 15rem);
      margin: 2rem 7.5rem 0 0;
    }

    h3 {
      ${H3Navy};
      width: 100%;
      font-weight: bold;
      text-transform: uppercase;
    }

    p {
      ${B2Black};
    }

    form {
      display: flex;
      flex-wrap: wrap;

      //  ✅ reCAPTCHA //
      .captcha-container {
        width: 100%;
        padding-left: 2rem;

        p {
          ${B2Black};
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
          ${Btn1Navy};
          cursor: pointer;
        }

        p {
          ${B2Black};
          margin-top: 1rem;
        }
      }
    }
  }

  .floor-plans-models {
    position: absolute;
    top: 0;
    left: 0%;
    width: 100%;
    height: 100%;
    z-index: 99999999;

    & > div {
      position: absolute !important;
      width: calc(100% - 15rem);
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
    ${B2Black};
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
      border: 0.2rem ${colors.colorPrimary} solid;
      border-radius: 0.4rem;
    }
  }
`

export default Form
