import React from "react"

import HeroOne from "./PageComponents/HeroOne"
import HeroTwo from "./PageComponents/HeroTwo"
import HeroThree from "./PageComponents/HeroThree"
import ContentWithLogo from "./PageComponents/ContentWithLogo"
import ContentThreeImages from "./PageComponents/ContentThreeImages"
import ContentWithImage7525 from "./PageComponents/ContentWithImage7525"
import ContentImageBgPattern from "./PageComponents/ContentImageBgPattern"
import ContentSlider from "./PageComponents/ContentSlider"

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

              case "Page_Acfmaintemplatefields_PageComponents_ContentWithLogo":
                return <ContentWithLogo key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_ContentWithImage7525":
                return <ContentWithImage7525 key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_ContentImageBgPattern":
                return <ContentImageBgPattern key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_ContentThreeImages":
                return <ContentThreeImages key={index} data={component} />

              case "Page_Acfmaintemplatefields_PageComponents_ContentSlider":
                return <ContentSlider key={index} data={component} />

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
