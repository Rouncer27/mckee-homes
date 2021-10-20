import React, { useState } from "react"
import styled from "styled-components"
import {
  B2Black,
  B2White,
  Btn1Grey,
  colors,
  standardWrapper,
} from "../../../styles/helpers"

const ContactForm = ({ data }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
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

  const handleOnCheck = () => {
    console.log(formData.send)
    setFormData({
      ...formData,
      send: !formData.send,
    })
  }

  return (
    <SectionStyled>
      <div className="wrapper">
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
            <label htmlFor="message">
              Message
              <span className="required">(required)</span>
              <span
                className={`error-message${
                  formStatus.errors.findIndex(
                    error => error.idref === "message"
                  ) !== -1
                    ? " error-active"
                    : " "
                }`}
              >
                You must input a message.
              </span>
              <textarea
                name="message"
                rows={5}
                value={formData.message}
                id="message"
                onChange={handleOnChange}
                aria-required="true"
                required
              />
            </label>
          </InputField>

          <CheckboxField>
            <input
              name="send"
              type="checkbox"
              checked={formData.send ? true : false}
              id="send"
              onChange={handleOnCheck}
            />
            <label htmlFor="send">
              Send me monthly news, promotions and updates
            </label>
          </CheckboxField>
          <div className="btn-submit">
            <button>Submit</button>
          </div>
        </form>
      </div>
    </SectionStyled>
  )
}

const CheckboxField = styled.div`
  width: calc(100%);
  margin: 1rem auto;

  @media (min-width: 768px) {
    width: calc(50% - 4rem);
    margin: 1rem 2rem;
    padding: 1rem 0;
  }

  label {
    ${B2Black};
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
        color: #154290 !important;
        content: "\f058";
      }
    }
  }
`

const SectionStyled = styled.div`
  margin-top: -5rem;

  .wrapper {
    ${standardWrapper};
  }

  form {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100%;

    .btn-submit {
      margin-top: 2rem;
      margin-bottom: 5rem;

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
      border: 0.2rem ${colors.colorPrimary} solid;
      border-radius: 0.4rem;
    }
  }
`

export default ContactForm
