import * as React from "react"
import { Link } from "gatsby"

import TopNav from "./Navigation/TopNav/TopNav"

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
    <TopNav />
  </header>
)

export default Header
