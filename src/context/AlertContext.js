import React, { createContext, useReducer } from "react"

export const AlertContext = createContext()

const initialState = {
  error: false,
  errMessage: "",
  alert: false,
  alertMessage: "",
  success: false,
  successMessage: "",
  successAutoClear: false,
}

const reducer = (state, action) => {
  switch (action.type) {
    case "USER_SUCCESS":
      return {
        ...state,
        success: true,
        successMessage: action.payload.successMessage,
        successAutoClear: action.payload.successAutoClear ? true : false,
        successAnimateOut: action.payload.successAnimateOut ? true : false,
      }

    case "USER_SUCCESS_CLEAR":
      return {
        ...state,
        success: false,
        successMessage: "",
        successAutoClear: false,
        successAnimateOut: false,
      }

    case "USER_SUCCESS_CLEAR_AUTO":
      return {
        ...state,
        successAutoClear: false,
      }
    case "USER_ERROR":
      return {
        ...state,
        error: true,
        errMessage: action.payload.errMessage,
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

export const AlertContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AlertContext.Provider value={[state, dispatch]}>
      {props.children}
    </AlertContext.Provider>
  )
}
