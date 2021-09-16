import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { medWrapper } from "../../styles/helpers"

const Logos = ({ data }) => {
  return (
    <SectionStyled>
      <div className="wrapper">
        {data.logos.map((logo, index) => {
          const imageDisplay = getImage(
            logo.logo.localFile.childImageSharp.gatsbyImageData
          )
          const imageAlt = logo.logo.altText

          if (logo.url) {
            return (
              <LogoLink to={`/${logo.url}`} key={index}>
                <GatsbyImage
                  image={imageDisplay}
                  alt={imageAlt}
                  layout="fullWidth"
                  formats={["auto", "webp", "avif"]}
                />
              </LogoLink>
            )
          } else {
            ;<Logo to={`/${logo.url}`} key={index}>
              <GatsbyImage
                image={imageDisplay}
                alt={imageAlt}
                layout="fullWidth"
                formats={["auto", "webp", "avif"]}
              />
            </Logo>
          }
        })}
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.div`
  margin: 2rem auto;

  .wrapper {
    ${medWrapper};
    justify-content: flex-start;
    align-items: center;
  }
`

const LogoLink = styled(Link)`
  width: calc(100% / 2);
  padding: 1rem;

  @media (min-width: 768px) {
    width: calc(100% / 5);
  }
`

const Logo = styled.div`
  width: calc(100% / 2);
  padding: 1rem;

  @media (min-width: 768px) {
    width: calc(100% / 5);
  }
`

export default Logos
