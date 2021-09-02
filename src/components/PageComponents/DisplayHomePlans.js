import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

import FilterMain from "./HomePlans/FilterMain"
import HomeDisplay from "./HomePlans/HomeDisplay"

import { medWrapper } from "../../styles/helpers"

const getData = graphql`
  {
    homePlans: allWpHomePlan {
      edges {
        node {
          title
          slug
          acfHomePlans {
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
          homeStyles {
            nodes {
              databaseId
              slug
              name
            }
          }

          homeTypes {
            nodes {
              databaseId
              slug
              name
            }
          }

          communities {
            nodes {
              databaseId
              slug
              name
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

const DisplayHomePlans = ({ data }) => {
  const allData = useStaticQuery(getData)
  // Plans Post Types
  const homePlans = allData.homePlans.edges
  // Filters Information
  const homeTypes = allData.homeTypes.edges
  const homeStyles = allData.homeStyles.edges
  const communities = allData.communities.edges
  // Load up the filters states. //
  const [filterActive, setFilterActive] = useState("")
  const [homeTypesFilter, setHomeTypesFilter] = useState([])
  const [homeStylesFilter, setHomeStylesFilter] = useState([])
  const [communityFilter, setCommunityFilter] = useState([])

  return (
    <SectionStyled>
      <div className="wrapper">
        <FilterMain
          filterActive={filterActive}
          setFilterActive={setFilterActive}
          homeTypes={homeTypes}
          homeTypesFilter={homeTypesFilter}
          setHomeTypesFilter={setHomeTypesFilter}
          homeStyles={homeStyles}
          homeStylesFilter={homeStylesFilter}
          setHomeStylesFilter={setHomeStylesFilter}
          communities={communities}
          communityFilter={communityFilter}
          setCommunityFilter={setCommunityFilter}
        />
        {homePlans.map(home => {
          let typeMatch = true
          let styleMatch = true
          let communityMatch = true
          console.log("home", home)

          if (homeTypesFilter.length > 0) {
            typeMatch = homeTypesFilter.some(type => {
              const matchFound = home.node.homeTypes.nodes.find(
                homeType => homeType.slug === type
              )
              if (matchFound !== undefined) return true
            })
          }

          if (homeStylesFilter.length > 0) {
            styleMatch = homeStylesFilter.some(style => {
              const matchFound = home.node.homeStyles.nodes.find(
                homeStyle => homeStyle.slug === style
              )
              if (matchFound !== undefined) return true
            })
          }

          if (communityFilter.length > 0) {
            communityMatch = communityFilter.some(community => {
              const matchFound = home.node.communities.nodes.find(
                homeCommunity => homeCommunity.slug === community
              )
              if (matchFound !== undefined) return true
            })
          }

          const displayHome = typeMatch && styleMatch && communityMatch

          if (!displayHome) return null
          return <HomeDisplay key={home.node.slug} home={home.node} />
        })}
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

export default DisplayHomePlans
