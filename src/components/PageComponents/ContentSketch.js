import React, { useEffect } from "react"
import styled from "styled-components"
import { medWrapper, H3Black, H2Black } from "../../styles/helpers"
import HouseBlueprint from "../Images/HouseBlueprint"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const ContentSketch = ({ data }) => {
  const secID = data.sectionId ? data.sectionId : ""

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".content-sketch-section",
          markers: false,
          start: "top 45%",
          toggleActions: "play none none none",
        },
      })
      .fromTo(
        ".content-sketch-section .content .title",
        {
          autoAlpha: 0,
          y: 150,
          duration: 1,
        },
        {
          autoAlpha: 1,
          y: 0,
        }
      )
      .fromTo(
        ".content-sketch-section .content .paragraph",
        {
          autoAlpha: 0,
          y: 150,
          duration: 1,
        },
        {
          autoAlpha: 1,
          y: 0,
        }
      )
  }, [])

  return (
    <ContentSketchSection className="content-sketch-section" id={secID}>
      <div className="wrapper">
        <div className="images">
          <div className="images__blueprint">
            <HouseBlueprint />
          </div>
        </div>
        <div className="content">
          <div className="title">
            <h2>{data.title}</h2>
          </div>
          <div
            className="paragraph"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
        </div>
      </div>
    </ContentSketchSection>
  )
}

const ContentSketchSection = styled.section`
  padding: 2.5rem 0 0 0;

  .wrapper {
    ${medWrapper};
  }

  .images {
    position: relative;
    width: calc(10%);

    &__blueprint {
      position: absolute;
      top: 0;
      left: -20rem;
      width: 45rem;

      @media (min-width: 768px) {
        top: -5rem;
        left: -10rem;
        width: 53rem;
      }
    }
  }

  .content {
    width: calc(100%);
    padding: 0;

    @media (min-width: 768px) {
      width: calc(90%);
      padding: 0 3rem;
    }

    .title {
      margin-bottom: 1rem;

      h2 {
        ${H2Black};
        margin: 0;
      }
    }

    p {
      ${H3Black};
    }
  }
`

export default ContentSketch
