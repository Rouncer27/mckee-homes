import React, { useEffect } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { B2White, colors, medWrapper, B1White } from "../../styles/helpers"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const getData = graphql`
  {
    team: allWpOurTeam(sort: { fields: title }) {
      edges {
        node {
          title
          slug
          acfOurTeam {
            bio
            department
            title
            image {
              altText
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

const DisplayTeam = ({ data }) => {
  const teamData = useStaticQuery(getData)
  const team = teamData.team.edges

  const principals = team.filter(
    item => item.node.acfOurTeam.department === "principals"
  )
  const admins = team.filter(
    item => item.node.acfOurTeam.department === "admin"
  )
  const sales = team.filter(item => item.node.acfOurTeam.department === "sales")
  const designs = team.filter(
    item => item.node.acfOurTeam.department === "design"
  )
  const constructions = team.filter(
    item => item.node.acfOurTeam.department === "construction"
  )
  const warranty = team.filter(
    item => item.node.acfOurTeam.department === "warranty"
  )

  const teamSorted = [
    ...principals,
    ...admins,
    ...sales,
    ...designs,
    ...constructions,
    ...warranty,
  ]

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#our-team-list",
          markers: false,
          start: "top 45%",
          toggleActions: "play none none none",
        },
      })
      .fromTo(
        "#our-team-list .team-item",
        {
          autoAlpha: 0,
          y: 150,
        },
        {
          autoAlpha: 1,
          y: 0,
          ease: "power1.inOut",
          stagger: {
            amount: 2.75,
          },
        }
      )
  }, [])

  if (!data.displayAllTeam) return null
  return (
    <SectionStyled id="our-team-list">
      <div className="wrapper">
        {teamSorted.map((team, index) => {
          const imageDisplay = getImage(
            team.node.acfOurTeam.image.localFile.childImageSharp.gatsbyImageData
          )
          const imageAlt = team.node.acfOurTeam.image.altText
          return (
            <Team className="team-item" key={index}>
              <Link to={`/our-team/${team.node.slug}`}>
                <div className="image">
                  <GatsbyImage
                    image={imageDisplay}
                    alt={imageAlt}
                    layout="fullWidth"
                    formats={["auto", "webp", "avif"]}
                  />
                  <div className="image__read-more">
                    <p>Read More</p>
                  </div>
                </div>
                <div className="name">
                  <h2>
                    <span>{team.node.title}</span>{" "}
                    <span className="job-title">
                      {team.node.acfOurTeam.title}
                    </span>
                  </h2>

                  <h3>
                    {team.node.acfOurTeam.department === "principals"
                      ? "owner"
                      : `${team.node.acfOurTeam.department} Team`}
                  </h3>
                </div>
              </Link>
            </Team>
          )
        })}
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  .wrapper {
    ${medWrapper};
    align-items: stretch;
    justify-content: flex-start;
  }
`

const Team = styled.div`
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  width: calc((100% / 2) - 1rem);
  margin: 0.5rem;
  background-color: ${colors.colorPrimary};

  &:hover {
    background-color: ${colors.colorSecondary};

    .image .image__read-more p {
      opacity: 1;
    }
  }

  @media (min-width: 768px) {
    width: calc((100% / 4) - 2rem);
    margin: 0.5rem 1rem;
  }

  .image {
    position: relative;
    width: 100%;

    &__read-more {
      position: absolute;
      right: 1rem;
      bottom: 1rem;

      p {
        ${B2White};
        margin: 0;
        transition: all 0.3s ease-out;
        text-transform: uppercase;
        opacity: 0.4;
      }
    }
  }

  .name {
    position: relative;
    width: 100%;
    padding: 2.5rem;
    transition: all 0.3s ease-out;

    h2 {
      ${B1White};
      margin: 0;
      text-transform: uppercase;

      span {
        display: block;
      }

      span.job-title {
        ${B2White};
        text-transform: lowercase;
        text-transform: capitalize;
      }
    }

    h3 {
      ${B2White};
      margin: 0;
      text-transform: capitalize;
    }

    .read-more {
      position: absolute;
      bottom: 1rem;
      right: 2rem;

      a {
        ${B2White};
        text-transform: uppercase;

        &:hover {
          color: ${colors.colorAccent};
        }
      }
    }
  }
`

export default DisplayTeam
