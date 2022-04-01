import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  Btn1Grey,
  Btn1Navy,
  colors,
  standardWrapper,
  B1Black,
  medWrapper,
} from "../../styles/helpers"

const QuickConnect = ({ salesOne, salesTwo }) => {
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
        </div>
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  .connect-wrapper {
    background-color: ${colors.white};
    padding-bottom: 5rem;

    &__inner {
      ${medWrapper};
    }

    &__titles {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      width: 100%;
      margin-bottom: 3rem;
      margin-top: 5rem;
      padding-bottom: 0;
      border-bottom: 0.3rem solid ${colors.colorTertiary};

      @media (min-width: 768px) {
        margin-bottom: 3rem;
      }

      p {
        ${B1Black};
        width: calc(100%);
        margin: 0;
        text-transform: uppercase;
      }
    }

    &__content {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      width: 100%;

      @media (min-width: 768px) {
        justify-content: flex-start;
      }

      &--sales {
        position: relative;
        flex-wrap: wrap;
        display: flex;
        justify-content: center;
        width: calc(100%);
        padding-top: 2rem;

        @media (min-width: 768px) {
          width: calc(50%);
          padding-top: 4.7rem;
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
            margin-top: 2.5rem;

            @media (min-width: 768px) {
              position: absolute;
              bottom: 3rem;
              left: 50%;
              width: 100%;
            }

            a {
              ${Btn1Grey};
            }
          }
        }
      }

      &--salestwo {
        position: relative;
        width: calc(50% - 4rem);
        margin-left: 4rem;
        padding-top: 4.7rem;

        p {
          ${B1Black};
        }

        .directions-btn {
          position: absolute;
          bottom: 3rem;
          left: 0;
          width: 100%;

          a {
            ${Btn1Navy};
          }
        }
      }
    }
  }
`

export default QuickConnect
