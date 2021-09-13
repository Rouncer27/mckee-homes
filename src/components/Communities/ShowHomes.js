import React from "react"
import styled from "styled-components"
import { medWrapper, colors, B1Black } from "../../styles/helpers"

import HomeDisplay from "../PageComponents/ShowHomes/HomeDisplay"

const ShowHomes = ({ currentSlug, showHomes }) => {
  const currentCommunityShowHomes = showHomes.edges.filter(
    home => home.node.acfShowHomes.community.slug === currentSlug
  )

  return (
    <SectionStyled>
      <div className="wrapper">
        <div className="title">
          <h2>Community Show Homes</h2>
        </div>
        {currentCommunityShowHomes.length > 0 ? (
          <div className="show-homes">
            {currentCommunityShowHomes.map(home => {
              return <HomeDisplay home={home.node} />
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
