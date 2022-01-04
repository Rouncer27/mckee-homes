import React from "react"
import { UserContextProvider } from "./src/context/UserContext"
import { AlertContextProvider } from "./src/context/AlertContext"
import { HomesContextProvider } from "./src/context/HomesContext"

export const wrapRootElement = ({ element }) => {
  return (
    <UserContextProvider>
      <AlertContextProvider>
        <HomesContextProvider>{element}</HomesContextProvider>
      </AlertContextProvider>
    </UserContextProvider>
  )
}

export const onRenderBody = ({
  setPreBodyComponents,
  setBodyAttributes,
  setHeadComponents,
  setPostBodyComponents,
}) => {
  setPreBodyComponents([
    <div key="0" id="preloader">
      <div className="welcome-top">
        <p>Welcome</p>
      </div>
      <img
        src="/images/mckee-full-logo.png"
        alt="logo"
        style={{ height: "calc(3.23625vw + 77.86408px)" }}
      />
      <div className="welcome-bottom">
        <p>to your new home experience</p>
      </div>
      <div className="preloader_animation"></div>
    </div>,
  ])

  setBodyAttributes({
    className: "preloader_active",
  })

  setHeadComponents([
    <link key="1" as="script" rel="preload" href="/scripts/preloader.js" />,
    <link key="2" rel="stylesheet" href="/styles/preloader.css" />,
    <noscript key="3">
      <link rel="stylesheet" href="/styles/noscript.css" />
    </noscript>,
  ])

  setPostBodyComponents([<script key="4" src="/scripts/preloader.js" />])
}
