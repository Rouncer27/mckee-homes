import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const PostFeaturedImage = ({ image }) => {
  const imageDisplay = getImage(image.localFile.childImageSharp.gatsbyImageData)
  const imageAltText = getImage(image.altText)

  return (
    <PostFeaturedImageStyled>
      <div className="imageWrap">
        <GatsbyImage
          image={imageDisplay}
          alt={imageAltText ? imageAltText : ""}
          layout="fixed"
        />
      </div>
    </PostFeaturedImageStyled>
  )
}

const PostFeaturedImageStyled = styled.div`
  width: 100%;

  .imageWrap {
    width: 100%;
    max-width: 70rem;
    margin: 1rem 0;
  }
`

export default PostFeaturedImage
