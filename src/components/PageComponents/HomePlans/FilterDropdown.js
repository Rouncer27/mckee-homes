import React from "react"
import styled from "styled-components"
import { B1Base, B2Black, colors } from "../../../styles/helpers"

const FilterDropDown = ({
  filterId,
  filterActive,
  setFilterActive,
  title,
  options,
  itemsSelected,
  setItemsSelected,
}) => {
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
    <FilterStyled className={`dropdown-check-list`} filteractive={filterActive}>
      <span
        className="anchor"
        onClick={() => {
          if (filterActive) {
            return setFilterActive("")
          }
          return setFilterActive(filterId)
        }}
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
              <input
                id={`checkbox${option.node.databaseId}`}
                checked={itemChecked.length > 0 ? true : false}
                type="checkbox"
                onChange={() => handleAddItem(option.node.slug)}
              />
              <label htmlFor={`checkbox${option.node.databaseId}`}>
                {option.node.name}
              </label>
            </li>
          )
        })}
        <li value="all">
          <input
            id={filterId}
            checked={itemsSelected.length === 0 ? true : false}
            type="checkbox"
            onChange={() => handleAddItem("all")}
          />
          <label htmlFor={filterId}>All {title}</label>
        </li>
      </ul>
    </FilterStyled>
  )
}

const FilterStyled = styled.div`
  display: block;
  width: 20rem;
  position: relative;
  margin-right: 0.5rem;
  border: solid 0.2rem ${colors.colorAccent};

  .anchor {
    ${B1Base};
    display: block;
    position: relative;
    padding: 0.5rem 5rem 0.5rem 1rem;
    background-color: #fff;
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
    padding: 2.5rem 1rem;
    transition: 0.4s all ease-out;
    border: 0.1rem solid #c7b2a1;
    background-color: #efefef;
    opacity: ${props => (props.filteractive ? 1 : 0)};
    visibility: ${props => (props.filteractive ? "visible" : "hidden")};
    z-index: 10000;
  }

  ul.items li {
    ${B2Black};
    position: relative;
    margin-bottom: 0.5rem;

    &:last-of-type {
      margin-bottom: 0;
    }

    label {
      padding-right: 1rem;
      text-transform: uppercase;
      cursor: pointer;

      &::before {
        display: block;
        position: absolute;
        top: -0.75rem;
        right: -1rem;
        width: 3rem;
        height: 3rem;
        transition: all 0.3s ease-out;
        color: ${colors.colorTertiary};
        font-family: "FontAwesome";
        font-size: 2.5rem;
        content: "\f1db";
      }
    }

    input {
      position: absolute;
      opacity: 0;

      &:checked + label {
        &::before {
          color: #154290 !important;
          content: "\f058";
        }
      }
    }
  }

  &.visible .anchor {
    font-weight: bold;
  }
`

export default FilterDropDown
