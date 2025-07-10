import React from "react"
import styled from "styled-components"
import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { B1White, H2Grey, medWrapper } from "../../styles/helpers"

const BoxImageLinks = ({ data }) => {
  console.log("data", data)
  return (
    <StyledSection>
      <div className="box-image-wrapper">
        <div className="box-image-title">
          <h2>{data.sectionTitle}</h2>
        </div>
        <div className="box-image-boxes">
          {data.boxLinks.map((box, index) => {
            return (
              <div className="box-image-box" key={index}>
                <Link to={box.link.uri}>
                  <div className="box-image-box-image">
                    <div className="box-image-box-image-container">
                      <GatsbyImage
                        image={
                          box.image.localFile.childImageSharp.gatsbyImageData
                        }
                        alt={box.image.altText}
                        layout="fullWidth"
                        formats={["auto", "webp", "avif"]}
                      />
                    </div>
                  </div>
                  <div className="box-image-box-content">
                    <div dangerouslySetInnerHTML={{ __html: box.content }} />
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </StyledSection>
  )
}

export default BoxImageLinks

const StyledSection = styled.section`
  .box-image-wrapper {
    ${medWrapper};
  }

  .box-image-title {
    width: 100%;
    text-align: center;

    h2 {
      ${H2Grey};
    }
  }

  .box-image-boxes {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100%;
  }

  .box-image-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin-bottom: 4rem;

    @media (min-width: 768px) {
      width: calc(33.3333333333% - 2rem);
      margin: 1rem;
    }

    @media (min-width: 1025px) {
      width: calc(33.3333333333% - 4rem);
      margin: 1rem 2rem;
    }

    a {
      width: 100%;
      display: block;
    }

    &-image {
      width: 100%;
      position: relative;
      min-height: 30rem;

      &-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        .gatsby-image-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;

          img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }

    &-content {
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      background-color: #998d87;
      min-height: 7.75rem;
      margin-top: 1rem;
      padding: 1rem;

      p {
        ${B1White};

        &:last-of-type {
          margin: 0;
        }
      }
    }
  }
`
