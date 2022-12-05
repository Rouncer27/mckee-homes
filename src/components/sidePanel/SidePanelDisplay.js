import React from "react"
import styled from "styled-components"
import { B1Black, colors, H3Navy, H4Navy } from "../../styles/helpers"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import MainLogo from "../Logos/MainLogo"

const SidePanelDisplay = ({ community, lotWidth, buildPocket, lotAddress }) => {
  console.log("community", community)
  return (
    <StyledDiv>
      <div className="wrapper">
        <div className="logo">
          <MainLogo />
        </div>
        <div className="title">
          <h2>{lotAddress}</h2>
          <p>{community.title}</p>
        </div>
        <div className="details">
          {lotWidth ? (
            <p>
              Lot Width: <span>{lotWidth} meters</span>
            </p>
          ) : null}
          {buildPocket ? (
            <p>
              Build pocket: <span>{buildPocket}</span>
            </p>
          ) : null}
        </div>
        {community.acfCommunity && community.acfCommunity.salesPersonOne ? (
          <div className="sales">
            <h4>Sales Team</h4>
            <div className="sales__one">
              <div className="image">
                <GatsbyImage
                  image={getImage(
                    community.acfCommunity.salesPersonOne.acfSalesTeam.image
                      .localFile.childImageSharp.gatsbyImageData
                  )}
                  alt={
                    community.acfCommunity.salesPersonOne.acfSalesTeam.image
                      .altText
                  }
                  layout="fullWidth"
                  formats={["auto", "webp", "avif"]}
                />
              </div>
              <div className="contact">
                <p>{community.acfCommunity.salesPersonOne.title}</p>
                <p>
                  cell:{" "}
                  <a
                    href={`tel: +1${community.acfCommunity.salesPersonOne.acfSalesTeam.cell}`}
                  >
                    {community.acfCommunity.salesPersonOne.acfSalesTeam.cell}
                  </a>
                </p>
                <p>
                  office:{" "}
                  <a
                    href={`tel: +1${community.acfCommunity.salesPersonOne.acfSalesTeam.phone}`}
                  >
                    {community.acfCommunity.salesPersonOne.acfSalesTeam.phone}
                  </a>
                </p>
                <p>
                  email:{" "}
                  <a
                    href={`mailto:${community.acfCommunity.salesPersonOne.acfSalesTeam.email}`}
                  >
                    {community.acfCommunity.salesPersonOne.acfSalesTeam.email}
                  </a>
                </p>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  width: 100%;

  .wrapper {
    max-width: 40rem;
    margin: 2rem auto;
  }

  .logo {
    width: 100%;
    max-width: 15rem;
    margin: 2rem 0rem;
  }

  .title {
    width: 100%;
    margin-bottom: 1.5rem;

    h2 {
      ${H3Navy};
      margin: 0;
      font-weight: bold;
    }

    p {
      ${H4Navy};
      margin: 0;
    }
  }

  .details {
    width: 100%;

    p {
      ${B1Black};
      margin: 0;
    }
  }

  .sales {
    width: 100%;

    h4 {
      ${H4Navy};
      margin-bottom: 1rem;
    }

    &__one {
      width: 100%;

      .image {
        max-width: 10rem;
        margin-bottom: 1rem;
      }

      .contact {
        width: 100%;

        p {
          ${B1Black};
          margin: 0;
          margin-bottom: 0.25rem;

          a {
            ${B1Black};

            &:hover {
              color: ${colors.colorPrimary};
            }
          }
        }
      }
    }
  }
`

export default SidePanelDisplay
