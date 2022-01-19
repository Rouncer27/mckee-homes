import React from "react"

import QuickPossessionHeader from "./QuickPossessionHeader"
import HomePlanBest from "./HomePlanBest"
import HomePlanDetails from "./HomePlanDetails"
import HomePlanGallery from "./HomePlanGallery"
import QuickConnect from "./QuickConnect"
import QuickPossesionsForm from "../PageComponents/Forms/QuickPossesionsForm"
import HomePlanFloorPlan from "./HomePlanFloorPlan"

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
      <HomePlanGallery gallery={home.acfQuickPossessions.gallery} />
      <QuickConnect
        salesOne={home.acfQuickPossessions.salesPersonOne}
        salesTwo={home.acfQuickPossessions.salesPersonTwo}
      />
      <QuickPossesionsForm
        homeSlug="quick-possessions"
        title={home.title}
        community={home.communities.nodes[0].slug}
      />
      <HomePlanFloorPlan
        home={home}
        homeType="quick-possessions"
        homeId={home.databaseId}
        title={home.title}
        floorImg={
          home.acfQuickPossessions.floorPlanImage.localFile?.childImageSharp
            ?.gatsbyImageData
        }
        floorImgAlt={home.acfQuickPossessions.floorPlanImage.altText}
        propelFloorPlanReq={home.acfQuickPossessions.floorPlanImageReq}
        propelFloorPlan={home.acfQuickPossessions.floorPlanImage}
        designerFloorPlanReq={home.acfQuickPossessions.designerFloorPlanReq}
        designerFloorPlan={home.acfQuickPossessions.designerFloorPlan}
        signatureFloorPlanReq={home.acfQuickPossessions.signatureFloorPlanReq}
        signatureFloorPlan={home.acfQuickPossessions.signatureFloorPlan}
        floorPlanPdf={home.acfQuickPossessions.floorPlanPdf.mediaItemUrl}
      />
    </article>
  )
}

export default QuickPossesion
