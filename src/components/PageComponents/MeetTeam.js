import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { B1White, Btn1Grey, colors, medWrapper } from "../../styles/helpers"
import { H2White } from "../../../../019arbi/src/styles/helpers"

const MeetTeam = ({ data }) => {
  if (!data.displayMeetTeam) return null
  return (
    <SectionStyled>
      <div className="wrapper">
        <div className="inner-content">
          <div className="title">
            <h2>{data.title}</h2>
          </div>
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
          <div className="button">
            <Link to={`/${data.buttonSlug}`}>{data.buttonText}</Link>
          </div>
        </div>
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  padding: 5rem 0;
  background-color: ${colors.colorPrimary};

  .wrapper {
    ${medWrapper};
  }

  .inner-content {
    width: 100%;
    padding: 0 7.5rem;
  }

  .title {
    width: 100%;
    h2 {
      ${H2White};
      font-weight: normal;
    }
  }

  .content {
    width: 100%;
    p {
      ${B1White};
    }
  }

  .button {
    width: 100%;
    a {
      ${Btn1Grey};

      &:hover {
        border-color: ${colors.colorSecondary};
        background-color: ${colors.colorSecondary};
      }
    }
  }
`

export default MeetTeam
