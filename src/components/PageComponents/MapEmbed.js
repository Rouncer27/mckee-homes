import React from "react"
import styled from "styled-components"

const MapEmbed = props => {
  return (
    <StyledDiv>
      <di className="map-embed">
        <div dangerouslySetInnerHTML={{ __html: props.data.mapEmbed }} />
      </di>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  .map-embed {
    width: 100%;

    p,
    div,
    iframe {
      width: 100% !important;
    }

    iframe {
      min-height: 50rem;
    }
  }
`

export default MapEmbed
