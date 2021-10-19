import React, { useEffect, useState, useContext } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import axios from "axios"
import { UserContext } from "../../context/UserContext"

import FeaturedImage from "./ExclusivePost/FeaturedImage"
import PostHeader from "../Post/PostHeader"
import PostWysiwyg from "../Post/PostWysiwyg"
import { Btn1Navy, standardWrapper } from "../../styles/helpers"

const ExclusiveSingle = props => {
  const [userState] = useContext(UserContext)
  const post = userState.exclusive.find(post => post.slug === props.id)

  if (post === undefined) return null

  return (
    <PostSingleArticle>
      <FeaturedImage
        image={post.acf.featured_image.sizes.large}
        alt={post.acf.featured_image.alt}
      />
      <div className="wrapper">
        <PostHeader
          title={post.title.rendered}
          date={post.date}
          categories={{ nodes: [{ name: "Promotions and Announcements" }] }}
        />
        <PostWysiwyg content={post.acf.article} />
      </div>
      <div className="ex-link">
        <Link to="/app/dashboard">Back To Dashboard</Link>
      </div>
    </PostSingleArticle>
  )
}

const PostSingleArticle = styled.article`
  .wrapper {
    ${standardWrapper};
    max-width: 95rem !important;
  }

  .ex-link {
    width: 100%;
    max-width: 100rem;
    margin: auto;
    padding: 5rem;

    a {
      ${Btn1Navy};
    }
  }
`

export default ExclusiveSingle
