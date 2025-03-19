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

const AirdrieMapPins = () => {
  const [pinActive, setPinActive] = useState(false)
  const communityData = useStaticQuery(getData)
  const community = communityData.community.edges

  const bayside = community.find(item => item.node.slug === "bayside-estates")
  const chinookgate = community.find(item => item.node.slug === "chinook-gate")
  const cooperscrossing = community.find(
    item => item.node.slug === "coopers-crossing"
  )
  // const kingsHeights = community.find(
  //   item => item.node.slug === "kings-heights"
  // )
  const lanark = community.find(item => item.node.slug === "lanark-landing")
  // const ravenswood = community.find(item => item.node.slug === "ravenswood")
  const bayview = community.find(item => item.node.slug === "bayview")
  const vantageRise = community.find(item => item.node.slug === "vantage-rise")
  const sawgrassPark = community.find(
    item => item.node.slug === "sawgrass-park"
  )
  const goldwyn = community.find(item => item.node.slug === "goldwyn")

  console.log("vantageRise", vantageRise)

  return (
    <DivStyled pinactive={pinActive}>
      <div className="embed-map">
        <iframe
          src={
            "https://www.pampam.city/p/3Go7YabjnxwRDTRecAOt/wkulham32wUahNhAzk8V?51.261515%2C-113.980584%2C16= allowfullscreen"
          }
        ></iframe>
      </div>

      {/* TODO: This was removed. <AirdrieMap /> */}
      {/* 
      TODO: This was removed.
      <div className="pins">
      
      */}
      {/* TODO: This was removed. 
        <SinglePin
          logo={getImage(
            sawgrassPark.node.acfCommunity.logo.localFile.childImageSharp
              .gatsbyImageData
          )}
          logoAlt={sawgrassPark.node.acfCommunity.logo.altText}
          imgSrc={getImage(
            sawgrassPark.node.acfCommunity.popupPinIcon.localFile
              .childImageSharp.gatsbyImageData
          )}
          alt={sawgrassPark.node.acfCommunity.popupPinIcon.altText}
          title={sawgrassPark.node.title}
          details={sawgrassPark.node.acfCommunity.popupDetails}
          slug={sawgrassPark.node.slug}
          classmodifier={`pins__sawgrassPark`}
          setPinActive={setPinActive}
        />

        <SinglePin
          logo={getImage(
            goldwyn.node.acfCommunity.logo.localFile.childImageSharp
              .gatsbyImageData
          )}
          logoAlt={goldwyn.node.acfCommunity.logo.altText}
          imgSrc={getImage(
            goldwyn.node.acfCommunity.popupPinIcon.localFile.childImageSharp
              .gatsbyImageData
          )}
          alt={goldwyn.node.acfCommunity.popupPinIcon.altText}
          title={goldwyn.node.title}
          details={goldwyn.node.acfCommunity.popupDetails}
          slug={goldwyn.node.slug}
          classmodifier={`pins__goldwyn`}
          setPinActive={setPinActive}
        />

        <SinglePin
          logo={getImage(
            bayside.node.acfCommunity.logo.localFile.childImageSharp
              .gatsbyImageData
          )}
          logoAlt={bayside.node.acfCommunity.logo.altText}
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
          logo={getImage(
            chinookgate.node.acfCommunity.logo.localFile.childImageSharp
              .gatsbyImageData
          )}
          logoAlt={chinookgate.node.acfCommunity.logo.altText}
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
          logo={getImage(
            cooperscrossing.node.acfCommunity.logo.localFile.childImageSharp
              .gatsbyImageData
          )}
          logoAlt={cooperscrossing.node.acfCommunity.logo.altText}
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
        TODO: END
        */}

      {/* <SinglePin
          logo={getImage(
            kingsHeights.node.acfCommunity.logo.localFile.childImageSharp
              .gatsbyImageData
          )}
          logoAlt={kingsHeights.node.acfCommunity.logo.altText}
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
        /> */}
      {/* TODO: This was removed. 
        <SinglePin
          logo={getImage(
            lanark.node.acfCommunity.logo.localFile.childImageSharp
              .gatsbyImageData
          )}
          logoAlt={lanark.node.acfCommunity.logo.altText}
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
          logo={getImage(
            bayview.node.acfCommunity.logo.localFile.childImageSharp
              .gatsbyImageData
          )}
          logoAlt={bayview.node.acfCommunity.logo.altText}
          imgSrc={getImage(
            bayview.node.acfCommunity.popupPinIcon.localFile.childImageSharp
              .gatsbyImageData
          )}
          alt={bayview.node.acfCommunity.popupPinIcon.altText}
          title={bayview.node.title}
          details={bayview.node.acfCommunity.popupDetails}
          slug={bayview.node.slug}
          classmodifier={`pins__bayview`}
          setPinActive={setPinActive}
        /> TODO: END */}

      {/* <SinglePin
          logo={getImage(
            ravenswood.node.acfCommunity.logo.localFile.childImageSharp
              .gatsbyImageData
          )}
          logoAlt={ravenswood.node.acfCommunity.logo.altText}
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
        /> */}

      {/* TODO: This was removed

        
        <SinglePin
          logo={getImage(
            vantageRise.node.acfCommunity.logo.localFile.childImageSharp
              .gatsbyImageData
          )}
          logoAlt={vantageRise.node.acfCommunity.logo.altText}
          imgSrc={getImage(
            vantageRise.node.acfCommunity.popupPinIcon.localFile.childImageSharp
              .gatsbyImageData
          )}
          alt={vantageRise.node.acfCommunity.popupPinIcon.altText}
          title={vantageRise.node.title}
          details={vantageRise.node.acfCommunity.popupDetails}
          slug={vantageRise.node.slug}
          classmodifier={`pins__vantageRise`}
          setPinActive={setPinActive}
        />
      </div>
      <div className="bg-overlay" /> TODO: End */}
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

  .embed-map {
    width: 100%;

    iframe {
      width: 100%;
      height: 50rem;
    }
  }
`

export default AirdrieMapPins
