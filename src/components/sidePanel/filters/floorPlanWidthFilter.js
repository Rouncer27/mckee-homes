const floorPlanWidthFilter = (matchedFloorPlans, buildpocket) => {
  const newMatchedFloorPlans = matchedFloorPlans.filter(home => {
    return (
      parseInt(home?.node?.acfHomePlans?.floorPlanWidth, 10) ===
      parseInt(buildpocket, 10)
    )
  })

  return newMatchedFloorPlans
}

export default floorPlanWidthFilter
