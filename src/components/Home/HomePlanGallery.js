import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { colors } from "../../styles/helpers"

import HomePlanLightbox from "./HomePlanLightbox"

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
  const slickSlider = useRef(null)
  const [lightboxActive, setLightboxActive] = useState(false)
  const [indexActive, setIndexActive] = useState(0)

  let settingslightbox = {
    initialSlide: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    draggable: true,
    infinite: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 15000,
    centerPadding: "0",
    centerMode: false,
    arrows: true,
    dots: false,
  }

  useEffect(() => {
    console.log("slickSlider", slickSlider.current.innerSlider)
  }, [])

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

    console.log(currentSlideIndex)

    console.dir(
      event.target.parentElement.parentElement.parentElement.parentElement
        .parentElement
    )

    setLightboxActive(!lightboxActive)
  }

  const handleCloseLightBox = () => {
    console.log("CLOSED THE LIGHTBOX!!!")
    setLightboxActive(false)
  }

  return (
    <SectionStyled>
      <div className="gallery-wrapper">
        <Slider ref={slickSlider} {...settings}>
          {gallery.map(gal => {
            const galImg = getImage(
              gal.localFile.childImageSharp.gatsbyImageData
            )
            const galImgAlt = gal.altText
            return (
              <div
                className="slide"
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

    .slide {
      position: relative;
      height: 45rem;
      margin-right: 2rem;
      margin-left: 2rem;
      z-index: 10;

      .gatsby-image-wrapper {
        position: absolute !important;
        top: 0;
        right: 1rem;
        left: 1rem;
        height: 100%;
      }
    }

    .slick-arrow {
      position: absolute;
      top: calc(100% + 2rem);
      z-index: 100;

      &::before {
        color: ${colors.colorTertiary};
      }
    }

    .slick-prev {
      left: 48%;
    }

    .slick-next {
      right: 48%;
    }
  }
`

export default HomePlanGallery
