import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { B1Black, B2Black, colors } from "../../styles/helpers"

const getData = graphql`
  {
    banner: wp {
      acfOptionsSiteWideSettings {
        acfSiteWideSettings {
          bannerActive
          bannerMessage
        }
      }
    }
  }
`

const TopBanner = () => {
  const data = useStaticQuery(getData)
  if (!data.banner.acfOptionsSiteWideSettings.acfSiteWideSettings.bannerActive)
    return null

  return (
    <TopBannerStyled>
      <div
        className="message-wrap"
        dangerouslySetInnerHTML={{
          __html:
            data.banner.acfOptionsSiteWideSettings.acfSiteWideSettings
              .bannerMessage,
        }}
      />
    </TopBannerStyled>
  )
}

const TopBannerStyled = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;

  .message-wrap {
    width: 100%;
    padding: 1rem 2rem;
    background-color: rgba(112, 112, 112, 0.22);
    text-align: center;

    p {
      ${B2Black};
      margin: 0;
      padding: 0;
    }

    a {
      ${B2Black};
      margin: 0;
      padding: 0;

      &:hover {
        color: ${colors.colorPrimary};
      }
    }
  }
`

export default TopBanner
