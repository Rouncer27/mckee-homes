import React from "react"
import styled from "styled-components"
import {
  B1Black,
  B2White,
  colors,
  H1Navy,
  H3Black,
  fontSizer,
} from "../../styles/helpers"

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
                {index !== 0 ? ", " : ""}
                {cat.name}
              </span>
            )
          })}
      </p>

      <h1>{title}</h1>
      <p className="meta-post-date">{postDate}</p>
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

  p.meta-post-date {
    ${B1Black};
    ${fontSizer(1.4, 1.8, 76.8, 150, 1.6)};
    margin-bottom: 0;
  }

  .social-share-btns {
    position: relative;
    width: 30rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 1rem;
    padding: 0.75rem 2rem 0.5rem;
    background-color: ${colors.colorTertiary};

    @media (min-width: 1100px) {
      position: absolute;
      top: 0;
      left: 85%;
      width: 100%;
      margin-top: 0;
    }

    @media (min-width: 1200px) {
      position: absolute;
      top: 0;
      left: 85%;
    }

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
