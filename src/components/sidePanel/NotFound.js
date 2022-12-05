import React from "react"
import styled from "styled-components"
import { B1Black } from "../../styles/helpers"

const NotFound = () => {
  return (
    <NotFoundDiv>
      <div className="wrapper">
        <p>
          Sorry, there was no data found on this lot. Please pick another lot,
          thank you.
        </p>
      </div>
    </NotFoundDiv>
  )
}

const NotFoundDiv = styled.div`
  width: 100%;

  .wrapper {
    max-width: 40rem;
    margin: 2rem auto;
    padding: 0 2rem;
  }

  p {
    ${B1Black};
  }
`

export default NotFound
