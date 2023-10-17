import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import queryString from "query-string"
import { ThemeProvider } from "styled-components"

import theme from "../styles/theme/Theme"
import GlobalStyle from "../styles/global/Golbal"

import SidePanelDisplay from "../components/sidePanel/SidePanelDisplay"
import NotFound from "../components/sidePanel/NotFound"

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
  // console.log("allHomePlans", allHomePlans)
  // console.log("allQuickPossessions", allQuickPossessions)

  const community = communities.find(com => {
    if (lotworks.community === "Bayside") {
      return com.node.title === "Bayside Estates"
    } else if (lotworks.community === "Coopers Crossing") {
      return com.node.title === "Cooper’s Crossing"
    }
    return com.node.title === lotworks.community
  })

  let matchedQPHome = undefined
  let matchedFloorPlans = []

  if (lotworks.status === "available") {
    matchedFloorPlans = allHomePlans.filter(home => {
      return (
        parseInt(home?.node?.acfHomePlans?.floorPlanWidth, 10) <=
        parseInt(lotworks?.buildpocket, 10)
      )
    })

    console.log("matchedFloorPlans BEFORE", matchedFloorPlans)

    matchedFloorPlans = matchedFloorPlans.filter(home => {
      if (
        lotworks.community === "Bayside" &&
        home.node.communities.nodes.find(
          community => community.slug === "bayside-estates"
        )
      ) {
        return true
      } else if (
        lotworks.community === "Coopers Crossing" &&
        home.node.communities.nodes.find(
          community => community.slug === "coopers-crossing"
        )
      ) {
        return true
      } else if (
        lotworks.community === "Chinook Gate" &&
        home.node.communities.nodes.find(
          community => community.slug === "chinook-gate"
        )
      ) {
        return true
      } else if (
        lotworks.community === "Lanark Landing" &&
        home.node.communities.nodes.find(
          community => community.slug === "lanark-landing"
        )
      ) {
        return true
      } else if (
        lotworks.community === "Lewiston" &&
        home.node.communities.nodes.find(
          community => community.slug === "lewiston"
        )
      ) {
        return true
      } else if (
        lotworks.community === "Goldwyn" &&
        home.node.communities.nodes.find(
          community => community.slug === "goldwyn"
        )
      ) {
        return true
      } else if (
        lotworks.community === "Vista Crossing" &&
        home.node.communities.nodes.find(
          community => community.slug === "vista-crossing"
        )
      ) {
        return true
      } else if (
        lotworks.community === "Mandalay Estates" &&
        home.node.communities.nodes.find(
          community => community.slug === "mandalay-estates"
        )
      ) {
        return true
      } else {
        return false
      }
    })

    console.log("matchedFloorPlans AFTER", matchedFloorPlans)
    const queryData = queryString.parse(props.location.search)
    console.log("queryData", queryData)
    console.log("lotworks.community", lotworks.community.communities)
  } else if (lotworks.status === "spec") {
    matchedQPHome = allQuickPossessions.find(
      home => home?.node.acfQuickPossessions.lotworksLotid === lotworks.lotid
    )
  }

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
          acfQuickPossessions {
            lotworksLotid
          }
        }
      }
    }

    allHomePlans: allWpHomePlan {
      edges {
        node {
          title
          slug
          acfHomePlans {
            floorPlanWidth
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
