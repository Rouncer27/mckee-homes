import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: false,
  draggable: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 15000,
  centerPadding: "350px",
  centerMode: true,
  arrows: true,
  dots: false,
}

const HomePlanGallery = ({ gallery }) => {
  return (
    <SectionStyled>
      <div className="gallery-wrapper">
        <Slider {...settings}>
          {gallery.map(gal => {
            const galImg = getImage(
              gal.localFile.childImageSharp.gatsbyImageData
            )
            const galImgAlt = gal.altText
            return (
              <div className="slide">
                <GatsbyImage
                  image={galImg}
                  alt={galImgAlt}
                  layout="fullWidth"
                  formats={["auto", "webp", "avif"]}
                />
              </div>
            )
          })}
        </Slider>
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.div`
  .gallery-wrapper {
    .slide {
      position: relative;
      height: 45rem;
      margin-right: 2rem;
      margin-left: 2rem;

      .gatsby-image-wrapper {
        position: absolute !important;
        top: 0;
        right: 1rem;
        left: 1rem;
        height: 100%;
      }
    }
  }
`

export default HomePlanGallery
