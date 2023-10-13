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

  const community = communities.find(com => {
    if (lotworks.community === "Bayside") {
      return com.node.title === "Bayside Estates"
    } else if (lotworks.community === "Coopers Crossing") {
      return com.node.title === "Cooper’s Crossing"
    }
    return com.node.title === lotworks.community
  })

  console.log("community", community)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {community && community.node ? (
        <SidePanelDisplay
          community={community.node}
          lotWidth={lotworks.frontage}
          buildPocket={lotworks.buildpocket}
          lotAddress={lotworks.lotaddress}
        />
      ) : (
        <NotFound />
      )}
    </ThemeProvider>
  )
}

export const sidePanelQuery = graphql`
  {
    allHomePlans: allWpHomePlan {
      edges {
        node {
          title
          slug
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
