import React from "react"
import { UserContextProvider } from "./src/context/UserContext"
import { AlertContextProvider } from "./src/context/AlertContext"

export const wrapRootElement = ({ element }) => {
  return (
    <UserContextProvider>
      <AlertContextProvider>{element}</AlertContextProvider>
    </UserContextProvider>
  )
}
