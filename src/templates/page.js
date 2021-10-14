import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
// import Seo from "../components/SEO"

import PageComponentGroups from "../components/PageComponentGroups"

const Page = props => {
  const { components } = props.data
  return (
    <Layout>
      {/* <Seo
        title={seo.pageSeoData.swbThemeMetaTitle}
        description={seo.pageSeoData.swbThemeDescription}
        // metaImg={seo.pageSeoData.swbThemeImage.localFile.relativePath}
        location={props.location.pathname}
      />*/}
      <PageComponentGroups location={props.location} components={components} />
    </Layout>
  )
}

export const pageTempQuery = graphql`
  query pageTempPage($id: String!) {
    components: wpPage(id: { eq: $id }) {
      acfMainTemplateFields {
        pageComponents {
          ... on WpPage_Acfmaintemplatefields_PageComponents_HeroOne {
            fieldGroupName
            title
            content
            backgroundImage {
              altText
              sourceUrl
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 2500)
                }
              }
            }
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_HeroTwo {
            fieldGroupName
            buttonText
            buttonSlug
            content
            image {
              altText
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 2500)
                }
              }
            }
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_HeroThree {
            fieldGroupName
            buttonText
            buttonSlug
            title
            content
            image {
              altText
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 2500)
                }
              }
            }
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_HeroFour {
            fieldGroupName
            topTitle
            mainTitle
            content
            image {
              altText
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 2500)
                }
              }
            }

            smallImageLeft {
              altText
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 2500)
                }
              }
            }

            smallImageRight {
              altText
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 2500)
                }
              }
            }

            buttons {
              buttonType
              buttonText
              buttonSlug
              buttonUrl
              fileUrl {
                sourceUrl
              }
            }
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_HeroFive {
            fieldGroupName
            topTitle
            mainTitle
            content
            image {
              altText
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 2500)
                }
              }
            }
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_HeroSix {
            fieldGroupName
            topTitle
            mainTitle
            content
            image {
              altText
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 2500)
                }
              }
            }
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_HeroSeven {
            fieldGroupName
            topTitle
            mainTitle
            content
            image {
              altText
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 2500)
                }
              }
            }
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_HeroEight {
            fieldGroupName
            topTitle
            mainTitle
            content
            image {
              altText
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 2500)
                }
              }
            }

            smallImageTop {
              altText
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1500)
                }
              }
            }

            smallImageLeft {
              altText
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1000)
                }
              }
            }

            smallImageRight {
              altText
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1000)
                }
              }
            }
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_HeroNine {
            fieldGroupName
            image {
              altText
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 2500)
                }
              }
            }
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_HeroTen {
            fieldGroupName
            topTitle
            bottomTitle
            content
            buttonText
            buttonSlug
            image {
              altText
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 2500)
                }
              }
            }
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_ContentWithImage7525 {
            fieldGroupName
            buttonText
            buttonSlug
            buttonPosition
            title
            content
            imageSide
            image {
              altText
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1500)
                }
              }
            }
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_ContentImageBgPattern {
            fieldGroupName
            buttonText
            buttonSlug
            title
            content
            image {
              altText
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1000)
                }
              }
            }
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_ContentWithLogo {
            content
            fieldGroupName
            logoSide
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_ContentImage5050 {
            fieldGroupName
            title
            content
            buttonText
            buttonSlug
            reversed
            image {
              altText
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1000)
                }
              }
            }
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_ContentImage5050Two {
            fieldGroupName
            title
            content
            buttonText
            buttonSlug
            reversed
            image {
              altText
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1000)
                }
              }
            }
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_ContentThreeImages {
            fieldGroupName
            title
            content
            buttonText
            buttonSlug
            topImage {
              altText
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1500)
                }
              }
            }
            bottomLeft {
              altText
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1000)
                }
              }
            }
            bottomRight {
              altText
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1000)
                }
              }
            }
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_ContentSlider {
            fieldGroupName
            slides {
              buttonSlug
              buttonText
              content
              title
              image {
                altText
                sourceUrl
                localFile {
                  url
                  childImageSharp {
                    gatsbyImageData(width: 2000)
                  }
                }
              }
            }
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_ContentSketch {
            fieldGroupName
            content
            title
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_ContentImagesLogo5050 {
            fieldGroupName
            content
            topLeftImage {
              altText
              sourceUrl
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1500)
                }
              }
            }
            topRightImage {
              altText
              sourceUrl
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1000)
                }
              }
            }
            bottomImage {
              altText
              sourceUrl
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1000)
                }
              }
            }
            logo {
              altText
              sourceUrl
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1000)
                }
              }
            }
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_MeetTeam {
            fieldGroupName
            displayMeetTeam
            title
            content
            buttonText
            buttonSlug
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_WysiwygButton {
            fieldGroupName
            title
            sideTitle
            content
            buttonText
            buttonSlug
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_ContactImageColorBg {
            fieldGroupName
            title
            content
            buttonText
            buttonSlug
            imageTop {
              altText
              sourceUrl
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1000)
                }
              }
            }

            imageBottom {
              altText
              sourceUrl
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1000)
                }
              }
            }
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_Logos {
            fieldGroupName
            logos {
              url
              logo {
                altText
                sourceUrl
                localFile {
                  url
                  childImageSharp {
                    gatsbyImageData(width: 1000)
                  }
                }
              }
            }
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_Testimonials {
            fieldGroupName
            displayTestimonialSlider
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_DisplayTeam {
            fieldGroupName
            displayAllTeam
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_DisplayPosts {
            fieldGroupName
            displayPosts
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_DisplayQuickPossessions {
            fieldGroupName
            displayQuickPossessions
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_DisplayHomePlans {
            fieldGroupName
            displayHomePlans
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_DisplayShowHomes {
            fieldGroupName
            displayShowHomes
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_ThreeImagesContent {
            fieldGroupName
            topTitle
            imageLeft {
              altText
              sourceUrl
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1000)
                }
              }
            }
            imageCenter {
              altText
              sourceUrl
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1000)
                }
              }
            }
            imageRight {
              altText
              sourceUrl
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1000)
                }
              }
            }
            bottomTitle
            bottomContent
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_ThreeImagesRow {
            fieldGroupName
            imageLeft {
              altText
              sourceUrl
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1000)
                }
              }
            }
            imageCenter {
              altText
              sourceUrl
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1000)
                }
              }
            }
            imageRight {
              altText
              sourceUrl
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1000)
                }
              }
            }
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_ContentSimpleTitle {
            fieldGroupName
            title
            content
            backgroundColour
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_ContentSimpleTitleSub {
            fieldGroupName
            title
            subTitle
            content
            backgroundColour
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_ContentSimpleTitleIcon {
            fieldGroupName
            title
            content
            backgroundColour
            icon {
              altText
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1000)
                }
              }
            }
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_ContentCenterButton {
            fieldGroupName
            title
            content
            buttonText
            buttonSlug
            bottomContent
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_CustomerStories {
            fieldGroupName
            displayCustomerStories
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_BlueBlockContent {
            fieldGroupName
            block {
              title
              content
              buttonText
              icon {
                altText
                sourceUrl
                localFile {
                  url
                  childImageSharp {
                    gatsbyImageData(width: 1000)
                  }
                }
              }
            }
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_Map {
            fieldGroupName
            title
            content
            mapEmbedCode
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_ContactForm {
            fieldGroupName
            displaySimpleContactForm
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_DisplayJobPosts {
            fieldGroupName
            displayJobPosts
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_DisplayTradePartner {
            fieldGroupName
            displayTradePartnerForm
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_ContentSimpleWysiwyg {
            fieldGroupName
            title
            content
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_AirdrieMapPins {
            fieldGroupName
            displayAirdrieMap
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_CrossfieldMapPins {
            fieldGroupName
            displayCrossfieldMap
          }
        }
      }
    }
  }
`

export default Page
