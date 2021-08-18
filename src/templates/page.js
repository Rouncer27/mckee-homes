import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
// import Seo from "../components/SEO"

// import PageComponentGroups from "../components/PageComponentGroups"

const Page = props => {
  // const { components, seo } = props.data
  return (
    <Layout>
      {/* <Seo
        title={seo.pageSeoData.swbThemeMetaTitle}
        description={seo.pageSeoData.swbThemeDescription}
        // metaImg={seo.pageSeoData.swbThemeImage.localFile.relativePath}
        location={props.location.pathname}
      />
      <PageComponentGroups components={components} /> */}

      <p>PAGE</p>
    </Layout>
  )
}

// export const pageTempQuery = graphql`
//   query pageTempPage($id: String!) {
//     # seo: wpPage(id: { eq: $id }) {
//     #   pageSeoData {
//     #     swbThemeDescription
//     #     swbThemeMetaTitle
//     #     swbThemeImage {
//     #       localFile {
//     #         relativePath
//     #       }
//     #     }
//     #   }
//     # }

//     # components: wpPage(id: { eq: $id }) {
//     #   acfMainTemplateFields {
//     #     }
//     #   }
//     }
//   }
// `

export default Page
