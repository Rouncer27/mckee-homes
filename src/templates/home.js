import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import HomePlan from "../components/Home/HomePlan"

const home = props => {
  const { home, allHomePlans } = props.data
  const prevPlan = props.pageContext.prev
  const nextPlan = props.pageContext.next

  return (
    <Layout>
      <HomePlan home={home} />
    </Layout>
  )
}

export const query = graphql`
  query homePlanQuery($slug: String!) {
    home: wpHomePlan(slug: { eq: $slug }) {
      title
      id
      date
      slug
      acfHomePlans {
        details
        numberOfBathrooms
        numberOfBedrooms
        squareFootage
        virtualTour
        floorPlanPdf {
          mediaItemUrl
          localFile {
            publicURL
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
          localFile {
            childImageSharp {
              gatsbyImageData(width: 2000)
            }
          }
        }

        salesPersonName
        salesPersonPhone
        salesPersonEmail
        salesPersonCell
        googleMapLink
        showHomeHours
        salesPersonImage {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(width: 1000)
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
      }

      communities {
        nodes {
          acfCommunities {
            logo {
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

    allHomePlans: allWpHomePlan {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`

export default home