import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import styled from "styled-components"

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
  const communityData = useStaticQuery(getData)
  const community = communityData.community.edges

  const vista = community.find(item => item.node.slug === "vista-crossing")

  return (
    <DivStyled>
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
        />
      </div>
    </DivStyled>
  )
}

const DivStyled = styled.div`
  position: relative;
`

export default CrossfieldMapPins
