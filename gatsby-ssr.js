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
