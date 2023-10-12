import React from "react"
import styled from "styled-components"
import { medWrapper, colors, B1Black } from "../../styles/helpers"

import HomeDisplay from "../PageComponents/ShowHomes/HomeDisplay"

const ShowHomes = ({ currentSlug, showHomes }) => {
  const currentCommunityShowHomes = showHomes.edges.filter(home => {
    const displayHere =
      home?.node?.acfShowHomes?.community?.filter(community => {
        return community.slug === currentSlug
      }).length > 0

    return displayHere
  })

  return (
    <SectionStyled>
      <div className="wrapper">
        <div className="title">
          <h2>Community Show Homes</h2>
        </div>
        {currentCommunityShowHomes.length > 0 ? (
          <div className="show-homes">
            {currentCommunityShowHomes.map((home, index) => {
              return <HomeDisplay key={index} home={home.node} />
            })}
          </div>
        ) : (
          <div>
            <p>No show homes in this community</p>
          </div>
        )}
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
    margin-bottom: 3rem;
    padding-top: 5rem;
    border-bottom: 0.25rem solid ${colors.colorTertiary};

    h2 {
      ${B1Black};
      margin: 0;
    }
  }

  .show-homes {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
`

export default ShowHomes
