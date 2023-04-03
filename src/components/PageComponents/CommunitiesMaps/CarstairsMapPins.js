import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import CarstairsMap from "./CarstairsMap"
import SinglePin from "./SinglePin"
import { colors } from "../../../styles/helpers"

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

const CarstairsMapPins = () => {
  const [pinActive, setPinActive] = useState(false)
  const communityData = useStaticQuery(getData)
  const community = communityData.community.edges

  const mandalay = community.find(item => item.node.slug === "mandalay-estates")

  return (
    <DivStyled pinactive={pinActive}>
      <CarstairsMap />
      <div className="pins">
        <SinglePin
          logo={getImage(
            mandalay.node.acfCommunity.logo.localFile.childImageSharp
              .gatsbyImageData
          )}
          logoAlt={mandalay.node.acfCommunity.logo.altText}
          imgSrc={getImage(
            mandalay.node.acfCommunity.popupPinIcon.localFile.childImageSharp
              .gatsbyImageData
          )}
          alt={mandalay.node.acfCommunity.popupPinIcon.altText}
          title={mandalay.node.title}
          details={mandalay.node.acfCommunity.popupDetails}
          slug={mandalay.node.slug}
          classmodifier={`pins__mandalayEstates`}
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

export default CarstairsMapPins
