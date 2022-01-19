import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { B1Black, B2Black, colors } from "../../../styles/helpers"

import frontDrive from "../../../images/icons/front-drive-homes.png"
import lanedHomes from "../../../images/icons/laned-homes.png"
import townhomes from "../../../images/icons/townhomes.png"
import allHomes from "../../../images/icons/all-homes.png"

const HomeTypes = ({ activesubstate, title, slug }) => {
  return (
    <SubMenu activesub={activesubstate} className="main-sub-nav">
      <p>{title}</p>
      <li>
        <Link to={`${slug}?homeType=front-drive#filters`}>
          <span className="nav-icon">
            <img src={frontDrive} alt="Logo" />
          </span>
          <span className="nav-label">Front Drive</span>
        </Link>
      </li>
      <li>
        <Link to={`${slug}?homeType=laned-homes#filters`}>
          <span className="nav-icon">
            <img src={lanedHomes} alt="Logo" />
          </span>
          <span className="nav-label">Laned Homes</span>
        </Link>
      </li>
      <li>
        <Link to={`${slug}?homeType=townhomes#filters`}>
          <span className="nav-icon">
            <img src={townhomes} alt="Logo" />
          </span>
          <span className="nav-label">Townhomes</span>
        </Link>
      </li>
      <li>
        <Link to={`${slug}?homeType=AllHomes#filters`}>
          <span className="nav-icon nav-icon__all-homes">
            <img src={allHomes} alt="Logo" />
          </span>
          <span className="nav-label">All Homes</span>
        </Link>
      </li>
    </SubMenu>
  )
}

const SubMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: -5rem;
  width: 32rem;
  background-color: #efefef;
  padding: 2.5rem 4.5rem;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  transition: all 0.3s ease-out;
  opacity: ${props => (props.activesub ? 1 : 0)};
  visibility: ${props => (props.activesub ? "visable" : "hidden")};
  z-index: 10000;

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
      padding: 1.5rem 1rem;
      transition: all 0.3s ease-out;
      text-transform: uppercase;

      &:hover {
        background-color: ${colors.colorAccent};
      }

      .nav-label {
        display: block;
        padding-left: 7rem;
      }

      .nav-icon {
        display: flex;
        align-items: center;
        position: absolute;
        left: 0.5rem;
        top: 0;
        bottom: 0;
        width: 4.5rem;
      }
    }
  }
`

export default HomeTypes
