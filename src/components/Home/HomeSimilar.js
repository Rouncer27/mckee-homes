import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

import { H1Navy, H3Navy, medWrapper } from "../../styles/helpers"
import HomeDisplay from "../PageComponents/HomePlans/HomeDisplay"

const getData = graphql`
  {
    homePlans: allWpHomePlan {
      edges {
        node {
          id
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
  }
`
const HomeSimilar = ({ home }) => {
  const allData = useStaticQuery(getData)
  // Plans Post Types
  const homePlans = allData.homePlans.edges
  const currentRemoved = homePlans.filter(plan => plan.node.id !== home.id)
  const matchBedroomPlans = currentRemoved.filter(
    plan =>
      parseInt(plan.node.acfHomePlans.numberOfBedrooms) ===
      parseInt(home.acfHomePlans.numberOfBedrooms)
  )
  const matchedSqFoot = matchBedroomPlans.filter(
    plan =>
      plan.node.acfHomePlans.squareFootage >=
        home.acfHomePlans.squareFootage - 150 &&
      plan.node.acfHomePlans.squareFootage <=
        home.acfHomePlans.squareFootage + 150
  )

  const shuffle = a => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[a[i], a[j]] = [a[j], a[i]]
    }
    return a
  }

  const myBedroomArrayIndex = Array.apply(
    null,
    Array(matchBedroomPlans.length)
  ).map(function (x, i) {
    return i
  })

  shuffle(myBedroomArrayIndex)

  const mySqFootArrayIndex = Array.apply(null, Array(matchedSqFoot.length)).map(
    function (x, i) {
      return i
    }
  )

  shuffle(mySqFootArrayIndex)

  return (
    <SectionStyled>
      <div className="wrapper">
        <div className="title">
          <h2>Similar Home Plans</h2>
        </div>
        <div className="card-wrapper">
          {mySqFootArrayIndex.length <= 0 ? (
            mySqFootArrayIndex.map((planNum, index) => {
              if (index >= 3) return null
              const plan = matchedSqFoot[planNum]
              return <HomeDisplay key={plan.node.slug} home={plan.node} />
            })
          ) : (
            <div className="sorry-card">
              <p>Sorry, no plans are similar to this home plan.</p>
            </div>
          )}
        </div>
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  padding: 5rem 0;

  .wrapper {
    ${medWrapper};
  }

  .title {
    width: 100%;
    text-align: center;

    h2 {
      ${H1Navy};
    }
  }

  .card-wrapper {
    display: flex;
    flex-wrap: wrap;
  }

  .sorry-card {
    width: 100%;

    p {
      ${H3Navy};
    }
  }
`

export default HomeSimilar
