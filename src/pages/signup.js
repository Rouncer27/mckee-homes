import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Signup from "../components/AppRoutes/Signup"

const signup = () => {
  return (
    <Layout>
      <SEO />
      <Signup />
    </Layout>
  )
}

export default signup
