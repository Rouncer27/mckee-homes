import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { B1Black, Btn1Grey, H1Navy } from "../../styles/helpers"

const Intro = ({ intropage }) => {
  const displayBtn = intropage === "login" ? true : false

  return (
    <StyledDiv intropage={intropage}>
      <div className="intro__icon"></div>
      <div className="intro__content">
        <div className="intro__title">
          <h2>My Favourites Sign Up</h2>
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
    width: 25%;
  }

  .intro__content {
    width: 75%;

    h2 {
      ${H1Navy};
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
