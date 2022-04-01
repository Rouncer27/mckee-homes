import React from "react"
import styled from "styled-components"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import {
  B1Black,
  B2Grey,
  H2Black,
  H3Black,
  medWrapper,
} from "../styles/helpers"

const Team = props => {
  const { team } = props.data
  const prevTeam = props.pageContext.prev
  const nextTeam = props.pageContext.next
  const imageDisplay = getImage(
    team.acfOurTeam.image.localFile.childImageSharp.gatsbyImageData
  )
  const imageAlt = team.acfOurTeam.image.altText

  return (
    <Layout>
      <StyledSection>
        <div className="wrapper">
          <div className="image">
            <GatsbyImage image={imageDisplay} alt={imageAlt} layout="fixed" />
            <div className="image__back">
              <Link to="/building-with-mckee#meet-team-intro">
                <span>&#8594;</span> Return To Building With Mckee
              </Link>
            </div>
          </div>
          <div className="bio">
            <div className="bio__title">
              <h2>{team.title}</h2>
              <h3>
                {team.acfOurTeam.title},{" "}
                <span>{team.acfOurTeam.department}</span>
              </h3>
            </div>
            <div dangerouslySetInnerHTML={{ __html: team.acfOurTeam.bio }} />
          </div>
        </div>
        <div className="team-nav">
          <div className="team-nav__wrapper">
            <div className="team-nav__links">
              {nextTeam && (
                <Link to={`/our-team/${nextTeam}`}>
                  <span>&#8592;</span> Previous Team Member
                </Link>
              )}
              <Link to="/our-team#our-team-list">
                <span>&#8592;</span> See Entire Team
              </Link>

              {prevTeam && (
                <Link to={`/our-team/${prevTeam}`}>
                  Next Team Member <span>&#8594;</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </StyledSection>
    </Layout>
  )
}

const StyledSection = styled.section`
  background-color: rgba(165, 182, 186, 0.22);
  padding: 3.5rem 0 0;

  .wrapper {
    ${medWrapper};
  }

  .image {
    width: calc(100%);

    @media (min-width: 768px) {
      width: calc(30% - 5rem);
      margin-right: 5rem;
    }

    &__back {
      width: 100%;
      margin-top: 3rem;

      a {
        ${B2Grey};
      }
    }
  }

  .bio {
    width: calc(100%);

    @media (min-width: 768px) {
      width: calc(70%);
      padding: 0 3rem;
    }

    h2 {
      ${H2Black};
      margin-top: 0;
    }

    h3 {
      ${H3Black};
      text-transform: capitalize;

      span {
        display: block;
      }
    }

    p {
      ${B1Black};
    }
  }

  .team-nav {
    width: calc(100%);
    background-color: rgba(165, 182, 186, 0.22);

    &__wrapper {
      ${medWrapper};
    }

    &__links {
      display: flex;
      justify-content: center;
      width: calc(100%);
      padding: 3rem 0;
      text-align: center;

      a {
        ${B2Grey};
        margin: 0 2rem;
      }

      a:first-of-type {
        margin-right: 5rem;
      }

      a:last-of-type {
        margin-left: 5rem;
      }
    }
  }
`

export const query = graphql`
  query singleTeamQuery($slug: String!) {
    team: wpOurTeam(slug: { eq: $slug }) {
      title
      id
      date
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

    allTeams: allWpOurTeam {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`

export default Team
