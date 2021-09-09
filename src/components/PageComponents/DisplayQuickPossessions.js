import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

import { medWrapper } from "../../styles/helpers"
import HomeDisplay from "./QuickPossessions/HomeDisplay"

const getData = graphql`
  {
    quickPossessions: allWpQuickPossession {
      edges {
        node {
          title
          slug
          acfQuickPossessions {
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

const DisplayQuickPossessions = ({ data }) => {
  const allData = useStaticQuery(getData)
  // Plans Post Types
  const quickPossessions = allData.quickPossessions.edges
  if (!data.displayQuickPossessions) return null
  console.log("quickPossessions", quickPossessions)

  return (
    <SectionStyled>
      <div className="wrapper">
        {quickPossessions.map(home => (
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

export default DisplayQuickPossessions
