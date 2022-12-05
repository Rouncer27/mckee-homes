import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { B1Black } from "../../styles/helpers"

const NotFound = () => {
  const [text, setText] = useState("")
  useEffect(() => {
    setTimeout(function () {
      setText(
        "Sorry, there was no information on this lot. Please pick another lot, thank you."
      )
    }, 2000)
  }, [])
  return (
    <NotFoundDiv>
      <div className="wrapper">
        <p>{text}</p>
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
