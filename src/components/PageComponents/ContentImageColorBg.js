import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { B1Black, Btn1Grey, H2Black, medWrapper } from "../../styles/helpers"

const ContentImageColorBg = ({ data }) => {
  const imageTopDisplay = getImage(
    data.imageTop.localFile.childImageSharp.gatsbyImageData
  )
  const imageTopAlt = data.imageTop.altText

  const imageBotDisplay = getImage(
    data.imageBottom.localFile.childImageSharp.gatsbyImageData
  )
  const imageBotAlt = data.imageBottom.altText

  return (
    <SectionStyled>
      <div className="wrapper">
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
        </div>
        <div className="image">
          <div className="image__top">
            <GatsbyImage
              image={imageTopDisplay}
              alt={imageTopAlt}
              layout="fullWidth"
              formats={["auto", "webp", "avif"]}
            />
          </div>
          <div className="image__bot">
            <GatsbyImage
              image={imageBotDisplay}
              alt={imageBotAlt}
              layout="fullWidth"
              formats={["auto", "webp", "avif"]}
            />
          </div>
        </div>
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  padding: 5rem 0;
  background-color: rgba(165, 182, 186, 0.22);

  .wrapper {
    ${medWrapper};
  }

  .content {
    width: calc(50%);
    padding: 2rem;
  }

  .title {
    h2 {
      ${H2Black};
    }
  }

  .paragraph {
    p {
      ${B1Black};
    }
  }

  .button {
    a {
      ${Btn1Grey};
    }
  }

  .image {
    width: calc(50%);

    &__top {
      width: 90%;
      margin: 0 auto;
    }

    &__bot {
      width: 65%;
      margin: 4rem auto 0;
    }
  }
`

export default ContentImageColorBg
