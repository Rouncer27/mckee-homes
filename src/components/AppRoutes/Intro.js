import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { B1Black, Btn1Grey, H1Navy } from "../../styles/helpers"

import heartKey from "../../images/heart-key.png"

const Intro = ({ intropage }) => {
  const displayBtn = intropage === "login" ? true : false
  const title =
    intropage === "dashboard" ? "My Favourites" : "My Favourites Sign Up"
  return (
    <StyledDiv intropage={intropage}>
      <div className="intro__icon">
        <div className="intro__icon--wrap">
          <img src={heartKey} alt="My favourites" />
        </div>
      </div>
      <div className="intro__content">
        <div className="intro__title">
          <h2>{title}</h2>
        </div>
        <div className="intro__para">
          <p>
            Welcome to the My Favourites Portal. The is your spot where you can
            save your favourite home plans and quick possessions, and make notes
            to yourself as well. We will share any exclusive offers and deals
            here for you too.
          </p>
        </div>
        {displayBtn && (
          <div className="intro__btn">
            <Link to="/signup">Get Started</Link>
          </div>
        )}
      </div>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;

  .intro__icon {
    width: 100%;
    margin-top: 2.5rem;

    @media (min-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 25%;
      margin-top: 0;
    }

    &--wrap {
      width: 9rem;
    }
  }

  .intro__content {
    width: 100%;

    @media (min-width: 768px) {
      width: 75%;
    }

    h2 {
      ${H1Navy};
      font-weight: 600;
    }

    p {
      ${B1Black};
    }

    .intro__para {
      max-width: 65rem;
    }
  }

  .intro__btn {
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;

    a {
      ${Btn1Grey};
    }
  }
`

export default Intro
