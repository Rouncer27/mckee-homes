import React, { useEffect } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  B1White,
  Btn1Grey,
  colors,
  medWrapper,
  H2White,
} from "../../styles/helpers"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const getData = graphql`
  {
    team: allWpOurTeam {
      edges {
        node {
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
      }
    }
  }
`

const MeetTeam = ({ data }) => {
  const teamData = useStaticQuery(getData)
  const team = teamData.team.edges.sort((a, b) => 0.5 - Math.random())

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#meet-team-intro",
          markers: false,
          start: "top 45%",
          toggleActions: "play none none none",
        },
      })
      .fromTo(
        "#meet-team-intro .title",
        {
          autoAlpha: 0,
          y: 150,
          duration: 1,
        },
        {
          autoAlpha: 1,
          y: 0,
        }
      )
      .fromTo(
        "#meet-team-intro .images",
        {
          autoAlpha: 0,
          y: 150,
          duration: 1,
        },
        {
          autoAlpha: 1,
          y: 0,
        }
      )
      .fromTo(
        "#meet-team-intro .button",
        {
          autoAlpha: 0,
          x: -150,
          duration: 1,
        },
        {
          autoAlpha: 1,
          x: 0,
        }
      )
      .fromTo(
        "#meet-team-intro .team-item",
        {
          autoAlpha: 0,
          y: 150,
        },
        {
          autoAlpha: 1,
          y: 0,
          stagger: {
            each: 0.3,
          },
        }
      )
  }, [])

  if (!data.displayMeetTeam) return null

  return (
    <SectionStyled id="meet-team-intro">
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
            if (index > 3) return
            const imageDisplay = getImage(
              team.node.acfOurTeam.image.localFile.childImageSharp
                .gatsbyImageData
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
                  </div>
                </Link>
              </Team>
            )
          })}
        </div>
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  background: linear-gradient(
    to bottom,
    ${colors.colorPrimary} 0%,
    ${colors.colorPrimary} 80%,
    #fff 80%,
    #fff 0%
  );

  @media (min-width: 768px) {
    padding: 5rem 0;
  }

  .wrapper {
    ${medWrapper};
  }

  .inner-content {
    width: 100%;
    padding: 0 1rem;

    @media (min-width: 768px) {
      padding: 0 7.5rem;
    }
  }

  .title {
    width: 100%;
    margin-top: 5rem;

    @media (min-width: 768px) {
      margin-top: 0;
    }

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
  width: calc((100% / 2) - 2rem);
  margin: 1rem;

  @media (min-width: 768px) {
    width: calc((100% / 4) - 2rem);
    margin: auto 1rem;
  }
`

export default MeetTeam
