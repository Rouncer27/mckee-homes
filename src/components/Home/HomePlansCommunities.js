import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { colors, standardWrapper, B1Black } from "../../styles/helpers"
import { Link } from "gatsby"

const HomePlansCommunities = ({ communities }) => {
  return (
    <SectionStyled>
      <div className="wrapper-communities">
        <div className="wrapper-communities__title">
          <h2>Available In These Communities</h2>
        </div>
        <div className="wrapper-communities__logos">
          {communities.map((community, index) => {
            console.log(community)
            const logoImg = getImage(
              community.acfCommunities.logo.localFile.childImageSharp
                .gatsbyImageData
            )
            const logoImgAlt = community.acfCommunities.logo.altText
            return (
              <div key={index} className="wrapper-communities__logos--logo">
                <Link to={`/communities/${community.slug}`}>
                  <GatsbyImage
                    image={logoImg}
                    alt={logoImgAlt}
                    layout="fullWidth"
                    formats={["auto", "webp", "avif"]}
                  />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
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
        width: calc((100% / 2) - 2rem);
        margin-right: 2rem;
        margin-bottom: 2rem;

        @media (min-width: 768px) {
          width: calc((100% / 4) - 2rem);
          margin-bottom: 0;
        }
        @media (min-width: 1025px) {
          width: calc((100% / 7) - 2rem);
        }
      }
    }
  }
`

export default HomePlansCommunities
