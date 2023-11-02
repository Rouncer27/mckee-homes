const getRightType = typeFromLotworks => {
  const newTypeFromLotworks =
    typeFromLotworks === "Single Family Front"
      ? "Front Drive"
      : typeFromLotworks === "Single Family Front — zero Line"
      ? "Front Drive"
      : typeFromLotworks === "Single Family"
      ? "Front Drive"
      : typeFromLotworks === "Duplex Front"
      ? "Front Drive"
      : typeFromLotworks === "Single Family Rear"
      ? "Laned Homes"
      : typeFromLotworks === "Duplex Rear"
      ? "Laned Homes"
      : typeFromLotworks === "Townhomes"
      ? "Townhomes"
      : typeFromLotworks === "Row home"
      ? "Townhomes"
      : null

  return newTypeFromLotworks
}

export default getRightType
