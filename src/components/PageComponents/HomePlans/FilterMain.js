import React from "react"
import styled from "styled-components"

import FilterDropdown from "./FilterDropdown"
import FilterMore from "./FilterMore"

const FilterMain = ({
  filterActive,
  setFilterActive,
  homeTypes,
  homeTypesFilter,
  setHomeTypesFilter,
  homeStyles,
  homeStylesFilter,
  setHomeStylesFilter,
  communities,
  communityFilter,
  setCommunityFilter,
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
}) => {
  return (
    <DivStyled id="filters">
      <FilterDropdown
        filterId="homeTypes"
        filterActive={filterActive === "homeTypes"}
        setFilterActive={setFilterActive}
        title="Home Types"
        options={homeTypes}
        itemsSelected={homeTypesFilter}
        setItemsSelected={setHomeTypesFilter}
      />
      <FilterDropdown
        filterId="homeStyles"
        filterActive={filterActive === "homeStyles"}
        setFilterActive={setFilterActive}
        title="Home Styles"
        options={homeStyles}
        itemsSelected={homeStylesFilter}
        setItemsSelected={setHomeStylesFilter}
      />
      <FilterDropdown
        filterId="homeCommunities"
        filterActive={filterActive === "homeCommunities"}
        setFilterActive={setFilterActive}
        title="Communities"
        options={communities}
        itemsSelected={communityFilter}
        setItemsSelected={setCommunityFilter}
      />
      <FilterMore
        filterId="filterMore"
        filterActive={filterActive === "filterMore"}
        setFilterActive={setFilterActive}
        sqftFilter={sqftFilter}
        setSqftFilter={setSqftFilter}
        bedroomFilter={bedroomFilter}
        setBedroomFilter={setBedroomFilter}
        price={price}
        priceFilter={priceFilter}
        setPriceFilter={setPriceFilter}
        timeline={timeline}
        timelineFilter={timelineFilter}
        setTimelineFilter={setTimelineFilter}
        features={features}
        homeFeaturesFilter={homeFeaturesFilter}
        setHomeFeaturesFilter={setHomeFeaturesFilter}
        clearMore={clearMore}
      />
    </DivStyled>
  )
}

const DivStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
`

export default FilterMain
