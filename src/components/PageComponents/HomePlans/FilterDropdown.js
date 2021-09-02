import React, { useRef, useState } from "react"
import styled from "styled-components"
import { B1Base, B2Black } from "../../../styles/helpers"

const FilterDropDown = ({
  title,
  options,
  itemsSelected,
  setItemsSelected,
}) => {
  const checkList = useRef()
  const [dropdownActive, setDropdownActive] = useState(false)

  const handleAddItem = slug => {
    // Copy the state so we can safly chage it.
    const copyArray = [...itemsSelected]
    if (slug === "all") return setItemsSelected([])
    // The array is empty put the selected item on it.
    if (itemsSelected.length <= 0) return setItemsSelected([slug])
    // There are items in the state array, check if this item is being added or removed
    // Does this item already exisit on the state array?
    const isAlreadySelected = copyArray.findIndex(item => item === slug)
    // If it does not already exisit add it to the list.
    if (isAlreadySelected === -1) return setItemsSelected([...copyArray, slug])
    // If it is already on the state array, we need to remove it.
    copyArray.splice(isAlreadySelected, 1)
    setItemsSelected(copyArray)
    return
  }

  return (
    <FilterStyled
      ref={checkList}
      className={`dropdown-check-list${dropdownActive ? " visible" : ""}`}
    >
      <span
        onClick={() => setDropdownActive(!dropdownActive)}
        className="anchor"
      >
        {title}:
      </span>
      <ul className="items">
        {options.map(option => {
          const itemChecked = itemsSelected.filter(item => {
            if (item === option.node.slug) return true

            return false
          })
          return (
            <li key={option.node.databaseId} value={option.node.slug}>
              <label>
                <input
                  checked={itemChecked.length > 0 ? true : false}
                  type="checkbox"
                  onChange={() => handleAddItem(option.node.slug)}
                />
                {option.node.name}
              </label>
            </li>
          )
        })}
        <li value="all">
          <label>
            <input
              checked={itemsSelected.length === 0 ? true : false}
              type="checkbox"
              onChange={() => handleAddItem("all")}
            />
            All {title}
          </label>
        </li>
      </ul>
    </FilterStyled>
  )
}

const FilterStyled = styled.div`
  display: block;
  width: 20rem;
  position: relative;

  .anchor {
    ${B1Base};
    display: block;
    position: relative;
    padding: 0.5rem 5rem 0.5rem 1rem;
    cursor: pointer;
  }

  .anchor:after {
    position: absolute;
    content: "";
    border-left: 0.2rem solid black;
    border-top: 0.2rem solid black;
    padding: 0.5rem;
    right: 1rem;
    top: 20%;
    -moz-transform: rotate(-135deg);
    -ms-transform: rotate(-135deg);
    -o-transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
    transform: rotate(-135deg);
  }

  .anchor:active:after {
    right: 0.8rem;
    top: 21%;
  }

  ul.items {
    display: block;
    position: absolute;
    top: 101%;
    right: 0;
    left: 0;
    margin: 0;
    padding: 2.5rem;
    transition: 0.4s all ease-out;
    border: 0.1rem solid #c7b2a1;
    background-color: #efefef;
    opacity: 0;
    visibility: hidden;
    z-index: 10000;
  }

  ul.items li {
    ${B2Black};

    input {
      padding-right: 1rem;
    }
  }

  &.visible .anchor {
    font-weight: bold;
  }

  &.visible .items {
    opacity: 1;
    visibility: visible;
  }
`

export default FilterDropDown
