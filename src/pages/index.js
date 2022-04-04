import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import PageComponentGroups from "../components/PageComponentGroups"

const IndexPage = props => {
  const { components, seoInfo } = props.data
  return (
    <Layout>
      <Seo
        title={seoInfo.seoFields.swbThemeMetaTitle}
        description={seoInfo.seoFields.swbThemeDescription}
        //metaImg={seoInfo.seoFields.swbThemeImage.localFile.relativePath}
        location={props.location.pathname}
      />
      <PageComponentGroups components={components} />
    </Layout>
  )
}

export const homeQuery = graphql`
  {
    seoInfo: wpPage(slug: { eq: "home" }) {
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

    components: wpPage(slug: { eq: "home" }) {
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
                    gatsbyImageData(width: 2500)
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
