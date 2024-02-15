import React, { useEffect } from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Header from "../components/Communities/Header"
import Details from "../components/Communities/Details"
import ShowHomes from "../components/Communities/ShowHomes"
import QuickPosessions from "../components/Communities/QuickPosessions"
import Connect from "../components/Communities/Connect"
import ShowHours from "../components/Communities/ShowHours"
import CommunityForm from "../components/PageComponents/Forms/CommunityForm"
import LotPicker from "../components/Communities/LotPicker"
import RelatedPosts from "../components/Communities/RelatedPosts"

const Communities = props => {
  const { community, allWpShowHome, quickPossessions, seoInfo } = props.data

  useEffect(() => {
    function gtag_report_conversion(url) {
      // var callback = function () {
      //   if (typeof url != "undefined") {
      //     window.location = url
      //   }
      // }
      window.gtag("event", "conversion", {
        send_to: "AW-780800236/yKA1CL7avcIYEOyhqPQC",
        // event_callback: callback,
      })
      return false
    }

    gtag_report_conversion()

    // window.dataLayer.push({
    //   event: "conversion",
    //   pageTitle: seoInfo?.seoFields?.swbThemeMetaTitle,
    //   sendTo: "AW-780800236/yKA1CL7avcIYEOyhqPQC",
    // })
  }, [])

  return (
    <div className="single-community-page">
      <Layout>
        <Seo
          title={
            seoInfo?.seoFields?.swbThemeMetaTitle
              ? seoInfo.seoFields.swbThemeMetaTitle
              : "McKee Homes - Community"
          }
          description={
            seoInfo?.seoFields?.swbThemeDescription
              ? seoInfo.seoFields.swbThemeDescription
              : "McKee Homes - Community"
          }
          //metaImg={seoInfo.seoFields.swbThemeImage.localFile.relativePath}
          location={props.location.pathname}
        />
        <Header hero={community.acfCommunity.heroImage} />
        <Details
          city={community.cities.nodes[0].name}
          title={community.title}
          details={community.acfCommunity.content}
          logo={community.acfCommunity.logo}
          url={community.acfCommunity.communityUrl}
          scroll={community.acfCommunity.communityMapScrollButton}
        />
        <ShowHomes currentSlug={community.slug} showHomes={allWpShowHome} />
        <QuickPosessions
          currentSlug={community.slug}
          quickPossessions={quickPossessions}
        />
        <Connect
          salesOne={community.acfCommunity.salesPersonOne}
          salesTwo={community.acfCommunity.salesPersonTwo}
        />
        <ShowHours
          hours={community.acfCommunity.showHomeHours}
          map={community.acfCommunity.mapPin}
          directions={community.acfCommunity.directions}
        />
        <CommunityForm />
        {community.acfCommunity.lotPickerEmbed ? (
          <LotPicker lotPicker={community.acfCommunity.lotPickerEmbed} />
        ) : null}
        <RelatedPosts
          communitySlug={community.slug}
          communityTitle={community.title}
        />
      </Layout>
    </div>
  )
}

export const query = graphql`
  query communitiesPlanQuery($slug: String!) {
    seoInfo: wpCommunityPost(slug: { eq: $slug }) {
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
        communityMapScrollButton
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
          communities {
            nodes {
              name
              slug
            }
          }
        }
      }
    }

    quickPossessions: allWpQuickPossession {
      edges {
        node {
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
            optionalAddedNote
            optionalAddedNoteReq
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
          }
        }
      }
    }
  }
`

export default Communities
