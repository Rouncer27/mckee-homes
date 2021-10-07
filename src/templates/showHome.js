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
      acfShowHomes {
        details
        address
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
