import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const getData = graphql`
  {
    logo: wp {
      acfOptionsSiteWideSettings {
        acfSiteWideSettings {
          mainLogo {
            altText
            sourceUrl
            localFile {
              childImageSharp {
                gatsbyImageData(width: 1000)
              }
            }
          }
        }
      }
    }
  }
`

const MainLogo = () => {
  const data = useStaticQuery(getData)
  const image = getImage(
    data.logo.acfOptionsSiteWideSettings.acfSiteWideSettings.mainLogo.localFile
      .childImageSharp.gatsbyImageData
  )

  return (
    <MainLogoStyled>
      <img
        src={
          data.logo.acfOptionsSiteWideSettings.acfSiteWideSettings.mainLogo
            .sourceUrl
        }
        alt={
          data.logo.acfOptionsSiteWideSettings.acfSiteWideSettings.mainLogo
            .altText
        }
      />
    </MainLogoStyled>
  )
}

const MainLogoStyled = styled.div`
  width: 100%;
  height: 100%;
`

export default MainLogo
