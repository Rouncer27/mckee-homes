import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { B1Black, B2Black, colors } from "../../../styles/helpers"

const Communities = ({ activesubstate }) => {
  return (
    <SubMenu activesub={activesubstate}>
      <ul>
        <p>
          <Link to="/airdrie">Airdrie</Link>
        </p>
        <li>
          <Link to="/communities/bayside-estates">Bayside Estates</Link>
        </li>
        <li>
          <Link to="/communities/chinook-gate">Chinook Gate</Link>
        </li>
        <li>
          <Link to="/communities/coopers-crossing">Cooper's Crossing</Link>
        </li>
        <li>
          <Link to="/communities/kings-heights">King's Heights</Link>
        </li>
        <li>
          <Link to="/communities/lanark-landing">Lanark Landing</Link>
        </li>
        <li>
          <Link to="/communities/ravenswood">Ravenswood</Link>
        </li>
      </ul>
      <ul>
        <p>
          <Link to="/crossfield">Crossfield</Link>
        </p>
        <li>
          <Link to="/communities/vista-crossing">Vista Crossing</Link>
        </li>
      </ul>
    </SubMenu>
  )
}

const SubMenu = styled.div`
  position: absolute;
  top: 100%;
  left: -20rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 50rem;
  padding: 2.5rem 2.5rem;
  background-color: #efefef;
  transition: all 0.3s ease-out;
  opacity: ${props => (props.activesub ? 1 : 0)};
  visibility: ${props => (props.activesub ? "visable" : "hidden")};
  z-index: 10000;

  ul {
    position: relative;
    width: calc(50% - 4rem);
    margin: 0 2rem;

    &:first-of-type {
      &::before {
        position: absolute;
        top: 7rem;
        right: -2rem;
        bottom: 0;
        width: 0.2rem;
        background-color: ${colors.colorPrimary};
        content: "";
      }
    }

    p {
      ${B1Black};
      text-align: center;
      text-transform: uppercase;

      a {
        ${B1Black};
        text-align: center;
        text-transform: uppercase;
      }
    }

    li {
      a {
        ${B2Black};
        display: block;
        padding: 0.5rem 1rem;
        transition: all 0.3s ease-out;
        text-transform: uppercase;

        &:hover {
          background-color: ${colors.colorAccent};
        }
      }
    }
  }
`

export default Communities
