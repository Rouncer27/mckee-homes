import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import AirdrieMap from "./AirdrieMap"
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

const AirdrieMapPins = () => {
  const [pinActive, setPinActive] = useState(false)
  const communityData = useStaticQuery(getData)
  const community = communityData.community.edges

  const bayside = community.find(item => item.node.slug === "bayside-estates")
  const chinookgate = community.find(item => item.node.slug === "chinook-gate")
  const cooperscrossing = community.find(
    item => item.node.slug === "coopers-crossing"
  )
  const kingsHeights = community.find(
    item => item.node.slug === "kings-heights"
  )
  const lanark = community.find(item => item.node.slug === "lanark-landing")
  const ravenswood = community.find(item => item.node.slug === "ravenswood")

  return (
    <DivStyled pinactive={pinActive}>
      <AirdrieMap />
      <div className="pins">
        <SinglePin
          imgSrc={getImage(
            bayside.node.acfCommunity.popupPinIcon.localFile.childImageSharp
              .gatsbyImageData
          )}
          alt={bayside.node.acfCommunity.popupPinIcon.altText}
          title={bayside.node.title}
          details={bayside.node.acfCommunity.popupDetails}
          slug={bayside.node.slug}
          classmodifier={`pins__baysideEstates`}
          setPinActive={setPinActive}
        />

        <SinglePin
          imgSrc={getImage(
            chinookgate.node.acfCommunity.popupPinIcon.localFile.childImageSharp
              .gatsbyImageData
          )}
          alt={chinookgate.node.acfCommunity.popupPinIcon.altText}
          title={chinookgate.node.title}
          details={chinookgate.node.acfCommunity.popupDetails}
          slug={chinookgate.node.slug}
          classmodifier={`pins__chinookgate`}
          setPinActive={setPinActive}
        />

        <SinglePin
          imgSrc={getImage(
            cooperscrossing.node.acfCommunity.popupPinIcon.localFile
              .childImageSharp.gatsbyImageData
          )}
          alt={cooperscrossing.node.acfCommunity.popupPinIcon.altText}
          title={cooperscrossing.node.title}
          details={cooperscrossing.node.acfCommunity.popupDetails}
          slug={cooperscrossing.node.slug}
          classmodifier={`pins__cooperscrossing`}
          setPinActive={setPinActive}
        />

        <SinglePin
          imgSrc={getImage(
            kingsHeights.node.acfCommunity.popupPinIcon.localFile
              .childImageSharp.gatsbyImageData
          )}
          alt={kingsHeights.node.acfCommunity.popupPinIcon.altText}
          title={kingsHeights.node.title}
          details={kingsHeights.node.acfCommunity.popupDetails}
          slug={kingsHeights.node.slug}
          classmodifier={`pins__kingsHeights`}
          setPinActive={setPinActive}
        />

        <SinglePin
          imgSrc={getImage(
            lanark.node.acfCommunity.popupPinIcon.localFile.childImageSharp
              .gatsbyImageData
          )}
          alt={lanark.node.acfCommunity.popupPinIcon.altText}
          title={lanark.node.title}
          details={lanark.node.acfCommunity.popupDetails}
          slug={lanark.node.slug}
          classmodifier={`pins__lanarklanding`}
          setPinActive={setPinActive}
        />

        <SinglePin
          imgSrc={getImage(
            ravenswood.node.acfCommunity.popupPinIcon.localFile.childImageSharp
              .gatsbyImageData
          )}
          alt={ravenswood.node.acfCommunity.popupPinIcon.altText}
          title={ravenswood.node.title}
          details={ravenswood.node.acfCommunity.popupDetails}
          slug={ravenswood.node.slug}
          classmodifier={`pins__ravenswood`}
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

export default AirdrieMapPins
