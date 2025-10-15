import React, { useState, useEffect } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {
  B1Black,
  colorAlt,
  colorPrimary,
  H2Grey,
  colors,
  medWrapper,
} from "../../styles/helpers"

const GalleryHomePlan = ({ data }) => {
  const [activeCat, setActiveCat] = useState("all")
  const [activeSlider, setActiveSlider] = useState(false)
  const [firstImage, setFirstImage] = useState(null)

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    draggable: true,
    infinite: true,
    autoplay: false,
    arrows: true,
    dots: true,
    initialSlide: firstImage || 0,
  }

  const handleCatChange = cat => {
    setActiveCat(cat)
  }

  const filteredImages = data.images.filter(
    gal => activeCat === "all" || gal.imageCategory === activeCat
  )

  const categories = [
    "Front Exterior",
    "Exterior",
    "Foyer",
    "Kitchen",
    "Prep Kitchen",
    "Butler Pantry",
    "Dining Room",
    "Living Room",
    "Powder Room",
    "Bathroom",
    "Owners Suite",
    "Bedroom",
    "Lifestyle Room",
    "Ensuite",
    "Laundry Room",
    "Closet",
    "Basement Suite",
    "Office/Den",
    "Mud Room",
    "Deck",
  ]

  return (
    <StyledDiv>
      <div className="wrapper">
        <div className="main-title">
          <h2>{data.title}</h2>
          <p>{data.subTitle}</p>
        </div>
        <div className="categories-warpper">
          <ul>
            <li className={activeCat === "all" ? "active" : ""}>
              <button
                type="button"
                onClick={() => {
                  handleCatChange("all")
                }}
              >
                All
              </button>
            </li>
            {categories.map((cat, index) => {
              return (
                <li key={index} className={activeCat === cat ? "active" : ""}>
                  <button
                    type="button"
                    onClick={() => {
                      handleCatChange(cat)
                    }}
                  >
                    {cat}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="gallery-warpper">
          {filteredImages.length <= 0 ? (
            <div className="gallery-no-images">
              <p>No images for the {activeCat} space</p>
            </div>
          ) : (
            filteredImages.map((gal, index) => {
              const galImg = getImage(
                gal.image.localFile.childImageSharp.gatsbyImageData
              )
              const galImgAlt = gal.image.altText
              return (
                <div
                  key={index}
                  className="gallery-image"
                  onClick={() => {
                    setFirstImage(index)
                    setActiveSlider(!activeSlider)
                  }}
                >
                  <GatsbyImage
                    image={galImg}
                    alt={galImgAlt}
                    layout="fullWidth"
                    formats={["auto", "webp", "avif"]}
                  />
                </div>
              )
            })
          )}
        </div>

        {activeSlider && (
          <div className="gallery-slider">
            <div className="gallery-slider-container">
              <Slider {...settings}>
                {filteredImages.map((gal, index) => {
                  const galImg = getImage(
                    gal.image.localFile.childImageSharp.gatsbyImageData
                  )
                  const galImgAlt = gal.image.altText

                  console.log("TREVOR", galImgAlt)
                  return (
                    <div
                      key={index}
                      className="gallery-slider-image"
                      onClick={() => {
                        setActiveSlider(!activeSlider)
                      }}
                    >
                      <img src={galImg.images.fallback.src} alt={galImgAlt} />
                      {/* <GatsbyImage
                          image={galImg}
                          alt={galImgAlt}
                          layout="fullWidth"
                          formats={["auto", "webp", "avif"]}
                        /> */}
                    </div>
                  )
                })}
              </Slider>
            </div>
            <div
              className="gallery-slider-overlay"
              onClick={() => {
                setActiveSlider(!activeSlider)
              }}
            />
          </div>
        )}
      </div>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  position: relative;
  padding: 5rem 0;

  .wrapper {
    ${medWrapper};
  }

  .gallery-no-images {
    width: 100%;
    padding: 5rem 0 3rem;
    text-align: center;

    p {
      ${H2Grey};
    }
  }

  .main-title {
    width: 100%;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 0.1rem solid #000;
    text-align: center;

    h2 {
      ${H2Grey};
    }

    p {
      ${B1Black};
      margin-bottom: 0;
      text-transform: uppercase;
    }
  }

  .categories-warpper {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100%;

    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      width: 100%;
      text-align: center;

      li {
        text-align: center;
        margin: 1rem 0;
        padding: 0 2rem;
        border-right: solid 0.2rem #000;
        line-height: 1;

        &:last-of-type {
          border-right: none;
        }

        button {
          line-height: 1;
          background-color: transparent;
          border: none;
          text-transform: uppercase;
          cursor: pointer;
        }

        &.active {
          background-color: ${colorPrimary};

          button {
            color: #fff;
          }
        }
      }
    }
  }

  .gallery-warpper {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100%;

    .gallery-image {
      width: calc((100% / 1) - 3rem);
      margin: 1.5rem;

      @media (min-width: 768px) {
        width: calc((100% / 2) - 3rem);
        margin: 1.5rem;
      }

      @media (min-width: 1025px) {
        width: calc((100% / 3) - 3rem);
        margin: 1.5rem;
      }

      .gatsby-image-wrapper {
        height: 25rem !important;

        img {
        }
      }
    }
  }

  .gallery-slider {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999999;

    .slick-slider {
      height: 100% !important;

      .slick-list {
        height: 100% !important;

        .slick-track {
          height: 100% !important;

          .slick-slide {
            height: 100% !important;
            overflow: hidden;

            div {
              height: 100% !important;
              max-width: 100% !important;
            }
          }
        }
      }
    }

    .slick-arrow {
      position: absolute !important;
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
    }

    .slick-next {
    }

    .slick-dots {
      bottom: -3.5rem;

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

    &-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.9);
      z-index: 1;
    }

    &-container {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      height: 80vh;
      margin: auto;
      transform: translate(-50%, -50%);
      z-index: 10;

      @media (min-width: 768px) {
        width: 80%;
        padding: 2rem;
      }
    }

    &-image {
      display: block !important;
      position: relative;
      width: 100%;
      height: 100%;
      padding: 0 1rem;
      overflow: hidden;

      @media (min-width: 768px) {
        padding: 0rem;
      }

      img {
        display: block;
        position: absolute !important;
        top: -5rem;
        right: 2rem;
        bottom: 2rem;
        left: 2rem;
        width: auto !important;
        height: auto !important;
        object-fit: cover;
      }
    }
  }
`

export default GalleryHomePlan
