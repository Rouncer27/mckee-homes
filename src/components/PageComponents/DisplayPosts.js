import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  B1Black,
  B1White,
  B2Black,
  colors,
  H4Navy,
  medWrapper,
} from "../../styles/helpers"
import SpinnerAnimation from "../Animations/SpinnerAnimation"

const getData = graphql`
  {
    posts: allWpPost(sort: { order: DESC, fields: date }) {
      edges {
        node {
          title
          id
          date
          slug
          categories {
            nodes {
              name
              slug
            }
          }
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
        }
      }
    }

    category: allWpCategory {
      edges {
        node {
          name
          slug
          id
        }
      }
    }
  }
`

const DisplayPosts = ({ data }) => {
  const postsData = useStaticQuery(getData)
  const posts = postsData.posts.edges
  const categories = postsData.category.edges

  const DISPLAY_NUMBER = 7
  const [activeCat, setActiveCat] = useState("all")

  const setNewActiveCat = cat => {
    setActiveCat(cat)
    setPostsStoreStore(prevState => {
      return {
        ...prevState,
        catChange: false,
      }
    })
  }

  const [postsStore, setPostsStoreStore] = useState({
    max: 0,
    current: 0,
    catPosts: [],
    display: [],
    loading: false,
    catChange: false,
  })

  useEffect(() => {
    setPostsStoreStore(prevState => {
      return {
        ...prevState,
        max: posts?.length,
        current: DISPLAY_NUMBER,
        catPosts: posts.filter(post => {
          if (
            activeCat !== "all" &&
            activeCat !== post.node.categories.nodes[0].slug
          ) {
            return false
          } else {
            return true
          }
        }),
        display: posts.slice(0, DISPLAY_NUMBER),
        more: posts?.length > DISPLAY_NUMBER,
      }
    })
  }, [activeCat])

  const getMorePosts = () => {
    setPostsStoreStore(prevState => {
      return {
        ...prevState,
        current: prevState.current + DISPLAY_NUMBER,
        display: prevState.catPosts.slice(
          0,
          prevState.current + DISPLAY_NUMBER
        ),
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

  useEffect(() => {
    setPostsStoreStore(prevState => {
      return {
        ...prevState,
        max: prevState.catPosts.length,
        display: prevState.catPosts.slice(0, DISPLAY_NUMBER),
        more: prevState.catPosts.length > DISPLAY_NUMBER,
      }
    })
  }, [postsStore.catPosts])

  const loadSetActiveCat = cat => {
    setPostsStoreStore(prevState => {
      return {
        ...prevState,
        catChange: true,
      }
    })

    setTimeout(() => {
      setNewActiveCat(cat)
    }, 2000)
  }

  return (
    <DisplayNewsEventsSection>
      <CatNav>
        <ul>
          <li>
            <button
              className={"all" === activeCat ? "activeCat" : ""}
              onClick={() => {
                loadSetActiveCat("all")
              }}
            >
              All
            </button>
          </li>
          {categories.map(cat => {
            return (
              <li key={cat.node.id}>
                <button
                  className={cat.node.slug === activeCat ? "activeCat" : ""}
                  onClick={() => {
                    loadSetActiveCat(cat.node.slug)
                  }}
                >
                  {cat.node.name}
                </button>
              </li>
            )
          })}
        </ul>
      </CatNav>
      <div className="wrapper">
        <div className="articlesWrapper">
          {postsStore.display.map((post, index) => {
            const options = { year: "numeric", month: "long", day: "numeric" }
            const postDate = new Date(post.node.date).toLocaleDateString(
              undefined,
              options
            )

            if (
              activeCat !== "all" &&
              activeCat !== post.node.categories.nodes[0].slug
            )
              return null
            const imageDisplay = getImage(
              post.node.acfPosts.excerptImage.localFile.childImageSharp
                .gatsbyImageData
            )
            const imageAlt = post.node.acfPosts.excerptImage.altText

            return (
              <Article key={post.node.id}>
                <Link to={`/news-promotions/${post.node.slug}`}>
                  <div className="image">
                    <div className="image__wrapper">
                      <GatsbyImage
                        image={imageDisplay}
                        alt={imageAlt}
                        formats={["auto", "webp", "avif"]}
                      />
                    </div>
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
                        const spaceReq =
                          post.node.categories.nodes.length > index + 1
                        return (
                          <span key={index}>
                            {catName.name}
                            {spaceReq && " | "}
                          </span>
                        )
                      })}
                    </p>
                  </div>
                </Link>
              </Article>
            )
          })}
        </div>
      </div>

      <div className="wrapper">
        <div className="moreLink">
          <button
            disabled={!postsStore.more}
            onClick={loadMorePostsHandler}
            type="button"
          >
            {postsStore.more
              ? `LOAD MORE ${activeCat === "all" ? "" : activeCat} POSTS`
              : `NO MORE ${activeCat === "all" ? "" : activeCat} POSTS`}
          </button>
        </div>
      </div>
      {postsStore.loading && (
        <LoadingModal>
          <div className="innerLoading">
            <div className="innerLoading__spinner">
              <SpinnerAnimation />
            </div>
            <p>Loading more {activeCat === "all" ? "" : activeCat} posts</p>
          </div>
        </LoadingModal>
      )}

      {postsStore.catChange && (
        <LoadingModal>
          <div className="innerLoading">
            <div className="innerLoading__spinner">
              <SpinnerAnimation />
            </div>
            <p>Loading Category</p>
          </div>
        </LoadingModal>
      )}
    </DisplayNewsEventsSection>
  )
}

const DisplayNewsEventsSection = styled.section`
  .wrapper {
    ${medWrapper};
  }

  .articlesWrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100%;
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

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
  }
`

const CatNav = styled.div`
  width: 100%;
  padding: 4rem;
  background-color: ${colors.colorPrimary};

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    li {
      margin: 0 3rem;

      button {
        ${B1White}
        padding-top: 0.25rem;
        background-color: transparent;
        border: none;
        text-transform: uppercase;
        border-top: 0.2rem solid transparent;
        border-bottom: 0.2rem solid transparent;
        cursor: pointer;

        &:focus {
          box-shadow: none;
        }

        &.activeCat {
          border-top: 0.2rem solid ${colors.colorSecondary};
          border-bottom: 0.2rem solid ${colors.colorSecondary};
        }
      }
    }
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
    height: 25rem;

    @media (min-width: 768px) {
      width: calc(100%);
    }

    &__wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      .gatsby-image-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
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

export default DisplayPosts
