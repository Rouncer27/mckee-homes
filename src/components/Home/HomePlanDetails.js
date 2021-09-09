import React from "react"
import styled from "styled-components"
import { colors, standardWrapper, B1Black, B2Black } from "../../styles/helpers"

const HomePlanDetails = ({ title, details }) => {
  return (
    <SectionStyled>
      <div className="wrapper-details">
        <div className="wrapper-details__title">
          <h2>{title}</h2>
        </div>
        <div
          className="wrapper-details__content"
          dangerouslySetInnerHTML={{ __html: details }}
        />
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  margin-bottom: 2.5rem;

  .wrapper-details {
    ${standardWrapper};

    &__title {
      width: 100%;
      margin-bottom: 3rem;
      padding-top: 5rem;
      padding-bottom: 2.5rem;
      border-bottom: 0.25rem solid ${colors.colorTertiary};

      h2 {
        ${B1Black};
        margin: 0;
      }
    }

    &__content {
      width: 100%;
      columns: 2;

      ul {
        width: 100%;

        li {
          ${B2Black};
          margin-bottom: 1rem;
        }
      }
    }
  }
`

export default HomePlanDetails
