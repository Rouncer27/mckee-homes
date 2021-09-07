import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  B2Black,
  Btn1Grey,
  Btn1Navy,
  colors,
  H1Navy,
  H3Black,
  B2Grey,
  standardWrapper,
  B1Black,
} from "../../styles/helpers"
import { Link } from "gatsby"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import sqft from "../../images/icons/sqft.png"
import bed from "../../images/icons/bed.png"
import bath from "../../images/icons/bath.png"

import MoreInformation from "../PageComponents/Forms/MoreInformation"

const settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: false,
  draggable: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 15000,
  centerPadding: "350px",
  centerMode: true,
  arrows: true,
  dots: false,
}

console.log(settings)

const HomePlan = ({ home }) => {
  console.log("home", home)

  const mainImg = getImage(
    home.acfHomePlans.mainImage.localFile.childImageSharp.gatsbyImageData
  )
  const mainImgAlt = home.acfHomePlans.mainImage.altText

  const salesImg = getImage(
    home.acfHomePlans.salesPersonImage.localFile.childImageSharp.gatsbyImageData
  )
  const salesImgAlt = home.acfHomePlans.salesPersonImage.altText

  const floorImg = getImage(
    home.acfHomePlans.floorPlanImage.localFile?.childImageSharp?.gatsbyImageData
  )
  const floorImgAlt = home.acfHomePlans.floorPlanImage.altText

  const gallery = home.acfHomePlans.gallery

  return (
    <StyledArticle>
      <div className="wrapper">
        <div className="image">
          <GatsbyImage
            image={mainImg}
            alt={mainImgAlt}
            layout="fullWidth"
            formats={["auto", "webp", "avif"]}
          />
        </div>
        <div className="header">
          <div className="header__title">
            <p>Home Plans</p>
            <h1>{home.title}</h1>
          </div>
          <div className="header__sizes">
            <p>
              <span className="icon icon-sqft">
                <img src={sqft} alt="Logo" />
              </span>
              <span>{home.acfHomePlans.squareFootage} SQFT</span>
            </p>
            <p>
              <span className="icon icon-bed">
                <img src={bed} alt="Logo" />
              </span>
              <span>{home.acfHomePlans.numberOfBedrooms}BEDROOM</span>
            </p>
            <p>
              <span className="icon icon-bath">
                <img src={bath} alt="Logo" />
              </span>
              <span>{home.acfHomePlans.numberOfBathrooms}BATHROOM</span>
            </p>
          </div>

          <div className="header__plans">
            <a
              className="header__plans--pdf"
              target="_blank"
              rel="noreferrer"
              href={home.acfHomePlans.floorPlanPdf.localFile.publicURL}
            >
              Download Floor Plan
            </a>

            <a
              className="header__plans--tour"
              target="_blank"
              rel="noreferrer"
              href={home.acfHomePlans.virtualTour}
            >
              Take A Virtual Tour
            </a>
          </div>

          <div className="header__more">
            <Link to="/contact">Need More Information</Link>
          </div>
        </div>
      </div>

      <div className="wrapper-details">
        <div className="wrapper-details__title">
          <h2>Best is built in with McKee Homes:</h2>
        </div>
        <div
          className="wrapper-details__content"
          dangerouslySetInnerHTML={{ __html: home.acfHomePlans.details }}
        />
      </div>

      <div className="wrapper-communities">
        <div className="wrapper-communities__title">
          <h2>Available In These Communities</h2>
        </div>
        <div className="wrapper-communities__logos">
          {home.communities.nodes.map(community => {
            const logoImg = getImage(
              community.acfCommunities.logo.localFile.childImageSharp
                .gatsbyImageData
            )
            const logoImgAlt = community.acfCommunities.logo.altText
            return (
              <div className="wrapper-communities__logos--logo">
                <GatsbyImage
                  image={logoImg}
                  alt={logoImgAlt}
                  layout="fullWidth"
                  formats={["auto", "webp", "avif"]}
                />
              </div>
            )
          })}
        </div>
      </div>

      <div className="gallery-wrapper">
        <Slider {...settings}>
          {gallery.map(gal => {
            const galImg = getImage(
              gal.localFile.childImageSharp.gatsbyImageData
            )
            const galImgAlt = gal.altText
            return (
              <div className="slide">
                <GatsbyImage
                  image={galImg}
                  alt={galImgAlt}
                  layout="fullWidth"
                  formats={["auto", "webp", "avif"]}
                />
              </div>
            )
          })}
        </Slider>
      </div>

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
                  image={salesImg}
                  alt={salesImgAlt}
                  layout="fullWidth"
                  formats={["auto", "webp", "avif"]}
                />
              </div>
              <div className="contact">
                <p className="sales-name">
                  {home.acfHomePlans.salesPersonName}
                </p>
                <p>
                  <a href={`mailto:${home.acfHomePlans.salesPersonEmail}`}>
                    {home.acfHomePlans.salesPersonEmail}
                  </a>
                </p>
                <p>
                  T:{" "}
                  <a href={`tel:+1${home.acfHomePlans.salesPersonPhone}`}>
                    {home.acfHomePlans.salesPersonPhone}
                  </a>
                </p>
                <p>
                  C:{" "}
                  <a href={`tel:+1${home.acfHomePlans.salesPersonCell}`}>
                    {home.acfHomePlans.salesPersonCell}
                  </a>
                </p>

                <div className="sales-btn">
                  <a href={`mailto:${home.acfHomePlans.salesPersonEmail}`}>
                    Email Sales Person
                  </a>
                </div>
              </div>
            </div>
            <div className="connect-wrapper__content--hours">
              <div
                dangerouslySetInnerHTML={{
                  __html: home.acfHomePlans.showHomeHours,
                }}
              />
              <div className="directions-btn">
                <a href={`mailto:${home.acfHomePlans.salesPersonEmail}`}>
                  Email Sales Person
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MoreInformation />

      <div className="floorplan-wrapper">
        <div className="floorplan-wrapper__inner">
          <div className="floorplan-wrapper__title">
            <h2>Floor Plan</h2>
          </div>
          <div className="floorplan-wrapper__plan">
            <p>{home.title}</p>

            <div className="floorplan-wrapper__plan--image">
              <GatsbyImage
                image={floorImg}
                alt={floorImgAlt}
                layout="fullWidth"
                formats={["auto", "webp", "avif"]}
              />
            </div>
          </div>
        </div>
      </div>
    </StyledArticle>
  )
}

