import React, { useContext, useEffect } from "react"
import styled from "styled-components"
import {
  B1Black,
  B1Navy,
  Btn1Navy,
  H1Black,
  H2Navy,
  medWrapper,
} from "../../styles/helpers"
import { UserContext } from "../../context/UserContext"
import { AlertContext } from "../../context/AlertContext"
import { HomesContext } from "../../context/HomesContext"
import Intro from "./Intro"
import { Link } from "gatsby"
import getProfile from "./AppActions/getProfile"
import NoteCard from "./AppComponents/NoteCard"
import NoteCardNot from "./AppComponents/NoteCardNot"

const Dashboard = () => {
  const [userState, userDispatch] = useContext(UserContext)
  const [, alertDispatch] = useContext(AlertContext)
  const [homeState, homeDispatch] = useContext(HomesContext)

  useEffect(() => {
    getProfile(userDispatch, userState, alertDispatch)
  }, [])

  return (
    <SectionStyled>
      <div className="wrapper">
        <Intro intropage="dashboard" />
        <div className="title">
          <h2>My Dashboard</h2>
          <p>Welcome {userState.user.username}</p>
        </div>
        <div className="actions">
          <Link to="/app/account">Account Settings</Link>
        </div>
      </div>
      <div className="favourites">
        <div className="favourites__section home-plans">
          <div className="favourites__section--wrapper">
            <div className="favourites__section--inner">
              <div className="title">
                <h3>My saved Home Plans</h3>
              </div>
              {userState?.profile?.home_plans?.length ? (
                userState?.profile?.home_plans?.map(plan => {
                  const isStillActive = homeState.homePlans.some(
                    home => home.node.slug === plan.slug
                  )

                  if (isStillActive) {
                    return <NoteCard key={plan.id} plan={plan} />
                  } else {
                    return <NoteCardNot key={plan.id} plan={plan} />
                  }
                })
              ) : (
                <div className="no-plans-found">
                  <p>No Home Plans saved yet</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="favourites__section quick-poss">
          <div className="favourites__section--wrapper">
            <div className="favourites__section--inner">
              <div className="title">
                <h3>My saved Quick Possessions</h3>
              </div>
              {userState?.profile?.quick_possessions?.length ? (
                userState?.profile?.quick_possessions?.map(plan => {
                  return (
                    <div key={plan.id}>
                      <p>{plan.title}</p>
                    </div>
                  )
                })
              ) : (
                <div className="no-plans-found">
                  <p>No Quick Possessions saved yet</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="favourites__section show-home">
          <div className="favourites__section--wrapper">
            <div className="favourites__section--inner">
              <div className="title">
                <h3>My saved Show Homes</h3>
              </div>
              {userState?.profile?.show_homes?.length ? (
                userState?.profile?.show_homes?.map(plan => {
                  return (
                    <div key={plan.id}>
                      <p className="fav-title">{plan.title}</p>
                    </div>
                  )
                })
              ) : (
                <div className="no-plans-found">
                  <p>No Show Homes saved yet</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  .wrapper {
    ${medWrapper};
  }

  .title {
    width: 100%;

    h2 {
      ${H1Black};
    }

    p {
      ${B1Black};
    }
  }

  .actions {
    width: 100%;

    button,
    a {
      ${Btn1Navy};
      margin: 2rem;

      &:first-of-type {
        margin-left: 0;
      }
    }
  }

  .favourites {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;

    &__section {
      width: 100%;
      margin-bottom: 4.5rem;
      background-color: rgba(165, 182, 186, 0.26);

      &--wrapper {
        ${medWrapper};
      }

      &--inner {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        width: 100%;

        h3 {
          ${H2Navy};
        }

        .no-plans-found {
          p {
            ${B1Navy};
          }
        }
      }
    }
  }
`

export default Dashboard
