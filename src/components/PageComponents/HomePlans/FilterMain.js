import React from "react"
import styled from "styled-components"

import FilterDropDown from "./FilterDropDown"

const FilterMain = ({
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
        title="Home Types"
        options={homeTypes}
        itemsSelected={homeTypesFilter}
        setItemsSelected={setHomeTypesFilter}
      />
      <FilterDropDown
        title="Home Styles"
        options={homeStyles}
        itemsSelected={homeStylesFilter}
        setItemsSelected={setHomeStylesFilter}
      />
      <FilterDropDown
        title="Communities"
        options={communities}
        itemsSelected={communityFilter}
        setItemsSelected={setCommunityFilter}
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
