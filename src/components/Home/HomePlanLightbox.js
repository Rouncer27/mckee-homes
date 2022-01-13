import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { colors, fonts, standardWrapper } from "../../styles/helpers"

const HomePlanLightbox = ({
  lightboxActive,
  handleCloseLightBox,
  indexActive,
  gallery,
}) => {
  const lightboxSlider = useRef(null)
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    draggable: true,
    infinite: true,
    speed: 500,
    autoplay: false,
    centerPadding: "0",
    centerMode: false,
    arrows: true,
    dots: false,
  }

  useEffect(() => {
    lightboxSlider?.current?.slickGoTo(parseInt(indexActive))
  }, [lightboxActive])

  return (
    <LightboxStyled lightboxactive={lightboxActive}>
      <div className="wrapper">
        <Slider ref={lightboxSlider} {...settings}>
          {gallery.map(gal => {
            const galImg = getImage(
              gal.localFile.childImageSharp.gatsbyImageData
            )
            const galImgAlt = gal.altText
            return (
              <div>
                <GatsbyImage
                  image={galImg}
                  alt={galImgAlt}
                  layout="constrained"
                  formats={["auto", "webp", "avif"]}
                />
              </div>
            )
          })}
        </Slider>
      </div>
      <div onClick={() => handleCloseLightBox()} className="lightbox-bg" />
      <div className="btn-close">
        <button onClick={() => handleCloseLightBox()}>&#10005;</button>
      </div>
    </LightboxStyled>
  )
}

const LightboxStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  z-index: 99999999999;

  .lightbox-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${colors.colorPrimary};
    z-index: 5;
  }

  .wrapper {
    ${standardWrapper};
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    max-height: 80%;
    margin: auto !important;
    z-index: 500;
  }

  .slick-slider {
    width: 100%;

    button {
      top: calc(100% + 5rem);
      width: 10rem;
      height: 10rem;
      z-index: 999999;

      @media (min-width: 768px) {
        top: 50%;
      }

      &::before {
        font-size: 10rem;
        font-family: ${fonts.fontAwesome};
        opacity: 1;
      }

      &.slick-prev {
        @media (min-width: 768px) {
          left: -9rem;
        }

        &::before {
          content: "\f104";
        }
      }

      &.slick-next {
        @media (min-width: 768px) {
          right: -9rem;
        }

        &::before {
          content: "\f105";
        }
      }
    }

    .slick-list {
      max-width: 100%;

      @media (min-width: 768px) {
        max-width: 65rem;
        margin: auto;
      }

      @media (min-width: 1025px) {
        max-width: 100%;
      }
    }
  }

  .slick-slide {
    overflow: hidden;

    .gatsby-image-wrapper {
      width: 100% !important;
    }

    img {
      width: auto !important;
      max-height: 80vh !important;
      margin: auto !important;
    }
  }

  .btn-close {
    position: absolute;
    top: 3rem;
    right: 3rem;
    z-index: 501;

    button {
      display: block;
      width: 7.5rem;
      height: 7.5rem;
      background-color: ${colors.white};
      border: 0.1rem solid ${colors.white};
      border-radius: 50%;
      transition: all 0.3s ease-out;
      font-size: 2rem;
      font-weight: bold;
      text-transform: uppercase;
      cursor: pointer;

      &:hover {
        background-color: ${colors.colorPrimary};
        color: ${colors.white};
      }
    }
  }
`

export default HomePlanLightbox
