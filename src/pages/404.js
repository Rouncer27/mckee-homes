import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import styled from "styled-components"
import { B1Black, Btn1Navy, H1Navy, standardWrapper } from "../styles/helpers"
import { Link } from "gatsby"

const NotFoundPage = () => {
  return (
    <Layout>
      <Seo title="404: Not found" />
      <StyledSection>
        <div className="wrapper">
          <div className="title">
            <h1>404: Page Not Found</h1>
          </div>
          <div className="content">
            <p>
              Sorry, it seems you were trying to access a page that doesn't
              exist.
            </p>
          </div>
          <div className="link">
            <p>
              Find you way back{" "}
              <span>
                <Link to="/">home</Link>
              </span>
            </p>
          </div>
        </div>
      </StyledSection>
    </Layout>
  )
}

const StyledSection = styled.section`
  padding: 5rem 0;

  .wrapper {
    ${standardWrapper};
  }

  .title {
    width: 100%;
    margin-bottom: 5rem;
    text-align: center;

    h1 {
      ${H1Navy};
    }
  }

  .content {
    width: 100%;
    text-align: center;

    p {
      ${B1Black};
    }
  }

  .link {
    width: 100%;
    text-align: center;

    p {
      ${B1Black};

      span {
        display: block;
        margin-top: 2.5rem;
      }

      a {
        ${Btn1Navy};
      }
    }
  }
`

export default NotFoundPage
