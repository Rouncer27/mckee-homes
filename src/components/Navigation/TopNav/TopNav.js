import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { B1Black, B2White, B2Black, colors } from "../../../styles/helpers"

import frontDrive from "../../../images/icons/front-drive-homes.png"
import lanedHomes from "../../../images/icons/laned-homes.png"
import townhomes from "../../../images/icons/townhomes.png"
import allHomes from "../../../images/icons/all-homes.png"

const TopNav = () => {
  const [homePlanSubActive, setHomePlanSubActive] = useState(false)

  return (
    <TopNavStyled>
      <nav className="main-nav">
        <ul className="main-nav-wrap">
          <li
            onMouseEnter={() => setHomePlanSubActive(true)}
            onMouseLeave={() => setHomePlanSubActive(false)}
            className="nav-item top-nav-item"
          >
            <Link className="top-nav-item__link" to="/">
              Home Plans
            </Link>
            <SubMenu activesub={homePlanSubActive} className="main-sub-nav">
              <p>Home Plans</p>
              <li>
                <Link to="/">
                  <span className="nav-icon">
                    <img src={frontDrive} alt="Logo" />
                  </span>
                  <span className="nav-label">Front Drive</span>
                </Link>
              </li>
              <li>
                <Link to="">
                  <span className="nav-icon">
                    <img src={lanedHomes} alt="Logo" />
                  </span>
                  <span className="nav-label">Laned Homes</span>
                </Link>
              </li>
              <li>
                <Link to="">
                  <span className="nav-icon">
                    <img src={townhomes} alt="Logo" />
                  </span>
                  <span className="nav-label">Townhomes</span>
                </Link>
              </li>
              <li>
                <Link to="">
                  <span className="nav-icon nav-icon__all-homes">
                    <img src={allHomes} alt="Logo" />
                  </span>
                  <span className="nav-label">All Homes</span>
                </Link>
              </li>
            </SubMenu>
          </li>
          <li className="nav-item top-nav-item">
            <Link className="top-nav-item__link" to="/">
              Quick Possessions
            </Link>
          </li>
          <li className="nav-item top-nav-item">
            <Link className="top-nav-item__link" to="/">
              Communities
            </Link>
          </li>
          <li className="nav-item top-nav-item">
            <Link className="top-nav-item__link" to="/">
              Building With McKee
            </Link>
          </li>
          <li className="nav-item top-nav-item">
            <Link className="top-nav-item__link" to="/">
              Visit A Show Home
            </Link>
          </li>
        </ul>
      </nav>
    </TopNavStyled>
  )
}

const TopNavStyled = styled.div`
  background-color: ${colors.colorPrimary};

  .main-nav {
    width: 100%;
  }

  .main-nav-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
  }

  .nav-item {
    position: relative;
  }

  .top-nav-item {
    margin: 0;
    padding: 0;

    &__link {
      ${B2White};
      display: block;
      padding: 1rem 3rem;
      text-align: center;
      text-transform: uppercase;

      &:hover {
        background-color: ${colors.colorTertiary};
        color: ${colors.white};
      }
    }
  }
`

const SubMenu = styled.ul`
  position: absolute;
  top: 100%;
  right: -50%;
  left: -50%;
  width: 30rem;
  background-color: #efefef;
  padding: 2.5rem 4.5rem;
  opacity: ${props => (props.activesub ? 1 : 0)};
  visibility: ${props => (props.activesub ? "visable" : "hidden")};

  p {
    ${B1Black};
    margin: 0;
    margin-bottom: 2rem;
    padding: 0;
    text-align: center;
    text-transform: uppercase;
  }

  li {
    display: block;

    a {
      ${B2Black};
      position: relative;
      display: block;
      width: 100%;
      margin-bottom: 1rem;
      padding: 1.5rem 0;
      text-transform: uppercase;

      .nav-label {
        display: block;
        padding-left: 7rem;
      }

      .nav-icon {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        display: block;
        width: 6rem;
        background-color: #fff;

        &__all-homes {
          padding: 1rem;
        }
      }
    }
  }
`

export default TopNav
