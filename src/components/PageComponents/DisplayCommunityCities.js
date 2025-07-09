import React from "react"
import styled from "styled-components"
import { graphql, Link, useStaticQuery } from "gatsby"
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
            cityPageLink {
              ... on WpPage {
                uri
                slug
              }
            }
          }
        }
      }
    }

    community: allWpCommunityPost {
      edges {
        node {
          id
          title
          slug
          acfCommunity {
            logo {
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

          cities {
            nodes {
              slug
              id
            }
          }
        }
      }
    }
  }
`

const DisplayCommunityCities = () => {
  const cityData = useStaticQuery(getData)
  const cities = cityData.city.edges
  const communities = cityData.community.edges

  const citiesWithCommunities = cities.map(city => {
    const cityId = city.node.id
    // Filter communities that belong to this city
    const matchedCommunities = communities.filter(comm => {
      return comm.node.cities.nodes.some(
        relatedCity => relatedCity.id === cityId
      )
    })

    return {
      ...city.node, // flatten the city node
      communities: matchedCommunities.map(comm => comm.node), // optionally flatten the community nodes
    }
  })

  console.log("citiesWithCommunities", citiesWithCommunities)

  return (
    <StyledSection className="cities">
      <div className="cities-wrapper">
        {citiesWithCommunities.map((city, index) => {
          return (
            <div className="city" key={index}>
              <div className="city-wrapper">
                <div className="city-main">
                  <Link to={`/${city.slug}/`}>
                    <div className="city-main-name">
                      <p>{city.name}</p>
                    </div>
                    <div className="city-main-image">
                      <div className="city-main-image-inner">
                        <GatsbyImage
                          image={
                            city.CityContent.featuredImage.localFile
                              .childImageSharp.gatsbyImageData
                          }
                          alt={city.CityContent.featuredImage.altText}
                          layout="fullWidth"
                          formats={["auto", "webp", "avif"]}
                        />
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="city-communities">
                  {city.communities.map(community => {
                    return (
                      <div
                        className="city-communities-community"
                        key={community.id}
                      >
                        <a href={`/communities/${community.slug}`}>
                          <div className="city-communities-community-inner">
                            <GatsbyImage
                              image={
                                community.acfCommunity.logo.localFile
                                  .childImageSharp.gatsbyImageData
                              }
                              alt={community.acfCommunity.logo.altText}
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
            </div>
          )
        })}
      </div>
    </StyledSection>
  )
}

export default DisplayCommunityCities

const StyledSection = styled.section`
  .cities-wrapper {
    ${BigWrapper};
  }

  .city {
    position: relative;
    width: 100%;
    margin-bottom: 2rem;
    padding: 1rem 0;
    background-color: #dae2e3;

    &-wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      width: 100%;
    }

    &-main {
      position: relative;
      width: calc(100%);
      min-height: 35rem;

      @media (min-width: 768px) {
        width: calc(25% - 2rem);
        margin: 1rem;
      }

      &-name {
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        padding: 3.6rem 2rem;
        transform: translateY(-50%);
        background-color: rgba(255, 255, 255, 0.5);
        z-index: 10;
        text-align: center;

        p {
          ${H2Grey};
          margin: 0;
          text-transform: uppercase;
        }
      }
      &-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 5;

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

    &-communities {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: flex-start;
      width: calc(100%);

      @media (min-width: 768px) {
        width: calc(75% - 2rem);
        margin: 1rem;
      }

      &-community {
        display: flex;
        justify-content: center;
        align-items: center;
        width: calc((100% / 2) - 2rem);
        margin: 1rem;
        padding: 2rem;
        background-color: rgba(255, 255, 255, 1);

        @media (min-width: 768px) {
          width: calc((100% / 3) - 2rem);
        }
        @media (min-width: 1025px) {
          width: calc((100% / 4) - 2rem);
        }

        &-inner {
          width: 100%;
        }
      }
    }
  }
`
