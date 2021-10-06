import React, { useContext, useEffect } from "react"
import { ThemeProvider } from "styled-components"
import { UserContext } from "../context/UserContext"
import { AlertContext } from "../context/AlertContext"
import { HomesContext } from "../context/HomesContext"
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
    query layout {
      site {
        siteMetadata {
          title
        }
      }

      homePlans: allWpHomePlan {
        edges {
          node {
            title
            slug
            id
            databaseId
          }
        }
      }

      quickPossessions: allWpQuickPossession {
        edges {
          node {
            title
            slug
            id
            databaseId
          }
        }
      }

      showHomes: allWpShowHome {
        edges {
          node {
            title
            slug
            id
            databaseId
          }
        }
      }
    }
  `)

  const [userState, userDispatch] = useContext(UserContext)
  const [alertState, alertDispatch] = useContext(AlertContext)
  const [homesState, homesDispatch] = useContext(HomesContext)

  const homePlans = data.homePlans ? data.homePlans.edges : []
  const quickPossessions = data.quickPossessions
    ? data.quickPossessions.edges
    : []
  const showHomes = data.showHomes ? data.showHomes.edges : []

  console.log("HOMES: ", data)
  console.log("userState LAYOUT: ", userState)
  console.log("alertState LAYOUT: ", alertState)
  console.log("homesState LAYOUT", homesState)

  useEffect(() => {
    homesDispatch({
      type: "LOAD_HOMES",
      payload: {
        homePlans,
        quickPossessions,
        showHomes,
      },
    })

    if (Object.keys(userState.user).length === 0) {
      getUserCheck(userDispatch)
    }
  }, [])

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {userState.loading && <Loading />}
        {alertState.success && <Success />}
        {alertState.alert && <Alert />}
        {alertState.error && <Error />}
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
