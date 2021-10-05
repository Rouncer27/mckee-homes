import React, { useContext, useEffect } from "react"
import { ThemeProvider } from "styled-components"
import { UserContext } from "../context/UserContext"
import { ErrorContext } from "../context/ErrorContext"
import { useStaticQuery, graphql } from "gatsby"
import { navigate } from "gatsby"
import axios from "axios"

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

  const [userState, userDispatch] = useContext(UserContext)
  const [errorState, errorDispatch] = useContext(ErrorContext)

  console.log("userState: ", userState)
  console.log("errorState: ", errorState)

  const checkUserLoggedIn = async () => {
    try {
      const response = await axios.get(`http://localhost:1337/users/me`, {
        withCredentials: true,
        headers: {
          "content-type": "application/x-www-form-urlencoded",
        },
      })

      userDispatch({
        type: "USER_LOGIN",
        payload: { user: response.data },
      })
    } catch (err) {
      userDispatch({ type: "USER_LOGOUT" })
      console.log("ERROR: ", err)
    }
  }

  useEffect(() => {
    if (Object.keys(userState.user).length === 0) {
      console.log("CHECK FOR USER")
      checkUserLoggedIn()
    }
  }, [])

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
