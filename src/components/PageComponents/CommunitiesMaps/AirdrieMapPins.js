import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import AirdrieMap from "./AirdrieMap"
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

const AirdrieMapPins = () => {
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
    <DivStyled>
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
        />
      </div>
    </DivStyled>
  )
}

const DivStyled = styled.div`
  position: relative;
`

export default AirdrieMapPins
