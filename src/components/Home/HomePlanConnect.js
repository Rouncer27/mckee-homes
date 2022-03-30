import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  Btn1Grey,
  Btn1Navy,
  colors,
  standardWrapper,
  B1Black,
} from "../../styles/helpers"

const HomePlanConnect = ({
  salesOne,
  salesTwo,
  showHomeHours,
  googleMapLink,
}) => {
  return (
    <SectionStyled>
      <div className="connect-wrapper">
        <div className="connect-wrapper__inner">
          <div className="connect-wrapper__titles">
            <p>Connect With Us</p>
          </div>
          <div className="connect-wrapper__content">
            {salesOne && (
              <div className="connect-wrapper__content--sales">
                <div className="image">
                  <GatsbyImage
                    image={getImage(
                      salesOne.acfSalesTeam.image.localFile.childImageSharp
                        .gatsbyImageData
                    )}
                    alt={salesOne.acfSalesTeam.image.altText}
                    layout="fullWidth"
                    formats={["auto", "webp", "avif"]}
                  />
                </div>

                <div className="contact">
                  <p className="sales-name">{salesOne.title}</p>
                  <p>
                    <a href={`mailto:${salesOne.acfSalesTeam.email}`}>
                      {salesOne.acfSalesTeam.email}
                    </a>
                  </p>
                  <p>
                    T:{" "}
                    <a href={`tel:+1${salesOne.acfSalesTeam.phone}`}>
                      {salesOne.acfSalesTeam.phone}
                    </a>
                  </p>
                  <p>
                    C:{" "}
                    <a href={`tel:+1${salesOne.acfSalesTeam.cell}`}>
                      {salesOne.acfSalesTeam.cell}
                    </a>
                  </p>

                  <div className="sales-btn">
                    <a href={`mailto:${salesOne.acfSalesTeam.email}`}>
                      Email Sales Person
                    </a>
                  </div>
                </div>
              </div>
            )}
            {salesTwo && (
              <div className="connect-wrapper__content--sales">
                <div className="image">
                  <GatsbyImage
                    image={getImage(
                      salesTwo.acfSalesTeam.image.localFile.childImageSharp
                        .gatsbyImageData
                    )}
                    alt={salesTwo.acfSalesTeam.image.altText}
                    layout="fullWidth"
                    formats={["auto", "webp", "avif"]}
                  />
                </div>

                <div className="contact">
                  <p className="sales-name">{salesTwo.title}</p>
                  <p>
                    <a href={`mailto:${salesTwo.acfSalesTeam.email}`}>
                      {salesTwo.acfSalesTeam.email}
                    </a>
                  </p>
                  <p>
                    T:{" "}
                    <a href={`tel:+1${salesTwo.acfSalesTeam.phone}`}>
                      {salesTwo.acfSalesTeam.phone}
                    </a>
                  </p>
                  <p>
                    C:{" "}
                    <a href={`tel:+1${salesTwo.acfSalesTeam.cell}`}>
                      {salesTwo.acfSalesTeam.cell}
                    </a>
                  </p>

                  <div className="sales-btn">
                    <a href={`mailto:${salesTwo.acfSalesTeam.email}`}>
                      Email Sales Person
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="connect-wrapper__content">
            <div className="connect-wrapper__titles">
              <p>Show Home Hours</p>
            </div>
            <div className="connect-wrapper__content--hours">
              <div
                dangerouslySetInnerHTML={{
                  __html: showHomeHours,
                }}
              />
              <div className="directions-btn">
                <a target="_blank" rel="noreferrer" href={`${googleMapLink}`}>
                  Directions To Show Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  .connect-wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    background-color: ${colors.white};
    padding-bottom: 5rem;

    &__inner {
      ${standardWrapper};
    }

    &__titles {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      width: 100%;
      margin-top: 5rem;
      padding-bottom: 0;
      border-bottom: 0.25rem solid ${colors.colorTertiary};

      @media (min-width: 768px) {
        margin-bottom: 3rem;
      }

      p {
        ${B1Black};
        width: 100%;
        margin: 0;
      }
    }

    &__content {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      width: 100%;

      &--sales {
        position: relative;
        flex-wrap: wrap;
        display: flex;
        justify-content: center;
        width: calc(100%);
        padding-top: 2rem;

        @media (min-width: 768px) {
          width: calc(50%);
        }

        .image {
          width: calc(100%);
          padding: 0 3rem 3rem 0;

          @media (min-width: 768px) {
            width: calc(50%);
          }
        }

        .contact {
          width: calc(100%);

          @media (min-width: 768px) {
            width: calc(50%);
          }

          p {
            ${B1Black};
            margin: 0;

            a {
              ${B1Black};
            }
          }

          .sales-name {
            text-transform: uppercase;
          }

          .sales-btn {
            position: absolute;
            bottom: 3rem;
            left: 50%;
            width: 100%;
            margin-top: 2.5rem;

            a {
              ${Btn1Grey};
            }
          }
        }
      }

      &--hours {
        position: relative;
        width: calc(100%);

        @media (min-width: 768px) {
          width: calc(100%);
        }

        p {
          ${B1Black};
        }

        .directions-btn {
          width: 100%;

          a {
            ${Btn1Navy};
          }
        }
      }
    }
  }
`

export default HomePlanConnect
