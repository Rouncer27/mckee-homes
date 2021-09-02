import React from "react"
import styled from "styled-components"

import FilterDropDown from "./FilterDropDown"
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
}) => {
  return (
    <DivStyled>
      <FilterDropDown
        filterId="homeTypes"
        filterActive={filterActive === "homeTypes"}
        setFilterActive={setFilterActive}
        title="Home Types"
        options={homeTypes}
        itemsSelected={homeTypesFilter}
        setItemsSelected={setHomeTypesFilter}
      />
      <FilterDropDown
        filterId="homeStyles"
        filterActive={filterActive === "homeStyles"}
        setFilterActive={setFilterActive}
        title="Home Styles"
        options={homeStyles}
        itemsSelected={homeStylesFilter}
        setItemsSelected={setHomeStylesFilter}
      />
      <FilterDropDown
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
