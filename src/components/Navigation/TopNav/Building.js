import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { B1Black, B2Black, colors } from "../../../styles/helpers"

import homeLove from "../../../images/icons/home-love.png"
import homeBook from "../../../images/icons/home-book.png"
import homeDesign from "../../../images/icons/home-design.png"
import homeLadder from "../../../images/icons/home-ladder.png"
import homeNews from "../../../images/icons/home-news.png"
import homeTeam from "../../../images/icons/home-team.png"
import homeTools from "../../../images/icons/home-tools.png"

const Building = ({ activesubstate }) => {
  return (
    <SubMenu activesub={activesubstate}>
      <p>Building With McKee</p>
      <ul>
        <li>
          <Link to="/building-with-mckee">
            <span className="nav-icon">
              <img src={homeLove} alt="Logo" />
            </span>
            <span className="nav-label">The Experience</span>
          </Link>
        </li>
        <li>
          <Link to="/our-team">
            <span className="nav-icon">
              <img src={homeTeam} alt="Logo" />
            </span>
            <span className="nav-label">Our Team</span>
          </Link>
        </li>
        <li>
          <Link to="/building-futures">
            <span className="nav-icon">
              <img src={homeTools} alt="Logo" />
            </span>
            <span className="nav-label">Building Futures</span>
          </Link>
        </li>
        <li>
          <Link to="/news-promotions">
            <span className="nav-icon">
              <img src={homeNews} alt="Logo" />
            </span>
            <span className="nav-label">News + Promotions</span>
          </Link>
        </li>
      </ul>
      <ul>
        {/* <li>
          <Link to="/airdrie">
            <span className="nav-icon">
              <img src={homeBuildings} alt="Logo" />
            </span>
            <span className="nav-label">The Community</span>
          </Link>
        </li> */}
        <li>
          <Link to="/customer-stories">
            <span className="nav-icon">
              <img src={homeBook} alt="Logo" />
            </span>
            <span className="nav-label">Customer Stories</span>
          </Link>
        </li>
        <li>
          <Link to="/design-centre">
            <span className="nav-icon">
              <img src={homeDesign} alt="Logo" />
            </span>
            <span className="nav-label">Design Centre</span>
          </Link>
        </li>
        <li>
          <Link to="/work-with-us">
            <span className="nav-icon">
              <img src={homeLadder} alt="Logo" />
            </span>
            <span className="nav-label">Work With Us</span>
          </Link>
        </li>
      </ul>
    </SubMenu>
  )
}

const SubMenu = styled.div`
  position: absolute;
  top: 100%;
  left: -27.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 65rem;
  padding: 2.5rem 2.5rem;
  background-color: #efefef;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  transition: all 0.3s ease-out;
  opacity: ${props => (props.activesub ? 1 : 0)};
  visibility: ${props => (props.activesub ? "visable" : "hidden")};
  z-index: 10000;

  p {
    ${B1Black};
    width: 100%;
    text-align: center;
    text-transform: uppercase;
  }

  ul {
    position: relative;
    width: calc(50% - 4rem);
    margin: 0 2rem;

    &:first-of-type {
      &::before {
        position: absolute;
        top: 1rem;
        right: 0;
        bottom: 1rem;
        width: 0.2rem;
        background-color: ${colors.colorPrimary};
        content: "";
      }
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
          justify-content: center;
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 6rem;
          padding: 1rem;
        }

        &[aria-current="page"] {
          background-color: ${colors.colorAccent};
          color: ${colors.black};
        }
      }
    }
  }
`

export default Building
