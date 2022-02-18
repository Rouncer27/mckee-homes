import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import QuickPossession from "../components/Home/QuickPossession"

const quickPossession = props => {
  const { quickPossession } = props.data
  // const prevPlan = props.pageContext.prev
  // const nextPlan = props.pageContext.next
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
      databaseId
      communities {
        nodes {
          slug
          name
          acfCommunities {
            city
          }
        }
      }
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
        }
        floorPlans {
          floorPlanName
          floorPlanImage {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(width: 1500)
              }
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

        mainImageGallery {
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
