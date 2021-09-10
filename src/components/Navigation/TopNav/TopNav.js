import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { B1Black, B2White, B2Black, colors } from "../../../styles/helpers"

import HomeTypes from "./HomeTypes"
import Communities from "./Communities"
import Building from "./Building"

const TopNav = () => {
  const [homePlanSubActive, setHomePlanSubActive] = useState(false)
  const [quickSubActive, setQuickSubActive] = useState(false)
  const [communitiesSubActive, setCommunitiesSubActive] = useState(false)
  const [buildSubActive, setBuildSubActive] = useState(false)
  const [showSubActive, setShowSubActive] = useState(false)

  return (
    <TopNavStyled>
      <nav className="main-nav">
        <ul className="main-nav-wrap">
          <li
            onMouseEnter={() => setHomePlanSubActive(true)}
            onMouseLeave={() => setHomePlanSubActive(false)}
            className="nav-item top-nav-item"
          >
            <Link className="top-nav-item__link" to="/home-plans">
              Home Plans
            </Link>
            <HomeTypes activesubstate={homePlanSubActive} title="Home Plans" />
          </li>
          <li
            onMouseEnter={() => setQuickSubActive(true)}
            onMouseLeave={() => setQuickSubActive(false)}
            className="nav-item top-nav-item"
          >
            <Link className="top-nav-item__link" to="/quick-possessions">
              Quick Possessions
            </Link>
            <HomeTypes
              activesubstate={quickSubActive}
              title="Quick Possessions"
            />
          </li>
          <li
            onMouseEnter={() => setCommunitiesSubActive(true)}
            onMouseLeave={() => setCommunitiesSubActive(false)}
            className="nav-item top-nav-item"
          >
            <Link className="top-nav-item__link" to="/airdrie">
              Communities
            </Link>
            <Communities activesubstate={communitiesSubActive} />
          </li>
          <li
            className="nav-item top-nav-item"
            onMouseEnter={() => setBuildSubActive(true)}
            onMouseLeave={() => setBuildSubActive(false)}
          >
            <Link className="top-nav-item__link" to="/building-with-mckee">
              Building With McKee
            </Link>
            <Building activesubstate={buildSubActive} />
          </li>
          <li
            onMouseEnter={() => setShowSubActive(true)}
            onMouseLeave={() => setShowSubActive(false)}
            className="nav-item top-nav-item"
          >
            <Link className="top-nav-item__link" to="/show-homes">
              Visit A Show Home
            </Link>
            <HomeTypes activesubstate={showSubActive} title="Show Homes" />
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
  left: -5rem;
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
