import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Link } from "gatsby"

import {
  B1Black,
  B2Black,
  colors,
  H4Navy,
  medWrapper,
} from "../../styles/helpers"

const OtherArticles = ({ allPosts, postSlug }) => {
  const postsFiltered = allPosts.edges.filter(post => {
    return post.node.slug !== postSlug
  })
  const posts = postsFiltered.sort((a, b) => 0.5 - Math.random())

  return (
    <DivStyled>
      <div className="wrapper">
        <div className="main-title">
          <h3>Other Articles you might enjoy</h3>
        </div>
        <div className="articles">
          {posts.map((post, index) => {
            if (index > 2) return
            const imageDisplay = getImage(
              post.node.acfPosts.excerptImage.localFile.childImageSharp
                .gatsbyImageData
            )
            const imageAlt = post.node.acfPosts.excerptImage.altText
            return (
              <Article key={post.node.id}>
                <Link to={`/news-promotions/${post.node.slug}`}>
                  <div className="image">
                    <GatsbyImage
                      image={imageDisplay}
                      alt={imageAlt}
                      layout="fullWidth"
                      formats={["auto", "webp", "avif"]}
                    />
                  </div>
                  <div className="content">
                    <div className="title">
                      <h2>{post.node.title}</h2>
                    </div>
                    <div
                      className="excerpt"
                      dangerouslySetInnerHTML={{
                        __html: post.node.acfPosts.excerpt,
                      }}
                    />
                  </div>
                  <div className="cat-name">
                    <p>
                      {post.node.categories.nodes.map((catName, index) => {
                        return <span key={index}>{catName.name}</span>
                      })}
                    </p>
                  </div>
                </Link>
              </Article>
            )
          })}
        </div>
      </div>
    </DivStyled>
  )
}

const DivStyled = styled.div`
  .wrapper {
    ${medWrapper};
    max-width: 120rem !important;
  }

  .main-title {
    width: calc(100% - 8rem);
    margin-right: 4rem;
    margin-left: 4rem;
    border-bottom: solid 0.25rem #a5b6ba;

    h3 {
      ${B1Black};
      margin: 0;
      text-transform: uppercase;
    }
  }

  .articles {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
`

const Article = styled.div`
  width: 100%;
  margin: 2rem auto;
  position: relative;
  border: solid 0.15rem ${colors.colorAccent};
  transition: all 0.3s ease-out;
  cursor: pointer;

  @media (min-width: 768px) {
    width: calc(33.333333% - 4rem);
    margin: 4rem 2rem;
  }

  &:hover {
    box-shadow: 3px 7px 9px 0 rgba(77, 88, 113, 0.55);
    cursor: pointer;
  }

  button {
    display: block;
    background-color: transparent;
    border: none;
    cursor: pointer;
    width: 100%;
  }

  article {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }

  .image {
    position: relative;
    width: 100%;

    @media (min-width: 768px) {
      width: calc(100%);
    }
  }

  .content {
    width: 100%;
    padding: 3rem;
    padding-bottom: 7rem;
    text-align: left;

    @media (min-width: 768px) {
      width: calc(100%);
    }

    h2 {
      ${H4Navy};
    }

    .excerpt {
      width: 100%;
      border-bottom: 0.2rem solid ${colors.colorAccent};

      p {
        ${B1Black};
      }
    }
  }

  .cat-name {
    position: absolute;
    bottom: 0;
    left: 3rem;

    p {
      ${B2Black};
      text-transform: uppercase;
    }
  }
`

export default OtherArticles
