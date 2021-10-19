import React, { createContext, useReducer } from "react"

export const UserContext = createContext()

const initialState = {
  user: {},
  profile: {},
  exclusive: [],
  loading: false,
}

const reducer = (state, action) => {
  switch (action.type) {
    case "USER_LOADING":
      return {
        ...state,
        loading: action.payload.loading,
      }

    case "USER_LOGOUT":
      return {
        user: {},
        profile: {},
        loading: false,
      }
    case "USER_LOGIN":
      return {
        ...state,
        user: action.payload.user,
        loading: false,
      }

    case "USER_PROFILE":
      return {
        ...state,
        profile: action.payload.profile,
        loading: false,
      }

    case "USER_EXCLUSIVE":
      return {
        ...state,
        exclusive: action.payload.exclusive,
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
