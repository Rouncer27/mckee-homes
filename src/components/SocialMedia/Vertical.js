import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import { colors } from "../../styles/helpers"

import Linkedin from "../Icons/Linkedin"
import Facebook from "../Icons/Facebook"
import Instagram from "../Icons/Instagram"
import Youtube from "../Icons/Youtube"

const getData = graphql`
  {
    socialIcons: wp {
      acfOptionsSiteWideSettings {
        acfSiteWideSettings {
          linkedinUrl
          instagramUrl
          youtubeUrl
          facebookUrl
        }
      }
    }
  }
`

const Vertical = () => {
  const data = useStaticQuery(getData)
  return (
    <SocialMediaStyled>
      <ul className="socialIcons">
        <StyledIcon>
          <a
            title="Follow us on Facebook - Link will open in new window"
            target="_blank"
            rel="noreferrer"
            href={
              data.socialIcons.acfOptionsSiteWideSettings.acfSiteWideSettings
                .facebookUrl
            }
          >
            <i>
              <Facebook />
              <span className="visuallyhidden">Facebook</span>
            </i>
          </a>
        </StyledIcon>

        <StyledIcon>
          <a
            title="Follow us on Instagram - Link will open in new window"
            target="_blank"
            rel="noreferrer"
            href={
              data.socialIcons.acfOptionsSiteWideSettings.acfSiteWideSettings
                .instagramUrl
            }
          >
            <i>
              <Instagram />
              <span className="visuallyhidden">Instagram</span>
            </i>
          </a>
        </StyledIcon>

        <StyledIcon>
          <a
            target="_blank"
            rel="noreferrer"
            title="Follow us on Linkedin - Link will open in new window"
            href={
              data.socialIcons.acfOptionsSiteWideSettings.acfSiteWideSettings
                .linkedinUrl
            }
          >
            <i>
              <Linkedin />
              <span className="visuallyhidden">Linkedin</span>
            </i>
          </a>
        </StyledIcon>

        <StyledIcon>
          <a
            title="Follow us on YouTube - Link will open in new window"
            target="_blank"
            rel="noreferrer"
            href={
              data.socialIcons.acfOptionsSiteWideSettings.acfSiteWideSettings
                .youtubeUrl
            }
          >
            <i>
              <Youtube />
              <span className="visuallyhidden">YouTube</span>
            </i>
          </a>
        </StyledIcon>
      </ul>
    </SocialMediaStyled>
  )
}

const SocialMediaStyled = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 5rem;
  background-color: ${colors.colorTertiary};

  @media (min-width: 768px) {
    display: block;
  }

  ul {
    display: flex;
    flex-direction: column;
    padding: 2rem 1rem 1rem;
  }
`

const StyledIcon = styled.li`
  display: inline-block;
  margin-top: 1rem;
  margin-bottom: 1rem;

  a {
    display: block;
    position: relative;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;

    @media (min-width: 768px) {
      width: 2rem;
      height: 2rem;
    }
    @media (min-width: 1025px) {
      width: 2rem;
      height: 2rem;
    }

    &:focus {
      outline: 0.4rem solid #003b49;
      transition: outline-width 0.35s ease-in-out;
    }

    .visuallyhidden {
      border: 0;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    }

    svg {
      display: block;
      width: 4rem;
      height: 4rem;
      margin: auto;
      transition: all 0.3s ease-out;
      fill: ${colors.white};

      @media (min-width: 768px) {
        width: 2rem;
        height: 2rem;
      }
      @media (min-width: 1025px) {
        width: 2rem;
        height: 2rem;
      }

      &:hover {
        fill: ${colors.colorPrimary};
      }
    }
  }
`

export default Vertical
