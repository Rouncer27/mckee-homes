import React from "react"

import HomePlanHeader from "./HomePlanHeader"
import HomePlanBest from "./HomePlanBest"
import HomePlanDetails from "./HomePlanDetails"
import HomePlansCommunities from "./HomePlansCommunities"
import HomePlanGallery from "./HomePlanGallery"
import HomePlanForms from "../PageComponents/Forms/HomePlanForms"
import HomeFloorPlans from "./HomeFloorPlans"
import HomeSimilar from "./HomeSimilar"
import HomeSelectFloorPlans from "./HomeSelectFloorPlans"

const HomePlan = ({ home }) => {
  console.log("home: ", home.acfHomePlans.floorPlansSelectionComponent)
  return (
    <article>
      <HomePlanHeader home={home} />
      <HomePlanBest />
      {home.acfHomePlans.details && (
        <HomePlanDetails
          details={home.acfHomePlans.details}
          title={`Other Features and details to note:`}
        />
      )}
      <HomePlansCommunities communities={home.communities.nodes} />
      <HomePlanGallery gallery={home.acfHomePlans.gallery} />
      <HomeFloorPlans
        home={home}
        homeType="home-plans"
        homeId={home.databaseId}
        title={home.title}
        data={home.acfHomePlans.floorPlans}
        floorPlanPdf={home.acfHomePlans.floorPlanPdf.mediaItemUrl}
        appImage={home.acfHomePlans.mainImage.mediaItemUrl}
      />
      {home.acfHomePlans.floorPlansSelectionComponent
        .floorPlansSelectionComponentRequired && (
        <HomeSelectFloorPlans data={home} />
      )}
      <HomeSimilar home={home} />
      <HomePlanForms homeSlug="home-plans" homePlan={home.title} />
    </article>
  )
}

export default HomePlan
