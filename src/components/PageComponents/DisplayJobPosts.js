import React from "react"
import styled from "styled-components"
import { graphql, Link, useStaticQuery } from "gatsby"
import { Btn1Grey, colors, H2Grey, standardWrapper } from "../../styles/helpers"

import Wysiwyg from "./Wysiwyg"

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
          <JobPost key={post.node.id}>
            <div className="title">
              <h2>{post.node.title}</h2>
            </div>
            <div>
              <Wysiwyg data={{ wysiwyg: post.node.acfJobPosts.jobPost }} />
            </div>
            <div className="button">
              <a href={`mailto: ${post.node.acfJobPosts.emailAddress}`}>
                Apply Now
              </a>
            </div>
          </JobPost>
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

const JobPost = styled.div`
  margin: 0 auto 2.5rem;
  padding: 2.5rem 0;
  border-bottom: 0.25rem solid ${colors.colorTertiary};

  h2 {
    ${H2Grey};
    margin-top: 0;
  }

  .button {
    width: 100%;

    a {
      ${Btn1Grey};
    }
  }
`

export default DisplayJobPosts
