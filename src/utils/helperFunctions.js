export const wordSpiltter = (sent, chartPerLine) => {
  const words = sent.split(" ")
  let lineLength = 0
  const sententance = words.map(word => {
    if (lineLength === 0) {
      lineLength = lineLength + word.length
      return `<span>${word}`
    } else if (lineLength <= chartPerLine) {
      lineLength = lineLength + word.length
      return `${word}`
    } else {
      lineLength = 0
      return `${word}</span>`
    }
  })

  const newSententance = sententance.join(" ")
  return newSententance
}
