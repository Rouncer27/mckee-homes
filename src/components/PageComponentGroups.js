import React from "react"

import HeroOne from "./PageComponents/HeroOne"
import HeroTwo from "./PageComponents/HeroTwo"
import ContentWithLogo from "./PageComponents/ContentWithLogo"
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

              case "Page_Acfmaintemplatefields_PageComponents_ContentWithLogo":
                return <ContentWithLogo key={index} data={component} />

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
