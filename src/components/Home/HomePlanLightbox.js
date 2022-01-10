import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { colors, standardWrapper } from "../../styles/helpers"

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
      <div className="btn-close">
        <button onClick={() => handleCloseLightBox()}>Close</button>
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
  background-color: #42454a;
  z-index: 99999999999;

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
  }

  .slick-slider {
    width: 100%;
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

    button {
      padding: 1rem 2rem;
      background-color: ${colors.white};
      border: 0.1rem solid ${colors.white};
      transition: all 0.3s ease-out;
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
