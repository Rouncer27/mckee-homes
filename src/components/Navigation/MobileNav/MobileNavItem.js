import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { colors, B1Black, B2Black } from "../../../styles/helpers"

import MobileSubMenu from "./MobileSubMenu"

const MobileNavItem = ({ item }) => {
  const slug = item.url
    .split("/")
    .filter(item => item !== "")
    .join("/")

  const [subActive, setSubActive] = useState(false)

  const handleToggleActive = () => {
    setSubActive(!subActive)
  }
  return (
    <MobileNavItemStyled>
      <Link
        className={`${
          item.cssClasses.length > 0 ? item.cssClasses.map(item => item) : ""
        }`}
        to={`/${slug === "home" ? "" : slug}`}
      >
        {item.label}
      </Link>
      {item.subItems && item.subItems.length > 0 && (
        <div className="sub-wrap">
          <button
            onClick={() => {
              handleToggleActive()
            }}
          >
            {subActive ? <>&#8722;</> : <>&#43;</>}
          </button>
          <div className="subContainer">
            <MobileSubMenu subActive={subActive} items={item.subItems} />
          </div>
        </div>
      )}
    </MobileNavItemStyled>
  )
}

const MobileNavItemStyled = styled.li`
  position: relative;
  width: 100%;
  border-bottom: 0.1rem solid ${colors.white};
  text-align: left;

  .sub-wrap {
    button {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 7.5rem;
      height: 100%;
      background-color: transparent;
      font-size: 3rem;
      font-weight: bold;
      color: ${colors.white};
      border: none;
      border-radius: 0 !important;
      z-index: 10;

      &:hover {
        cursor: pointer;
      }
    }
  }

  .subContainer {
    width: 100%;
    height: 100%;
  }

  a {
    ${B2Black};
    display: block;
    width: 100%;
    padding: 2rem;
    color: ${colors.white};
    text-transform: uppercase;

    &:hover {
      color: ${colors.colorTertiary};
    }

    &[aria-current="page"] {
      color: ${colors.colorSecondary} !important;
      background-color: ${colors.colorAccent};

      &:hover {
        cursor: default;
      }
    }

    &.mobile-highlight {
      background-color: ${colors.colorTertiary};

      &:hover {
        color: ${colors.black} !important;
      }
    }
  }
`

export default MobileNavItem
