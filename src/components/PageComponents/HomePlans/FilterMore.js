import React from "react"
import styled from "styled-components"

const FilterMore = ({ filterId, setFilterActive, filterActive }) => {
  return (
    <DivStyled filteractive={filterActive}>
      <p
        onClick={() => {
          if (filterActive) {
            return setFilterActive("")
          }
          return setFilterActive(filterId)
        }}
      >
        More Filters
      </p>

      <div className="filter-wrap">
        <p>Here are the filters!!</p>
      </div>
    </DivStyled>
  )
}

const DivStyled = styled.div`
  .filter-wrap {
    opacity: ${props => (props.filteractive ? 1 : 0)};
    visibility: ${props => (props.filteractive ? "visible" : "hidden")};
  }
`

export default FilterMore
