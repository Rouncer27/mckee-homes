import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { fonts, fontSizer, colors, B2White } from "../../styles/helpers"
import scrollTo from "gatsby-plugin-smoothscroll"

const handleScrollPosition = bookBtn => {
  if (window.scrollY >= 200) {
    bookBtn.classList.add("active-button")
  } else {
    bookBtn.classList.remove("active-button")
  }
}

const addScrollEvent = bookBtn => {
  window.addEventListener("scroll", () => {
    handleScrollPosition(bookBtn)
  })
}

const BackToTop = () => {
  const bookBtn = useRef(null)
  useEffect(() => {
    if (typeof window !== "undefined") {
      addScrollEvent(bookBtn.current)
    } else {
      return
    }
  }, [])

  return (
    <BackToTopStyled ref={bookBtn}>
      <button className="inner-button" onClick={() => scrollTo("body")}>
        Back To Top
      </button>
    </BackToTopStyled>
  )
}

const BackToTopStyled = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
  position: fixed;
  top: 1rem;
  right: 1rem;
  width: 6rem;
  height: 6rem;
  background: rgba(21, 66, 144, 0.45);
  transition: all 0.3s ease-in-out;
  transform: translateX(200%);
  border-radius: 50%;
  box-shadow: 5px 3px 6px 0 rgba(0, 0, 0, 0.16);
  overflow: hidden;
  z-index: 9999999999999;

  @media (min-width: 768px) {
    top: 5rem;
    right: 5rem;
    width: 8rem;
    height: 8rem;
  }

  &.active-button {
    transform: translateX(0%);
  }

  .inner-button {
    ${B2White};
    width: 6rem;
    height: 6rem;
    padding: 0.5rem;
    background: transparent;
    border: none;
    transition: all 0.3s ease-in-out;
    text-align: center;
    line-height: 1.11;
    cursor: pointer;

    @media (min-width: 768px) {
      width: 8rem;
      height: 8rem;
    }
  }

  &:hover {
    background: rgba(165, 182, 186, 1);

    .inner-button {
      color: #fff;
    }
  }
`

export default BackToTop
