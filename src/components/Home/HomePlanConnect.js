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
  salesImg,
  salesImgAlt,
  salesPersonName,
  salesPersonEmail,
  salesPersonCell,
  showHomeHours,
  salesPersonPhone,
  googleMapLink,
}) => {
  const displayImage = getImage(salesImg)

  return (
    <SectionStyled>
      <div className="connect-wrapper">
        <div className="connect-wrapper__inner">
          <div className="connect-wrapper__titles">
            <p>Connect With Us</p>
            <p>Show Home Hours</p>
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
            <div className="connect-wrapper__content--hours">
              <div
                dangerouslySetInnerHTML={{
                  __html: showHomeHours,
                }}
              />
              <div className="directions-btn">
                <a href={`mailto:${googleMapLink}`}>Directions To Show Home</a>
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
        width: calc(100% / 1);
        margin: 0;

        @media (min-width: 768px) {
          width: calc(100% / 2);
        }
      }

      p:first-of-type {
        width: calc(100%);

        @media (min-width: 768px) {
          width: calc(60%);
        }
      }

      p:last-of-type {
        width: calc(100%);

        @media (min-width: 768px) {
          width: calc(40%);
          padding-left: 4rem;
        }
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
          width: calc(60%);
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
        padding-top: 4.7rem;

        @media (min-width: 768px) {
          width: calc(40% - 4rem);
          margin-left: 4rem;
        }

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

export default HomePlanConnect
