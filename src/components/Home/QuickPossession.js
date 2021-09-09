import React from "react"

import QuickPossessionHeader from "./QuickPossessionHeader"
import HomePlanDetails from "./HomePlanDetails"
import HomePlanGallery from "./HomePlanGallery"
import HomePlanConnect from "./HomePlanConnect"
import MoreInformation from "../PageComponents/Forms/MoreInformation"
import HomePlanFloorPlan from "./HomePlanFloorPlan"

const QuickPossesion = ({ home }) => {
  return (
    <article>
      <QuickPossessionHeader home={home} />
      <HomePlanDetails details={home.acfQuickPossessions.details} />
      <HomePlanGallery gallery={home.acfQuickPossessions.gallery} />
      <HomePlanConnect
        salesImg={
          home.acfQuickPossessions.salesPersonImage.localFile.childImageSharp
            .gatsbyImageData
        }
        salesImgAlt={home.acfQuickPossessions.salesPersonImage.altText}
        salesPersonName={home.acfQuickPossessions.salesPersonName}
        salesPersonEmail={home.acfQuickPossessions.salesPersonEmail}
        salesPersonCell={home.acfQuickPossessions.salesPersonCell}
        salesPersonPhone={home.acfQuickPossessions.salesPersonPhone}
        showHomeHours={home.acfQuickPossessions.showHomeHours}
        googleMapLink={home.acfQuickPossessions.googleMapLink}
      />
      <MoreInformation />
      <HomePlanFloorPlan
        title={home.title}
        floorImg={
          home.acfQuickPossessions.floorPlanImage.localFile?.childImageSharp
            ?.gatsbyImageData
        }
        floorImgAlt={home.acfQuickPossessions.floorPlanImage.altText}
        floorPlanPdf={home.acfQuickPossessions.floorPlanPdf.localFile.publicURL}
      />
    </article>
  )
}

export default QuickPossesion
