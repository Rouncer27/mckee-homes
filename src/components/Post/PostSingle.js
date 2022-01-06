import React from "react"
import styled from "styled-components"
import { standardWrapper } from "../../styles/helpers"

import PostHeader from "./PostHeader"
import PostFeaturedImage from "./PostFeaturedImage"
import PostWysiwyg from "./PostWysiwyg"
import PostNav from "./PostNav"
import OtherArticles from "./OtherArticles"

const PostSingle = ({ post, allPosts, prevPost, nextPost }) => {
  return (
    <>
      <PostSingleArticle>
        <PostFeaturedImage image={post.acfPosts.featuredImage} />
        <div className="wrapper">
          <PostHeader
            title={post.title}
            date={post.date}
            categories={post.categories}
            slug={post.slug}
          />
          <PostWysiwyg content={post.acfPosts.article} />
        </div>
      </PostSingleArticle>
      <PostNav allPosts={allPosts} prevPost={prevPost} nextPost={nextPost} />
      <OtherArticles allPosts={allPosts} postSlug={post.slug} />
    </>
  )
}

const PostSingleArticle = styled.article`
  overflow: hidden;
  .wrapper {
    ${standardWrapper};
    max-width: 95rem !important;
  }
`

export default PostSingle
