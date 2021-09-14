import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Header from "../components/Communities/Header"
import Details from "../components/Communities/Details"
import ShowHomes from "../components/Communities/ShowHomes"
import Connect from "../components/Communities/Connect"
import ShowHours from "../components/Communities/ShowHours"
import CommunityForm from "../components/PageComponents/Forms/CommunityForm"
import LotPicker from "../components/Communities/LotPicker"
import RelatedPosts from "../components/Communities/RelatedPosts"

const communities = props => {
  const { community, allWpShowHome } = props.data
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
          url={community.acfCommunity.communityUrl}
        />
        <ShowHomes currentSlug={community.slug} showHomes={allWpShowHome} />
        <Connect
          salesImg={
            community.acfCommunity.salesPersonImage.localFile.childImageSharp
              .gatsbyImageData
          }
          salesImgAlt={community.acfCommunity.salesPersonImage.altText}
          salesPersonName={community.acfCommunity.salesPersonName}
          salesPersonEmail={community.acfCommunity.twoSalesPersonEmail}
          salesPersonCell={community.acfCommunity.salesPersonCell}
          salesPersonPhone={community.acfCommunity.salesPersonPhone}
          community={community}
        />
        <ShowHours
          hours={community.acfCommunity.showHomeHours}
          map={community.acfCommunity.mapPin}
        />
        <CommunityForm />
        <LotPicker />
        <RelatedPosts />
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

    allWpShowHome: allWpShowHome {
      edges {
        node {
          title
          slug
          acfShowHomes {
            community {
              ... on WpCommunityPost {
                id
                slug
              }
            }
            address
            squareFootage
            numberOfBedrooms
            numberOfBathrooms
            mainImage {
              altText
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1500)
                }
              }
            }
          }
        }
      }
    }
  }
`

export default communities