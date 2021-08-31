import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const PostFeaturedImage = ({ image }) => {
  const imageDisplay = getImage(image.localFile.childImageSharp.gatsbyImageData)
  const imageAltText = getImage(image.altText)

  return (
    <PostFeaturedImageStyled>
      <div className="imageWrap">
        <div className="hero-image">
          <GatsbyImage
            image={imageDisplay}
            alt={imageAltText ? imageAltText : ""}
            layout="fixed"
          />
        </div>
      </div>
    </PostFeaturedImageStyled>
  )
}

const PostFeaturedImageStyled = styled.div`
  .imageWrap {
    position: relative;
    height: 30rem;

    @media (min-width: 768px) {
      height: 40rem;
    }

    @media (min-width: 1025px) {
      height: 47rem;
    }
  }

  .hero-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 101%;
    height: 100%;

    .gatsby-image-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`

export default PostFeaturedImage
