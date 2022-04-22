import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Reset from "../components/AppRoutes/Reset"

const ResetPassword = props => {
  return (
    <Layout>
      <SEO title="Password Reset" />
      <Reset location={props.location.search} />
    </Layout>
  )
}

export default ResetPassword
