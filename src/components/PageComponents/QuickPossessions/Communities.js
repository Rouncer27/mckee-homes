import React, { useRef, useEffect, useState } from "react"
import HomeDisplay from "./HomeDisplay"
import { ChevronLeft, ChevronRight } from "lucide-react"
import styled from "styled-components"
import {
  colorPrimary,
  colorTertiary,
  fontPrimary,
  H2Grey,
} from "../../../styles/helpers"

const Communities = ({ community, index }) => {
  const scrollRef = useRef(null)

  const [isScrollable, setIsScrollable] = useState(false)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const scrollByAmount = direction => {
    const container = scrollRef.current
    if (!container) return

    // Find a child card to measure its width
    const card = container.querySelector(".qp-home-card")
    const cardWidth = card?.offsetWidth || 300

    // Optional: include spacing/margin if needed
    const gap = 20 // adjust if your cards have margin
    const totalScroll = (cardWidth + gap) * 1 // scroll 1.5 cards at a time

    scrollRef.current?.scrollBy({
      left: direction * totalScroll,
      behavior: "smooth",
    })
  }

  const checkScrollPosition = () => {
    const el = scrollRef.current
    if (!el) return

    setAtStart(el.scrollLeft <= 0)
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1) // -1 for rounding
  }

  const checkIfScrollable = () => {
    const el = scrollRef.current
    if (!el) return

    setIsScrollable(el.scrollWidth > el.clientWidth)
    checkScrollPosition()
  }

  useEffect(() => {
    checkIfScrollable()

    const el = scrollRef.current
    if (!el) return

    el.addEventListener("scroll", checkScrollPosition)
    window.addEventListener("resize", checkIfScrollable)

    return () => {
      el.removeEventListener("scroll", checkScrollPosition)
      window.removeEventListener("resize", checkIfScrollable)
    }
  }, [])

  return (
    <StyledCommunity key={index} className="qp-community">
      <div className="qp-community-title">
        <h2>{community.name}</h2>
      </div>
      <div className="qp-community-controls">
        <button
          className="scroll-btn left"
          onClick={() => scrollByAmount(-1)}
          aria-label="Scroll left"
          disabled={atStart}
        >
          <ChevronLeft size={48} />
        </button>
        <button
          className="scroll-btn right"
          onClick={() => scrollByAmount(1)}
          aria-label="Scroll right"
          disabled={atEnd}
        >
          <ChevronRight size={48} />
        </button>
      </div>
      <div className="qp-community-homes-wrapper">
        {isScrollable && !atStart && <div className="fade fade-left" />}
        {isScrollable && !atEnd && <div className="fade fade-right" />}
        <div className="qp-community-homes" ref={scrollRef}>
          {community.homes.length > 0 ? (
            community.homes.map(home => {
              return <HomeDisplay key={home.node.slug} home={home.node} />
            })
          ) : (
            <div className="no-homes-found">
              <p>
                Sorry, it doesn’t look like we have any available quick
                possession homes at the moment in this community.
              </p>
            </div>
          )}
        </div>
      </div>
    </StyledCommunity>
  )
}

const StyledCommunity = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 2.5rem;
  padding-bottom: 2.5rem;
  border-bottom: 0.5rem solid ${colorTertiary};
  width: 100%;

  .qp-community-controls {
    .scroll-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      z-index: 2;
      top: 50%;
      width: 6rem;
      height: 8rem;
      transform: translateY(-50%);
      background: ${colorPrimary};
      border: 1px solid #000;
      border-radius: 0;
      padding: 0.5rem;
      color: #fff;
      cursor: pointer;
      opacity: 0.9;
      transition: background-color 0.2s ease, color 0.2s ease,
        transform 0.2s ease, box-shadow 0.2s ease;

      &:hover {
        opacity: 1;
        color: ${colorPrimary};
        background: #fff;
        transform: translateY(-50%) scale(1.05);
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
      }

      &:active {
        transform: translateY(-50%) scale(0.95);
        box-shadow: inset 0 0 0.5rem rgba(0, 0, 0, 0.3);
      }

      &:disabled {
        opacity: 0;
        cursor: default;
        pointer-events: none;
        cursor: default;
      }

      &.left {
        left: -2rem;
      }

      &.right {
        right: -2rem;
      }
    }
  }

  .qp-community-title {
    width: 100%;
    padding-left: 1rem;

    h2 {
      ${H2Grey};
      font-family: ${fontPrimary};
      text-transform: uppercase;
    }
  }

  .qp-community-homes-wrapper {
    position: relative;
    width: 100%;
    overflow: hidden; // ensures fade overlays aren’t scrolled

    .fade {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 4rem;
      z-index: 1;
      pointer-events: none;
      transition: opacity 0.3s ease-in-out;

      &.fade-left {
        left: 0;
        background: linear-gradient(
          to right,
          rgba(255, 255, 255, 1),
          transparent
        );
      }

      &.fade-right {
        right: 0;
        background: linear-gradient(
          to left,
          rgba(255, 255, 255, 1),
          transparent
        );
      }
    }
  }

  .qp-community-homes {
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    width: 100%;

    &::-webkit-scrollbar {
      height: 0.7rem;
    }

    &::-webkit-scrollbar-track {
      background: none;
      border-radius: 1rem;
    }

    &::-webkit-scrollbar-thumb {
      background: ${colorPrimary};
      border-radius: 1rem;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: ${colorTertiary};
      border-radius: 1rem;
      cursor: pointer;
    }
  }

  .no-homes-found {
    padding-left: 1rem;
  }
`

export default Communities
