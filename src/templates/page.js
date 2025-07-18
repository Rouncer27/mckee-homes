import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import PageComponentGroups from "../components/PageComponentGroups"

const Page = props => {
  const { components, seoInfo } = props.data
  return (
    <Layout location={props.location}>
      <Seo
        title={seoInfo.seoFields.swbThemeMetaTitle}
        description={seoInfo.seoFields.swbThemeDescription}
        //metaImg={seoInfo.seoFields.swbThemeImage.localFile.relativePath}
        location={props.location.pathname}
      />
      <PageComponentGroups location={props.location} components={components} />
    </Layout>
  )
}

export const pageTempQuery = graphql`
  query pageTempPage($id: String!) {
    seoInfo: wpPage(id: { eq: $id }) {
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
            button2Required
            button2Text
            button2Slug
            button3Required
            button3Text
            button3Slug
            button4Required
            button4Text
            button4Slug
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

          ... on WpPage_Acfmaintemplatefields_PageComponents_HeroEleven {
            fieldGroupName
            topTitle
            mainTitle
            content
            sideTitle
            sideContent
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

          ... on WpPage_Acfmaintemplatefields_PageComponents_HeroTwelve {
            fieldGroupName
            title
            content
            buttonOneText
            buttonOneSlug
            buttonTwoText
            buttonTwoSlug
            sectionId
            awardLogos {
              logo {
                altText
                localFile {
                  url
                  childImageSharp {
                    gatsbyImageData(width: 2500)
                  }
                }
              }
            }
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
            buttonPosition
            buttonSlug
            imageSide
            title
            content
            buttonText
            fieldGroupName
            image {
              altText
              localFile {
                publicURL
                url
                childImageSharp {
                  gatsbyImageData(width: 1500)
                }
              }
            }
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_ContentImageBgPattern {
            fieldGroupName
            buttonType
            buttonLink
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
            sectionId
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
            quickPossessionCity {
              name
              slug
            }
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_DisplayHomePlans {
            fieldGroupName
            displayHomePlans
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_DisplayShowHomes {
            fieldGroupName
            displayShowHomes
            showHomeCity {
              name
              slug
            }
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
              pdf {
                localFile {
                  publicURL
                }
              }
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

          ... on WpPage_Acfmaintemplatefields_PageComponents_CalgaryMapPins {
            fieldGroupName
            displayCalgaryMap
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_CrossfieldMapPins {
            fieldGroupName
            displayCrossfieldMap
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_CarstairsMapPins {
            fieldGroupName
            displayCarstairsMap
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_DisplayCustomersVideos {
            fieldGroupName
            displayCustomersVideos
            videos {
              video
            }
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_GallerySlider {
            fieldGroupName
            sliderImages {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 2000)
                }
              }
            }
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_GalleryVideoSlider {
            fieldGroupName
            title
            sliderVideos {
              video
            }
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_GalleryHomePlan {
            fieldGroupName
            title
            subTitle
            images {
              image {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 2000)
                  }
                }
              }

              homePlan {
                ... on WpHomePlan {
                  id
                  slug
                  uri
                }
              }
              imageCategory
            }
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_BuildingFuturesStatus {
            fieldGroupName
            title
            content
            stages {
              title
              complete
              linkRequired
              link
            }
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_BuildingFuturesTimeline {
            fieldGroupName
            title
            classYear {
              classYear
              yearDetails {
                title
                icon
                content
                images {
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

          ... on WpPage_Acfmaintemplatefields_PageComponents_SideBySideParagraphs {
            fieldGroupName
            titleLeft
            contentLeft
            titleRight
            contentRight
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_DisplayCommunityCities {
            displayCitiesCommunityLinks
            fieldGroupName
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_MapEmbed {
            mapEmbed
            fieldGroupName
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_DisplayCitiesShowHomes {
            displayCitiesShowHomes
            sectionTitle
            fieldGroupName
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_DisplayCitiesQuickPossessions {
            displayCitiesQuickPossessions
            sectionTitle
            fieldGroupName
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_DisplayCities {
            displayCities
            sectionTitle
            fieldGroupName
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_DisplayCommunities {
            displayCommunities
            sectionTitle
            communitiesFromWhatCity {
              name
              slug
              uri
            }
            fieldGroupName
          }

          ... on WpPage_Acfmaintemplatefields_PageComponents_BoxImageLinks {
            sectionTitle
            boxLinks {
              content
              link {
                ... on WpPage {
                  uri
                }
              }
              image {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 2000)
                  }
                }
              }
            }
            fieldGroupName
          }
        }
      }
    }
  }
`

export default Page
