import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  colors,
  medWrapper,
  H4White,
  B1White,
  Btn1Grey,
} from "../../styles/helpers"

const BlueBlockContent = ({ data }) => {
  return (
    <StyledSection>
      <div className="wrapper">
        {data.block.map((content, index) => {
          const iconSrc = getImage(
            content.icon.localFile.childImageSharp.gatsbyImageData
          )
          const iconAlt = content.icon.altText
          return (
            <Block key={index}>
              <div className="icon">
                <GatsbyImage
                  image={iconSrc}
                  alt={iconAlt}
                  layout="fullWidth"
                  formats={["auto", "webp", "avif"]}
                />
              </div>
              <div className="content">
                <h2>{content.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: content.content }} />
                <div className="button">
                  <a href="#">{content.buttonText}</a>
                </div>
              </div>
            </Block>
          )
        })}
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  .wrapper {
    ${medWrapper};
  }
`

const Block = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin-bottom: 1.5rem;
  background-color: ${colors.colorPrimary};

  .icon {
    width: calc(100%);
    max-width: 12.5rem;
    padding: 4rem 0;

    @media (min-width: 768px) {
      width: calc(20%);
      padding: 4rem 2rem;
    }
  }

  .content {
    width: calc(100%);
    padding: 2rem;

    @media (min-width: 768px) {
      width: calc(80%);
    }

    h2 {
      ${H4White};
    }

    p {
      ${B1White};
    }

    .button {
      width: 100%;

      @media (min-width: 768px) {
        text-align: right;
      }

      a {
        ${Btn1Grey};
      }
    }
  }
`

export default BlueBlockContent
