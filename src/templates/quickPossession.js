import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"

const quickPossession = props => {
  const { quickPossession, quickPossessions } = props.data
  const prevPlan = props.pageContext.prev
  const nextPlan = props.pageContext.next
  return (
    <div>
      <Layout>
        <h2>quick Possession</h2>
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
