import React from "react"
import styled from "styled-components"
import { B1Black, H1Navy } from "../../styles/helpers"

const PostHeader = ({ title, date, categories }) => {
  const options = { year: "numeric", month: "long", day: "numeric" }
  const postDate = new Date(date).toLocaleDateString(undefined, options)
  return (
    <PostHeaderStyled>
      <h1>{title}</h1>
      <p>
        <span>{postDate}</span>
        <span> &gt; </span>
        {categories.nodes.map((cat, index) => {
          return (
            <span key={index}>
              {index !== 0 ? " ," : ""}
              {cat.name}
            </span>
          )
        })}
      </p>
    </PostHeaderStyled>
  )
}

const PostHeaderStyled = styled.header`
  width: 100%;
  text-align: left;

  h1 {
    ${H1Navy};
    margin-bottom: 1rem;
  }

  p {
    ${B1Black};
    margin: 0;
    text-transform: uppercase;
  }
`

export default PostHeader
