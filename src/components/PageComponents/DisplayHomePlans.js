import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

import FilterMain from "./HomePlans/FilterMain"
import HomeDisplay from "./HomePlans/HomeDisplay"

import {
  B1Black,
  colors,
  medWrapper,
  B2Navy,
  Btn1Navy,
} from "../../styles/helpers"

const getData = graphql`
  {
    homePlans: allWpHomePlan {
      edges {
        node {
          title
          slug
          databaseId
          acfHomePlans {
            optionalAddedNoteReq
            optionalAddedNote
            squareFootage
            numberOfBedrooms
            numberOfBathrooms
            mainImage {
              altText
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1500)
                }
              }
            }
          }
          homeStyles {
            nodes {
              databaseId
              slug
              name
            }
          }

          homeTypes {
            nodes {
              databaseId
              slug
              name
            }
          }

          communities {
            nodes {
              databaseId
              slug
              name
            }
          }
        }
      }
    }

    homeStyles: allWpHomeStyle {
      edges {
        node {
          name
          slug
          databaseId
          count
        }
      }
    }

    homeTypes: allWpHomeType {
      edges {
        node {
          name
          slug
          databaseId
          count
        }
      }
    }

    communities: allWpCommunity {
      edges {
        node {
          name
          slug
          databaseId
          count
        }
      }
    }
  }
`

