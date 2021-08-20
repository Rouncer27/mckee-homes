import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const getData = graphql`
  {
    logo: wp {
      acfOptionsSiteWideSettings {
        acfSiteWideSettings {
          mainLogo {
            altText
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
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
  const logoFluid =
    data.logo.acfOptionsSiteWideSettings.acfSiteWideSettings.mainLogo.localFile
      .childImageSharp.fluid
  const logoAlt =
    data.logo.acfOptionsSiteWideSettings.acfSiteWideSettings.mainLogo.altText
  return (
    <MainLogoStyled>
      <Img fluid={logoFluid} alt={logoAlt} />
    </MainLogoStyled>
  )
}

const MainLogoStyled = styled.div`
  width: 100%;
  height: 100%;
`

export default MainLogo
