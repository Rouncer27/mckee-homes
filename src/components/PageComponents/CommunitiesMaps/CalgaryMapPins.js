import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { colors } from "../../../styles/helpers"
import CalgaryMap from "./CalgaryMap"
import SinglePin from "./SinglePin"

const getData = graphql`
  {
    community: allWpCommunityPost {
      edges {
        node {
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
            popupDetails
            popupPinIcon {
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

const CalgaryMapPins = () => {
  const [pinActive, setPinActive] = useState(false)
  const communityData = useStaticQuery(getData)
  const community = communityData.community.edges

  const lewiston = community.find(item => item.node.slug === "lewiston")

  return (
    <DivStyled pinactive={pinActive}>
      <CalgaryMap />
      <div className="pins">
        <SinglePin
          logo={getImage(
            lewiston.node.acfCommunity.logo.localFile.childImageSharp
              .gatsbyImageData
          )}
          logoAlt={lewiston.node.acfCommunity.logo.altText}
          imgSrc={getImage(
            lewiston.node.acfCommunity.popupPinIcon.localFile.childImageSharp
              .gatsbyImageData
          )}
          alt={lewiston.node.acfCommunity.popupPinIcon.altText}
          title={lewiston.node.title}
          details={lewiston.node.acfCommunity.popupDetails}
          slug={lewiston.node.slug}
          classmodifier={`pins__lewiston`}
          setPinActive={setPinActive}
        />
      </div>
      <div className="bg-overlay" />
    </DivStyled>
  )
}

const DivStyled = styled.div`
  position: relative;
  margin-bottom: 7.5rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }

  .bg-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${colors.colorPrimary};
    transition: all 0.3s ease-out;
    opacity: ${props => (props.pinactive ? 1 : 0)};
    visibility: ${props => (props.pinactive ? "visible" : "hidden")};
    z-index: 5;

    @media (min-width: 768px) {
      display: none;
    }
  }
`

export default CalgaryMapPins
