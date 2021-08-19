import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { B1Black, B2Black, colors } from "../../../styles/helpers"

const Communities = ({ activesubstate }) => {
  return (
    <SubMenu activesub={activesubstate}>
      <ul>
        <p>Airdrie</p>
        <li>
          <Link to="/">Bayside Estates</Link>
        </li>
        <li>
          <Link to="/">Chinook Gate</Link>
        </li>
        <li>
          <Link to="/">Cooper's Crossing</Link>
        </li>
        <li>
          <Link to="/">King's Heights</Link>
        </li>
        <li>
          <Link to="/">Lanark Landing</Link>
        </li>
        <li>
          <Link to="/">Ravenswood</Link>
        </li>
      </ul>
      <ul>
        <p>Crossfiled</p>
        <li>
          <Link to="/">Vista Crossing</Link>
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
  justify-content: center;
  width: 50rem;
  padding: 2.5rem 4.5rem;
  background-color: #efefef;
  transition: all 0.3s ease-out;
  opacity: ${props => (props.activesub ? 1 : 0)};
  visibility: ${props => (props.activesub ? "visable" : "hidden")};

  ul {
    position: relative;
    width: calc(50%);

    &:first-of-type {
      &::before {
        position: absolute;
        top: 7rem;
        right: 1rem;
        bottom: 0;
        width: 0.25rem;
        background-color: ${colors.colorPrimary};
        content: "";
      }
    }

    p {
      ${B1Black};
      text-align: center;
      text-transform: uppercase;
    }

    li {
      a {
        ${B2Black};
        display: block;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        text-transform: uppercase;
      }
    }
  }
`

export default Communities
