import React, { useState, useRef } from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { colors } from "../../styles/helpers"

import HomePlanLightbox from "./HomePlanLightbox"

const settingsGallery = {
  fade: false,
  draggable: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 15000,
  centerPadding: "350px",
  centerMode: false,
  arrows: true,
  dots: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        centerPadding: "100px",
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        centerPadding: "0px",
        slidesToShow: 3,
      },
    },
  ],
}

const HomePlanGallery = ({ gallery }) => {
  const slickSliderGallery = useRef(null)
  const [lightboxActive, setLightboxActive] = useState(false)
  const [indexActive, setIndexActive] = useState(0)

  const handleSetLightboxActive = event => {
    const currentSlideIndex = event.target.classList.contains("slick-slide")
      ? event.target.dataset.index
      : event.target.parentElement.classList.contains("slick-slide")
      ? event.target.parentElement.dataset.index
      : event.target.parentElement.parentElement.classList.contains(
          "slick-slide"
        )
      ? event.target.parentElement.parentElement.dataset.index
      : event.target.parentElement.parentElement.parentElement.classList.contains(
          "slick-slide"
        )
      ? event.target.parentElement.parentElement.parentElement.dataset.index
      : event.target.parentElement.parentElement.parentElement.parentElement.classList.contains(
          "slick-slide"
        )
      ? event.target.parentElement.parentElement.parentElement.parentElement
          .dataset.index
      : event.target.parentElement.parentElement.parentElement.parentElement.parentElement.classList.contains(
          "slick-slide"
        )
      ? event.target.parentElement.parentElement.parentElement.parentElement
          .parentElement.dataset.index
      : 1

    setIndexActive(currentSlideIndex)
    setLightboxActive(!lightboxActive)
  }

  const handleCloseLightBox = () => {
    setLightboxActive(false)
  }

  return (
    <SectionStyled>
      <div className="gallery-wrapper">
        {gallery.length > 0 ? (
          <Slider ref={slickSliderGallery} {...settingsGallery}>
            {gallery.map((gal, index) => {
              const galImg = getImage(
                gal.localFile.childImageSharp.gatsbyImageData
              )
              const galImgAlt = gal.altText
              return (
                <div
                  key={index}
                  className="gallery-slide"
                  onClick={event => handleSetLightboxActive(event)}
                >
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
        ) : null}
      </div>
      {lightboxActive && (
        <HomePlanLightbox
          lightboxActive={lightboxActive}
          handleCloseLightBox={handleCloseLightBox}
          indexActive={indexActive}
          gallery={gallery}
        />
      )}
    </SectionStyled>
  )
}

const SectionStyled = styled.div`
  .gallery-wrapper {
    padding-bottom: 5rem;

    .gallery-slide {
      position: relative;
      height: 35rem;
      z-index: 10;
      cursor: zoom-in;

      @media (min-width: 768px) {
        height: 45rem;
        margin-right: 2rem;
        margin-left: 2rem;
      }

      @media (min-width: 1025px) {
      }

      .gatsby-image-wrapper {
        position: absolute !important;
        top: 0;
        right: 1rem;
        left: 1rem;
        height: 100%;
      }
    }

    .slick-arrow {
      position: absolute !important;
      top: calc(100% + 2rem);
      z-index: 100;

      &::before {
        color: ${colors.colorTertiary};
      }
    }

    .slick-prev {
      left: 5rem;

      @media (min-width: 768px) {
        left: 48%;
      }
    }

    .slick-next {
      right: 5rem;

      @media (min-width: 768px) {
        right: 48%;
      }
    }
  }
`

export default HomePlanGallery
