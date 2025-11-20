import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Hero from "../components/FAQs/Hero"
import Intro from "../components/FAQs/Intro"
import QandA from "../components/FAQs/QandA"
import Nav from "../components/FAQs/Nav"

const faq = props => {
  const { seoInfo, faqPost } = props.data
  console.log("faqPost", faqPost)
  return (
    <Layout>
      <Seo
        title={
          seoInfo?.seoFields?.swbThemeMetaTitle
            ? seoInfo.seoFields.swbThemeMetaTitle
            : "McKee Homes - FAQs"
        }
        description={
          seoInfo?.seoFields?.swbThemeDescription
            ? seoInfo.seoFields.swbThemeDescription
            : "McKee Homes - FAQs"
        }
        //metaImg={seoInfo.seoFields.swbThemeImage.localFile.relativePath}
        location={props.location.pathname}
      />
      <Hero data={faqPost.FAQsPost.heroImageComponent} />
      <Intro data={faqPost.FAQsPost.introComponent} />
      <QandA data={faqPost.FAQsPost.questionsAnswersComponent} />
      <Nav />
    </Layout>
  )
}

export default faq

export const query = graphql`
  query singleFaqQuery($slug: String!) {
    seoInfo: wpFaq(slug: { eq: $slug }) {
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

    faqPost: wpFaq(slug: { eq: $slug }) {
      FAQsPost {
        heroImageComponent {
          image {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(width: 2500)
              }
            }
          }
        }

        introComponent {
          title
          content
        }

        questionsAnswersComponent {
          questionsAndAnswers {
            question
            answer
          }
        }
      }
    }
  }
`
