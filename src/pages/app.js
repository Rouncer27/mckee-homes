import React, { useContext } from "react"
import { Router } from "@reach/router"
import Layout from "../components/Layout"
import { UserContext } from "../context/UserContext"

import PrivateRoute from "../components/PrivateRoute"

import Dashboard from "../components/AppRoutes/Dashboard"
import Account from "../components/AppRoutes/Account"
import ExclusiveSingle from "../components/AppRoutes/ExclusiveSingle"

const App = ({ location }) => {
  const [state] = useContext(UserContext)

  return (
    <Layout isapp={true}>
      <Router>
        <PrivateRoute path="/app/dashboard" component={Dashboard} />
        <PrivateRoute path="/app/account" component={Account} />
        <PrivateRoute path="/app/exclusive/:id" component={ExclusiveSingle} />
      </Router>
    </Layout>
  )
}

export default App
