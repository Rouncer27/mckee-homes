import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { fonts, fontSizer, colors } from "../../styles/helpers"
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
  background: rgba(21, 66, 144, 0.6);
  transition: all 0.3s ease-in-out;
  transform: translateX(200%);
  border-radius: 50%;
  box-shadow: 0.3rem 0.3rem 0.75rem ${colors.black};
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
    ${fontSizer(1.4, 1.6, 76.8, 150, 1.2)};
    display: flex;
    justify-content: center;
    align-self: center;
    align-items: center;
    width: 6rem;
    height: 6rem;
    padding: 0.5rem;
    background: transparent;
    border: none;
    transition: all 0.3s ease-in-out;
    text-align: center;
    color: #fff;
    font-family: ${fonts.fontPrimary};
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
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
