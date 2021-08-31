import React from "react"
import styled from "styled-components"
import { standardWrapper } from "../../styles/helpers"

import PostHeader from "./PostHeader"
import PostFeaturedImage from "./PostFeaturedImage"
import PostWysiwyg from "./PostWysiwyg"
import PostNav from "./PostNav"

const PostSingle = ({ post, allPosts, prevPost, nextPost }) => {
  return (
    <>
      <PostSingleArticle>
        <div className="wrapper">
          <PostHeader
            title={post.title}
            date={post.date}
            categories={post.categories}
          />
          <PostFeaturedImage image={post.acfPosts.featuredImage} />
          <PostWysiwyg content={post.acfPosts.article} />
        </div>
      </PostSingleArticle>
      <PostNav allPosts={allPosts} prevPost={prevPost} nextPost={nextPost} />
    </>
  )
}

const PostSingleArticle = styled.article`
  .wrapper {
    ${standardWrapper};
    max-width: 95rem !important;
  }
`

export default PostSingle
