import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import PostSingle from "../components/Post/PostSingle"

const Post = props => {
  const { post, allPosts, seoInfo } = props.data
  const prevPost = props.pageContext.prev
  const nextPost = props.pageContext.next
  return (
    <Layout>
      <Seo
        title={
          seoInfo?.seoFields?.swbThemeMetaTitle
            ? seoInfo.seoFields.swbThemeMetaTitle
            : "McKee Homes - News and Events"
        }
        description={
          seoInfo?.seoFields?.swbThemeDescription
            ? seoInfo.seoFields.swbThemeDescription
            : "McKee Homes - News and Events"
        }
        //metaImg={seoInfo.seoFields.swbThemeImage.localFile.relativePath}
        location={props.location.pathname}
      />
      <PostSingle
        post={post}
        allPosts={allPosts}
        prevPost={prevPost}
        nextPost={nextPost}
      />
    </Layout>
  )
}

export const query = graphql`
  query singlePostQuery($slug: String!) {
    seoInfo: wpPost(slug: { eq: $slug }) {
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

    post: wpPost(slug: { eq: $slug }) {
      title
      id
      date
      slug
      categories {
        nodes {
          name
        }
      }
      acfPosts {
        article
        featuredImage {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(width: 2500)
            }
          }
        }
      }
    }

    allPosts: allWpPost {
      edges {
        node {
          title
          slug
          categories {
            nodes {
              name
              slug
            }
          }
          acfPosts {
            excerpt
            excerptImage {
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
      }
    }
  }
`

export default Post
