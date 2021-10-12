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
            Welcome to the My Favourites Portal. Sign up to gain access your My
            Favourites account, where you can save your favourite home plans and
            quick possessions, as well as learn about exclusive offers and
            deals.
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
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25%;

    &--wrap {
      width: 9rem;
      margin: auto;
    }
  }

  .intro__content {
    width: 75%;

    h2 {
      ${H1Navy};
      font-weight: 600;
    }

    p {
      ${B1Black};
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
