import React, { useEffect } from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { B1Black, H3Black, standardWrapper } from "../../styles/helpers"
import { graphql, useStaticQuery } from "gatsby"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const getData = graphql`
  {
    testimonials: allWpTestimonial {
      edges {
        node {
          title
          acfTestimonials {
            content
            image {
              altText
              sourceUrl
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1000)
                }
              }
            }
          }
        }
      }
    }
  }
`

const CustomerStories = ({ data }) => {
  const testData = useStaticQuery(getData)
  const testimonials = testData.testimonials.edges

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#customer-stories-trigger",
          markers: false,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      })
      .fromTo(
        "#customer-stories-trigger .story-item",
        {
          autoAlpha: 0,
          y: 150,
        },
        {
          autoAlpha: 1,
          y: 0,
          ease: "power1.inOut",
          stagger: {
            amount: 2.75,
          },
        }
      )
  }, [])

  if (!data.displayCustomerStories) return null
  return (
    <StyledSection id="customer-stories-trigger">
      <div className="wrapper">
        {testimonials.map((test, index) => {
          const displayImg = getImage(
            test.node.acfTestimonials.image.localFile.childImageSharp
              .gatsbyImageData
          )
          const displayImgAlt = test.node.acfTestimonials.image.altText

          return (
            <Story className="story-item" key={index}>
              <div className="image">
                <GatsbyImage
                  image={displayImg}
                  alt={displayImgAlt}
                  layout="fullWidth"
                  formats={["auto", "webp", "avif"]}
                />
              </div>
              <div className="content">
                <div>
                  <h3>Customer Story - {test.node.title}</h3>
                </div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: test.node.acfTestimonials.content,
                  }}
                />
              </div>
            </Story>
          )
        })}
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  .wrapper {
    ${standardWrapper};
  }
`

const Story = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 5rem;

  .image {
    width: calc(50%);
    margin-left: 0;

    @media (min-width: 768px) {
      width: calc(25% - 5rem);
      margin-right: 5rem;
      margin-left: auto;
    }
  }

  .content {
    width: calc(100%);

    @media (min-width: 768px) {
      width: calc(75%);
    }

    h3 {
      ${H3Black};
    }

    p {
      ${B1Black};
    }
  }
`

export default CustomerStories
