import React from "react"

import HeroOne from "./PageComponents/HeroOne"
import HeroTwo from "./PageComponents/HeroTwo"
import HeroThree from "./PageComponents/HeroThree"
import HeroFour from "./PageComponents/HeroFour"
import HeroFive from "./PageComponents/HeroFive"
import HeroSix from "./PageComponents/HeroSix"
import HeroSeven from "./PageComponents/HeroSeven"
import ContentWithLogo from "./PageComponents/ContentWithLogo"
import ContentThreeImages from "./PageComponents/ContentThreeImages"
import ContentImage5050 from "./PageComponents/ContentImage5050"
import ContentImage5050Two from "./PageComponents/ContentImage5050Two"
import ContentWithImage7525 from "./PageComponents/ContentWithImage7525"
import ContentImageBgPattern from "./PageComponents/ContentImageBgPattern"
import ContentSlider from "./PageComponents/ContentSlider"
import ContentSketch from "./PageComponents/ContentSketch"
import ContentImagesLogo5050 from "./PageComponents/ContentImagesLogo5050"
import ContentSimpleTitle from "./PageComponents/ContentSimpleTitle"
import ContentSimpleTitleIcon from "./PageComponents/ContentSimpleTitleIcon"
import ContentCenterButton from "./PageComponents/ContentCenterButton"
import MeetTeam from "./PageComponents/MeetTeam"
import WysiwygButton from "./PageComponents/WysiwygButton"
import Logos from "./PageComponents/Logos"
import ContentImageColorBg from "./PageComponents/ContentImageColorBg"
import Testimonials from "./PageComponents/Testimonials"
import DisplayTeam from "./PageComponents/DisplayTeam"
import DisplayPosts from "./PageComponents/DisplayPosts"
import ThreeImagesContent from "./PageComponents/ThreeImagesContent"
import ThreeImagesRow from "./PageComponents/ThreeImagesRow"
import CustomerStories from "./PageComponents/CustomerStories"
import BlueBlockContent from "./PageComponents/BlueBlockContent"

const PageComponentGroups = props => {
  const { components } = props
  const allPageComponents =
    components?.acfMainTemplateFields?.pageComponents?.length > 0 ? (
      <>
        {components?.acfMainTemplateFields?.pageComponents.map(
          (component, index) => {
            switch (component?.fieldGroupName) {
              case "Page_Acfmaintemplatefields_PageComponents_HeroOne":
                return <HeroOne key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_HeroTwo":
                return <HeroTwo key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_HeroThree":
                return <HeroThree key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_HeroFour":
                return <HeroFour key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_HeroFive":
                return <HeroFive key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_HeroSix":
                return <HeroSix key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_HeroSeven":
                return <HeroSeven key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_ContentWithLogo":
                return <ContentWithLogo key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_ContentWithImage7525":
                return <ContentWithImage7525 key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_ContentImage5050":
                return <ContentImage5050 key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_ContentImage5050Two":
                return <ContentImage5050Two key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_ContentImageBgPattern":
                return <ContentImageBgPattern key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_ContentThreeImages":
                return <ContentThreeImages key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_ContentSlider":
                return <ContentSlider key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_ContentSketch":
                return <ContentSketch key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_ContentImagesLogo5050":
                return <ContentImagesLogo5050 key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_ContentSimpleTitle":
                return <ContentSimpleTitle key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_ContentSimpleTitleIcon":
                return <ContentSimpleTitleIcon key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_ContentCenterButton":
                return <ContentCenterButton key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_MeetTeam":
                return <MeetTeam key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_WysiwygButton":
                return <WysiwygButton key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_Logos":
                return <Logos key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_ContactImageColorBg":
                return <ContentImageColorBg key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_Testimonials":
                return <Testimonials key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_DisplayTeam":
                return <DisplayTeam key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_DisplayPosts":
                return <DisplayPosts key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_ThreeImagesContent":
                return <ThreeImagesContent key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_ThreeImagesRow":
                return <ThreeImagesRow key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_CustomerStories":
                return <CustomerStories key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_BlueBlockContent":
                return <BlueBlockContent key={index} data={component} />

              default:
                return (
                  <p>Cannot find this component {component.fieldGroupName}</p>
                )
            }
          }
        )}
      </>
    ) : (
      <p>This page has no content</p>
    )

  return <>{allPageComponents}</>
}

export default PageComponentGroups
