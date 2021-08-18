import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/SEO"
import PostSingle from "../components/Post/PostSingle"

const Post = props => {
  const { post, allPosts } = props.data
  const prevPost = props.pageContext.prev
  const nextPost = props.pageContext.next
  return (
    <Layout>
      <Seo />
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
    # post: wpPost(slug: { eq: $slug }) {
    #   title
    #   id
    #   date
    #   slug
    #   categories {
    #     nodes {
    #       name
    #     }
    #   }
    #   acfNewsEvents {
    #     mainContent
    #     needsRefresh
    #     featuredImage {
    #       altText
    #       localFile {
    #         childImageSharp {
    #           gatsbyImageData(width: 1500)
    #         }
    #       }
    #     }
    #   }
    # }

    # allPosts: allWpPost {
    #   edges {
    #     node {
    #       title
    #       slug
    #       acfNewsEvents {
    #         needsRefresh
    #       }
    #     }
    #   }
    # }
  }
`

export default Post