const DisplayHomePlans = props => {
  const allData = useStaticQuery(getData)
  // Plans Post Types
  const homePlans = allData.homePlans.edges

  const plansSorted = homePlans.sort(function (a, b) {
    if (a.node.slug < b.node.slug) {
      return -1
    }
    if (a.node.slug > b.node.slug) {
      return 1
    }
    return 0
  })

  // Filters Information
  const homeTypes = allData.homeTypes.edges
  const homeStyles = allData.homeStyles.edges
  const communities = allData.communities.edges
  // Load up the filters states. //
  const [matchingHomes, setMatchingHomes] = useState([])
  const [filterActive, setFilterActive] = useState("")
  const [homeTypesFilter, setHomeTypesFilter] = useState([])
  const [homeStylesFilter, setHomeStylesFilter] = useState([])
  const [communityFilter, setCommunityFilter] = useState([])
  const [sqftFilter, setSqftFilter] = useState(500)
  const [bedroomFilter, setBedroomFilter] = useState([])

  const handleClearMore = () => {
    setSqftFilter(500)
    setBedroomFilter([])
  }

  const handleResetAllFilters = () => {
    setFilterActive("")
    setHomeTypesFilter([])
    setHomeStylesFilter([])
    setCommunityFilter([])
    setSqftFilter(500)
    setBedroomFilter([])
  }

  useEffect(() => {
    const params = new URLSearchParams(props.location.search)
    const param = params.get("homeType")
    if (param === "AllHomes" || param === null) return
    setHomeTypesFilter([param])
  }, [props.location.search])

  const closeAllFilters = () => {
    setFilterActive("")
  }

  useEffect(() => {
    const matched = []
    plansSorted.map(home => {
      let typeMatch = true
      let styleMatch = true
      let communityMatch = true
      let sqftMatch = true
      let bedroomMatch = true

      // Does this home match the home types filter?
      if (homeTypesFilter.length > 0) {
        typeMatch = homeTypesFilter.some(type => {
          const matchFound = home.node.homeTypes.nodes.find(
            homeType => homeType.slug === type
          )
          if (matchFound !== undefined) return true
        })
      }
      // Does this home match the home styles filter?
      if (homeStylesFilter.length > 0) {
        styleMatch = homeStylesFilter.some(style => {
          const matchFound = home.node.homeStyles.nodes.find(
            homeStyle => homeStyle.slug === style
          )
          if (matchFound !== undefined) return true
        })
      }
      // Does this home match the communities filter?
      if (communityFilter.length > 0) {
        communityMatch = communityFilter.some(community => {
          const matchFound = home.node.communities.nodes.find(
            homeCommunity => homeCommunity.slug === community
          )
          if (matchFound !== undefined) return true
        })
      }

      // Does this house match the Square Footage filter
      if (sqftFilter > 500) {
        sqftMatch = home.node.acfHomePlans.squareFootage >= sqftFilter
      }

      // Does this house match the bedroom filter
      if (bedroomFilter.length > 0) {
        bedroomMatch = bedroomFilter.some(
          bedrooms => bedrooms === home.node.acfHomePlans.numberOfBedrooms
        )
      }

      const displayHome =
        typeMatch && styleMatch && communityMatch && bedroomMatch && sqftMatch

      if (displayHome) matched.push(home)
    })

    setMatchingHomes([...matched])
  }, [
    homeTypesFilter,
    homeStylesFilter,
    communityFilter,
    sqftFilter,
    bedroomFilter,
  ])

  return (
    <SectionStyled filteractive={filterActive !== ""}>
      {filterActive !== "" && (
        <button
          type="button"
          onClick={closeAllFilters}
          className="close-filter"
        >
          Close Filter
        </button>
      )}
      <div className="wrapper-filters">
        <div className="title">
          <h3>Expore By Filters:</h3>
          <div className="filters-active">
            <div className="filters-active__hometypes">
              <p>
                Home Types:{" "}
                {homeTypesFilter.length > 0 ? (
                  homeTypesFilter.map((item, index) => (
                    <span key={index}>{item.split("-").join(" ")} </span>
                  ))
                ) : (
                  <span>All Home Types</span>
                )}
              </p>
            </div>
            <div className="filters-active__homestyles">
              <p>
                Home Styles:{" "}
                {homeStylesFilter.length > 0 ? (
                  homeStylesFilter.map((item, index) => (
                    <span key={index}>{item.split("-").join(" ")} </span>
                  ))
                ) : (
                  <span>All Home Styles</span>
                )}
              </p>
            </div>
            <div className="filters-active__communities">
              <p>
                Communities:{" "}
                {communityFilter.length > 0 ? (
                  communityFilter.map((item, index) => (
                    <span key={index}>{item.split("-").join(" ")} </span>
                  ))
                ) : (
                  <span>All Communities</span>
                )}
              </p>
            </div>
            <div className="filters-active__bedrooms">
              <p>
                Bedrooms:{" "}
                {bedroomFilter.length > 0 ? (
                  bedroomFilter.map((item, index) => (
                    <span key={index}>{item.split("-").join(" ")}</span>
                  ))
                ) : (
                  <span>Homes All Bedrooms Amounts</span>
                )}
              </p>
            </div>
            <div className="filters-active__sqfootage">
              <p>
                Square Footage, showing homes <span>{sqftFilter}sqft</span> or
                larger.
              </p>
            </div>
          </div>
          <div className="reset-all-filters">
            <button type="button" onClick={handleResetAllFilters}>
              Reset All Filters
            </button>
          </div>
        </div>
        <div className="filter">
          <FilterMain
            filterActive={filterActive}
            setFilterActive={setFilterActive}
            homeTypes={homeTypes}
            homeTypesFilter={homeTypesFilter}
            setHomeTypesFilter={setHomeTypesFilter}
            homeStyles={homeStyles}
            homeStylesFilter={homeStylesFilter}
            setHomeStylesFilter={setHomeStylesFilter}
            communities={communities}
            communityFilter={communityFilter}
            setCommunityFilter={setCommunityFilter}
            sqftFilter={sqftFilter}
            setSqftFilter={setSqftFilter}
            bedroomFilter={bedroomFilter}
            setBedroomFilter={setBedroomFilter}
            price={false}
            timeline={false}
            features={false}
            clearMore={handleClearMore}
          />
        </div>
      </div>
      <div className="wrapper">
        {matchingHomes.length > 0 ? (
          matchingHomes.map(home => {
            return <HomeDisplay key={home.node.slug} home={home.node} />
          })
        ) : (
          <div>
            <p>No Homes Found!</p>
          </div>
        )}
      </div>
      <div className="filters-background" onClick={() => setFilterActive("")} />
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  position: relative;
  min-height: ${props => (props.filteractive ? "100rem" : "auto")};
  overflow: hidden;

  .close-filter {
    ${B2Navy};
    display: block;
    position: fixed;
    top: 5rem;
    right: 5rem;
    width: 8rem;
    height: 8rem;
    padding: 0.5rem;
    border: none;
    border-radius: 50%;
    transition: all 0.3s ease-in-out;
    text-align: center;
    line-height: 1.11;
    cursor: pointer;
    z-index: 99999999999999;

    &:hover {
      background-color: ${colors.colorPrimary};
      color: ${colors.white};
    }
  }

  .wrapper {
    ${medWrapper};
    position: relative;
    justify-content: flex-start;
  }

  .wrapper-filters {
    ${medWrapper};
    position: relative;
    justify-content: flex-start;
    z-index: 9999999;

    .title {
      width: 100%;
      margin-bottom: 2rem;
      padding: 0 4rem 1.5rem;
      border-bottom: solid 0.3rem ${colors.colorTertiary};

      h3 {
        ${B1Black};
        margin: 0;
        text-transform: uppercase;
      }

      .filters-active {
        width: 100%;

        &__communities {
        }

        p {
          ${B2Navy};
          margin: 0;

          span {
            display: inline-block;
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
        }
      }

      .reset-all-filters {
        margin-top: 1rem;

        button {
          ${Btn1Navy};
        }
      }
    }

    .filter {
      width: 100%;

      @media (min-width: 768px) {
        padding: 0 4rem;
      }
    }
  }

  .filters-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #154290;
    transition: all 0.2s ease-out;
    opacity: ${props => (props.filteractive ? 0.75 : 0)};
    visibility: ${props => (props.filteractive ? "visible" : "hidden")};
    z-index: 999999;
  }
`

export default DisplayHomePlans
