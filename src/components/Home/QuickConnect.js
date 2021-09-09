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

const QuickConnect = ({
  salesImg,
  salesImgAlt,
  salesPersonName,
  salesPersonEmail,
  salesPersonCell,
  salesPersonPhone,
  home,
}) => {
  const displayImage = getImage(salesImg)

  const salesTwoImg = getImage(
    home?.acfQuickPossessions?.twoSalesPersonImage?.localFile?.childImageSharp
      ?.gatsbyImageData
  )

  return (
    <SectionStyled>
      <div className="connect-wrapper">
        <div className="connect-wrapper__inner">
          <div className="connect-wrapper__titles">
            <p>Connect With Us</p>
          </div>
          <div className="connect-wrapper__content">
            <div className="connect-wrapper__content--sales">
              <div className="image">
                <GatsbyImage
                  image={displayImage}
                  alt={salesImgAlt}
                  layout="fullWidth"
                  formats={["auto", "webp", "avif"]}
                />
              </div>
              <div className="contact">
                <p className="sales-name">{salesPersonName}</p>
                <p>
                  <a href={`mailto:${salesPersonEmail}`}>{salesPersonEmail}</a>
                </p>
                <p>
                  T:{" "}
                  <a href={`tel:+1${salesPersonPhone}`}>{salesPersonPhone}</a>
                </p>
                <p>
                  C: <a href={`tel:+1${salesPersonCell}`}>{salesPersonCell}</a>
                </p>

                <div className="sales-btn">
                  <a href={`mailto:${salesPersonEmail}`}>Email Sales Person</a>
                </div>
              </div>
            </div>
            {home.acfQuickPossessions.twoSalesPersonRequired && (
              <div className="connect-wrapper__content--sales">
                <div className="image">
                  <GatsbyImage
                    image={salesTwoImg}
                    alt={home.acfQuickPossessions.twoSalesPersonImage.altText}
                    layout="fullWidth"
                    formats={["auto", "webp", "avif"]}
                  />
                </div>
                <div className="contact">
                  <p className="sales-name">
                    {home.acfQuickPossessions.twoSalesPersonName}
                  </p>
                  <p>
                    <a
                      href={`mailto:${home.acfQuickPossessions.twoSalesPersonEmail}`}
                    >
                      {home.acfQuickPossessions.twoSalesPersonEmail}
                    </a>
                  </p>
                  <p>
                    T:{" "}
                    <a
                      href={`tel:+1${home.acfQuickPossessions.twoSalesPersonPhone}`}
                    >
                      {home.acfQuickPossessions.twoSalesPersonPhone}
                    </a>
                  </p>
                  <p>
                    C:{" "}
                    <a
                      href={`tel:+1${home.acfQuickPossessions.twoSalesPersonCell}`}
                    >
                      {home.acfQuickPossessions.twoSalesPersonCell}
                    </a>
                  </p>

                  <div className="sales-btn">
                    <a
                      href={`mailto:${home.acfQuickPossessions.twoSalesPersonEmail}`}
                    >
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
      ${standardWrapper};
    }

    &__titles {
      display: flex;
      justify-content: center;
      width: 100%;
      margin-bottom: 3rem;
      margin-top: 5rem;
      padding-bottom: 0;
      border-bottom: 0.3rem solid ${colors.colorTertiary};

      p {
        ${B1Black};
        width: calc(100%);
        margin: 0;
        text-transform: uppercase;
      }
    }

    &__content {
      display: flex;
      justify-content: center;
      width: 100%;

      &--sales {
        position: relative;
        display: flex;
        justify-content: center;
        width: calc(50%);
        padding-top: 4.7rem;

        .image {
          width: calc(50%);
          padding: 0 3rem 3rem 0;
        }

        .contact {
          width: calc(50%);

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

      &--salestwo {
        position: relative;
        width: calc(40% - 4rem);
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
