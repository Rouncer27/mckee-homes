import React from "react"
import Year from "./Year"

const Timeline = ({ classYear, yearActive }) => {
  return (
    <div className="timeline">
      {classYear.map((year, index) => {
        if (yearActive === index) {
          return (
            <Year
              year={year}
              yearActive={yearActive}
              index={index}
              key={index}
            />
          )
        } else {
          return null
        }
      })}
    </div>
  )
}

export default Timeline
