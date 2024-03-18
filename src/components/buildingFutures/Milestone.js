import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { B1Black, colors } from "../../styles/helpers"

import worker from "../../images/icons/bf/icons-survey.png"
import crane from "../../images/icons/bf/icons-excavating.png"
import square from "../../images/icons/bf/icons-foundation.png"
import saw from "../../images/icons/bf/icons-framing.png"
import plumbing from "../../images/icons/bf/icons-plumbing.png"
import electrical from "../../images/icons/bf/icons-electrical.png"
import brick from "../../images/icons/bf/icons-siding.png"
import ladder from "../../images/icons/bf/icons-insultation.png"
import drill from "../../images/icons/bf/icons-drywall.png"
import paint from "../../images/icons/bf/icons-paint.png"
import key from "../../images/icons/bf/icons-final.png"

const settings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  fade: false,
  draggable: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 15000,
  centerPadding: "0",
  arrows: true,
  dots: false,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        centerPadding: "100px",
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        centerPadding: "0px",
        slidesToShow: 1,
      },
    },
  ],
}

const Milestone = ({ detail, currentIndex, fullLength, thisyearindex }) => {
  const icon =
    detail.icon === "worker" ? (
      <img src={worker} alt={detail.title} />
    ) : detail.icon === "crane" ? (
      <img src={crane} alt={detail.title} />
    ) : detail.icon === "square" ? (
      <img src={square} alt={detail.title} />
    ) : detail.icon === "saw" ? (
      <img src={saw} alt={detail.title} />
    ) : detail.icon === "plumbing" ? (
      <img src={plumbing} alt={detail.title} />
    ) : detail.icon === "electrical" ? (
      <img src={electrical} alt={detail.title} />
    ) : detail.icon === "brick" ? (
      <img src={brick} alt={detail.title} />
    ) : detail.icon === "ladder" ? (
      <img src={ladder} alt={detail.title} />
    ) : detail.icon === "drill" ? (
      <img src={drill} alt={detail.title} />
    ) : detail.icon === "paint" ? (
      <img src={paint} alt={detail.title} />
    ) : detail.icon === "key" ? (
      <img src={key} alt={detail.title} />
    ) : (
      <img src={worker} alt={detail.title} />
    )
  return (
    <Step
      className={`accordion-group accordion-group-${thisyearindex} step step-${currentIndex}`}
    >
      <div
        className={`icon icon-${currentIndex} icon-${
          currentIndex + 1 === fullLength ? "last" : "before"
        }`}
      >
        {icon}
      </div>
      <div className="content">
        <div className="title">
          <h3 className="accordion-menu">{detail.title}</h3>
        </div>
        <div className="accordion-content">
          <div
            className="main-content"
            dangerouslySetInnerHTML={{ __html: detail.content }}
          />
          {detail?.images?.length > 0 && (
            <Slider className="image-gallery" {...settings}>
              {detail?.images?.map((img, index) => {
                const imageDisplay = getImage(
                  img.localFile.childImageSharp.gatsbyImageData
                )
                const imageAlt = img.altText
                return (
                  <div className="gallery-image" key={index}>
                    <GatsbyImage
                      image={imageDisplay}
                      alt={imageAlt}
                      layout="fullWidth"
                      formats={["auto", "webp", "avif"]}
                    />
                  </div>
                )
              })}
            </Slider>
          )}
        </div>
      </div>
    </Step>
  )
}

const Step = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 2rem;

  .icon {
    width: calc(10%);
    position: relative;
    max-width: 11rem;

    &::before {
      position: absolute;
      top: -2rem;
      bottom: -2rem;
      left: 50%;
      content: "";
      width: 0.1rem;
      transform: translateX(-50%);
      background-color: ${colors.colorPrimary};
      z-index: -1;
    }

    &.icon-0 {
      &::before {
        top: 1rem;
      }
    }

    &.icon-last {
      &::before {
        bottom: 3.5rem;

        @media (min-width: 768px) {
          bottom: 1rem;
        }
      }
    }
  }

  .accordion-content {
    height: 0;
    overflow: hidden;
  }

  .accordion-content.expanded {
    height: 0;
    overflow: hidden;
  }

  .content {
    width: calc(90% - 2rem);
    margin-left: 2rem;
    padding: 2rem 1.5rem;
    background-color: #fff;

    @media (min-width: 768px) {
      padding: 3rem 5.2rem;
    }

    .title {
      width: 100%;

      h3 {
        ${B1Black};
        margin: 0;
        padding: 0.25rem 2rem;
        cursor: pointer;
        text-transform: uppercase;
        transition: all 0.3s ease-in;

        &:hover {
          color: ${colors.colorPrimary};
          background-color: ${colors.colorAlt};
        }
      }
    }

    .main-content {
      width: 100%;
      margin-top: 2.5rem;

      p {
        ${B1Black};

        &:last-of-type {
          margin-bottom: 0;
        }
      }
    }

    .image-gallery {
      width: 100%;
      padding: 5rem 0;

      .slick-arrow {
        top: calc(100% - 2.5rem);

        &.slick-prev {
          left: 2rem;
        }

        &.slick-next {
          right: 2rem;
        }

        &::before {
          color: #000;
        }
      }

      .slick-track {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .gallery-image {
        padding: 0 0.5rem;
      }
    }
  }
`

export default Milestone
