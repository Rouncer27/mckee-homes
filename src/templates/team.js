import React from "react"
import styled from "styled-components"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import { B1Black, Btn1Navy, H2Black, medWrapper } from "../styles/helpers"

const Team = props => {
  const { team } = props.data
  // const prevTeam = props.pageContext.prev
  // const nextTeam = props.pageContext.next

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
          </div>
          <div className="bio">
            <div className="bio__title">
              <h2>
                {team.title}, {team.acfOurTeam.department}
              </h2>
            </div>
            <div dangerouslySetInnerHTML={{ __html: team.acfOurTeam.bio }} />
            <div className="bio__back">
              <Link to="/our-team#our-team-list">Back To Team</Link>
            </div>
          </div>
        </div>
      </StyledSection>
    </Layout>
  )
}

const StyledSection = styled.section`
  background-color: rgba(165, 182, 186, 0.22);
  padding: 3.5rem 0;

  .wrapper {
    ${medWrapper};
  }

  .image {
    width: calc(30% - 5rem);
    margin-right: 5rem;
  }

  .bio {
    width: calc(70%);
    padding: 0 3rem;

    h2 {
      ${H2Black};
      margin-top: 0;
    }

    p {
      ${B1Black};
    }

    &__back {
      width: 100%;

      a {
        ${Btn1Navy};
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
