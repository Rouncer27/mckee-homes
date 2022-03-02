import { Link } from "gatsby"
import React, { useEffect } from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { medWrapper } from "../../styles/helpers"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const Logos = ({ data }) => {
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#logos-section-trigger",
          markers: false,
          start: "top 45%",
          toggleActions: "play none none none",
        },
      })
      .add("start")
      .fromTo(
        "#logos-section-trigger .logo-item",
        {
          autoAlpha: 0,
          y: 75,
        },
        {
          y: 0,
          autoAlpha: 1,
          stagger: {
            each: 0.15,
          },
        }
      )
  }, [])

  return (
    <SectionStyled id="logos-section-trigger">
      <div className="wrapper">
        {data.logos.map((logo, index) => {
          const imageDisplay = getImage(
            logo.logo.localFile.childImageSharp.gatsbyImageData
          )
          const imageAlt = logo.logo.altText

          if (logo.url) {
            return (
              <Logo className="logo-item" key={index}>
                <Link to={`/${logo.url}`}>
                  <GatsbyImage
                    image={imageDisplay}
                    alt={imageAlt}
                    layout="fullWidth"
                    formats={["auto", "webp", "avif"]}
                  />
                </Link>
              </Logo>
            )
          } else {
            return (
              <Logo className="logo-item" key={index}>
                <GatsbyImage
                  image={imageDisplay}
                  alt={imageAlt}
                  layout="fullWidth"
                  formats={["auto", "webp", "avif"]}
                />
              </Logo>
            )
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

const Logo = styled.div`
  width: calc(100% / 2);
  padding: 1rem;

  @media (min-width: 768px) {
    width: calc(100% / 5);
  }
`

export default Logos
