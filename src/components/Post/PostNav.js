import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { colors, medWrapper, Nav1Slate } from "../../styles/helpers"

const PostNav = ({ allPosts, prevPost, nextPost }) => {
  const prevPostData = allPosts.edges.find(post => {
    return post.node.slug === prevPost
  })
  const nextPostData = allPosts.edges.find(post => {
    return post.node.slug === nextPost
  })

  return (
    <PostNavStyled>
      <div className="wrapper">
        <nav>
          {nextPostData && (
            <Link to={`/news-promotions/${nextPostData.node.slug}`}>
              <span>&gt; </span>
              Next Article
            </Link>
          )}

          <Link to="/news-promotions">Home</Link>
          {prevPostData && (
            <Link to={`/news-promotions/${prevPostData.node.slug}`}>
              <span>&lt; </span>
              Previous Article
            </Link>
          )}
        </nav>
      </div>
    </PostNavStyled>
  )
}

const PostNavStyled = styled.div`
  width: 100%;
  padding-bottom: 5rem;

  .wrapper {
    ${medWrapper};
    max-width: 95rem !important;
    border-top: 0.25rem solid ${colors.colorPrimary};
  }

  nav {
    width: 100%;
    display: flex;
    justify-content: space-between;

    a {
      ${Nav1Slate};
    }
  }
`

export default PostNav
