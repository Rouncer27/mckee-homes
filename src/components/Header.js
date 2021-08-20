import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

import TopNav from "./Navigation/TopNav/TopNav"
import Login from "./Navigation/Login/Login"
import MainLogo from "./Logos/MainLogo"
import Vertical from "./SocialMedia/Vertical"
import TopBanner from "./Header/TopBanner"

const getData = graphql`
  {
    banner: wp {
      acfOptionsSiteWideSettings {
        acfSiteWideSettings {
          bannerActive
        }
      }
    }
  }
`

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(getData)
  const bannerActive =
    data.banner.acfOptionsSiteWideSettings.acfSiteWideSettings.bannerActive
  return (
    <HeaderStyled banneractive={bannerActive}>
      <div className="headerLogo">
        <h1>
          <Link to="/">
            <MainLogo />
            <span>{siteTitle}</span>
          </Link>
        </h1>
      </div>
      <Login />
      <TopNav />
      <Vertical />
      <TopBanner />
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  position: relative;
  padding-top: ${props => (props.banneractive ? "4rem" : "0rem")};

  .headerLogo {
    align-self: center;
    margin: auto;
    width: 100%;
    margin: 0 auto;
    padding: 2rem 0;
    text-align: center;

    @media (min-width: 768px) {
      width: calc(100%);
    }

    @media (min-width: 1025px) {
      width: calc(100%);
    }

    a {
      display: block;
      margin: auto;

      &:focus {
        outline: 0.4rem solid #154290;
        transition: outline-width 0.35s ease-in-out;
      }
    }

    h1 {
      width: 100%;
      max-width: 25rem;
      margin: auto;
      padding: 1rem;

      span {
        position: absolute;
        left: -999%;
      }

      @media (min-width: 768px) {
        width: calc(100%);
      }

      @media (min-width: 1025px) {
        width: calc(100% - 10rem);
      }
    }
  }
`

export default Header