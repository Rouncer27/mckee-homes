import React from "react"
import styled from "styled-components"
import { B1Black, medWrapper, fontSizer, colors } from "../../styles/helpers"
import { graphql, useStaticQuery } from "gatsby"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const getData = graphql`
  {
    testimonials: allWpTestimonial {
      edges {
        node {
          title
          acfTestimonials {
            content
          }
        }
      }
    }
  }
`

const settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: false,
  draggable: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 15000,
  centerPadding: "0",
  arrows: false,
  dots: true,
}

const Testimonials = ({ data }) => {
  const testData = useStaticQuery(getData)
  const testimonials = testData.testimonials.edges

  if (!data.displayTestimonialSlider) return null

  return (
    <SectionStyled>
      <div className="wrapper">
        <div className="slider-wrap">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => {
              return (
                <TestimonialSlide key={index}>
                  <span className="quote-left">&#8220;</span>
                  <span className="quote-right">&#8221;</span>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: testimonial.node.acfTestimonials.content,
                    }}
                  />
                  <div>
                    <p>{testimonial.node.title}</p>
                  </div>
                </TestimonialSlide>
              )
            })}
          </Slider>
        </div>
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  margin: 7.5rem auto;

  .wrapper {
    ${medWrapper};
  }

  .slider-wrap {
    width: 100%;
    max-width: 110rem;
  }
`

const TestimonialSlide = styled.div`
  position: relative;
  padding: 2rem 0;
  text-align: center;

  @media (min-width: 768px) {
    padding: 2rem 5rem;
  }
  @media (min-width: 1025px) {
    padding: 2rem 10rem;
  }

  span {
    ${fontSizer(7, 10, 76.8, 150, 3)};
    position: absolute;
    top: 0;
    color: ${colors.colorPrimary};
  }

  .quote-right {
    right: 1rem;
  }

  .quote-left {
    left: 1rem;
  }

  p {
    ${B1Black};
    margin: 0;
    margin-bottom: 1rem;
  }
`

export default Testimonials
