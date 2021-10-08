import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { B1Black, colors, H2Black, standardWrapper } from "../../styles/helpers"

const ContentSimpleTitleIcon = ({ data }) => {
  const iconSrc = getImage(data.icon.localFile.childImageSharp.gatsbyImageData)
  const iconAlt = data.icon.altText
  return (
    <StyledSection bgcolor={data.backgroundColour}>
      <div className="wrapper">
        <div className="icon">
          <GatsbyImage
            image={iconSrc}
            alt={iconAlt}
            layout="fullWidth"
            formats={["auto", "webp", "avif"]}
          />
        </div>
        <div className="title">
          <h2>{data.title}</h2>
        </div>
        <div dangerouslySetInnerHTML={{ __html: data.content }} />
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  background-color: ${props =>
    props.bgcolor ? colors.colorTertiary : "transparent"};

  .wrapper {
    ${standardWrapper};
    max-width: 75rem !important;
  }

  .icon {
    width: 100%;
    max-width: 9.5rem;
    margin: auto;
  }

  .title {
    width: 100%;

    h2 {
      ${H2Black};
      margin-bottom: 2.5rem;
      text-align: center;
    }
  }

  p {
    ${B1Black};
  }
`

export default ContentSimpleTitleIcon
