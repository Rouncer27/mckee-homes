import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  B1Grey,
  medWrapper,
  colors,
  B1Black,
  B2Black,
  H4Navy,
} from "../../styles/helpers"

const getData = graphql`
  {
    community: allWpPostCommunity {
      edges {
        node {
          name
          slug
          posts {
            nodes {
              title
              id
              date
              slug
              acfPosts {
                excerpt
                excerptImage {
                  altText
                  sourceUrl
                  localFile {
                    url
                    childImageSharp {
                      gatsbyImageData(width: 1000)
                    }
                  }
                }
              }
              categories {
                nodes {
                  name
                  slug
                }
              }
            }
          }
        }
      }
    }
  }
`

const RelatedPosts = ({ communitySlug, communityTitle }) => {
  const postsData = useStaticQuery(getData)
  const community = postsData.community.edges
  const relatedPosts = community.find(com => {
    return com.node.slug === communitySlug
  })?.node?.posts?.nodes
    ? community.find(com => {
        return com.node.slug === communitySlug
      })?.node?.posts?.nodes
    : []

  return (
    <StyledSection>
      <div className="wrapper">
        <div className="title">
          <h2>What's New In This Community</h2>
        </div>
        {relatedPosts.length <= 0 ? (
          <div className="no-news">
            <p>No Community News</p>
          </div>
        ) : (
          relatedPosts.map(post => {
            const imageDisplay = getImage(
              post.acfPosts.excerptImage.localFile.childImageSharp
                .gatsbyImageData
            )
            const imageAlt = post.acfPosts.excerptImage.altText
            return (
              <Article key={post.id}>
                <Link to={`/news-promotions/${post.slug}`}>
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
                      <h2>{post.title}</h2>
                    </div>
                    <div
                      className="excerpt"
                      dangerouslySetInnerHTML={{
                        __html: post.acfPosts.excerpt,
                      }}
                    />
                  </div>
                  <div className="cat-name">
                    <p>
                      {post.categories.nodes.map((catName, index) => {
                        return (
                          <span key={index}>
                            {catName.name}, {communityTitle}
                          </span>
                        )
                      })}
                    </p>
                  </div>
                </Link>
              </Article>
            )
          })
        )}
      </div>
    </StyledSection>
  )
}

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

const StyledSection = styled.section`
  .wrapper {
    ${medWrapper};
    justify-content: flex-start;
  }

  .title {
    width: 100%;
    margin-bottom: 3rem;
    padding-top: 5rem;
    border-bottom: 0.25rem solid ${colors.colorTertiary};

    h2 {
      ${B1Grey};
      margin: 0;
      text-transform: uppercase;
    }
  }

  .no-news {
    width: 100%;

    p {
      ${B1Grey};
    }
  }
`

export default RelatedPosts
