import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { BigWrapper, H2Grey } from "../../styles/helpers"

const getData = graphql`
  {
    city: allWpCity {
      edges {
        node {
          id
          name
          slug
          CityContent {
            featuredImage {
              altText
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1500)
                }
              }
            }
            showHomesPageLink {
              ... on WpPage {
                uri
                slug
              }
            }
          }
        }
      }
    }
  }
`

const DisplayCitiesShowHomes = ({ data }) => {
  const cityData = useStaticQuery(getData)
  const cities = cityData.city.edges

  if (!data.displayCitiesShowHomes) {
    return null
  } else {
    return (
      <StyledSection>
        <div className="cities-wrapper">
          <div className="cities-title">
            <h2>{data.sectionTitle}</h2>
          </div>
          <div className="cities-links">
            {cities.map((city, index) => {
              return (
                <div className="cities-links-city" key={index}>
                  <a href={city.node.CityContent.showHomesPageLink.uri}>
                    <div className="cities-links-city-title">
                      <h3>{city.node.name}</h3>
                    </div>
                    <div className="cities-links-city-image">
                      <GatsbyImage
                        image={
                          city.node.CityContent.featuredImage.localFile
                            .childImageSharp.gatsbyImageData
                        }
                        alt={city.node.CityContent.featuredImage.altText}
                        layout="fullWidth"
                        formats={["auto", "webp", "avif"]}
                      />
                    </div>
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </StyledSection>
    )
  }
}

const StyledSection = styled.section`
  .cities-wrapper {
    ${BigWrapper};
  }

  .cities-title {
    width: 100%;
    text-align: center;

    h2 {
      ${H2Grey};
    }
  }

  .cities-links {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100%;

    &-city {
      position: relative;
      width: calc(100%);
      margin: 1rem auto;
      min-height: calc(100vw);

      @media (min-width: 768px) {
        width: calc(50% - 2rem);
        min-height: calc(50vw);
        margin: 1rem;
      }

      @media (min-width: 1025px) {
        width: calc(33.33333333% - 2rem);
        min-height: calc(33.33333333vw - 2rem);
        margin: 1rem;
      }

      &-title {
        position: absolute;
        top: 50%;
        right: 0;
        left: 0;
        padding: 3.6rem 2rem;
        background-color: rgba(255, 255, 255, 0.7);
        transform: translateY(-50%);
        text-align: center;
        z-index: 10;

        h3 {
          ${H2Grey};
          margin: 0;
        }
      }

      &-image {
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
        }

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
`

export default DisplayCitiesShowHomes
