function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson)
  var position = katzDeliLine.length
  return `You are ${position}th in line.`
}