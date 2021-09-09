import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import QuickPossession from "../components/Home/QuickPossession"

const quickPossession = props => {
  const { quickPossession, quickPossessions } = props.data
  const prevPlan = props.pageContext.prev
  const nextPlan = props.pageContext.next
  return (
    <div>
      <Layout>
        <QuickPossession home={quickPossession} />
      </Layout>
    </div>
  )
}

export const query = graphql`
  query quickPossessionPlanQuery($slug: String!) {
    quickPossession: wpQuickPossession(slug: { eq: $slug }) {
      title
      id
      date
      slug
      acfQuickPossessions {
        address
        homeFeatures
        price
        possessionTimeline
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

        floorPlanImage {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(width: 1500)
            }
          }
        }

        salesPersonName
        salesPersonPhone
        salesPersonEmail
        salesPersonCell
        salesPersonImage {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(width: 1000)
            }
          }
        }

        twoSalesPersonRequired
        twoSalesPersonCell
        twoSalesPersonEmail
        twoSalesPersonName
        twoSalesPersonPhone
        twoSalesPersonImage {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(width: 1000)
            }
          }
        }
      }
    }

    quickPossessions: allWpQuickPossession {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`

export default quickPossession
