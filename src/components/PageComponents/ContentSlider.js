import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
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
  return (
    <ContentSliderSection>
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
      </div>
    </ContentSliderSection>
  )
}

const ContentSliderSection = styled.section``

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
