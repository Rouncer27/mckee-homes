import React from "react"

import ShowHomeHeader from "./ShowHomeHeader"
import HomePlanBest from "./HomePlanBest"
import HomePlanDetails from "./HomePlanDetails"
import HomePlanGallery from "./HomePlanGallery"
import HomePlanConnect from "./HomePlanConnect"
import ShowHomeForm from "../PageComponents/Forms/ShowHomeForm"
import HomeFloorPlans from "./HomeFloorPlans"

const ShowHome = ({ home }) => {
  return (
    <article>
      <ShowHomeHeader home={home} />
      <HomePlanBest />
      {home.acfShowHomes.details && (
        <HomePlanDetails
          details={home.acfShowHomes.details}
          title={`Other features and details to note:`}
        />
      )}
      <HomePlanGallery gallery={home.acfShowHomes.gallery} />
      <HomeFloorPlans
        home={home}
        homeType="show-homes"
        homeId={home.databaseId}
        title={home.title}
        data={home.acfShowHomes.floorPlans}
        floorPlanPdf={home.acfShowHomes.floorPlanPdf.mediaItemUrl}
        appImage={home.acfShowHomes.mainImage.mediaItemUrl}
      />
      <HomePlanConnect
        salesOne={home.acfShowHomes.salesPersonOne}
        salesTwo={home.acfShowHomes.salesPersonTwo}
        showHomeHours={home.acfShowHomes.showHomeHours}
        googleMapLink={home.acfShowHomes.googleMapLink}
      />

      <ShowHomeForm
        homeSlug="show-homes"
        showHome={home.title}
        community={home.communities.nodes[0].slug}
      />
    </article>
  )
}

export default ShowHome
