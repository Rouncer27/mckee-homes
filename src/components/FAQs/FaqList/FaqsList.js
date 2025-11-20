import React from "react"
import styled from "styled-components"
import FaqItem from "./FaqItem"
import { medWrapper } from "../../../styles/helpers"

const FaqsList = ({ data }) => {
  console.log("data", data)
  return (
    <StyledSection>
      <div className="wrapper">
        <div className="faqsContainer">
          {data?.questionsAndAnswers.map((faq, index) => {
            return (
              <FaqItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            )
          })}
        </div>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.div`
  position: relative;
  padding-bottom: 2.5rem;

  .wrapper {
    ${medWrapper};
  }

  .faqsContainer {
    width: 100%;
    padding: 1.5rem 0;

    @media (min-width: 768px) {
    }
  }
`

export default FaqsList
