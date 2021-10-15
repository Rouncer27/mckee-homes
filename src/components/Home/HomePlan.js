import React from "react"

import HomePlanHeader from "./HomePlanHeader"
import HomePlanDetails from "./HomePlanDetails"
import HomePlansCommunities from "./HomePlansCommunities"
import HomePlanGallery from "./HomePlanGallery"
import MoreInformation from "../PageComponents/Forms/MoreInformation"
import HomePlanFloorPlan from "./HomePlanFloorPlan"

const HomePlan = ({ home }) => {
  console.log("HELLO: ", home)
  return (
    <article>
      <HomePlanHeader home={home} />
      <HomePlanDetails
        details={home.acfHomePlans.details}
        title={`BEST IS BUILT IN WITH MCKEE HOMES:`}
      />
      <HomePlansCommunities communities={home.communities.nodes} />
      <HomePlanGallery gallery={home.acfHomePlans.gallery} />
      <HomePlanFloorPlan
        title={home.title}
        floorImgReq={home.acfHomePlans.floorPlanImageReq}
        floorImg={
          home.acfHomePlans.floorPlanImage.localFile?.childImageSharp
            ?.gatsbyImageData
        }
        floorImgAlt={home.acfHomePlans.floorPlanImage.altText}
        propelFloorPlanReq={home.acfHomePlans.floorPlanImageReq}
        propelFloorPlan={home.acfHomePlans.floorPlanImage}
        designerFloorPlanReq={home.acfHomePlans.designerFloorPlanReq}
        designerFloorPlan={home.acfHomePlans.designerFloorPlan}
        signatureFloorPlanReq={home.acfHomePlans.signatureFloorPlanReq}
        signatureFloorPlan={home.acfHomePlans.signatureFloorPlan}
        floorPlanPdf={home.acfHomePlans.floorPlanPdf.localFile.publicURL}
      />
      <MoreInformation homeSlug="home-plans" />
    </article>
  )
}

export default HomePlan
