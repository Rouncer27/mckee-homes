import React, { useState } from "react"
import styled from "styled-components"
import {
  B1White,
  Btn1Grey,
  B2White,
  colors,
  H2White,
  standardWrapper,
} from "../../../styles/helpers"

const TradePartner = ({ data }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    community: "",
    send: false,
  })

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    errorWarnDisplay: false,
    success: false,
    errors: [],
  })

  const handleOnChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
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
        <form>
          <InputField>
            <label htmlFor="firstName">
              Frist Name <span className="required">(required)</span>
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
            <label htmlFor="community">
              How do you want to help?
              <span className="required">(required)</span>
              <span
                className={`error-message${
                  formStatus.errors.findIndex(
                    error => error.idref === "community"
                  ) !== -1
                    ? " error-active"
                    : " "
                }`}
              >
                You must input a phone number.
              </span>
              <textarea
                name="community"
                rows={8}
                value={formData.community}
                id="community"
                onChange={handleOnChange}
                aria-required="true"
                required
              />
            </label>
          </InputField>
          <div className="btn-submit">
            <button>Send</button>
          </div>
        </form>
      </div>
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
