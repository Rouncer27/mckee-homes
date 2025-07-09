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
import SpinnerAnimation from "../Animations/SpinnerAnimation"

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
  const DISPLAY_NUMBER = 3
  const relatedPosts = community.find(com => {
    return com.node.slug === communitySlug
  })?.node?.posts?.nodes
    ? community.find(com => {
        return com.node.slug === communitySlug
      })?.node?.posts?.nodes
    : []

  const [postsStore, setPostsStoreStore] = useState({
    max: 0,
    current: 0,
    display: [],
    more: false,
    loading: false,
  })

  useEffect(() => {
    setPostsStoreStore(prevState => {
      return {
        ...prevState,
        max: relatedPosts?.length,
        current: DISPLAY_NUMBER,
        display: relatedPosts.slice(0, DISPLAY_NUMBER),
        more: relatedPosts?.length > DISPLAY_NUMBER,
      }
    })
  }, [])

  const getMorePosts = () => {
    setPostsStoreStore(prevState => {
      return {
        ...prevState,
        current: prevState.current + DISPLAY_NUMBER,
        display: relatedPosts.slice(0, prevState.current + DISPLAY_NUMBER),
        more: prevState.max > prevState.current + DISPLAY_NUMBER,
        loading: false,
      }
    })
  }

  const loadMorePostsHandler = () => {
    setPostsStoreStore(prevState => {
      return {
        ...prevState,
        loading: true,
      }
    })

    setTimeout(() => {
      getMorePosts()
    }, 2000)
  }

  return (
    <StyledSection>
      <div className="wrapper">
        <div className="title">
          <h2>What's New In This Community</h2>
        </div>
        {postsStore.display.length <= 0 ? (
          <div className="no-news">
            <p>No Community News</p>
          </div>
        ) : (
          postsStore.display.map(post => {
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
        <div className="wrapper">
          <div className="moreLink">
            <button
              disabled={!postsStore.more}
              onClick={loadMorePostsHandler}
              type="button"
            >
              {postsStore.more ? `LOAD MORE POSTS` : `NO MORE POSTS`}
            </button>
          </div>
        </div>
      </div>
      {postsStore.loading && (
        <LoadingModal>
          <div className="innerLoading">
            <div className="innerLoading__spinner">
              <SpinnerAnimation />
            </div>
            <p>Loading more posts</p>
          </div>
        </LoadingModal>
      )}
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

  .moreLink {
    position: relative;
    width: 100%;
    margin: 2.5rem auto;
    padding-top: 5rem;
    border-top: 0.25rem solid ${colors.colorPrimary};
    text-align: center;
    z-index: 100;

    button {
      ${B2Black};
      background-color: transparent;
      border: none;
      cursor: pointer;

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
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

const LoadingModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(21, 66, 144, 0.7);
  z-index: 999999;

  .innerLoading {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-self: center;
    background-color: ${colors.white};
    width: 40rem;
    margin: 0 auto;
    padding: 5rem 2rem;
    text-align: center;

    p {
      margin: 0;
    }

    &__spinner {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-self: center;
      width: 100%;
      height: 3.5rem;
      margin: 0 auto;
    }
  }
`

export default RelatedPosts
