const communityFilter = (matchedFloorPlans, lotworks) => {
  const newMatchedFloorPlans = matchedFloorPlans.filter(home => {
    if (
      lotworks.community === "Bayside" &&
      home.node.communities.nodes.find(
        community => community.slug === "bayside-estates"
      )
    ) {
      return true
    } else if (
      lotworks.community === "Coopers Crossing" &&
      home.node.communities.nodes.find(
        community => community.slug === "coopers-crossing"
      )
    ) {
      return true
    } else if (
      lotworks.community === "Chinook Gate" &&
      home.node.communities.nodes.find(
        community => community.slug === "chinook-gate"
      )
    ) {
      return true
    } else if (
      lotworks.community === "Lanark Landing" &&
      home.node.communities.nodes.find(
        community => community.slug === "lanark-landing"
      )
    ) {
      return true
    } else if (
      lotworks.community === "Lewiston" &&
      home.node.communities.nodes.find(
        community => community.slug === "lewiston"
      )
    ) {
      return true
    } else if (
      lotworks.community === "Goldwyn" &&
      home.node.communities.nodes.find(
        community => community.slug === "goldwyn"
      )
    ) {
      return true
    } else if (
      lotworks.community === "Vista Crossing" &&
      home.node.communities.nodes.find(
        community => community.slug === "vista-crossing"
      )
    ) {
      return true
    } else if (
      lotworks.community === "Mandalay Estates" &&
      home.node.communities.nodes.find(
        community => community.slug === "mandalay-estates"
      )
    ) {
      return true
    } else {
      return false
    }
  })

  return newMatchedFloorPlans
}

export default communityFilter
