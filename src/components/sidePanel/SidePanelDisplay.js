import React from "react"
import styled from "styled-components"
import { B1Black, B1Navy, colors, H3Navy, H4Navy } from "../../styles/helpers"

import MainLogo from "../Logos/MainLogo"
import SalesPerson from "./SalesPerson"
import { Link } from "gatsby"
import HomeDisplay from "../PageComponents/HomePlans/HomeDisplay"

const SidePanelDisplay = ({
  community,
  lotWidth,
  buildPocket,
  lotAddress,
  matchedFloorPlans,
  matchedQPHome,
}) => {
  // console.log("community", community)
  // console.log("INSIDE SIDE PANEL: ", matchedFloorPlans)
  // console.log("INSIDE matchedQPHome", matchedQPHome)
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
        {/* <div className="details">
          {lotWidth ? (
            <p>
              Lot Width: <span>{lotWidth} Metres</span>
            </p>
          ) : null}
          {buildPocket ? (
            <p>
              Build pocket: <span>{buildPocket}</span>
            </p>
          ) : null}
        </div> */}
        {community.acfCommunity && community.acfCommunity.salesPersonOne ? (
          <div className="sales">
            <h4>Sales Team</h4>
            <SalesPerson
              image={
                community.acfCommunity.salesPersonOne.acfSalesTeam.image
                  .localFile.childImageSharp.gatsbyImageData
              }
              imageAlt={
                community.acfCommunity.salesPersonOne.acfSalesTeam.image.altText
              }
              name={community.acfCommunity.salesPersonOne.title}
              cell={community.acfCommunity.salesPersonOne.acfSalesTeam.cell}
              phone={community.acfCommunity.salesPersonOne.acfSalesTeam.phone}
              email={community.acfCommunity.salesPersonOne.acfSalesTeam.email}
            />

            {community.acfCommunity.salesPersonTwo ? (
              <SalesPerson
                image={
                  community.acfCommunity.salesPersonTwo.acfSalesTeam.image
                    .localFile.childImageSharp.gatsbyImageData
                }
                imageAlt={
                  community.acfCommunity.salesPersonTwo.acfSalesTeam.image
                    .altText
                }
                name={community.acfCommunity.salesPersonTwo.title}
                cell={community.acfCommunity.salesPersonTwo.acfSalesTeam.cell}
                phone={community.acfCommunity.salesPersonTwo.acfSalesTeam.phone}
                email={community.acfCommunity.salesPersonTwo.acfSalesTeam.email}
              />
            ) : null}
          </div>
        ) : null}
        {!!matchedQPHome ? (
          <div className="floor-plans-list">
            <h4>Quick Possession Details</h4>
            <div>
              <a
                target="_blank"
                rel="noreferrer"
                href={`https://www.mckeehomes.com/quick-possessions/${matchedQPHome.node.slug}`}
              >
                {matchedQPHome.node.title}
              </a>
            </div>
          </div>
        ) : null}
        {matchedFloorPlans.length > 0 ? (
          <>
            <div className="floor-plans-list">
              <h4>Home Plans for this lot</h4>
              {matchedFloorPlans.map((plan, index) => {
                return (
                  <HomeDisplay
                    key={index}
                    home={plan.node}
                    externalLink={`https://www.mckeehomes.com/home-plans/${plan.node.slug}`}
                  />
                )
              })}
            </div>
          </>
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
    padding: 0 2rem;
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

    &__one:nth-of-type(2) {
      margin-top: 4rem;
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

  .floor-plans-list {
    width: 100%;

    h4 {
      ${H3Navy};
      font-weight: bold;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }

    a {
      ${B1Navy};
      font-weight: bold;

      &:hover {
        color: ${colors.colorAccent};
      }
    }
  }
`

export default SidePanelDisplay
