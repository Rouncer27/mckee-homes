import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import styled from "styled-components"
import { B2White, colors, medWrapper } from "../styles/helpers"

import Horizontal from "./SocialMedia/Horizontal"

const getData = graphql`
  {
    quickLinks: wpMenu(name: { eq: "Quick Links Menu" }) {
      name
      menuItems {
        nodes {
          label
          url
          parentDatabaseId
          parentId
          id
          databaseId
        }
      }
    }
  }
`

const Footer = () => {
  const data = useStaticQuery(getData)
  const { quickLinks } = data
  console.log(quickLinks)
  return (
    <FooterStyled>
      <div className="wrapper">
        <div className="foot-social">
          <Horizontal />
        </div>
        <div className="foot-quick-links">
          <nav>
            <ul>
              {quickLinks.menuItems.nodes.map(item => {
                const slug = item.url
                  .split("/")
                  .filter(item => item !== "")
                  .join("/")
                return (
                  <li key={item.id}>
                    <Link to={`/${slug}`}>{item.label}</Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
        <div className="foot-mail">
          <p>
            <a href="#">Join our mailing list</a>
          </p>
        </div>
      </div>
      <div className="foot-bottom">
        <ul>
          <li>
            <Link to="">Privacy</Link>
          </li>
          <li>
            <Link to="">Disclaimer</Link>
          </li>
        </ul>
      </div>
    </FooterStyled>
  )
}

const FooterStyled = styled.footer`
  background-color: ${colors.colorPrimary};

  .wrapper {
    ${medWrapper};
    align-items: center;
  }

  .foot-social {
    width: calc(15%);
  }

  .foot-quick-links {
    width: calc(70%);

    ul {
      display: flex;
      justify-content: center;

      li {
        a {
          ${B2White};
          padding-right: 3rem;
          padding-left: 3rem;
          border-right: solid 0.1rem ${colors.white};
          text-align: center;
          text-transform: uppercase;

          &:hover {
            color: ${colors.colorSecondary};
          }
        }
      }

      li:last-of-type {
        a {
          border-right: solid 0 ${colors.white};
        }
      }
    }
  }

  .foot-mail {
    width: calc(15%);

    p {
      margin: 0;
      text-align: right;

      a {
        ${B2White};
        transition: all 0.3s ease-out;
        font-weight: bold;
        text-decoration: underline;
        text-transform: uppercase;

        &:hover {
          color: ${colors.colorSecondary};
        }
      }
    }
  }

  .foot-bottom {
    width: calc(100%);
    padding: 1rem 4rem;
    background-color: #42454a;

    ul {
      width: 100%;
      display: flex;
      justify-content: center;

      li {
        a {
          ${B2White};
          padding-right: 1rem;
          padding-left: 1rem;
          text-align: center;
          text-transform: uppercase;
          border-right: solid 0.1rem ${colors.white};

          &:hover {
            color: ${colors.colorPrimary};
          }
        }
      }

      li:last-of-type {
        a {
          border-right: solid 0 ${colors.white};
        }
      }
    }
  }
`

export default Footer
