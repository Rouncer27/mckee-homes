import React from "react"

import HomePlanHeader from "./HomePlanHeader"
import HomePlanDetails from "./HomePlanDetails"
import HomePlansCommunities from "./HomePlansCommunities"
import HomePlanGallery from "./HomePlanGallery"
import MoreInformation from "../PageComponents/Forms/MoreInformation"
import HomePlanFloorPlan from "./HomePlanFloorPlan"

const HomePlan = ({ home }) => {
  return (
    <article>
      <HomePlanHeader home={home} />
      <HomePlanDetails details={home.acfHomePlans.details} />
      <HomePlansCommunities communities={home.communities.nodes} />
      <HomePlanGallery gallery={home.acfHomePlans.gallery} />
      <HomePlanFloorPlan
        title={home.title}
        floorImg={
          home.acfHomePlans.floorPlanImage.localFile?.childImageSharp
            ?.gatsbyImageData
        }
        floorImgAlt={home.acfHomePlans.floorPlanImage.altText}
        floorPlanPdf={home.acfHomePlans.floorPlanPdf.localFile.publicURL}
      />
      <MoreInformation />
    </article>
  )
}

export default HomePlan
