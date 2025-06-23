import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const GalleryHomePlan = ({ data }) => {
  return (
    <StyledDiv>
      <div className="wrapper">
        <div className="sliderWarpper">
          {data.sliderVideos.map((gal, index) => {
            const galImg = getImage(
              gal.localFile.childImageSharp.gatsbyImageData
            )
            const galImgAlt = gal.altText
            return (
              <div key={index} className="slide">
                <GatsbyImage
                  image={galImg}
                  alt={galImgAlt}
                  layout="fullWidth"
                  formats={["auto", "webp", "avif"]}
                />
              </div>
            )
          })}
        </div>
      </div>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  .wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .sliderWarpper {
    width: 100%;

    .slide {
      position: relative;
      height: 40rem;
      z-index: 10;

      @media (min-width: 768px) {
        height: 50rem;
        margin-right: 2rem;
        margin-left: 2rem;
      }

      @media (min-width: 1025px) {
        height: 50rem;
        margin-right: 2rem;
        margin-left: 2rem;
      }

      &-inner {
        position: absolute;
        top: 0%;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
`

export default GalleryHomePlan
