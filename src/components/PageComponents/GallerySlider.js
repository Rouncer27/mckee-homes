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

  responsive: [
    {
      breakpoint: 1025,
      settings: {
        centerPadding: "100px",
      },
    },
    {
      breakpoint: 768,
      settings: {
        centerPadding: "0px",
      },
    },
  ],
}

const GallerySlider = ({ data }) => {
  console.log("GallerySlider", data)
  return (
    <StyledDiv>
      <div className="wrapper">
        <Slider className="sliderWarpper" {...settings}>
          {data.sliderImages.map((gal, index) => {
            const galImg = getImage(
              gal.localFile.childImageSharp.gatsbyImageData
            )
            const galImgAlt = gal.altText
            return (
              <div key={index} className="slide">
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
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  .wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .sliderWarpper {
    width: 100%;

    .slide {
      position: relative;
      height: 40rem;
      z-index: 10;
      cursor: zoom-in;

      @media (min-width: 768px) {
        height: 50rem;
        margin-right: 2rem;
        margin-left: 2rem;
      }

      @media (min-width: 1025px) {
        height: 60rem;
        margin-right: 2rem;
        margin-left: 2rem;
      }

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

export default GallerySlider
