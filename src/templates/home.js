import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import HomePlan from "../components/Home/HomePlan"

const home = props => {
  const { home, seoInfo } = props.data
  // const prevPlan = props.pageContext.prev
  // const nextPlan = props.pageContext.next

  return (
    <Layout>
      <Seo
        title={
          seoInfo?.seoFields?.swbThemeMetaTitle
            ? seoInfo.seoFields.swbThemeMetaTitle
            : "McKee Homes - Home Plan"
        }
        description={
          seoInfo?.seoFields?.swbThemeDescription
            ? seoInfo.seoFields.swbThemeDescription
            : "McKee Homes - Home Plan"
        }
        //metaImg={seoInfo.seoFields.swbThemeImage.localFile.relativePath}
        location={props.location.pathname}
      />
      <HomePlan home={home} />
    </Layout>
  )
}

export const query = graphql`
  query homePlanQuery($slug: String!) {
    seoInfo: wpHomePlan(slug: { eq: $slug }) {
      seoFields {
        swbThemeDescription
        swbThemeMetaTitle
        swbThemeImage {
          localFile {
            relativePath
          }
        }
      }
    }

    home: wpHomePlan(slug: { eq: $slug }) {
      title
      id
      date
      slug
      databaseId
      acfHomePlans {
        floorPlansSelectionComponent {
          floorPlansSelectionComponentRequired
          mainFloorBackgroundImage {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(width: 2000)
              }
            }
          }
          mainFloor {
            planTitle
            planImage {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 2000)
                }
              }
            }
            planPdf {
              mediaItemUrl
            }
          }
          upperFloorBackgroundImage {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(width: 2000)
              }
            }
          }
          upperFloorFloor {
            planTitle
            planImage {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 2000)
                }
              }
            }
            planPdf {
              mediaItemUrl
            }
          }
          basementFloorBackgroundImage {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(width: 2000)
              }
            }
          }
          basementFloorFloor {
            planTitle
            planImage {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 2000)
                }
              }
            }
            planPdf {
              mediaItemUrl
            }
          }
        }

        details
        floorPlanWidth
        numberOfBathrooms
        numberOfBedrooms
        squareFootage
        virtualTour
        floorPlanPdf {
          mediaItemUrl
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
          mediaItemUrl
          altText
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
      }

      communities {
        nodes {
          slug
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
