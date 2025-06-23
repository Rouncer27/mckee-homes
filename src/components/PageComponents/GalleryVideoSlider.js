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

const GalleryVideoSlider = ({ data }) => {
  return (
    <StyledDiv>
      <div className="wrapper">
        <Slider className="sliderWarpper" {...settings}>
          {data.sliderVideos.map((gal, index) => {
            return (
              <div key={index} className="slide">
                <div
                  className="slide-inner"
                  dangerouslySetInnerHTML={{ __html: gal.video }}
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

      @media (min-width: 768px) {
        height: 50rem;
        margin-right: 2rem;
        margin-left: 2rem;
      }

      @media (min-width: 1025px) {
        height: 50rem;
        margin-right: 2rem;
        margin-left: 2rem;
      }

      &-inner {
        position: absolute;
        top: 0%;
        left: 0;
        width: 100%;
        height: 100%;
      }

      iframe {
        position: absolute;
        top: 0;
        right: 3rem;
        left: 3rem;
        height: 100%;
        width: calc(100% - 6rem);
      }
    }
  }
`

export default GalleryVideoSlider
