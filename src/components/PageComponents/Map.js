import React from "react"
import styled from "styled-components"
import { B1Black, H1Navy } from "../../styles/helpers"

const Map = ({ data }) => {
  return (
    <StyledSection>
      <div className="wrapper">
        <div className="content">
          <h2>{data.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: data.content }} />
        </div>
        <div className="map">
          <div dangerouslySetInnerHTML={{ __html: data.mapEmbedCode }} />
        </div>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  margin: 2.5rem auto;

  .wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .content {
    width: calc(50% - 6rem);
    margin-right: 6rem;
    text-align: right;

    h2 {
      ${H1Navy};
    }

    p {
      ${B1Black};
    }
  }

  .map {
    width: calc(50%);
  }
`

export default Map
