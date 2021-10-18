import React from "react"

import ShowHomeHeader from "./ShowHomeHeader"
import HomePlanDetails from "./HomePlanDetails"
import HomePlanGallery from "./HomePlanGallery"
import HomePlanConnect from "./HomePlanConnect"
import MoreInformation from "../PageComponents/Forms/MoreInformation"
import HomePlanFloorPlan from "./HomePlanFloorPlan"

const ShowHome = ({ home }) => {
  return (
    <article>
      <ShowHomeHeader home={home} />
      <HomePlanDetails
        details={home.acfShowHomes.details}
        title={`HOME SPECIFICATIONS AND FEATURES:`}
      />
      <HomePlanGallery gallery={home.acfShowHomes.gallery} />
      <HomePlanConnect
        salesImg={
          home.acfShowHomes.salesPersonImage.localFile.childImageSharp
            .gatsbyImageData
        }
        salesImgAlt={home.acfShowHomes.salesPersonImage.altText}
        salesPersonName={home.acfShowHomes.salesPersonName}
        salesPersonEmail={home.acfShowHomes.salesPersonEmail}
        salesPersonCell={home.acfShowHomes.salesPersonCell}
        salesPersonPhone={home.acfShowHomes.salesPersonPhone}
        showHomeHours={home.acfShowHomes.showHomeHours}
        googleMapLink={home.acfShowHomes.googleMapLink}
      />
      <MoreInformation homeSlug="show-homes" />
      <HomePlanFloorPlan
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
