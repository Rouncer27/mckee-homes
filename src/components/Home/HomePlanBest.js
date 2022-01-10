import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { colors, standardWrapper, B1Black, B2Black } from "../../styles/helpers"

import check from "../../images/icons/check.png"

const getData = graphql`
  {
    bestDetails: wp {
      acfOptionsSiteWideSettings {
        acfSiteWideSettings {
          bestIsBuiltLogos {
            logo {
              altText
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1000)
                }
              }
            }
            content
          }
          bestIsBuiltDetails {
            title
            points {
              point
            }
          }
        }
      }
    }
  }
`

const HomePlanBest = () => {
  const data = useStaticQuery(getData)
  console.log("HERE ", data)
  return (
    <SectionStyled>
      <div className="wrapper-details">
        <div className="wrapper-details__title">
          <h2>The best is built in with McKee Homes in Every Home</h2>
        </div>
        <div className="wrapper-details__content">
          <div className="logos">
            {data.bestDetails.acfOptionsSiteWideSettings.acfSiteWideSettings.bestIsBuiltLogos.map(
              (sec, index) => {
                const imageDisplay = getImage(
                  sec.logo.localFile.childImageSharp.gatsbyImageData
                )
                const imageAlt = sec.logo.altText
                return (
                  <div className="logo" key={index}>
                    <div className="logo__wrap">
                      <GatsbyImage
                        image={imageDisplay}
                        alt={imageAlt}
                        layout="fullWidth"
                        formats={["auto", "webp", "avif"]}
                      />
                    </div>
                    <div
                      className="logo__content"
                      dangerouslySetInnerHTML={{ __html: sec.content }}
                    />
                  </div>
                )
              }
            )}
          </div>
          <div className="checklist">
            {data.bestDetails.acfOptionsSiteWideSettings.acfSiteWideSettings.bestIsBuiltDetails.map(
              (sec, index) => {
                return (
                  <div key={index}>
                    <div>
                      <h3>{sec.title}</h3>
                    </div>
                    <ul>
                      {sec.points.map((point, index) => {
                        return (
                          <li key={index}>
                            <span className="checkmark">
                              <img src={check} alt="Logo" />
                            </span>
                            {point.point}
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                )
              }
            )}
          </div>
        </div>
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  margin-bottom: 2.5rem;

  .wrapper-details {
    ${standardWrapper};
    margin: auto;

    &__title {
      width: 100%;
      margin-bottom: 3rem;
      padding-top: 5rem;
      border-bottom: 0.25rem solid ${colors.colorTertiary};

      h2 {
        ${B1Black};
        margin: 0;
        text-transform: uppercase;
      }
    }

    &__content {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      width: 100%;

      .logos {
        width: 100%;

        @media (min-width: 768px) {
          width: calc(35% - 4rem);
          margin-right: 4rem;
        }

        .logo {
          width: 100%;
          margin-top: 2rem;

          &__wrap {
            padding: 0 5rem 1rem 0;
          }

          &__content {
            margin-top: 2.5rem;

            p {
              ${B2Black};
            }
          }
        }
      }

      .checklist {
        width: 100%;

        @media (min-width: 768px) {
          width: calc(65% - 1rem);
          margin-left: 1rem;
        }

        h3 {
          ${B1Black};
          padding-left: 5rem;
          text-transform: uppercase;
        }

        ul {
          width: 100%;
          margin-bottom: 4rem;

          li {
            ${B2Black};
            position: relative;
            margin-bottom: 0.5rem;
            padding-left: 5rem;

            .checkmark {
              position: absolute;
              top: 0.5rem;
              left: 0;
              width: 2rem;
              height: 2rem;
            }
          }
        }
      }
    }
  }
`

export default HomePlanBest
