import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

import { B2Black, Btn1Grey, Btn1Navy, colors } from "../../../styles/helpers"

const SinglePin = ({
  imgSrc,
  alt,
  title,
  details,
  slug,
  classmodifier,
  setPinActive,
  logo,
  logoAlt,
}) => {
  return (
    <DivStyled
      className={`pin ${classmodifier}`}
      onMouseOver={e => {
        e.currentTarget.classList.add("active-pin")
        setPinActive(true)
      }}
      onMouseLeave={e => {
        e.currentTarget.classList.remove("active-pin")
        setPinActive(false)
      }}
    >
      <div className="pin__icon">
        <GatsbyImage
          image={imgSrc}
          alt={alt}
          layout="fullWidth"
          formats={["auto", "webp", "avif"]}
        />
      </div>
      <div className="pin__details">
        <div className="pin__details--title">
          <h3>{title}</h3>
        </div>
        <div className="pin__details--logo">
          <GatsbyImage
            image={logo}
            alt={logoAlt}
            layout="fullWidth"
            formats={["auto", "webp", "avif"]}
          />
        </div>
        <div
          className="pin__details--content"
          dangerouslySetInnerHTML={{
            __html: details,
          }}
        />
        <div className="pin__details--link">
          <Link to={`/communities/${slug}`}>Learn More</Link>
        </div>
        <div className="pin__details--close">
          <button
            onClick={e => {
              e.currentTarget.parentElement.parentElement.parentElement.classList.remove(
                "active-pin"
              )
              setPinActive(false)
            }}
          >
            Close
          </button>
        </div>
      </div>
    </DivStyled>
  )
}

const DivStyled = styled.div`
  position: relative;
  display: block;
  position: absolute;
  width: 12vw;
  cursor: pointer;
  z-index: 500;

  @media (min-width: 768px) {
    width: 10rem;
  }

  .pin__details {
    position: absolute;
    top: -100%;
    left: 0%;
    width: 30rem;
    padding: 1rem 1.5rem;
    background-color: ${colors.white};
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    transition: all 0.3s ease-out;
    opacity: 0;
    visibility: hidden;

    @media (min-width: 768px) {
      top: -100%;
      left: 100%;
      width: 27.5rem;
    }

    &--title {
      border-bottom: 0.1rem solid ${colors.colorPrimary};

      h3 {
        ${B2Black};
        margin: 0;
        line-height: 1.25;
        text-transform: uppercase;
      }
    }

    &--logo {
      max-width: 10rem;
    }

    &--content {
      p {
        ${B2Black};
        line-height: 1.25;
      }
    }

    &--link {
      a {
        ${Btn1Grey};
      }
    }

    &--close {
      width: 100%;

      @media (min-width: 768px) {
        display: none;
      }

      button {
        ${Btn1Navy};
        display: block;
        width: 100%;
        margin-top: 2.5rem;
      }
    }
  }

  &.active-pin {
    z-index: 100000;

    .pin__details {
      opacity: 1;
      visibility: visible;
    }
  }

  &.pins__bayview {
    left: 15vw;
    bottom: 55%;

    .pin__details {
      top: -10rem;
      left: -7.5rem;

      @media (min-width: 768px) {
        top: -100%;
        left: 0%;
      }
    }
  }

  &.pins__baysideEstates {
    left: 30vw;
    bottom: 50%;

    .pin__details {
      top: -10rem;
      left: -7.5rem;

      @media (min-width: 768px) {
        top: -100%;
        left: 0%;
      }
    }
  }

  &.pins__chinookgate {
    left: 15vw;
    bottom: 30%;

    .pin__details {
      left: -2.5rem;
      top: -12.5rem;

      @media (min-width: 768px) {
        top: -100%;
        left: 0%;
      }
    }
  }

  &.pins__cooperscrossing {
    left: 45vw;
    bottom: 5%;

    .pin__details {
      left: -13rem;
      top: -20rem;

      @media (min-width: 768px) {
        top: -27.5rem;
        left: 0%;
      }
    }
  }

  &.pins__kingsHeights {
    right: 22.5vw;
    bottom: 27.5%;

    .pin__details {
      left: -20rem;
      top: -15rem;

      @media (min-width: 768px) {
        top: -100%;
        left: -27.5rem;
      }
    }
  }

  &.pins__lanarklanding {
    right: 22.5vw;
    bottom: 5%;

    .pin__details {
      left: -20rem;
      top: -20rem;

      @media (min-width: 768px) {
        top: -27.5rem;
        left: -27.5rem;
      }
    }
  }

  &.pins__ravenswood {
    right: 10vw;
    bottom: 20%;

    .pin__details {
      left: -25rem;
      top: -15rem;

      @media (min-width: 768px) {
        top: -100%;
        left: -27.5rem;
      }
    }
  }

  &.pins__vistaCrossing {
    left: 18vw;
    top: 30%;

    .pin__details {
      left: -3.5rem;
      top: -20rem;

      @media (min-width: 768px) {
        top: -100%;
        left: 100%;
      }
    }
  }

  &.pins__vantageRise {
    left: 12vw;
    top: 42%;

    .pin__details {
      left: -3.5rem;
      top: -20rem;

      @media (min-width: 768px) {
        top: -100%;
        left: 100%;
      }
    }
  }

  &.pins__mandalayEstates {
    right: 27vw;
    top: 27%;

    .pin__details {
      left: -3.5rem;
      top: -20rem;

      @media (min-width: 768px) {
        top: -100%;
        left: 100%;
      }
    }
  }

  &.pins__lewiston {
    top: 40%;
    right: 31.5vw;
    .pin__details {
      @media (min-width: 768px) {
      }
    }
  }
`

export default SinglePin
