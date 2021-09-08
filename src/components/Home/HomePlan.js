import React from "react"

import HomePlanHeader from "./HomePlanHeader"
import HomePlanDetails from "./HomePlanDetails"
import HomePlansCommunities from "./HomePlansCommunities"
import HomePlanGallery from "./HomePlanGallery"
import HomePlanConnect from "./HomePlanConnect"
import MoreInformation from "../PageComponents/Forms/MoreInformation"
import HomePlanFloorPlan from "./HomePlanFloorPlan"

const HomePlan = ({ home }) => {
  return (
    <article>
      <HomePlanHeader home={home} />
      <HomePlanDetails home={home} />
      <HomePlansCommunities communities={home.communities.nodes} />
      <HomePlanGallery gallery={home.acfHomePlans.gallery} />
      <HomePlanConnect home={home} />
      <MoreInformation />
      <HomePlanFloorPlan home={home} />
    </article>
  )
}

export default HomePlan
