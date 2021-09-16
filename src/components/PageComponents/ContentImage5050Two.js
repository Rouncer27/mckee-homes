import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  B1Black,
  H2Navy,
  medWrapper,
  B2Navy,
  colors,
} from "../../styles/helpers"

const ContentImage5050Two = ({ data }) => {
  const imageDisplay = getImage(
    data.image.localFile.childImageSharp.gatsbyImageData
  )
  const imageAlt = data.image.altText
  return (
    <SectionStyled reversed={data.reversed}>
      <div className="wrapper">
        <div className="image">
          <GatsbyImage
            image={imageDisplay}
            alt={imageAlt}
            layout="fullWidth"
            formats={["auto", "webp", "avif"]}
          />
        </div>
        <div className="content">
          <div className="title">
            <h2>{data.title}</h2>
          </div>
          <div
            className="paragraph"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
          <div className="button">
            <Link to={`/${data.buttonSlug}`}>{data.buttonText}</Link>
          </div>
          <div className="board-line" />
        </div>
      </div>
      <div className="bg-color" />
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  position: relative;
  width: 100%;
  margin: 2rem auto;

  .wrapper {
    ${medWrapper};
    align-items: center;
    flex-direction: ${props => (props.reversed ? "row" : "row-reverse")};
  }

  .content {
    position: relative;
    width: calc(100%);
    padding: 2rem;

    @media (min-width: 768px) {
      width: calc(50%);
      padding: 5rem;
    }

    h2 {
      ${H2Navy};
    }

    p {
      ${B1Black};
    }

    a {
      ${B2Navy};
      text-decoration: underline;
      text-transform: uppercase;
    }

    .board-line {
      position: absolute;
      top: 5rem;
      left: 0;
      bottom: 5rem;
      width: 0.4rem;
      background-color: ${colors.colorTertiary};
    }
  }

  .bg-color {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    background-color: #e5e5e5;
    z-index: -1;

    @media (min-width: 768px) {
      width: 60%;
    }
  }

  .image {
    width: calc(100%);

    @media (min-width: 768px) {
      width: calc(50%);
      padding: 0 5rem;
    }
  }
`

export default ContentImage5050Two
