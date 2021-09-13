import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Header from "../components/Communities/Header"
import Details from "../components/Communities/Details"
import ShowHomes from "../components/Communities/ShowHomes"

const communities = props => {
  const { community } = props.data
  console.log(community)

  return (
    <div>
      <Layout>
        <Header hero={community.acfCommunity.heroImage} />
        <Details
          city={community.cities.nodes[0].name}
          title={community.title}
          details={community.acfCommunity.content}
          logo={community.acfCommunity.logo}
        />
        <ShowHomes />
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
  }
`

export default communities
