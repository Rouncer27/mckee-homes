import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { standardWrapper } from "../../styles/helpers"

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
    <LightboxStyled
      onClick={() => handleCloseLightBox()}
      lightboxactive={lightboxActive}
    >
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
                  layout="fullWidth"
                  formats={["auto", "webp", "avif"]}
                />
              </div>
            )
          })}
        </Slider>
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
  background-color: rgba(21, 66, 144, 0.8);
  z-index: 999999;

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
    margin: auto !important;
  }

  .slick-slider {
    width: 100%;
  }
`

export default HomePlanLightbox
