import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { H2Grey, medWrapper, H2White } from "../../styles/helpers"
import { Link } from "gatsby"

const GalleryCategoryLinks = ({ data }) => {
  return (
    <StyledDiv>
      <div className="wrapper">
        <div className="main-title">
          <h2>{data.title}</h2>
        </div>
        <div className="gallery-warpper">
          {data.images.map((gal, index) => {
            const galImg = getImage(
              gal.image.localFile.childImageSharp.gatsbyImageData
            )
            const galImgAlt = gal.image.altText

            return (
              <div key={index} className={`gallery-image`}>
                <Link to={`/galleries/${gal.imageCategoryPage.slug}`}>
                  <GatsbyImage
                    image={galImg}
                    alt={galImgAlt}
                    layout="fullWidth"
                    formats={["auto", "webp", "avif"]}
                  />
                  <div className="gallery-image-title">
                    <h3>{gal.imageTitle}</h3>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  position: relative;

  .wrapper {
    ${medWrapper};
  }

  .main-title {
    width: 100%;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    text-align: center;

    h2 {
      ${H2Grey};
    }
  }

  .gallery-warpper {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100%;

    .gallery-image {
      position: relative;
      width: calc((100% / 1) - 3rem);
      margin: 1.5rem;

      @media (min-width: 768px) {
        width: calc((100% / 2) - 3rem);
        margin: 1.5rem;
      }

      @media (min-width: 1025px) {
        width: calc((100% / 3) - 3rem);
        margin: 1.5rem;
      }

      .gatsby-image-wrapper {
        height: 25rem !important;
      }

      &-title {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        text-align: center;
        background-color: rgba(153, 141, 135, 0.75);
        transition: all 0.3s ease-in-out;

        h3 {
          ${H2White};
          margin: 0;
        }
      }

      &:hover {
        .gallery-image-title {
          background-color: rgba(13, 29, 105, 0.75);
        }
      }
    }
  }
`

export default GalleryCategoryLinks
