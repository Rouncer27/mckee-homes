const floorPlanTypeFilter = (matchedFloorPlans, lotworksType) => {
  const newMatchedFloorPlans = matchedFloorPlans.filter(home => {
    if (home.node.homeTypes.nodes.find(type => type.name === lotworksType)) {
      return true
    } else {
      return false
    }
  })

  return newMatchedFloorPlans
}

export default floorPlanTypeFilter
