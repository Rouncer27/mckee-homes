import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  B1Black,
  H3Black,
  medWrapper,
  standardWrapper,
} from "../../styles/helpers"
import { graphql, useStaticQuery } from "gatsby"

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

  if (!data.displayCustomerStories) return null
  return (
    <StyledSection>
      <div className="wrapper">
        {testimonials.map((test, index) => {
          const displayImg = getImage(
            test.node.acfTestimonials.image.localFile.childImageSharp
              .gatsbyImageData
          )
          const displayImgAlt = test.node.acfTestimonials.image.altText

          return (
            <Story key={index}>
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
