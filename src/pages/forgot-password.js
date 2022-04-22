import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Forgot from "../components/AppRoutes/Forgot"

const FotgotPassword = () => {
  return (
    <Layout>
      <SEO title="Forgot Password" />
      <Forgot />
    </Layout>
  )
}

export default FotgotPassword
