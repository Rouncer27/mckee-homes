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

// 2️⃣ Add Follow Up Boss tracking script into the body
export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      key="follow-up-boss"
      dangerouslySetInnerHTML={{
        __html: `(function(w,i,d,g,e,t){w["WidgetTrackerObject"]=g;(w[g]=w[g]||function()
        {(w[g].q=w[g].q||[]).push(arguments);}),(w[g].ds=1*new Date());(e="script"),
        (t=d.createElement(e)),(e=d.getElementsByTagName(e)[0]);t.async=1;t.src=i;
        e.parentNode.insertBefore(t,e);})
        (window,"https://widgetbe.com/agent",document,"widgetTracker");
        window.widgetTracker("create", "WT-CDTZNLZK");
        window.widgetTracker("send", "pageview");`,
      }}
    />,
  ])
}
