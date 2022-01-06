import React from "react"
import styled from "styled-components"
import { B1Black, B2White, colors, H1Navy, H3Black } from "../../styles/helpers"

import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share"

const PostHeader = ({ title, date, categories, slug }) => {
  const options = { year: "numeric", month: "long", day: "numeric" }
  const postDate = new Date(date).toLocaleDateString(undefined, options)

  return (
    <PostHeaderStyled>
      <p>
        {categories &&
          categories.nodes.map((cat, index) => {
            return (
              <span key={index}>
                {index !== 0 ? " ," : ""}
                {cat.name}
              </span>
            )
          })}
      </p>
      <h1>{title}</h1>
      <div className="social-share-btns">
        <p>Share</p>
        <FacebookShareButton
          quote={title}
          url={`https://mckee-homes-swb.netlify.app/news-promotions/${slug}`}
        >
          <FacebookIcon size={40} round={true} />
        </FacebookShareButton>

        <TwitterShareButton
          url={`https://mckee-homes-swb.netlify.app/news-promotions/${slug}`}
          title={title}
          via="@mckeeairdrie"
        >
          <TwitterIcon size={40} round={true} />
        </TwitterShareButton>

        <LinkedinShareButton
          url={`https://mckee-homes-swb.netlify.app/news-promotions/${slug}`}
        >
          <LinkedinIcon size={40} round={true} />
        </LinkedinShareButton>
      </div>
    </PostHeaderStyled>
  )
}

const PostHeaderStyled = styled.header`
  position: relative;
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

  .social-share-btns {
    position: absolute;
    top: 0;
    left: 90%;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0.75rem 2rem 0.5rem;
    background-color: ${colors.colorTertiary};

    p {
      ${B2White};
      margin-right: 2rem;
    }

    button {
      margin: 0 0.5rem;
    }
  }
`

export default PostHeader
