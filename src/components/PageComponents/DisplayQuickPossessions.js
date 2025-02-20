import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

import FilterMain from "./HomePlans/FilterMain"
import {
  B1Black,
  medWrapper,
  B2Navy,
  colors,
  Btn1Navy,
} from "../../styles/helpers"
import HomeDisplay from "./QuickPossessions/HomeDisplay"

const getData = graphql`
  {
    quickPossessions: allWpQuickPossession {
      edges {
        node {
          title
          slug
          databaseId
          acfQuickPossessions {
            optionalAddedNoteReq
            optionalAddedNote
            address
            homeFeatures
            price
            possessionTimeline
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
              acfCommunities {
                city
              }
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

const DisplayQuickPossessions = props => {
  const allData = useStaticQuery(getData)
  // Plans Post Types
  const quickPossessions = allData.quickPossessions.edges
  const sortedQuickPossessions = quickPossessions.sort(
    (a, b) =>
      Date.parse(
        new Date(
          a.node.acfQuickPossessions.possessionTimeline.split("/")[2],
          a.node.acfQuickPossessions.possessionTimeline.split("/")[1],
          a.node.acfQuickPossessions.possessionTimeline.split("/")[0]
        )
      ) -
      Date.parse(
        new Date(
          b.node.acfQuickPossessions.possessionTimeline.split("/")[2],
          b.node.acfQuickPossessions.possessionTimeline.split("/")[1],
          b.node.acfQuickPossessions.possessionTimeline.split("/")[0]
        )
      )
  )

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

  const [priceFilter, setPriceFilter] = useState(50000)
  const [timelineFilter, setTimelineFilter] = useState([])
  const [homeFeaturesFilter, setHomeFeaturesFilter] = useState([])

  const handleClearMore = () => {
    setSqftFilter(500)
    setBedroomFilter([])
    setPriceFilter(50000)
    setTimelineFilter([])
    setHomeFeaturesFilter([])
  }

  const handleResetAllFilters = () => {
    setFilterActive("")
    setHomeTypesFilter([])
    setHomeStylesFilter([])
    setCommunityFilter([])
    setSqftFilter(500)
    setBedroomFilter([])
    setPriceFilter(50000)
    setTimelineFilter([])
    setHomeFeaturesFilter([])
  }

  useEffect(() => {
    const params = new URLSearchParams(props.location.search)
    const param = params.get("homeType")
    setHomeTypesFilter(param === "AllHomes" || param === null ? [] : [param])
  }, [props.location.search])

  const closeAllFilters = () => {
    setFilterActive("")
  }

  useEffect(() => {
    const matched = []

    sortedQuickPossessions.map(home => {
      let typeMatch = true
      let styleMatch = true
      let communityMatch = true
      let sqftMatch = true
      let bedroomMatch = true
      let priceMatch = true
      let timelineMatch = true
      let featuresMatch = true

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
        sqftMatch = home.node.acfQuickPossessions.squareFootage >= sqftFilter
      }

      // Does this house match the bedroom filter
      if (bedroomFilter.length > 0) {
        bedroomMatch = bedroomFilter.some(
          bedrooms =>
            bedrooms === home.node.acfQuickPossessions.numberOfBedrooms
        )
      }

      // Does this house match the price filter
      if (priceFilter > 0) {
        priceMatch =
          home.node.acfQuickPossessions.price >= priceFilter ||
          home.node.acfQuickPossessions.price === null
      }

      // Does this house match the timeline filter

      if (timelineFilter.length > 0) {
        const possessionDate = Date.parse(
          new Date(
            home.node.acfQuickPossessions.possessionTimeline.split("/")[2],
            home.node.acfQuickPossessions.possessionTimeline.split("/")[1],
            home.node.acfQuickPossessions.possessionTimeline.split("/")[0]
          )
        )
        const dateNow = Date.parse(new Date())
        const difference = (possessionDate - dateNow) / (1000 * 3600 * 24) / 30

        const timeframe =
          difference > 3
            ? "greater"
            : difference > 1 && difference < 3
            ? "less"
            : difference < 1
            ? "immediate"
            : ""
        timelineMatch = timelineFilter.some(timeline => timeline === timeframe)
      }

      // Does this house match the home features filter
      if (homeFeaturesFilter.length > 0) {
        featuresMatch = homeFeaturesFilter.every(feature => {
          const matchFound =
            home.node.acfQuickPossessions.homeFeatures === null
              ? undefined
              : home.node.acfQuickPossessions.homeFeatures.find(
                  homeFeature => homeFeature === feature
                )
          if (matchFound !== undefined) return true
        })
      }

      const displayHome =
        typeMatch &&
        styleMatch &&
        communityMatch &&
        bedroomMatch &&
        featuresMatch &&
        timelineMatch &&
        priceMatch &&
        sqftMatch

      if (displayHome) matched.push(home)
    })

    setMatchingHomes([...matched])
  }, [
    homeTypesFilter,
    homeStylesFilter,
    communityFilter,
    sqftFilter,
    bedroomFilter,
    priceFilter,
    timelineFilter,
    homeFeaturesFilter,
  ])

  if (!props.data.displayQuickPossessions) return null

  console.log("matchingHomes: ", matchingHomes)

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
          <h3>Expore By Filters</h3>
        </div>
        <div className="filter">
          <FilterMain
            filterActive={filterActive}
            setFilterActive={setFilterActive}
            homeTypes={homeTypes}
            homeTypesFilter={homeTypesFilter}
            setHomeTypesFilter={setHomeTypesFilter}
            homeTypeActive={homeTypesFilter.length > 0}
            homeStyles={homeStyles}
            homeStylesFilter={homeStylesFilter}
            setHomeStylesFilter={setHomeStylesFilter}
            homeStylesActive={homeStylesFilter.length > 0}
            communities={communities}
            communityFilter={communityFilter}
            setCommunityFilter={setCommunityFilter}
            communityActive={communityFilter.length > 0}
            sqftFilter={sqftFilter}
            setSqftFilter={setSqftFilter}
            bedroomFilter={bedroomFilter}
            setBedroomFilter={setBedroomFilter}
            lotWidth={false}
            price={true}
            priceFilter={priceFilter}
            setPriceFilter={setPriceFilter}
            timeline={true}
            timelineFilter={timelineFilter}
            setTimelineFilter={setTimelineFilter}
            features={true}
            homeFeaturesFilter={homeFeaturesFilter}
            setHomeFeaturesFilter={setHomeFeaturesFilter}
            clearMore={handleClearMore}
            moreActive={
              bedroomFilter.length > 0 ||
              parseInt(sqftFilter) > 500 ||
              parseInt(priceFilter) > 50000 ||
              timelineFilter.length > 0 ||
              homeFeaturesFilter.length > 0
            }
          />
          <div className="reset-all-filters">
            <button type="button" onClick={handleResetAllFilters}>
              Reset
            </button>
          </div>
        </div>
      </div>
      <div className="wrapper">
        {matchingHomes.length > 0 ? (
          matchingHomes.map(home => {
            return <HomeDisplay key={home.node.slug} home={home.node} />
          })
        ) : (
          <div className="no-homes-found">
            <p>
              Sorry, it doesn’t look like we have anything to fit that
              criterial. We are a custom home builder, we can help you find your
              dream home.
            </p>
          </div>
        )}
      </div>

      <div className="filters-background" onClick={() => setFilterActive("")} />
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  position: relative;
  min-height: ${props => (props.filteractive ? "175rem" : "auto")};
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
    }

    .filter {
      display: flex;
      align-items: flex-start;
      flex-wrap: wrap;
      justify-content: center;
      width: 100%;

      @media (min-width: 768px) {
        padding: 0 4rem;
      }
    }

    .reset-all-filters {
      margin-top: 2rem;
      width: 100%;

      @media (min-width: 768px) {
        margin-top: 0;
        width: 10%;
      }

      button {
        ${Btn1Navy};
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

export default DisplayQuickPossessions
