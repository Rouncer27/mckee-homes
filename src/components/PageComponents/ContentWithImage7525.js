import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  B1Black,
  Btn1Grey,
  colors,
  H2Navy,
  standardWrapper,
} from "../../styles/helpers"
import { Link } from "gatsby"

const ContentWithImage7525 = ({ data }) => {
  const imageDisplay = getImage(
    data.image.localFile.childImageSharp.gatsbyImageData
  )
  const imageAlt = data.image.altText
  return (
    <ContentWithImage7525Section
      imageside={data.imageSide}
      buttonposition={data.buttonPosition}
    >
      <div className="wrapper">
        <div className="content">
          <div className="content__title">
            <h2>{data.title}</h2>
          </div>
          <div
            className="content__paragraph"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
        </div>
        <div className="image">
          <GatsbyImage
            image={imageDisplay}
            alt={imageAlt}
            layout="fullWidth"
            formats={["auto", "webp", "avif"]}
          />
        </div>
        <div className="button">
          <Link to={`/${data.buttonSlug}`}>{data.buttonText}</Link>
        </div>
      </div>
    </ContentWithImage7525Section>
  )
}

const ContentWithImage7525Section = styled.section`
  margin: 2rem auto;

  .wrapper {
    ${standardWrapper};
    align-items: center;
    position: relative;
    flex-direction: ${props =>
      props.imageside === "left" ? "row-reverse" : "row"};
  }

  .content {
    width: calc(100%);

    @media (min-width: 768px) {
      width: calc(75%);
    }

    &__title {
      margin-bottom: 2rem;
      padding-bottom: 2rem;
      border-bottom: solid 0.2rem ${colors.colorTertiary};

      h2 {
        ${H2Navy};
        margin: 0;
      }
    }

    &__paragraph {
      p {
        ${B1Black};
      }
    }
  }

  .image {
    width: calc(25%);
    margin-right: auto;
    margin-left: auto;

    @media (min-width: 768px) {
      width: calc(25% - 4rem);
      padding: 0 5rem;
      margin-right: ${props => (props.imageside === "left" ? "4rem" : "0rem")};
      margin-left: ${props => (props.imageside === "left" ? "0" : "4rem")};
    }
  }

  .button {
    position: absolute;
    top: 1rem;
    right: 0;

    a {
      ${Btn1Grey};
    }
  }
`

export default ContentWithImage7525
