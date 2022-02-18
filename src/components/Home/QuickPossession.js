import React from "react"

import QuickPossessionHeader from "./QuickPossessionHeader"
import HomePlanBest from "./HomePlanBest"
import HomePlanDetails from "./HomePlanDetails"
import HomePlanGallery from "./HomePlanGallery"
import QuickConnect from "./QuickConnect"
import QuickPossesionsForm from "../PageComponents/Forms/QuickPossesionsForm"
import HomeFloorPlans from "./HomeFloorPlans"

const QuickPossesion = ({ home }) => {
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
      <QuickPossesionsForm
        homeSlug="quick-possessions"
        title={home.title}
        community={home.communities.nodes[0].slug}
      />
    </article>
  )
}

export default QuickPossesion
