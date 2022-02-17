import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { colors } from "../../styles/helpers"

const settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: false,
  draggable: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2000,
  centerPadding: "0",
  arrows: true,
  dots: false,
  initialSlide: 0,
}

const HomeSlider = ({ images }) => {
  return (
    <StyledDiv>
      <div className="wrapper">
        <Slider className="sliderWarpper" {...settings}>
          {images.map((gal, index) => {
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
    width: 100%;
  }

  .sliderWarpper {
    width: 100%;
  }

  .slick-arrow {
    top: 40%;
    left: auto;
    z-index: 500;

    @media (min-width: 768px) {
      top: auto;
      bottom: 0%;
      left: auto;
    }

    &::before {
      color: ${colors.colorSecondary};
      font-family: "FontAwesome";
    }

    &.slick-prev {
      left: 1rem;

      @media (min-width: 768px) {
        right: 50%;
        left: auto;
      }
      &::before {
        content: "\f060";
      }
    }
    &.slick-next {
      right: 1.5rem;

      @media (min-width: 768px) {
        right: 45%;
        left: auto;
      }
      &::before {
        content: "\f061";
      }
    }

    @media (max-width: 767px) {
      width: 5rem;
      height: 5rem !important;
      border-radius: 50%;
      background-color: ${colors.colorPrimary};
      opacity: 1;

      &::before {
        color: ${colors.white};
        opacity: 1;
      }
    }
  }
`

export default HomeSlider
