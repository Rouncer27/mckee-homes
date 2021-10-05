import React, { createContext, useReducer } from "react"

export const ErrorContext = createContext()

const initialState = {
  loading: false,
  error: false,
  errMessage: "",
  alert: false,
  alertMessage: "",
}

const reducer = (state, action) => {
  switch (action.type) {
    case "USER_ERROR":
      return {
        ...state,
      }
    case "USER_CLEAR_ERROR":
      return {
        ...state,
        error: false,
        errMessage: "",
      }
    default:
      return state
  }
}

export const ErrorContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <ErrorContext.Provider value={[state, dispatch]}>
      {props.children}
    </ErrorContext.Provider>
  )
}
