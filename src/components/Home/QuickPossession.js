import React from "react"

import QuickPossessionHeader from "./QuickPossessionHeader"
import HomePlanDetails from "./HomePlanDetails"
import HomePlanGallery from "./HomePlanGallery"
import QuickConnect from "./QuickConnect"
import SeeThisHome from "../PageComponents/Forms/SeeThisHome"
import HomePlanFloorPlan from "./HomePlanFloorPlan"

const QuickPossesion = ({ home }) => {
  return (
    <article>
      <QuickPossessionHeader home={home} />
      <HomePlanDetails
        details={home.acfQuickPossessions.details}
        title={`HOME SPECIFICATIONS AND FEATURES:`}
      />
      <HomePlanGallery gallery={home.acfQuickPossessions.gallery} />
      <QuickConnect
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
        home={home}
      />
      <SeeThisHome homeSlug="quick-possessions" />
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
