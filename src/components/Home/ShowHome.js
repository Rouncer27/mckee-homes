import React from "react"

import ShowHomeHeader from "./ShowHomeHeader"
import HomePlanBest from "./HomePlanBest"
import HomePlanDetails from "./HomePlanDetails"
import HomePlanGallery from "./HomePlanGallery"
import HomePlanConnect from "./HomePlanConnect"
import MoreInformation from "../PageComponents/Forms/MoreInformation"
import HomePlanFloorPlan from "./HomePlanFloorPlan"

const ShowHome = ({ home }) => {
  return (
    <article>
      <ShowHomeHeader home={home} />
      <HomePlanBest />
      <HomePlanDetails
        details={home.acfShowHomes.details}
        title={`HOME SPECIFICATIONS AND FEATURES:`}
      />
      <HomePlanGallery gallery={home.acfShowHomes.gallery} />
      <HomePlanConnect
        salesOne={home.acfShowHomes.salesPersonOne}
        salesTwo={home.acfShowHomes.salesPersonTwo}
        showHomeHours={home.acfShowHomes.showHomeHours}
        googleMapLink={home.acfShowHomes.googleMapLink}
      />
      <MoreInformation homeSlug="show-homes" />
      <HomePlanFloorPlan
        home={home}
        homeType="show-homes"
        homeId={home.databaseId}
        title={home.title}
        floorImg={
          home.acfShowHomes.floorPlanImage.localFile?.childImageSharp
            ?.gatsbyImageData
        }
        floorImgAlt={home.acfShowHomes.floorPlanImage.altText}
        propelFloorPlanReq={home.acfShowHomes.floorPlanImageReq}
        propelFloorPlan={home.acfShowHomes.floorPlanImage}
        designerFloorPlanReq={home.acfShowHomes.designerFloorPlanReq}
        designerFloorPlan={home.acfShowHomes.designerFloorPlan}
        signatureFloorPlanReq={home.acfShowHomes.signatureFloorPlanReq}
        signatureFloorPlan={home.acfShowHomes.signatureFloorPlan}
        floorPlanPdf={home.acfShowHomes.floorPlanPdf.localFile.publicURL}
      />
    </article>
  )
}

export default ShowHome
