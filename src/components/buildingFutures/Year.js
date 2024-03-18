import React, { useEffect, useState } from "react"
import Milestone from "./Milestone"
import gsap from "gsap"

const Year = ({ year, yearActive, index }) => {
  const thisyearindex = index
  useEffect(() => {
    setTimeout(() => {
      const groups = gsap.utils.toArray(`.accordion-group-${thisyearindex}`)
      const menus = gsap.utils.toArray(
        `.accordion-group-${thisyearindex} .accordion-menu`
      )
      const animations = []
      groups.forEach(group => createAnimation(group))

      console.log("menus", menus)

      menus.forEach(menu => {
        menu.addEventListener("click", () => toggleAnimation(menu))
      })

      function toggleAnimation(menu) {
        console.log("CLICK!!")
        // Save the current state of the clicked animation
        const selectedReversedState = menu.animation.reversed()

        // Reverse all animations
        animations.forEach(animation => animation.reverse())

        // Set the reversed state of the clicked accordion element to the opposite of what it was before
        menu.animation.reversed(!selectedReversedState)
      }

      function createAnimation(element) {
        const menu = element.querySelector(
          `.accordion-group-${thisyearindex} .accordion-menu`
        )
        const box = element.querySelector(
          `.accordion-group-${thisyearindex} .accordion-content`
        )

        gsap.set(box, { height: "auto" })

        const tween = gsap.from(box, {
          height: 0,
          duration: 0.5,
          ease: "power1.inOut",
          reversed: true,
        })

        menu.animation = tween
        animations.push(tween)
      }
    }, 250)
  }, [])

  return (
    <div>
      {year.yearDetails.map((detail, index) => {
        return (
          <Milestone
            detail={detail}
            key={index}
            currentIndex={index}
            fullLength={year?.yearDetails?.length}
            thisyearindex={thisyearindex}
          />
        )
      })}
    </div>
  )
}

export default Year
