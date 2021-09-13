import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"

const communities = props => {
  const { community, allCommunities } = props.data
  const prevPlan = props.pageContext.prev
  const nextPlan = props.pageContext.next
  return (
    <div>
      <Layout>
        <h2>{community.title}</h2>
      </Layout>
    </div>
  )
}

export const query = graphql`
  query communitiesPlanQuery($slug: String!) {
    community: wpCommunityPost(slug: { eq: $slug }) {
      title
      id
      date
      slug
      acfCommunity {
        content
        mapPin
        showHomeHours
        directions
        lotPickerEmbed
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

    allCommunities: allWpCommunityPost {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`

export default communities
