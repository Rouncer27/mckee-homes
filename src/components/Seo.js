import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import SchemaOrg from "./SchemaOrg"

function Seo({ description, lang, meta, title, metaImg, location }) {
  const { site, siteLogo, defaultFb } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteLogo
            metaImg
            siteUrl
          }
        }

        siteLogo: file(relativePath: { eq: "mckee-full-logo.png" }) {
          publicURL
        }

        defaultFb: file(relativePath: { eq: "social-media-default.png" }) {
          publicURL
        }
      }
    `
  )

  const isBlogPost = false
  const siteLogoUrl = `${site.siteMetadata.siteUrl}/${siteLogo.publicURL}`
  const metaDescription = description || site.siteMetadata.description

  const backupDefaultFBImgUrl = defaultFb.publicURL
  const pageSpecificityFBImgUrl = metaImg
  const imgToUse =
    pageSpecificityFBImgUrl !== undefined
      ? pageSpecificityFBImgUrl
      : backupDefaultFBImgUrl
  const image = `${site.siteMetadata.siteUrl}${imgToUse}`
  const canonicalUrl = `${site.siteMetadata.siteUrl}${location}`

  return (
    <>
      <Helmet htmlAttributes={{ lang }}>
        {/* General tags */}
        <title>{title}</title>
        <meta charset="UTF-8" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="description" content={metaDescription} />
        <meta name="image" content={image} />
        <link rel="canonical" href={canonicalUrl} />

        {/* OpenGraph tags */}
        <meta property="og:url" content={canonicalUrl} />
        {isBlogPost ? (
          <meta property="og:type" content="article" />
        ) : (
          <meta property="og:type" content="website" />
        )}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={image} />
        <meta property="og:image:alt" content={metaDescription} />
        {/* <meta property="fb:app_id" content={seo.social.fbAppID} /> */}
        <meta property="og:site_name" content={title} />
        <meta property="og:locale" content={`en_US`} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={site.siteMetadata.author} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={image} />
        {/* Google Ownership Verification */}
        <meta
          name="google-site-verification"
          content="PBwSplbyJ8do47pr3347gHMZzGCIJy2gr1VaDWFh4h4"
        />
        {/* <meta name="msvalidate.01" content="" /> */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-780800236"
        ></script>

        <script>
          {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-780800236');`}
        </script>
      </Helmet>
      <SchemaOrg
        isBlogPost={false}
        url={site.siteMetadata.siteUrl}
        title={title}
        image={siteLogoUrl}
        logo={siteLogoUrl}
        description={description}
        datePublished="April 15, 2022"
        canonicalUrl="https://www.mckeehomes.com/"
        author=""
        organization="McKee Homes"
        defaultTitle="McKee Homes"
      />
    </>
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
