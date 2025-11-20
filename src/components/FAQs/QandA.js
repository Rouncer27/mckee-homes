import React from "react"
import FaqsList from "./FaqList/FaqsList"

const QandA = ({ data }) => {
  console.log("data", data)
  return <FaqsList data={data} />
}

export default QandA
