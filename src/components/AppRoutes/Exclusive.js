import React, { useEffect, useState, useContext } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import {
  B1Black,
  medWrapper,
  colors,
  B2Black,
  H4Navy,
} from "../../styles/helpers"
import axios from "axios"
import { UserContext } from "../../context/UserContext"
import { AlertContext } from "../../context/AlertContext"

const Exclusive = () => {
  const [userState, userDispatch] = useContext(UserContext)
  const [, alertDispatch] = useContext(AlertContext)
  let [isCalling, setIsCalling] = useState(false)

  const getExclusivePosts = async () => {
    userDispatch({
      type: "USER_LOADING",
      payload: { loading: true },
    })

    try {
      const posts = await axios.get(
        "https://mckeehomes.swbdatabases.ca/wp-json/wp/v2/exclusive_posts"
      )
      if (posts.status === 200 && Array.isArray(posts.data)) {
        userDispatch({
          type: "USER_EXCLUSIVE",
          payload: { exclusive: posts.data },
        })
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (!isCalling) {
      setIsCalling(true)
      getExclusivePosts()
    }

    // return () => {
    //   setIsCalling(false)
    //   setExclusivePosts([])
    // }
  }, [])

  console.log("exclusivePosts: ", userState)

  return (
    <DivStyled>
      <div className="ex-wrapper">
        <div className="ex-title">
          <h2>Latest Exclusive Promotions and Announcements</h2>
        </div>
        <div className="ex-posts">
          {userState.exclusive && userState.exclusive.length <= 0 ? (
            <div>
              <p>
                No Exclusive Promotions and Announcements, please check back
                again soon!
              </p>
            </div>
          ) : (
            userState.exclusive.map(post => (
              <Article key={post.id}>
                <Link to={`/app/exclusive/${post.slug}`}>
                  <div className="image">
                    <img
                      src={post.acf.excerpt_image.sizes["2048x2048"]}
                      alt={post.acf.excerpt_image.alt}
                    />
                  </div>
                  <div className="ex-post-content">
                    <div className="ex-post-title">
                      <h2>{post.title.rendered}</h2>
                    </div>
                    <div
                      className="excerpt"
                      dangerouslySetInnerHTML={{
                        __html: post.acf.excerpt,
                      }}
                    />
                  </div>
                  <div className="cat-name">
                    <p>Promotions and Announcements</p>
                  </div>
                </Link>
              </Article>
            ))
          )}
        </div>
      </div>
    </DivStyled>
  )
}

const DivStyled = styled.div`
  .ex-wrapper {
    ${medWrapper};
  }

  .ex-title {
    width: 100%;
    margin-bottom: 3rem;
    padding-top: 5rem;
    border-bottom: 0.25rem solid ${colors.colorTertiary};

    h2 {
      ${B1Black};
      margin: 0;
      text-transform: uppercase;
    }
  }

  .ex-posts {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100%;
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

  .ex-post-content {
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

export default Exclusive
