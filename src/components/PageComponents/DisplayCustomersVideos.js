import React from "react"
import styled from "styled-components"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { colors } from "../../styles/helpers"

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
  dots: true,
}

const DisplayCustomersVideos = ({ data }) => {
  return (
    <DivStyled>
      <div className="wrapper">
        <Slider {...settings}>
          {data.videos.map((video, index) => {
            return (
              <Slide>
                <div
                  key={index}
                  dangerouslySetInnerHTML={{ __html: video.video }}
                />
              </Slide>
            )
          })}
        </Slider>
      </div>
    </DivStyled>
  )
}

const DivStyled = styled.div`
  .wrapper {
    margin-top: 2.5rem;
    margin-bottom: 5rem;
    padding: 2rem;
    padding-left: 6rem;
  }

  .slick-slider {
    .slick-arrow {
      top: auto;
      bottom: 47.5%;
      left: auto;
      z-index: 500;

      &::before {
        color: ${colors.colorPrimary};
        font-family: "FontAwesome";
      }

      &.slick-prev {
        left: -3rem;

        &::before {
          content: "\f053";
        }
      }
      &.slick-next {
        right: 0rem;
        &::before {
          content: "\f054";
        }
      }
    }

    .slick-dots {
      li {
        width: 4rem;
        height: 4rem;
        button {
          width: 4rem;
          height: 4rem;
          &::before {
            width: 4rem;
            height: 4rem;
            font-size: 1.8rem;
            color: ${colors.colorPrimary};
          }
        }

        &.slick-active {
          button {
            &::before {
              color: ${colors.colorPrimary};
            }
          }
        }
      }
    }
  }
`

const Slide = styled.div`
  width: 100%;
`

export default DisplayCustomersVideos
