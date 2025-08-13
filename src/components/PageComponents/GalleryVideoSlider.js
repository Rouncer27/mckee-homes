import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { H2Grey, medWrapper, colors } from "../../styles/helpers"

const settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: false,
  draggable: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 15000,
  centerPadding: "350px",
  centerMode: true,
  arrows: true,
  dots: true,

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
      <div className="gallery-wrapper">
        <div className="gallery-title">
          <h2>{data.title}</h2>
        </div>
      </div>
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
  margin-top: 4rem;
  margin-bottom: 4rem;

  .wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .gallery-wrapper {
    ${medWrapper}
  }

  .gallery-title {
    width: 100%;
    text-align: center;

    h2 {
      ${H2Grey};
    }
  }

  .sliderWarpper {
    width: 100%;

    .slick-arrow {
      position: absolute !important;
      top: calc(100% + 2.5rem);
      width: 5rem;
      height: 5rem;
      z-index: 99999999999;

      &::before {
        opacity: 1;
        width: 5rem;
        height: 5rem;
        font-size: 5rem;
        color: ${colors.colorPrimary} !important;
      }
    }

    .slick-prev {
      left: 2rem;
    }

    .slick-next {
      right: 2rem;
    }

    .slick-dots {
      bottom: -5rem;

      li {
        width: 3rem;
        height: 3rem;

        button {
          width: 3rem;
          height: 3rem;

          &::before {
            font-size: 1.6rem;
          }
        }
      }
    }

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
        width: calc(100% - 6rem) !important;
        max-width: calc(100% - 6rem) !important;
      }
    }
  }
`

export default GalleryVideoSlider
