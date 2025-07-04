import React, { useState, useEffect } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { B1Black, H2Grey, medWrapper } from "../../styles/helpers"

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

  return (
    <StyledDiv>
      <div className="wrapper">
        <div className="main-title">
          <h2>{data.title}</h2>
          <p>{data.subTitle}</p>
        </div>
        <div className="categories-warpper">
          <ul>
            <li>
              {" "}
              <button
                type="button"
                onClick={() => {
                  handleCatChange("all")
                }}
              >
                All
              </button>
            </li>
            {data.images.map((gal, index) => {
              return (
                <li key={index}>
                  <button
                    type="button"
                    onClick={() => {
                      handleCatChange(gal.imageCategory)
                    }}
                  >
                    {gal.imageCategory}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="gallery-warpper">
          {filteredImages.map((gal, index) => {
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
          })}
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
    }
  }

  .gallery-slider {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999999;

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
      height: auto;
      margin: auto;
      transform: translate(-50%, -50%);
      z-index: 10;

      @media (min-width: 768px) {
        width: 80%;
        padding: 2rem;
      }
    }

    &-image {
      width: 100%;
      padding: 0 1rem;

      @media (min-width: 768px) {
        padding: 7rem;
      }

      img {
        width: 100% !important;
      }
    }
  }
`

export default GalleryHomePlan
