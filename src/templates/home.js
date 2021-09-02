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
        mainImage {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(width: 2000)
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
