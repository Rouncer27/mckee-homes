import React, { useEffect } from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import ShowHome from "../components/Home/ShowHome"

const ShowHomes = props => {
  const { showHome, seoInfo } = props.data

  useEffect(() => {
    function gtag_report_conversion(url) {
      // var callback = function () {
      //   if (typeof url != "undefined") {
      //     window.location = url
      //   }
      // }
      window.gtag("event", "conversion", {
        send_to: "AW-780800236/zrSICID8vcIYEOyhqPQC",
        // event_callback: callback,
      })
      return false
    }

    gtag_report_conversion()

    // window.dataLayer.push({
    //   event: "conversion",
    //   pageTitle: seoInfo?.seoFields?.swbThemeMetaTitle,
    //   sendTo: "AW-780800236/zrSICID8vcIYEOyhqPQC",
    // })
  }, [])

  return (
    <div>
      <Layout>
        <Seo
          title={
            seoInfo?.seoFields?.swbThemeMetaTitle
              ? seoInfo.seoFields.swbThemeMetaTitle
              : "McKee Homes - Show Home"
          }
          description={
            seoInfo?.seoFields?.swbThemeDescription
              ? seoInfo.seoFields.swbThemeDescription
              : "McKee Homes - Show Home"
          }
          //metaImg={seoInfo.seoFields.swbThemeImage.localFile.relativePath}
          location={props.location.pathname}
        />
        <ShowHome home={showHome} />
      </Layout>
    </div>
  )
}

export const query = graphql`
  query showHomePlanQuery($slug: String!) {
    seoInfo: wpShowHome(slug: { eq: $slug }) {
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

    showHome: wpShowHome(slug: { eq: $slug }) {
      title
      id
      date
      slug
      databaseId
      communities {
        nodes {
          slug
        }
      }
      acfShowHomes {
        details
        address
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
        googleMapLink
        showHomeHours
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

      communities {
        nodes {
          name
          slug
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

export default ShowHomes
