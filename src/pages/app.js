import React, { useContext } from "react"
import { Router } from "@reach/router"
import Layout from "../components/Layout"
import { UserContext } from "../context/UserContext"

import PrivateRoute from "../components/PrivateRoute"

import Dashboard from "../components/AppRoutes/Dashboard"

const App = ({ location }) => {
  const [state] = useContext(UserContext)

  return (
    <Layout isapp={true}>
      <Router>
        <PrivateRoute path="/app/dashboard" component={Dashboard} />
      </Router>
    </Layout>
  )
}

export default App
