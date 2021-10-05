import React, { createContext, useReducer } from "react"

export const UserContext = createContext()

const initialState = {
  user: {},
  loading: false,
}

const reducer = (state, action) => {
  switch (action.type) {
    case "USER_LOGOUT":
      return {
        user: {},
        loading: false,
      }
    case "USER_LOGIN":
      return {
        ...state,
        user: action.payload.user,
        loading: false,
      }

    default:
      return state
  }
}

export const UserContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <UserContext.Provider value={[state, dispatch]}>
      {props.children}
    </UserContext.Provider>
  )
}
