import React, { useState, useRef } from "react"
import styled from "styled-components"
import { Btn1Grey, colors, H2Grey } from "../../styles/helpers"

import Wysiwyg from "./Wysiwyg"

const JobPost = ({ post }) => {
  const [setActive, setActiveState] = useState("")
  const [setHeight, setHeightState] = useState("0px")
  const [setRotate, setRotateState] = useState("icon")
  const content = useRef(null)

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "")
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    )
    setRotateState(setActive === "active" ? "icon" : "icon rotate")
  }

  return (
    <DivStyled>
      <button
        className={`job-position-title ${setActive}`}
        onClick={toggleAccordion}
      >
        <h2>{post.node.title}</h2>
        <span className={`${setRotate}`}>&#8249;</span>
      </button>

      <div
        className="job-details"
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
      >
        <div>
          <Wysiwyg data={{ wysiwyg: post.node.acfJobPosts.jobPost }} />
        </div>
        <div className="button">
          <a href={`mailto: ${post.node.acfJobPosts.emailAddress}`}>
            Apply Now
          </a>
        </div>
      </div>
    </DivStyled>
  )
}

const DivStyled = styled.div`
  width: calc(80%);
  margin: 0 auto 2.5rem;
  padding: 2.5rem 0;
  overflow: hidden;
  border-bottom: 0.25rem solid ${colors.colorTertiary};

  .job-position-title {
    width: 100%;
    position: relative;
    border: none;
    text-align: left;
    cursor: pointer;

    h2 {
      ${H2Grey};
      width: 100%;
      margin-top: 0;
      margin-bottom: 0;
      padding-right: 4rem;
      transition: all 0.3s ease-out;
    }

    span {
      position: absolute;
      top: 50%;
      right: 2rem;
      transition: all 0.3s ease-out;
      transform: translateY(-50%) rotate(0deg);
      color: ${colors.colorPrimary};
      font-size: 4rem;
      cursor: pointer;

      ${
        "" /* &:hover {
        transform: translateY(-50%) rotate(-90deg);
      } */
      }
    }

    &:hover {
      h2 {
        color: ${colors.colorPrimary};
      }

      ${
        "" /* span {
        transform: translateY(-50%) rotate(-90deg);
      } */
      }
    }

    &.active {
      h2 {
        color: ${colors.colorPrimary};
      }

      span {
        transform: translateY(-50%) rotate(-90deg);
      }
    }
  }

  .job-details {
    overflow: hidden;
    transition: max-height 0.6s ease;

    .button {
      width: 100%;

      a {
        ${Btn1Grey};
      }
    }
  }
`

export default JobPost
