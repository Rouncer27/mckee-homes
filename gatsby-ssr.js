import React from "react"
import { UserContextProvider } from "./src/context/UserContext"
import { ErrorContextProvider } from "./src/context/ErrorContext"

export const wrapRootElement = ({ element }) => {
  return (
    <UserContextProvider>
      <ErrorContextProvider>{element}</ErrorContextProvider>
    </UserContextProvider>
  )
}
