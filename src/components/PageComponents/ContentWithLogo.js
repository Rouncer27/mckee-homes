import React from "react"
import styled from "styled-components"

import FullLogo from "../Logos/FullLogo"
import HouseBlueprint from "../Images/HouseBlueprint"
import { H3Black, medWrapper } from "../../styles/helpers"

const ContentWithLogo = ({ data }) => {
  return (
    <ContentWithLogoSection logoside={data.logoSide}>
      <div className="wrapper">
        <div className="images">
          <div className="images__logo">
            <FullLogo />
          </div>
          <div className="images__blueprint">
            <HouseBlueprint />
          </div>
        </div>
        <div className="content">
          <div dangerouslySetInnerHTML={{ __html: data.content }} />
        </div>
      </div>
    </ContentWithLogoSection>
  )
}

const ContentWithLogoSection = styled.section`
  margin: 4rem auto;

  .wrapper {
    ${medWrapper};
    flex-direction: ${props =>
      props.logoside === "left" ? "row" : "row-reverse"};
  }

  .images {
    position: relative;
    width: calc(100%);
    height: 27.5rem;

    @media (min-width: 768px) {
      width: calc(33.333333%);
      height: 50rem;
    }

    &__logo {
      position: absolute;
      top: 0;
      right: 2rem;
      left: 2rem;
      max-width: 27.5rem;
      margin: 0 auto;
    }

    &__blueprint {
      position: absolute;
      right: ${props => (props.logoside === "left" ? "2rem" : "-7.5rem")};
      bottom: 0;
      left: ${props => (props.logoside === "left" ? "-7.5rem" : "2rem")};
    }
  }

  .content {
    width: calc(100%);

    @media (min-width: 768px) {
      width: calc(66.666666%);
      padding: 0 3rem;
    }

    p {
      ${H3Black};
    }
  }
`

export default ContentWithLogo
