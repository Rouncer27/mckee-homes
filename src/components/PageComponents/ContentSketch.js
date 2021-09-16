import React from "react"
import styled from "styled-components"
import { medWrapper, H3Black, H2Black } from "../../styles/helpers"

import HouseBlueprint from "../Images/HouseBlueprint"

const ContentSketch = ({ data }) => {
  return (
    <ContentSketchSection>
      <div className="wrapper">
        <div className="images">
          <div className="images__blueprint">
            <HouseBlueprint />
          </div>
        </div>
        <div className="content">
          <div className="title">
            <h2>{data.title}</h2>
          </div>
          <div
            className="paragraph"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
        </div>
      </div>
    </ContentSketchSection>
  )
}

const ContentSketchSection = styled.section`
  padding: 2.5rem 0 0 0;

  .wrapper {
    ${medWrapper};
  }

  .images {
    position: relative;
    width: calc(10%);

    &__blueprint {
      position: absolute;
      top: 0;
      left: -20rem;
      width: 45rem;

      @media (min-width: 768px) {
        top: -5rem;
        left: -10rem;
        width: 53rem;
      }
    }
  }

  .content {
    width: calc(100%);
    padding: 0;

    @media (min-width: 768px) {
      width: calc(90%);
      padding: 0 3rem;
    }

    .title {
      margin-bottom: 1rem;

      h2 {
        ${H2Black};
        margin: 0;
      }
    }

    p {
      ${H3Black};
    }
  }
`

export default ContentSketch
