import React, { useEffect, useState } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled, { keyframes } from "styled-components"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {
  B1Black,
  B2Navy,
  BigWrapper,
  colors,
  H2Navy,
} from "../../styles/helpers"
import { Link } from "gatsby"
import swipeImage from "../../images/swipe-finger.png"

const settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  draggable: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 15000,
  centerPadding: "0",
  arrows: true,
  dots: false,
}

const ContentSlider = ({ data }) => {
  const [hasSwiped, setHasSwiped] = useState(false)

  useEffect(() => {}, [])

  return (
    <ContentSliderSection
      onTouchStart={() => setHasSwiped(true)}
      onClick={() => setHasSwiped(true)}
    >
      <div className="wrapper">
        <Slider {...settings}>
          {data.slides.map((slide, index) => {
            const imageDisplay = getImage(
              slide.image.localFile.childImageSharp.gatsbyImageData
            )
            const imageAlt = slide.image.altText
            return (
              <Slide key={index}>
                <div className="wrapper">
                  <div className="image">
                    <GatsbyImage
                      image={imageDisplay}
                      alt={imageAlt}
                      layout="fullWidth"
                      formats={["auto", "webp", "avif"]}
                    />
                  </div>
                  <div className="content">
                    <div>
                      <h2>{slide.title}</h2>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: slide.content }} />
                    <div>
                      <Link to={`/${slide.buttonSlug}`}>
                        {slide.buttonText}
                        <span>&#8594;</span>
                      </Link>
                    </div>
                    <div className="board-line" />
                  </div>
                </div>
                <div className="bg-color" />
              </Slide>
            )
          })}
        </Slider>

        <div className={`swipe-finger${!hasSwiped ? " active-notice" : ""}`}>
          <img src={swipeImage} alt="Swipe to change slides" />
        </div>
      </div>
    </ContentSliderSection>
  )
}

const swipeAnimation = keyframes`
   0% {transform: translateX(0); }
  25% { transform: translateX(-70px); }
  75% { transform: translateX(70px);  }
  100% { transform: translateX(0);  }
`

const ContentSliderSection = styled.section`
  position: relative;

  .swipe-finger {
    position: absolute;
    bottom: 0;
    left: 35%;
    width: 10rem;
    transform: translateX(-50%);
    z-index: 100;
    opacity: 0;
    visibility: hidden;

    @media (min-width: 768px) {
      display: none;
    }

    &.active-notice {
      animation-name: ${swipeAnimation};
      animation-duration: 2.5s;
      animation-iteration-count: infinite;
      animation-timing-function: ease-in-out;
      opacity: 1;
      visibility: visible;
    }
  }

  .slick-slider {
    .slick-active.slick-current {
      z-index: 1000;
    }
    .slick-arrow {
      top: 40%;
      left: auto;
      z-index: 500;

      @media (min-width: 768px) {
        top: auto;
        bottom: 20%;
        left: auto;
      }

      &::before {
        color: ${colors.colorSecondary};
        font-family: "FontAwesome";
      }

      &.slick-prev {
        left: 1rem;

        @media (min-width: 768px) {
          right: 17rem;
          left: auto;
        }
        &::before {
          content: "\f060";
        }
      }
      &.slick-next {
        right: 1.5rem;

        @media (min-width: 768px) {
          right: 14rem;
          left: auto;
        }
        &::before {
          content: "\f061";
        }
      }

      @media (max-width: 767px) {
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        background-color: ${colors.colorPrimary};
        opacity: 1;

        &::before {
          color: ${colors.white};
          opacity: 1;
        }
      }
    }
  }
`

const Slide = styled.div`
  position: relative;
  width: 100%;

  .wrapper {
    ${BigWrapper};
  }

  .image {
    width: calc(100%);
    padding: 0;

    @media (min-width: 768px) {
      width: calc(50%);
      padding: 0 5rem;
    }
  }

  .content {
    position: relative;
    width: calc(100%);
    padding: 2rem 0;

    @media (min-width: 768px) {
      width: calc(50%);
      padding: 5rem;
    }

    h2 {
      ${H2Navy};
    }

    p {
      ${B1Black};
    }

    a {
      ${B2Navy};
      text-decoration: underline;
      text-transform: uppercase;
    }

    .board-line {
      display: none;
      position: absolute;
      top: 5rem;
      left: 0;
      bottom: 5rem;
      width: 0.4rem;
      background-color: ${colors.colorTertiary};

      @media (min-width: 768px) {
        display: block;
      }
    }
  }

  .bg-color {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    background-color: #e5e5e5;
    z-index: -1;

    @media (min-width: 768px) {
      width: 60%;
    }
  }
`

export default ContentSlider