const StyledArticle = styled.article`
  .wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  .image {
    width: calc(50%);
  }

  .header {
    width: calc(50%);
    max-width: 65rem;
    margin-right: auto;
    margin-left: 0;
    padding: 5rem;

    &__title {
      width: 100%;
      padding: 5rem 0 2.5rem;
      border-bottom: 0.3rem solid ${colors.colorTertiary};

      p {
        ${H3Black};
        margin: 0;
      }

      h1 {
        ${H1Navy};
        margin: 0;
      }
    }

    &__sizes {
      display: flex;
      justify-content: flex-start;
      width: 100%;
      padding-top: 2.5rem;

      p {
        ${B2Grey};
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-right: 5rem;
        margin-left: 0;
      }

      .icon {
        width: 2.5rem;
        margin-right: 1rem;
      }
    }

    &__plans {
      width: 100%;
      margin-top: 2.5rem;

      &--pdf {
        ${Btn1Grey};
        margin-right: 2rem;
      }

      &--tour {
        ${Btn1Navy};
      }
    }

    &__more {
      margin-top: 4rem;

      a {
        ${B2Black};
      }
    }
  }

  .wrapper-details {
    ${standardWrapper};

    &__title {
      width: 100%;
      margin-bottom: 3rem;
      padding-top: 5rem;
      padding-bottom: 2.5rem;
      border-bottom: 0.25rem solid ${colors.colorTertiary};

      h2 {
        ${B1Black};
        margin: 0;
      }
    }

    &__content {
      width: 100%;
      columns: 2;

      ul {
        width: 100%;

        li {
          margin-bottom: 1rem;
        }
      }
    }
  }

  .wrapper-communities {
    ${standardWrapper};

    &__title {
      width: 100%;
      margin-bottom: 3rem;
      padding-top: 5rem;
      padding-bottom: 2.5rem;
      border-bottom: 0.25rem solid ${colors.colorTertiary};

      h2 {
        ${B1Black};
        margin: 0;
      }
    }

    &__logos {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: flex-start;
      width: 100%;

      &--logo {
        width: calc((100% / 7) - 2rem);
        margin-right: 2rem;
      }
    }
  }

  .gallery-wrapper {
    .slide {
      position: relative;
      height: 45rem;
      margin-right: 2rem;
      margin-left: 2rem;

      .gatsby-image-wrapper {
        position: absolute !important;
        top: 0;
        right: 1rem;
        left: 1rem;
        height: 100%;
      }
    }
  }

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
      border-bottom: 0.25rem solid ${colors.colorTertiary};

      p {
        ${B1Black};
        width: calc(100% / 2);
        margin: 0;
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
        width: calc(60%);
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

      &--hours {
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

  .floorplan-wrapper {
    background-color: #efefef;

    &__title {
      width: 100%;
      border-bottom: 0.25rem solid ${colors.colorTertiary};

      h2 {
        ${B2Black};
      }
    }

    &__inner {
      ${standardWrapper};
    }
  }
`

export default HomePlan
