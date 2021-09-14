import React, { useState } from "react"
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

const CommunityForm = () => {
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
          <h2>Tell me more about this community</h2>
        </div>
        <div className="form">
          <p>
            Send us your contact information to learn more and we will be in
            touch to speak about viewing this home.
          </p>
          <form>
            <InputField>
              <label htmlFor="firstName">
                Frist Name <span className="required">(required)</span>
                <span
                  className={`error-message${
                    formStatus.errors.findIndex(
                      error => error.idref === "firstName"
                    ) !== -1 && " error-active"
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
                    ) !== -1 && " error-active"
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
                    ) !== -1 && " error-active"
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
                    ) !== -1 && " error-active"
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
                Why Community are you interested in?{" "}
                <span className="required">(required)</span>
                <span
                  className={`error-message${
                    formStatus.errors.findIndex(
                      error => error.idref === "community"
                    ) !== -1 && " error-active"
                  }`}
                >
                  You must input a phone number.
                </span>
                <input
                  name="community"
                  type="text"
                  value={formData.community}
                  id="community"
                  onChange={handleOnChange}
                  aria-required="true"
                  required
                />
              </label>
            </InputField>

            <InputField>
              <label htmlFor="send">
                Send me monthly news, promotions and updates
                <input
                  name="send"
                  type="checkbox"
                  value={formData.send}
                  id="send"
                  onChange={handleOnChange}
                />
              </label>
            </InputField>
            <div className="btn-submit">
              <button>I want to learn more</button>
            </div>
          </form>
        </div>
      </div>
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
      margin: 2rem;
      width: calc(100%);
    }

    .btn-submit {
      margin: 2rem;

      button {
        ${Btn1Grey};
      }
    }
  }
`

const InputField = styled.div`
  width: calc(50% - 4rem);
  margin: 1rem 2rem;
  padding: 1rem 0;

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

export default CommunityForm