import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import queryString from "query-string"
import { ThemeProvider } from "styled-components"

import theme from "../styles/theme/Theme"
import GlobalStyle from "../styles/global/Golbal"

import SidePanelDisplay from "../components/sidePanel/SidePanelDisplay"
import NotFound from "../components/sidePanel/NotFound"

import communityFilter from "../components/sidePanel/filters/communityFilter"
import floorPlanTypeFilter from "../components/sidePanel/filters/floorPlanTypeFilter"
import floorPlanWidthFilter from "../components/sidePanel/filters/floorPlanWidthFilter"

const SidePanel = props => {
  const [lotworks, setLotworks] = useState({})
  const communities = props.data.communities.edges
  const allHomePlans = props.data.allHomePlans.edges
  const allQuickPossessions = props.data.allQuickPossessions.edges
  useEffect(() => {
    if (props.location && props.location.search) {
      const queryData = queryString.parse(props.location.search)
      console.log("queryData", queryData)
      setLotworks(queryData)
    }
  }, [])

  // console.log("communities: ", communities)
  console.log("lotworks: ", lotworks)
  // const queryData = queryString.parse(props.location.search)
  // console.log("queryData", queryData)
  console.log("allHomePlans", allHomePlans)

  // Just using this for the correct title display and to find the correct salesperson inside the sidepanel display. //
  const community = communities.find(com => {
    if (lotworks.community === "Bayside") {
      return com.node.title === "Bayside Estates"
    } else if (lotworks.community === "Coopers Crossing") {
      return com.node.title === "Cooper’s Crossing"
    }
    return com.node.title === lotworks.community
  })

  console.log("community = ", community)

  const lotworksType =
    lotworks.stdproducttype === "Single Family Front"
      ? "Front Drive"
      : lotworks.stdproducttype === "Single Family Front — zero Line"
      ? "Front Drive"
      : lotworks.stdproducttype === "Single Family"
      ? "Front Drive"
      : lotworks.stdproducttype === "Duplex Front"
      ? "Front Drive"
      : lotworks.stdproducttype === "Single Family Rear"
      ? "Laned Homes"
      : lotworks.stdproducttype === "Duplex Rear"
      ? "Laned Homes"
      : lotworks.stdproducttype === "Townhomes"
      ? "Townhomes"
      : lotworks.stdproducttype === "Row home"
      ? "Townhomes"
      : null

  let matchedQPHome = undefined
  let matchedFloorPlans = []

  // Check if this is a quick posession or a open lot. //
  if (lotworks.status === "available") {
    // 1. Check if it in the correct community. //
    console.log("lotworks.community = ", lotworks.community)
    matchedFloorPlans = communityFilter(allHomePlans, lotworks)
    console.log("matchedFloorPlans AFTER communityFilter", matchedFloorPlans)

    // 2. Check to see if this is the correct home plan type. //
    console.log("TYPE FROM LOTWORKS = ", lotworksType)
    matchedFloorPlans = floorPlanTypeFilter(matchedFloorPlans, lotworksType)
    console.log(
      "matchedFloorPlans AFTER floorPlanTypeFilter",
      matchedFloorPlans
    )

    // 3. Check if the build pocket matches the floor plan width. //
    console.log(" lotworks?.buildpocket = ", lotworks?.buildpocket)
    matchedFloorPlans = floorPlanWidthFilter(
      matchedFloorPlans,
      lotworks?.buildpocket
    )
    console.log(
      "matchedFloorPlans AFTER floorPlanWidthFilter",
      matchedFloorPlans
    )
  } else if (lotworks.status === "spec") {
    matchedQPHome = allQuickPossessions.find(
      home => home?.node.acfQuickPossessions.lotworksLotid === lotworks.lotid
    )
  }

  console.log(
    "matchedQPHome THAT ARE DISPLAYED DONE FILTER PROCESS: ",
    matchedQPHome
  )

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {community && community.node ? (
        <SidePanelDisplay
          community={community.node}
          lotWidth={lotworks.frontage}
          buildPocket={lotworks.buildpocket}
          lotAddress={lotworks.lotaddress}
          matchedFloorPlans={matchedFloorPlans}
          matchedQPHome={matchedQPHome}
        />
      ) : (
        <NotFound />
      )}
    </ThemeProvider>
  )
}

export const sidePanelQuery = graphql`
  {
    allQuickPossessions: allWpQuickPossession {
      edges {
        node {
          title
          slug
          databaseId
          acfQuickPossessions {
            lotworksLotid
            optionalAddedNoteReq
            optionalAddedNote
            address
            homeFeatures
            price
            possessionTimeline
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
              acfCommunities {
                city
              }
            }
          }
        }
      }
    }

    allHomePlans: allWpHomePlan {
      edges {
        node {
          title
          slug
          databaseId
          acfHomePlans {
            floorPlanWidth
            optionalAddedNoteReq
            optionalAddedNote
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

          communities {
            nodes {
              slug
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
              description
            }
          }
        }
      }
    }

    communities: allWpCommunityPost {
      edges {
        node {
          title
          id
          date
          slug
          cities {
            nodes {
              name
            }
          }
          acfCommunity {
            content
            mapPin
            showHomeHours
            directions
            lotPickerEmbed
            communityUrl
            logo {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 750)
                }
              }
            }
            heroImage {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 2000)
                }
              }
            }

            salesPersonOne {
              ... on WpSalesTeam {
                title
                acfSalesTeam {
                  cell
                  email
                  phone
                  image {
                    altText
                    localFile {
                      childImageSharp {
                        gatsbyImageData(width: 1000)
                      }
                    }
                  }
                }
              }
            }

            salesPersonTwo {
              ... on WpSalesTeam {
                title
                acfSalesTeam {
                  cell
                  email
                  phone
                  image {
                    altText
                    localFile {
                      childImageSharp {
                        gatsbyImageData(width: 1000)
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export default SidePanel

//?lotid=lw-ddc-1482&status=spec&community=Vista%20Crossing&frontage=46.1&producttype=Front%20Drive%20Semi-Estate&lotprice=&lkp_stdproducttype=1&stdproducttype=Single%20Family%20Front&lotaddress=189%20Amery%20Crescent&lot=14&block=3&phase=1&buildpocket=38
