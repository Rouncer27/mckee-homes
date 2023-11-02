// Just using this for the correct title display and to find the correct salesperson inside the sidepanel display. //
// This is massaging the data to match what lotworks calls a community so it matches our community name. //
const getRightCommunity = (communities, lotworks) => {
  const newCommunities = communities.find(com => {
    if (lotworks.community === "Bayside") {
      return com.node.title === "Bayside Estates"
    } else if (lotworks.community === "Coopers Crossing") {
      return com.node.title === "Cooper’s Crossing"
    }
    return com.node.title === lotworks.community
  })

  return newCommunities
}

export default getRightCommunity
