import React, { useContext, useEffect } from "react"
import { ThemeProvider } from "styled-components"
import { UserContext } from "../context/UserContext"
import { AlertContext } from "../context/AlertContext"
import { useStaticQuery, graphql } from "gatsby"
import { navigate } from "gatsby"
import axios from "axios"

import theme from "../styles/theme/Theme"
import GlobalStyle from "../styles/global/Golbal"
import Header from "./Header"
import Footer from "./Footer"

import Loading from "./Modals/Loading"
import Success from "./Modals/Success"
import Alert from "./Modals/Alert"
import Error from "./Modals/Error"

import getUserCheck from "./AppRoutes/AppActions/getUserCheck"

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

  const [userState, userDispatch] = useContext(UserContext)
  const [alertState, alertDispatch] = useContext(AlertContext)

  console.log("userState LAYOUT: ", userState)
  console.log("alertState LAYOUT: ", alertState)

  useEffect(() => {
    if (Object.keys(userState.user).length === 0) {
      getUserCheck(userDispatch)
    }
  }, [])

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Loading />
        {alertState.success && <Success />}
        <Alert />
        <Error />
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
