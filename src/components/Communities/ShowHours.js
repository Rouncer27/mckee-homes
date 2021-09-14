import React from "react"
import styled from "styled-components"
import { B1Black, Btn1Grey, H4Navy } from "../../styles/helpers"

const ShowHours = ({ hours, map }) => {
  return (
    <StyledDiv>
      <div className="wrapper">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d19961.79109256606!2d-114.00826420000001!3d51.288603849999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sca!4v1631646971064!5m2!1sen!2sca"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="hours">
          <div className="hours__title">
            <h2>Show Home Hours</h2>
          </div>
          <div
            className="hours__content"
            dangerouslySetInnerHTML={{ __html: hours }}
          />

          <div className="hours__directions">
            <a href={map}>Directions to show home</a>
          </div>
        </div>
      </div>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  padding: 2rem 0;

  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .map {
    width: calc(40%);
  }

  .hours {
    width: calc(60%);
    padding: 2rem 6rem;

    &__title {
      h2 {
        ${H4Navy};
        text-transform: uppercase;
      }
    }

    &__content {
      p {
        ${B1Black};
      }
    }

    &__directions {
      a {
        ${Btn1Grey};
      }
    }
  }
`

export default ShowHours
