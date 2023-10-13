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

  console.log("communities: ", communities)
  console.log("lotworks: ", lotworks)
  console.log("allHomePlans", allHomePlans)
  console.log("allQuickPossessions", allQuickPossessions)

  const community = communities.find(com => {
    if (lotworks.community === "Bayside") {
      return com.node.title === "Bayside Estates"
    } else if (lotworks.community === "Coopers Crossing") {
      return com.node.title === "Cooper’s Crossing"
    }
    return com.node.title === lotworks.community
  })

  const matchedQPHome = allQuickPossessions.find(
    home => home?.node.acfQuickPossessions.lotworksLotid === lotworks.lotid
  )
  let matchedFloorPlans = []

  if (matchedQPHome === undefined) {
    matchedFloorPlans = allHomePlans.filter(home => {
      return (
        parseInt(home?.node?.acfHomePlans?.floorPlanWidth, 10) <=
        parseInt(lotworks?.buildpocket, 10)
      )
    })
  }

  console.log("matchedQPHome", matchedQPHome)

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
