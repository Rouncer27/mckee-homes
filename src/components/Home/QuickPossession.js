import React, { useEffect } from "react"

import QuickPossessionHeader from "./QuickPossessionHeader"
import HomePlanBest from "./HomePlanBest"
import HomePlanDetails from "./HomePlanDetails"
import HomePlanGallery from "./HomePlanGallery"
import QuickConnect from "./QuickConnect"
import QuickPossesionsForm from "../PageComponents/Forms/QuickPossesionsForm"
import HomeFloorPlans from "./HomeFloorPlans"

const QuickPossesion = ({ home }) => {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://tools.bendigi.com/assets/calculators.js"
    script.async = true
    const embedSection = document.querySelector(".bendigi-calculators")
    embedSection.appendChild(script)
  }, [])

  return (
    <article>
      <QuickPossessionHeader home={home} />
      <HomePlanBest />
      {home.acfQuickPossessions.details && (
        <HomePlanDetails
          details={home.acfQuickPossessions.details}
          title={`Other features and details to note:`}
        />
      )}
      {home.acfQuickPossessions.gallery &&
        home.acfQuickPossessions.gallery.length > 0 && (
          <HomePlanGallery gallery={home.acfQuickPossessions.gallery} />
        )}
      <HomeFloorPlans
        home={home}
        homeType="quick-possessions"
        homeId={home.databaseId}
        title={home.title}
        data={home.acfQuickPossessions.floorPlans}
        floorPlanPdf={home.acfQuickPossessions.floorPlanPdf.mediaItemUrl}
        appImage={home.acfQuickPossessions.mainImage.mediaItemUrl}
      />
      <QuickConnect
        salesOne={home.acfQuickPossessions.salesPersonOne}
        salesTwo={home.acfQuickPossessions.salesPersonTwo}
      />
      <div>
        <div
          className="bendigi-calculators"
          apikey="1c7846d9ece674ca:cbUuDusAJAPYKlG-MR9Dvn3TLLYNL8aR"
          terms="https://canadianmortgageapp.com/terms"
          navpositiontop="0px"
          tools="all"
        ></div>{" "}
      </div>
      <QuickPossesionsForm
        homeSlug="quick-possessions"
        title={home.title}
        community={home.communities.nodes[0].slug}
      />
    </article>
  )
}

export default QuickPossesion
