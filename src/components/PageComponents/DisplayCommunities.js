import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { H2Grey, standardWrapper } from "../../styles/helpers"

const getData = graphql`
  {
    communities: allWpCommunityPost {
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
              uri
            }
          }
        }
      }
    }
  }
`

const DisplayCommunities = ({ data }) => {
  const communitiesData = useStaticQuery(getData)
  if (!data.communitiesFromWhatCity) return null
  const communities = communitiesData.communities.edges
  const matchedCommunity = communities.filter(comm => {
    return comm.node.cities.nodes.some(
      relatedCity => relatedCity.slug === data.communitiesFromWhatCity.slug
    )
  })
  return (
    <StyledSection className="display-communities">
      <div className="display-communities-wrapper">
        <div className="display-communities-title">
          <h2>{data.sectionTitle}</h2>
        </div>
        <div className="display-communities-logos">
          {matchedCommunity.map(({ node: community }) => {
            return (
              <div
                className="display-communities-logos-logo"
                key={community.id}
              >
                <a href={`/communities/${community.slug}`}>
                  <div className="display-communities-logos-logo-inner">
                    <GatsbyImage
                      image={
                        community.acfCommunity.logo.localFile.childImageSharp
                          .gatsbyImageData
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
    </StyledSection>
  )
}

const StyledSection = styled.section`
  .display-communities-wrapper {
    ${standardWrapper};
  }

  .display-communities-title {
    width: 100%;
    margin-bottom: 3rem;
    text-align: center;

    h2 {
      ${H2Grey};
    }
  }

  .display-communities-logos {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin-bottom: 3rem;

    &-logo {
      width: calc(50%);

      @media (min-width: 768px) {
        width: calc(33.33333333%);
      }

      @media (min-width: 1025px) {
        width: calc(25% - 2rem);
        margin: 2rem 1rem;
      }
    }
  }
`

export default DisplayCommunities
