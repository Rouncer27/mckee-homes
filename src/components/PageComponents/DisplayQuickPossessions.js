import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

import FilterMain from "./HomePlans/FilterMain"
import { B1Black, colors, medWrapper } from "../../styles/helpers"
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
  // Filters Information
  const homeTypes = allData.homeTypes.edges
  const homeStyles = allData.homeStyles.edges
  const communities = allData.communities.edges
  // Load up the filters states. //
  const [filterActive, setFilterActive] = useState("")
  const [homeTypesFilter, setHomeTypesFilter] = useState([])
  const [homeStylesFilter, setHomeStylesFilter] = useState([])
  const [communityFilter, setCommunityFilter] = useState([])
  const [sqftFilter, setSqftFilter] = useState(500)
  const [bedroomFilter, setBedroomFilter] = useState([])

  const [priceFilter, setPriceFilter] = useState(0)
  const [timelineFilter, setTimelineFilter] = useState([])
  const [homeFeaturesFilter, setHomeFeaturesFilter] = useState([])

  useEffect(() => {
    const params = new URLSearchParams(props.location.search)
    const param = params.get("homeType")
    if (param === "AllHomes" || param === null) return
    setHomeTypesFilter([param])
  }, [props.location.search])

  if (!props.data.displayQuickPossessions) return null

  return (
    <SectionStyled filteractive={filterActive !== ""}>
      <div className="wrapper-filters">
        <div className="title">
          <h3>Expore By Filters:</h3>
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
            price={true}
            priceFilter={priceFilter}
            setPriceFilter={setPriceFilter}
            timeline={true}
            timelineFilter={timelineFilter}
            setTimelineFilter={setTimelineFilter}
            features={true}
            homeFeaturesFilter={homeFeaturesFilter}
            setHomeFeaturesFilter={setHomeFeaturesFilter}
          />
        </div>
      </div>
      <div className="wrapper">
        {quickPossessions.map(home => {
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
            sqftMatch =
              home.node.acfQuickPossessions.squareFootage >= sqftFilter
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
            priceMatch = home.node.acfQuickPossessions.price >= priceFilter
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
            const difference =
              (possessionDate - dateNow) / (1000 * 3600 * 24) / 30

            const timeframe =
              difference > 3
                ? "greater"
                : difference > 0 && difference < 3
                ? "less"
                : difference < 0
                ? "Immediate"
                : ""

            timelineMatch = timelineFilter.some(
              timeline => timeline === timeframe
            )
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

          if (!displayHome) return null
          return <HomeDisplay key={home.node.slug} home={home.node} />
        })}
      </div>
      <div className="filters-background" onClick={() => setFilterActive("")} />
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
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
    }

    .filter {
      width: 100%;
      padding: 0 4rem;
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
