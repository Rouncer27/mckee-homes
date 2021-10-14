import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

const getData = graphql`
  {
    image: file(relativePath: { eq: "map-airdrie.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 2000)
      }
    }
  }
`

const AirdrieMap = () => {
  const data = useStaticQuery(getData)
  const image = getImage(data.image.childImageSharp.gatsbyImageData)
  return (
    <ImgWrap>
      <GatsbyImage image={image} alt="Key" layout="fixed" />
    </ImgWrap>
  )
}

const ImgWrap = styled.div`
  width: 100%;
  height: 100%;
`

export default AirdrieMap
