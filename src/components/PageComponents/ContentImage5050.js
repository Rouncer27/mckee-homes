import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { B1Black, H2Navy, medWrapper, Btn1Grey } from "../../styles/helpers"
import BgPatternOne from "../Graphics/BgPatternOne"

const ContentImage5050 = ({ data }) => {
  const imageDisplay = getImage(
    data.image.localFile.childImageSharp.gatsbyImageData
  )
  const imageAlt = data.image.altText
  return (
    <SectionStyled reversed={data.reversed}>
      <div className="wrapper">
        <div className="content">
          <div className="content__inner">
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
          </div>
          <div className="bg-pattern">
            <BgPatternOne />
            <div className="bg-pattern__overlay" />
          </div>
        </div>

        <div className="image">
          <GatsbyImage
            image={imageDisplay}
            alt={imageAlt}
            layout="fullWidth"
            formats={["auto", "webp", "avif"]}
          />
        </div>
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  margin: 2rem auto;

  .wrapper {
    ${medWrapper};
    flex-direction: ${props => (props.reversed ? "row-reverse" : "row")};
  }

  .content {
    display: flex;
    align-items: center;
    position: relative;
    width: calc(100%);
    margin-right: auto;
    margin-bottom: 2rem;
    margin-left: auto;
    padding: 7.5rem 5rem;

    @media (min-width: 768px) {
      width: calc(50% - 2rem);
      margin-right: ${props => (props.reversed ? "0rem" : "2rem")};
      margin-bottom: 0;
      margin-left: ${props => (props.reversed ? "2rem" : "0rem")};
      padding: 7.5rem 5rem;
    }

    h2 {
      ${H2Navy};
    }

    p {
      ${B1Black};
    }

    a {
      ${Btn1Grey};
    }

    .bg-pattern {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;

      &__overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #a5b6ba;
        opacity: 0.4;
      }
    }
  }

  .image {
    width: calc(100%);

    @media (min-width: 768px) {
      width: calc(50%);
    }
  }
`

export default ContentImage5050
