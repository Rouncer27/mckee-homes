import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import GalleryHomePlan from "../components/PageComponents/GalleriesPost/GalleryHomePlan"

const galleries = props => {
  const { seoInfo, galleryPost } = props.data
  console.log("galleryPost", galleryPost)
  return (
    <Layout>
      <Seo
        title={
          seoInfo?.seoFields?.swbThemeMetaTitle
            ? seoInfo.seoFields.swbThemeMetaTitle
            : "McKee Homes - Gallery"
        }
        description={
          seoInfo?.seoFields?.swbThemeDescription
            ? seoInfo.seoFields.swbThemeDescription
            : "McKee Homes - Gallery"
        }
        //metaImg={seoInfo.seoFields.swbThemeImage.localFile.relativePath}
        location={props.location.pathname}
      />
      <GalleryHomePlan data={galleryPost} />
    </Layout>
  )
}

export default galleries

export const query = graphql`
  query singleFaqQuery($slug: String!) {
    seoInfo: wpFaq(slug: { eq: $slug }) {
      seoFields {
        swbThemeDescription
        swbThemeMetaTitle
        swbThemeImage {
          localFile {
            relativePath
          }
        }
      }
    }

    galleryPost: wpGallery(slug: { eq: $slug }) {
      title
      galleryPost {
        images {
          image {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(width: 2000)
              }
            }
          }
        }
      }
    }
  }
`
