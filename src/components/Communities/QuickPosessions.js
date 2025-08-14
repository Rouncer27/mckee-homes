import React, { useRef, useEffect, useState } from "react"
import styled from "styled-components"
import { ChevronLeft, ChevronRight } from "lucide-react"
import {
  medWrapper,
  colors,
  B1Black,
  colorPrimary,
  colorTertiary,
  fontPrimary,
  H2Grey,
} from "../../styles/helpers"

import HomeDisplay from "../PageComponents/QuickPossessions/HomeDisplay"

const QuickPosessions = ({ currentSlug, quickPossessions }) => {
  // ** NEW ** //
  const scrollRef = useRef(null)
  const [isScrollable, setIsScrollable] = useState(false)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)
  // ** NEW ** //

  // ** OLD Exsiting ** //
  const currentCommunityQP = quickPossessions.edges.filter(home => {
    const displayHere =
      home?.node?.communities?.nodes?.filter(community => {
        return community.slug === currentSlug
      }).length > 0

    return displayHere
  })

  // ** OLD Exsiting ** //

  // ** NEW ** //
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

  // ** NEW ** //

  // ** OLD Exsiting ** //
  if (currentCommunityQP.length <= 0) return null
  // ** OLD Exsiting ** //

  return (
    <SectionStyled>
      <div className="wrapper">
        <div className="title">
          <h2>Community Quick Posessions Homes</h2>
        </div>

        <StyledCommunity>
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
              {currentCommunityQP.length > 0 ? (
                currentCommunityQP.map((home, index) => {
                  return <HomeDisplay key={index} home={home.node} />
                })
              ) : (
                <div className="no-homes-found">
                  <p>No Quick Posessions homes in this community</p>
                </div>
              )}
            </div>
          </div>
        </StyledCommunity>
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  .wrapper {
    ${medWrapper};
  }

  .title {
    width: 100%;
    margin-bottom: 3rem;
    padding-top: 5rem;
    border-bottom: 0.25rem solid ${colors.colorTertiary};

    h2 {
      ${B1Black};
      margin: 0;
    }
  }

  .show-homes {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
`

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

export default QuickPosessions
