import React from "react"

import ShowHomeHeader from "./ShowHomeHeader"
import HomePlanBest from "./HomePlanBest"
import HomePlanDetails from "./HomePlanDetails"
import HomePlanGallery from "./HomePlanGallery"
import HomePlanConnect from "./HomePlanConnect"
import ShowHomeForm from "../PageComponents/Forms/ShowHomeForm"
import HomePlanFloorPlan from "./HomePlanFloorPlan"

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
        // designerFloorPlanReq={home.acfShowHomes.designerFloorPlanReq}
        // designerFloorPlan={home.acfShowHomes.designerFloorPlan}
        signatureFloorPlanReq={home.acfShowHomes.signatureFloorPlanReq}
        signatureFloorPlan={home.acfShowHomes.signatureFloorPlan}
        floorPlanPdf={home.acfShowHomes.floorPlanPdf.mediaItemUrl}
        appImage={home.acfShowHomes.mainImage.mediaItemUrl}
      />
    </article>
  )
}

export default ShowHome
