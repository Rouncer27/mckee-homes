import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { standardWrapper } from "../../styles/helpers"

import JobPost from "./JobPost"

const getData = graphql`
  {
    posts: allWpJobPost(sort: { order: DESC, fields: date }) {
      edges {
        node {
          title
          id
          acfJobPosts {
            jobPost
            emailAddress
          }
        }
      }
    }
  }
`

const DisplayJobPosts = ({ data }) => {
  const postsData = useStaticQuery(getData)
  const posts = postsData.posts.edges

  return (
    <SectionStyled>
      <div className="wrapper">
        {posts.map(post => (
          <JobPost key={post.node.id} post={post} />
        ))}
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  .wrapper {
    ${standardWrapper};
  }
`

export default DisplayJobPosts
