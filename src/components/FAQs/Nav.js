import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { B1Black, medWrapper } from "../../styles/helpers"

const Nav = () => {
  return (
    <NavStyled className="faq-nav">
      <div className="faq-nav-wrapper">
        <div className="faq-nav-link">
          <Link to="/faqs">{`< Back to all Frequently Asked Questions`}</Link>
        </div>
      </div>
    </NavStyled>
  )
}

const NavStyled = styled.nav`
  padding: 4rem 0;

  .faq-nav-wrapper {
    ${medWrapper};
  }

  .faq-nav-link {
    width: 100%;
    text-align: center;

    a {
      ${B1Black};
      text-transform: uppercase;
    }
  }
`

export default Nav
