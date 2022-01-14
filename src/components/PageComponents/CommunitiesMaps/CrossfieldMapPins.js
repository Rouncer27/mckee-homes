import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { colors } from "../../../styles/helpers"
import CrossfieldMap from "./CrossfieldMap"
import SinglePin from "./SinglePin"

const getData = graphql`
  {
    community: allWpCommunityPost {
      edges {
        node {
          title
          slug
          acfCommunity {
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

const CrossfieldMapPins = () => {
  const [pinActive, setPinActive] = useState(false)
  const communityData = useStaticQuery(getData)
  const community = communityData.community.edges

  const vista = community.find(item => item.node.slug === "vista-crossing")

  return (
    <DivStyled pinactive={pinActive}>
      <CrossfieldMap />
      <div className="pins">
        <SinglePin
          imgSrc={getImage(
            vista.node.acfCommunity.popupPinIcon.localFile.childImageSharp
              .gatsbyImageData
          )}
          alt={vista.node.acfCommunity.popupPinIcon.altText}
          title={vista.node.title}
          details={vista.node.acfCommunity.popupDetails}
          slug={vista.node.slug}
          classmodifier={`pins__vistaCrossing`}
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

export default CrossfieldMapPins
