import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import PageComponentGroups from "../components/PageComponentGroups"

const IndexPage = props => {
  const { components } = props.data
  return (
    <Layout>
      <Seo title="Home" />
      <PageComponentGroups components={components} />
    </Layout>
  )
}

export const homeQuery = graphql`
  {
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

          ... on WpPage_Acfmaintemplatefields_PageComponents_ContentWithLogo {
            content
            fieldGroupName
            logoSide
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
