import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import {
  B1Black,
  colors,
  H1Navy,
  H3Black,
  standardWrapper,
} from "../../styles/helpers"

const BuildingFuturesStatus = ({ data }) => {
  return (
    <SectionStyled>
      <div className="wrapper">
        <div className="title">
          <h2>{data.title}</h2>
        </div>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
        <div className="steps">
          {data.stages.map((stage, index) => {
            if (stage.linkRequired) {
              return (
                <StageLink
                  key={index}
                  to={`/${stage.link}`}
                  stagecomplete={stage.complete}
                >
                  <h3>{stage.title}</h3>
                </StageLink>
              )
            } else {
              return (
                <Stage key={index} stagecomplete={stage.complete}>
                  <h3>{stage.title}</h3>
                </Stage>
              )
            }
          })}
          <div className="steps__progress" />
        </div>
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  margin: 5rem auto;
  background-color: #efefef;

  .wrapper {
    ${standardWrapper};
  }

  .title {
    width: 100%;
    text-align: center;

    h2 {
      ${H1Navy};
    }
  }

  .content {
    width: 100%;
    text-align: center;

    p {
      ${B1Black};
    }
  }

  .steps {
    position: relative;
    width: 100%;
    margin-top: 5rem;
    margin-bottom: 5rem;
    padding-top: 7.5rem;
    padding-bottom: 7.5rem;

    &__progress {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 50%;
      width: 0.5rem;
      background-color: ${colors.colorPrimary};
      transform: translateX(-50%);
      content: "";
      z-index: -1;

      &::before,
      &::after {
        position: absolute;
        left: 50%;
        width: 5.5rem;
        height: 5.5rem;
        background-color: ${colors.colorPrimary};
        border-radius: 50%;
        transform: translateX(-50%);
        content: "";
      }

      &::before {
        top: 0;
      }

      &::after {
        bottom: 0;
      }
    }
  }
`

const Stage = styled.div`
  position: relative;
  width: 35rem;
  margin: 2rem auto;
  padding: 4.5rem 0.75rem;
  border: 0.3rem solid ${colors.colorPrimary};
  background-color: ${props =>
    props.stagecomplete ? colors.colorPrimary : colors.white};
  text-align: center;
  z-index: 50;

  h3 {
    ${H3Black};
    width: 100%;
    margin: 0;
    padding: 0;
    color: ${props => (props.stagecomplete ? colors.white : colors.black)};
    text-transform: uppercase;
  }
`

const StageLink = styled(Link)`
  position: relative;
  display: block;
  width: 35rem;
  margin: 2rem auto;
  padding: 4.5rem 0.75rem;
  border: 0.3rem solid ${colors.colorPrimary};
  background-color: ${props =>
    props.stagecomplete ? colors.colorPrimary : colors.white};
  text-align: center;
  z-index: 50;

  &:hover {
    background-color: ${props =>
      props.stagecomplete ? colors.colorAccent : colors.colorShad};
  }

  h3 {
    ${H3Black};
    width: 100%;
    margin: 0;
    padding: 0;
    color: ${props => (props.stagecomplete ? colors.white : colors.black)};
    text-transform: uppercase;
  }
`

export default BuildingFuturesStatus
