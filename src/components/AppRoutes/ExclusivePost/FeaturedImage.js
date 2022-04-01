import React from "react"
import styled from "styled-components"

const FeaturedImage = ({ image, alt }) => {
  return (
    <PostFeaturedImageStyled>
      <div className="imageWrap">
        <div className="hero-image">
          <img src={image} alt={alt} />
        </div>
      </div>
    </PostFeaturedImageStyled>
  )
}

const PostFeaturedImageStyled = styled.div`
  overflow: hidden;

  .imageWrap {
    position: relative;
    height: 30rem;
    overflow: hidden;

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

    img {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`

export default FeaturedImage
