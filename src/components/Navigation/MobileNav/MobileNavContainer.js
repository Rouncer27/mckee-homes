import React, { useContext } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import MobileNavItem from "./MobileNavItem"
import { UserContext } from "../../../context/UserContext"
import { AlertContext } from "../../../context/AlertContext"
import { B2Black, colors } from "../../../styles/helpers"

import handleLogout from "../../../components/AppRoutes/AppActions/handleLogout"
import MobileNavSocial from "../../SocialMedia/MobileNavSocial"

const MobileNavContainer = ({ navitems }) => {
  const topNavItems = navitems.filter(item => item.parentDatabaseId === 0)
  const subNavItems = navitems.filter(item => item.parentDatabaseId !== 0)
  const navItemsWithSubs = topNavItems.map(item => {
    const itemWithSubs = subNavItems.filter(
      subItem => subItem.parentDatabaseId === item.databaseId
    )
    item.subItems = itemWithSubs
    return item
  })

  const [userState, userDispatch] = useContext(UserContext)
  const [, alertDispatch] = useContext(AlertContext)
  const linkSlug =
    Object.keys(userState.user).length === 0 ? "login" : "app/dashboard"

  return (
    <MobileNavContainerStyled>
      <ul className="main-mobile-nav">
        {navItemsWithSubs.map(item => (
          <MobileNavItem key={item.id} item={item} />
        ))}

        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://portal.virtuo.com/login`}
          >
            <span> &#9829;</span>My Home
          </a>
        </li>
        {Object.keys(userState.user).length === 0 ? (
          <li>
            <Link to={`/login`}>My Favourites</Link>
          </li>
        ) : (
          <>
            <li>
              <Link to={`/${linkSlug}`}>
                <span> &#9829;</span>My Favourites
              </Link>
            </li>
            <li>
              <button onClick={() => handleLogout(userDispatch, alertDispatch)}>
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
      <MobileNavSocial />
    </MobileNavContainerStyled>
  )
}

const MobileNavContainerStyled = styled.nav`
  display: block;
  width: 100%;

  ul.main-mobile-nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    padding-bottom: 5rem;

    li {
      position: relative;
      width: 100%;
      border-bottom: 0.1rem solid ${colors.white};
      text-align: left;

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
          color: ${colors.colorTertiary};

          &:hover {
            cursor: default;
          }
        }
      }
    }
  }
`

export default MobileNavContainer
