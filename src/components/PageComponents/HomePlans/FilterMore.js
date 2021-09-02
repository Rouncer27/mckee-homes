import React from "react"
import styled from "styled-components"
import { B1Black, colors } from "../../../styles/helpers"

const FilterMore = ({
  filterId,
  setFilterActive,
  filterActive,
  bedroomFilter,
  setBedroomFilter,
}) => {
  const handleAddItem = rooms => {
    // Copy the state so we can safly chage it.
    const copyArray = [...bedroomFilter]
    if (rooms === "all") return setBedroomFilter([])
    // The array is empty put the selected item on it.
    if (bedroomFilter.length <= 0) return setBedroomFilter([rooms])
    // There are items in the state array, check if this item is being added or removed
    // Does this item already exisit on the state array?
    const isAlreadySelected = copyArray.findIndex(item => item === rooms)
    // If it does not already exisit add it to the list.
    if (isAlreadySelected === -1) return setBedroomFilter([...copyArray, rooms])
    // If it is already on the state array, we need to remove it.
    copyArray.splice(isAlreadySelected, 1)
    setBedroomFilter(copyArray)
    return
  }

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
        <p>Square Feet</p>

        <p>Bedrooms</p>
        <ul className="items">
          <li value="1">
            <label>
              <input onChange={() => handleAddItem("1")} type="checkbox" />1
              Bedroom
            </label>
          </li>

          <li value="2">
            <label>
              <input onChange={() => handleAddItem("2")} type="checkbox" />2
              Bedrooms
            </label>
          </li>

          <li value="3">
            <label>
              <input onChange={() => handleAddItem("3")} type="checkbox" />3
              Bedrooms
            </label>
          </li>

          <li value="4">
            <label>
              <input onChange={() => handleAddItem("4")} type="checkbox" />4
              Bedrooms
            </label>
          </li>
        </ul>
      </div>
    </DivStyled>
  )
}

const DivStyled = styled.div`
  position: relative;
  width: 20rem;
  border: solid 0.2rem ${colors.colorAccent};

  p {
    ${B1Black};
    display: block;
    position: relative;
    margin: 0;
    padding: 0.5rem 5rem 0.5rem 1rem;
    background-color: #fff;
    cursor: pointer;
  }

  .filter-wrap {
    position: absolute;
    top: 101%;
    left: 0;
    width: 45rem;
    margin: 0;
    padding: 2.5rem;
    transition: 0.4s all ease-out;
    border: 0.1rem solid #c7b2a1;
    background-color: #efefef;
    opacity: ${props => (props.filteractive ? 1 : 0)};
    visibility: ${props => (props.filteractive ? "visible" : "hidden")};
    z-index: 9999;
  }
`

export default FilterMore
