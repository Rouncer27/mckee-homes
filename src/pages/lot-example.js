import React from "react"
import styled from "styled-components"
import { H1Navy, standardWrapper } from "../styles/helpers"

import Layout from "../components/Layout"

const LotExample = () => {
  return (
    <Layout>
      <StyledMap>
        <div className="wrapper">
          <div className="title">
            <h1>Lot Example</h1>
          </div>

          <div className="map" id="gmapdiv">
            <iframe
              id="lwmap"
              src="https://maps.lotworks.ca/maps/mckee/vistacrossing"
              style={{ border: 0, width: "100%", height: "100%" }}
            ></iframe>
          </div>
        </div>
      </StyledMap>
    </Layout>
  )
}

const StyledMap = styled.div`
  .wrapper {
    ${standardWrapper};
  }

  .title {
    width: 100%;

    h1 {
      ${H1Navy};
    }
  }

  .map {
    width: 100%;
    height: 75vh;
  }
`

export default LotExample
