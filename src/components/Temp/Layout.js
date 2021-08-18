import * as React from "react"
import { ThemeProvider } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import theme from "../styles/theme/Theme"
import GlobalStyle from "../styles/global/Golbal"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <main id="main" role="main">
          {children}
        </main>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default Layout
