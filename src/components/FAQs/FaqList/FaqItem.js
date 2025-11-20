import React, { useState, useRef } from "react"
import styled from "styled-components"
import { FaArrowRight, FaArrowDown } from "react-icons/fa"
import { colors, H3Black, standardWysiwyg } from "../../../styles/helpers"

const FaqItem = ({ question, answer }) => {
  const [setActive, setActiveState] = useState("")
  const [setHeight, setHeightState] = useState("0px")
  const content = useRef(null)

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "")
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    )
  }
  return (
    <FaqItemStyled>
      <button
        type="button"
        className={`faqSingle__question ${setActive}`}
        onClick={toggleAccordion}
      >
        <p>{question}</p>
        <span className="icon">
          {setActive === "active" ? <FaArrowDown /> : <FaArrowRight />}
        </span>
      </button>
      <div
        className={`faqSingle__answer ${setActive}`}
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
      >
        <div
          className="faqSingle__answer--inner"
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      </div>
    </FaqItemStyled>
  )
}

const FaqItemStyled = styled.div`
  margin: 0;
  margin-bottom: 1rem;
  overflow: hidden;

  .faqSingle__question {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 2rem;
    background-color: rgba(#dae2e3, 0.4);
    border: none;
    outline: none;
    text-align: left;
    cursor: pointer;

    p {
      ${H3Black}
      margin: 0;
      padding-right: 4rem;
      text-transform: uppercase;
    }
  }

  .icon {
    position: absolute;
    top: 0;
    right: 1rem;
    bottom: 0;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    margin: auto;
    transition: transform 0.6s ease;
    color: ${colors.black};

    svg {
      display: block;
      width: 4rem;
      height: 4rem;
      transition: transform 0.6s ease;
      transform-origin: center;
    }
  }

  .faqSingle__answer {
    background-color: white;
    overflow: hidden;
    transition: max-height 0.6s ease;
    transition: 0.6s all ease;
    opacity: 0;
    visibility: hidden;

    &.active {
      opacity: 1;
      visibility: visible;
    }

    &--inner {
      ${standardWysiwyg};
      padding: 2rem 1rem;
    }
  }
`

export default FaqItem
