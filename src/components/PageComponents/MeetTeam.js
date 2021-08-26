import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { B1White, Btn1Grey, colors, medWrapper } from "../../styles/helpers"
import { H2White } from "../../../../019arbi/src/styles/helpers"

const getData = graphql`
  {
    team: allWpOurTeam {
      edges {
        node {
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

const MeetTeam = ({ data }) => {
  const teamData = useStaticQuery(getData)
  const team = teamData.team.edges
  if (!data.displayMeetTeam) return null
  return (
    <SectionStyled>
      <div className="wrapper">
        <div className="inner-content">
          <div className="title">
            <h2>{data.title}</h2>
          </div>
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
          <div className="button">
            <Link to={`/${data.buttonSlug}`}>{data.buttonText}</Link>
          </div>
        </div>
        <div className="team">
          {team.map((team, index) => {
            const imageDisplay = getImage(
              team.node.acfOurTeam.image.localFile.childImageSharp
                .gatsbyImageData
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
              </Team>
            )
          })}
        </div>
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  padding: 5rem 0;
  background: linear-gradient(
    to bottom,
    ${colors.colorPrimary} 0%,
    ${colors.colorPrimary} 80%,
    #fff 80%,
    #fff 0%
  );

  .wrapper {
    ${medWrapper};
  }

  .inner-content {
    width: 100%;
    padding: 0 7.5rem;
  }

  .title {
    width: 100%;
    h2 {
      ${H2White};
      font-weight: normal;
    }
  }

  .content {
    width: 100%;
    p {
      ${B1White};
    }
  }

  .button {
    width: 100%;
    a {
      ${Btn1Grey};

      &:hover {
        border-color: ${colors.colorSecondary};
        background-color: ${colors.colorSecondary};
      }
    }
  }

  .team {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 5rem;
  }
`

const Team = styled.div`
  width: calc((100% / 4) - 2rem);
  margin: auto 1rem;
`

export default MeetTeam
