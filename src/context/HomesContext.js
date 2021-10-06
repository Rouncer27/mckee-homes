import React, { createContext, useReducer } from "react"

export const HomesContext = createContext()

const initialState = {
  homePlans: [],
  quickPossessions: [],
  showHomes: [],
}

const reducer = (state, action) => {
  switch (action.type) {
    case "LOAD_HOMES":
      return {
        ...state,
        homePlans: action.payload.homePlans,
        quickPossessions: action.payload.quickPossessions,
        showHomes: action.payload.showHomes,
      }
    default:
      return state
  }
}

export const HomesContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <HomesContext.Provider value={[state, dispatch]}>
      {props.children}
    </HomesContext.Provider>
  )
}
