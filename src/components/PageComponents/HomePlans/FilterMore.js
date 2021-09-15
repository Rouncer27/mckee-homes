import React from "react"
import styled from "styled-components"
import { B1Black, colors } from "../../../styles/helpers"

const FilterMore = ({
  filterId,
  setFilterActive,
  filterActive,
  sqftFilter,
  setSqftFilter,
  bedroomFilter,
  setBedroomFilter,
  price,
  priceFilter,
  setPriceFilter,
  timeline,
  timelineFilter,
  setTimelineFilter,
}) => {
  const handleAddBedroomItem = rooms => {
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

  const handleAddTimeline = times => {
    // Copy the state so we can safly chage it.
    const copyArray = [...timelineFilter]
    if (times === "all") return setTimelineFilter([])
    // The array is empty put the selected item on it.
    if (timelineFilter.length <= 0) return setTimelineFilter([times])
    // There are items in the state array, check if this item is being added or removed
    // Does this item already exisit on the state array?
    const isAlreadySelected = copyArray.findIndex(item => item === times)
    // If it does not already exisit add it to the list.
    if (isAlreadySelected === -1)
      return setTimelineFilter([...copyArray, times])
    // If it is already on the state array, we need to remove it.
    copyArray.splice(isAlreadySelected, 1)
    setTimelineFilter(copyArray)
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
        <div className="sqft-filter">
          <p>Square Feet</p>
          <div>
            <input readOnly type="text" step={500} value={sqftFilter} />
            <span
              className={`plus${sqftFilter === 4000 ? " disabled" : ""}`}
              onClick={() => {
                if (sqftFilter === 4000) return
                setSqftFilter(sqftFilter + 500)
              }}
            >
              +
            </span>
            <span className="value">{sqftFilter}+</span>
            <span
              className={`minus${sqftFilter === 500 ? " disabled" : ""}`}
              onClick={() => {
                if (sqftFilter === 500) return
                setSqftFilter(sqftFilter - 500)
              }}
            >
              -
            </span>
          </div>
        </div>

        {price !== false && (
          <div className="price-filter">
            <p>Price</p>
            <div>
              <input readOnly type="text" step={500} value={priceFilter} />
              <span
                className={`plus${priceFilter === 4000 ? " disabled" : ""}`}
                onClick={() => {
                  if (priceFilter === 4000) return
                  setPriceFilter(priceFilter + 500)
                }}
              >
                +
              </span>
              <span className="value">{priceFilter}+</span>
              <span
                className={`minus${priceFilter === 500 ? " disabled" : ""}`}
                onClick={() => {
                  if (priceFilter === 500) return
                  setPriceFilter(priceFilter - 500)
                }}
              >
                -
              </span>
            </div>
          </div>
        )}

        <div>
          <p>Bedrooms</p>
          <ul className="items">
            <li value="1">
              <label>
                <input
                  onChange={() => handleAddBedroomItem("1")}
                  type="checkbox"
                />
                1 Bedroom
              </label>
            </li>

            <li value="2">
              <label>
                <input
                  onChange={() => handleAddBedroomItem("2")}
                  type="checkbox"
                />
                2 Bedrooms
              </label>
            </li>

            <li value="3">
              <label>
                <input
                  onChange={() => handleAddBedroomItem("3")}
                  type="checkbox"
                />
                3 Bedrooms
              </label>
            </li>

            <li value="4">
              <label>
                <input
                  onChange={() => handleAddBedroomItem("4")}
                  type="checkbox"
                />
                4 Bedrooms
              </label>
            </li>
          </ul>
        </div>

        {timeline !== false && (
          <div>
            <p>Timeline</p>
            <ul className="items">
              <li value="immediate">
                <label>
                  <input
                    onChange={() => handleAddTimeline("immediate")}
                    type="checkbox"
                  />
                  immediate
                </label>
              </li>

              <li value="less">
                <label>
                  <input
                    onChange={() => handleAddTimeline("less")}
                    type="checkbox"
                  />
                  &lt; 3months
                </label>
              </li>

              <li value="greater">
                <label>
                  <input
                    onChange={() => handleAddTimeline("greater")}
                    type="checkbox"
                  />
                  &gt; 3months
                </label>
              </li>
            </ul>
          </div>
        )}
      </div>
    </DivStyled>
  )
}

const DivStyled = styled.div`
  position: relative;
  width: 20rem;
  border: solid 0.2rem ${colors.colorAccent};

  .price-filter,
  .sqft-filter {
    margin-bottom: 2.5rem;

    input {
      position: absolute;
      opacity: 0;
      top: -200%;
      right: -999999999%;
    }

    .value {
      ${B1Black};
    }

    .plus,
    .minus {
      display: inline-block;
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      border: 1px solid #000;
      background: #154290;
      color: #fff;
      cursor: pointer;
      text-align: center;
      padding: 4px 0px 0px 2px;
      transition: opacity 0.35s;
    }

    .plus {
      margin-right: 2rem;
    }

    .minus {
      margin-left: 2rem;
    }

    .disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

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
