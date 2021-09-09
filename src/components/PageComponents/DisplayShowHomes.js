import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

import HomeDisplay from "./ShowHomes/HomeDisplay"
import { medWrapper } from "../../styles/helpers"

const getData = graphql`
  {
    showHomes: allWpShowHome {
      edges {
        node {
          title
          slug
          acfShowHomes {
            address
            squareFootage
            numberOfBedrooms
            numberOfBathrooms
            mainImage {
              altText
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1500)
                }
              }
            }
          }
        }
      }
    }

    homeStyles: allWpHomeStyle {
      edges {
        node {
          name
          slug
          databaseId
          count
        }
      }
    }

    homeTypes: allWpHomeType {
      edges {
        node {
          name
          slug
          databaseId
          count
        }
      }
    }

    communities: allWpCommunity {
      edges {
        node {
          name
          slug
          databaseId
          count
        }
      }
    }
  }
`

const DisplayShowHomes = () => {
  const allData = useStaticQuery(getData)
  // Plans Post Types
  const showHomes = allData.showHomes.edges

  console.log("showHomes", showHomes)
  return (
    <SectionStyled>
      <div className="wrapper">
        {showHomes.map(home => (
          <HomeDisplay home={home.node} />
        ))}
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  .wrapper {
    ${medWrapper};
    justify-content: flex-start;
  }
`

export default DisplayShowHomes
