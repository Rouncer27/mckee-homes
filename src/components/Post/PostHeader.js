import React from "react"
import styled from "styled-components"
import { B1Black, H1Navy, H3Black } from "../../styles/helpers"

const PostHeader = ({ title, date, categories }) => {
  const options = { year: "numeric", month: "long", day: "numeric" }
  const postDate = new Date(date).toLocaleDateString(undefined, options)
  return (
    <PostHeaderStyled>
      <p>
        {categories.nodes.map((cat, index) => {
          return (
            <span key={index}>
              {index !== 0 ? " ," : ""}
              {cat.name}
            </span>
          )
        })}
      </p>
      <h1>{title}</h1>
    </PostHeaderStyled>
  )
}

const PostHeaderStyled = styled.header`
  width: 100%;
  margin-top: 5rem;
  text-align: left;

  h1 {
    ${H1Navy};
    margin: 0;
    font-weight: 500;
  }

  p {
    ${H3Black};
    margin: 0;
    text-transform: uppercase;
  }
`

export default PostHeader
