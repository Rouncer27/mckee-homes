import React from "react"

import QuickPossessionHeader from "./QuickPossessionHeader"
import HomePlanBest from "./HomePlanBest"
import HomePlanDetails from "./HomePlanDetails"
import HomePlanGallery from "./HomePlanGallery"
import QuickConnect from "./QuickConnect"
import SeeThisHome from "../PageComponents/Forms/SeeThisHome"
import HomePlanFloorPlan from "./HomePlanFloorPlan"

const QuickPossesion = ({ home }) => {
  return (
    <article>
      <QuickPossessionHeader home={home} />
      <HomePlanBest />
      <HomePlanDetails
        details={home.acfQuickPossessions.details}
        title={`HOME SPECIFICATIONS AND FEATURES:`}
      />
      <HomePlanGallery gallery={home.acfQuickPossessions.gallery} />
      <QuickConnect
        salesOne={home.acfQuickPossessions.salesPersonOne}
        salesTwo={home.acfQuickPossessions.salesPersonTwo}
      />
      <SeeThisHome homeSlug="quick-possessions" />
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
        floorPlanPdf={home.acfQuickPossessions.floorPlanPdf.localFile.publicURL}
      />
    </article>
  )
}

export default QuickPossesion
