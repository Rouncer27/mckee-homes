import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { B1Black, colors, B2Black, Btn1Grey } from "../../../styles/helpers"
import { commaAdder } from "../../../utils/helperFunctions"

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
  features,
  homeFeaturesFilter,
  setHomeFeaturesFilter,
  clearMore,
  filterSelected,
}) => {
  const sqfootDisplay = useRef(null)
  const priceDisplay = useRef(null)

  useEffect(() => {
    if (sqfootDisplay.current === null) return
    sqfootDisplay.current.innerHTML = sqftFilter + " &#43;"
  }, [sqftFilter])

  useEffect(() => {
    if (priceDisplay.current === null) return
    priceDisplay.current.innerHTML =
      "&#36;" + commaAdder(priceFilter) + " &#43;"
  }, [priceFilter])

  const handleOnSquareFootChange = event => {
    setSqftFilter(event.target.value)
  }

  const handleOnPriceChange = event => {
    setPriceFilter(event.target.value)
  }

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

  const handleAddHomeFeatures = feature => {
    // Copy the state so we can safly chage it.
    const copyArray = [...homeFeaturesFilter]
    if (feature === "all") return setHomeFeaturesFilter([])
    // The array is empty put the selected item on it.
    if (homeFeaturesFilter.length <= 0) return setHomeFeaturesFilter([feature])
    // There are items in the state array, check if this item is being added or removed
    // Does this item already exisit on the state array?
    const isAlreadySelected = copyArray.findIndex(item => item === feature)
    // If it does not already exisit add it to the list.
    if (isAlreadySelected === -1)
      return setHomeFeaturesFilter([...copyArray, feature])
    // If it is already on the state array, we need to remove it.
    copyArray.splice(isAlreadySelected, 1)
    setHomeFeaturesFilter(copyArray)
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
        More Filters{" "}
        {filterSelected && <span className="filter-active-icon">&#10005;</span>}
      </p>

      <div className="filter-wrap">
        <div className="clear-filter">
          <button onClick={clearMore}>Clear Filter</button>
        </div>
        <StyledSelector>
          <div>
            <p>Square Feet</p>
          </div>
          <div ref={sqfootDisplay} className="sqftvalue">
            500 &#43;
          </div>
          <input
            type="range"
            min="500"
            max="4000"
            step="500"
            value={sqftFilter}
            onChange={handleOnSquareFootChange}
          />
        </StyledSelector>

        {price !== false && (
          <StyledSelector>
            <div>
              <p>Price</p>
            </div>
            <div ref={priceDisplay} className="pricevalue">
              &#36;50,000 &#43;
            </div>
            <input
              type="range"
              min="50000"
              max="1000000"
              step="50000"
              value={priceFilter}
              onChange={handleOnPriceChange}
            />
          </StyledSelector>
        )}

        <div>
          <p>Bedrooms</p>
          <ul className="items">
            <li value="1">
              <input
                id="oneBed"
                onChange={() => handleAddBedroomItem("1")}
                type="checkbox"
                checked={bedroomFilter.some(bed => bed === "1")}
              />
              <label htmlFor="oneBed">1 Bedroom</label>
            </li>

            <li value="2">
              <input
                id="twoBed"
                onChange={() => handleAddBedroomItem("2")}
                type="checkbox"
                checked={bedroomFilter.some(bed => bed === "2")}
              />
              <label htmlFor="twoBed">2 Bedrooms</label>
            </li>

            <li value="3">
              <input
                id="threeBed"
                onChange={() => handleAddBedroomItem("3")}
                type="checkbox"
                checked={bedroomFilter.some(bed => bed === "3")}
              />
              <label htmlFor="threeBed">3 Bedrooms</label>
            </li>

            <li value="4">
              <input
                id="fourBed"
                onChange={() => handleAddBedroomItem("4")}
                checked={bedroomFilter.some(bed => bed === "4")}
                type="checkbox"
              />
              <label htmlFor="fourBed">4 Bedrooms</label>
            </li>
          </ul>
        </div>

        {timeline !== false && (
          <div>
            <p>Timeline</p>
            <ul className="items">
              <li value="immediate">
                <input
                  id="immediate"
                  onChange={() => handleAddTimeline("immediate")}
                  checked={timelineFilter.some(bed => bed === "immediate")}
                  type="checkbox"
                />
                <label htmlFor="immediate">immediate</label>
              </li>

              <li value="less">
                <input
                  id="ltThree"
                  onChange={() => handleAddTimeline("less")}
                  checked={timelineFilter.some(bed => bed === "less")}
                  type="checkbox"
                />
                <label htmlFor="ltThree">&lt; 3months</label>
              </li>

              <li value="greater">
                <input
                  id="gtThree"
                  onChange={() => handleAddTimeline("greater")}
                  checked={timelineFilter.some(bed => bed === "greater")}
                  type="checkbox"
                />
                <label htmlFor="gtThree">&gt; 3months</label>
              </li>
            </ul>
          </div>
        )}

        {features !== false && (
          <div>
            <p>Home Featured</p>
            <ul className="items">
              <li value="WalkoutBasement">
                <input
                  id="walkout"
                  onChange={() => handleAddHomeFeatures("WalkoutBasement")}
                  checked={homeFeaturesFilter.some(
                    bed => bed === "WalkoutBasement"
                  )}
                  type="checkbox"
                />
                <label htmlFor="walkout">Walkout Basement</label>
              </li>

              <li value="homeOffice">
                <input
                  id="officeDen"
                  onChange={() => handleAddHomeFeatures("homeOffice")}
                  checked={homeFeaturesFilter.some(bed => bed === "homeOffice")}
                  type="checkbox"
                />
                <label htmlFor="officeDen">Office / Den</label>
              </li>

              <li value="fireplace">
                <input
                  id="fireplace"
                  onChange={() => handleAddHomeFeatures("fireplace")}
                  checked={homeFeaturesFilter.some(bed => bed === "fireplace")}
                  type="checkbox"
                />
                <label htmlFor="fireplace">Fireplace</label>
              </li>

              <li value="upgradedEnsuite">
                <input
                  id="ensuite"
                  onChange={() => handleAddHomeFeatures("upgradedEnsuite")}
                  checked={homeFeaturesFilter.some(
                    bed => bed === "upgradedEnsuite"
                  )}
                  type="checkbox"
                />
                <label htmlFor="ensuite">Upgraded Ensuite</label>
              </li>

              <li value="greenspaceWater">
                <input
                  id="greenspace"
                  onChange={() => handleAddHomeFeatures("greenspaceWater")}
                  checked={homeFeaturesFilter.some(
                    bed => bed === "greenspaceWater"
                  )}
                  type="checkbox"
                />
                <label htmlFor="greenspace">Greenspace/Water</label>
              </li>

              <li value="garageSize">
                <input
                  id="garageSize"
                  onChange={() => handleAddHomeFeatures("garageSize")}
                  checked={homeFeaturesFilter.some(bed => bed === "garageSize")}
                  type="checkbox"
                />
                <label htmlFor="garageSize">Garage size</label>
              </li>
              <li value="spiceKitchen">
                <input
                  id="spiceKit"
                  onChange={() => handleAddHomeFeatures("spiceKitchen")}
                  checked={homeFeaturesFilter.some(
                    bed => bed === "spiceKitchen"
                  )}
                  type="checkbox"
                />
                <label htmlFor="spiceKit">Spice Kitchen</label>
              </li>
            </ul>
          </div>
        )}
      </div>
    </DivStyled>
  )
}

const StyledSelector = styled.div`
  margin-bottom: 5rem;

  .sqftvalue,
  .pricevalue {
    width: 100%;
    margin: 1rem auto;
    font-size: 4rem;
    text-align: center;
    line-height: 4rem;
    letter-spacing: 0;
  }

  input[type="range"] {
    display: block;
    background-color: #bdc3c7;
    width: 30rem;
    height: 0.5rem;
    border-radius: 0.5rem;
    margin: 0 auto;
    outline: 0;
    cursor: pointer;
  }
`

const DivStyled = styled.div`
  position: relative;
  width: 100%;
  border: solid 0.2rem ${colors.colorAccent};

  @media (min-width: 768px) {
    width: 20rem;
  }

  .filter-active-icon {
    display: inline-block;
    margin-left: 0.5rem;
    padding: 0.35em 0.65em;
    background-color: ${colors.colorPrimary};
    border-radius: 50rem;
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 1;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
  }

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
    width: 100%;
    margin: 0;
    padding: 2.5rem;
    transition: 0.4s all ease-out;
    border: 0.1rem solid #c7b2a1;
    background-color: #efefef;
    opacity: ${props => (props.filteractive ? 1 : 0)};
    visibility: ${props => (props.filteractive ? "visible" : "hidden")};
    z-index: 10000;

    @media (min-width: 768px) {
      width: 45rem;
    }

    .clear-filter {
      margin-bottom: 2.5rem;

      button {
        ${Btn1Grey};
      }
    }
  }

  ul.items {
    display: block;
    padding: 2.5rem 1rem;
    border: 0.1rem solid #c7b2a1;
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
`

export default FilterMore
