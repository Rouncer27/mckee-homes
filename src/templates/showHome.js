import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import ShowHome from "../components/Home/ShowHome"

const showHome = props => {
  const { showHome } = props.data
  // const prevPlan = props.pageContext.prev
  // const nextPlan = props.pageContext.next
  return (
    <div>
      <Layout>
        <ShowHome home={showHome} />
      </Layout>
    </div>
  )
}

export const query = graphql`
  query showHomePlanQuery($slug: String!) {
    showHome: wpShowHome(slug: { eq: $slug }) {
      title
      id
      date
      slug
      databaseId
      communities {
        nodes {
          slug
        }
      }
      acfShowHomes {
        details
        address
        numberOfBathrooms
        numberOfBedrooms
        squareFootage
        virtualTour
        floorPlanImageReq
        floorPlanPdf {
          mediaItemUrl
        }
        designerFloorPlanReq
        designerFloorPlan {
          mediaItemUrl
          localFile {
            childImageSharp {
              gatsbyImageData(width: 2000)
            }
          }
        }
        signatureFloorPlanReq
        signatureFloorPlan {
          mediaItemUrl
          localFile {
            childImageSharp {
              gatsbyImageData(width: 2000)
            }
          }
        }
        gallery {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(width: 2000)
            }
          }
        }
        mainImage {
          altText
          mediaItemUrl
          localFile {
            childImageSharp {
              gatsbyImageData(width: 2000)
            }
          }
        }

        floorPlanImage {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(width: 1500)
            }
          }
        }
        googleMapLink
        showHomeHours
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

      communities {
        nodes {
          name
          slug
        }
      }
    }

    allWpShowHome: allWpShowHome {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`

export default showHome
