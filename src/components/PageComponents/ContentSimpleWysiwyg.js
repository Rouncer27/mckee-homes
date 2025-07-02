import React from "react"
import styled from "styled-components"
import { H1Navy, standardWrapper, standardWysiwyg } from "../../styles/helpers"

const ContentSimpleWysiwyg = ({ data }) => {
  return (
    <SectionStyled>
      <div className="wrapper">
        <div className="title">
          <h2>{data.title}</h2>
        </div>
        <div className="content">
          <div
            className="content__wysiwyg"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
        </div>
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  .wrapper {
    ${standardWrapper};
  }

  .title {
    width: 100%;

    h2 {
      ${H1Navy};
    }
  }

  .content {
    width: 100%;

    &__wysiwyg {
      ${standardWysiwyg};
    }
  }
`

export default ContentSimpleWysiwyg
