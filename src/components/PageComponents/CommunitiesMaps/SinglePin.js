import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

import { B2Black, Btn1Grey, colors } from "../../../styles/helpers"

const SinglePin = ({ imgSrc, alt, title, details, slug, classmodifier }) => {
  const addActiveClass = e => {
    e.currentTarget.classList.add("active-pin")
  }

  const removeActiveClass = e => {
    e.currentTarget.classList.remove("active-pin")
  }
  return (
    <DivStyled
      className={`pin ${classmodifier}`}
      onMouseOver={e => {
        e.currentTarget.classList.add("active-pin")
      }}
      onMouseLeave={e => {
        e.currentTarget.classList.remove("active-pin")
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
        <div
          className="pin__details--content"
          dangerouslySetInnerHTML={{
            __html: details,
          }}
        />
        <div className="pin__details--link">
          <Link to={`/communities/${slug}`}>Learn More</Link>
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
    left: 100%;
    width: 25.5rem;
    padding: 1rem 1.5rem;
    background-color: ${colors.white};
    transition: all 0.3s ease-out;
    opacity: 0;
    visibility: hidden;

    &--title {
      border-bottom: 0.1rem solid ${colors.colorPrimary};

      h3 {
        ${B2Black};
        margin: 0;
        text-transform: uppercase;
      }
    }

    &--content {
      p {
        ${B2Black};
      }
    }

    &--link {
      a {
        ${Btn1Grey};
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

  &.pins__baysideEstates {
    left: 30vw;
    bottom: 50%;
  }

  &.pins__chinookgate {
    left: 15vw;
    bottom: 30%;
  }

  &.pins__cooperscrossing {
    left: 45vw;
    bottom: 5%;
  }

  &.pins__kingsHeights {
    right: 22.5vw;
    bottom: 27.5%;
  }

  &.pins__lanarklanding {
    right: 22.5vw;
    bottom: 5%;
  }

  &.pins__ravenswood {
    right: 10vw;
    bottom: 20%;
  }
`

export default SinglePin
