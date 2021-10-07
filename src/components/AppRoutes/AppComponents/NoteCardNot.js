import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { B1Black, H3Navy } from "../../../styles/helpers"

const NoteCardNot = ({ plan }) => {
  return (
    <HomeCard key={plan.id}>
      <p className="title">
        {plan.title} <span>No longer available</span>
      </p>
    </HomeCard>
  )
}

const HomeCard = styled.div`
  width: calc(100% / 3);
  padding: 2rem;

  .title {
    ${H3Navy};
    margin: 0;
    font-weight: 600;

    a {
      ${H3Navy};
      margin: 0;
      font-weight: 600;
    }
  }

  .notes {
    width: 100%;

    &__title {
      ${B1Black};
    }
  }
`

export default NoteCardNot
