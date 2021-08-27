import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { B2White, colors, medWrapper } from "../../styles/helpers"
import { B1White } from "../../../../019arbi/src/styles/helpers"

const getData = graphql`
  {
    team: allWpOurTeam {
      edges {
        node {
          title
          acfOurTeam {
            bio
            department
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
  if (!data.displayAllTeam) return null

  console.log("team", team)
  return (
    <SectionStyled>
      <div className="wrapper">
        {team.map((team, index) => {
          const imageDisplay = getImage(
            team.node.acfOurTeam.image.localFile.childImageSharp.gatsbyImageData
          )
          const imageAlt = team.node.acfOurTeam.image.altText
          return (
            <Team key={index}>
              <div className="image">
                <GatsbyImage
                  image={imageDisplay}
                  alt={imageAlt}
                  layout="fullWidth"
                  formats={["auto", "webp", "avif"]}
                />
              </div>
              <div className="name">
                <h2>{team.node.title}</h2>
                <h3>{team.node.acfOurTeam.department}</h3>
                <div className="read-more">
                  <Link to="/building-with-mckee/our-team">Read More</Link>
                </div>
              </div>
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
  width: calc((100% / 4) - 2rem);
  margin: 0.5rem 1rem;

  .image {
    width: 100%;
  }

  .name {
    position: relative;
    width: 100%;
    padding: 2.5rem;
    padding-bottom: 5rem;
    background-color: ${colors.colorPrimary};

    h2 {
      ${B1White};
      margin: 0;
      text-transform: uppercase;
    }

    h3 {
      ${B1White};
      margin: 0;
      text-transform: uppercase;
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
