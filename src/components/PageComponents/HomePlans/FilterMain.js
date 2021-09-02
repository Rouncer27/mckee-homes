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
  bedroomFilter,
  setBedroomFilter,
}) => {
  return (
    <DivStyled>
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
        bedroomFilter={bedroomFilter}
        setBedroomFilter={setBedroomFilter}
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
