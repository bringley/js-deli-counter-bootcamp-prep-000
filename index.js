function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson)
  var position = katzDeliLine.length
  return `Welcome, ${newPerson}. You are number ${position} in line.`
}

function nowServing(line) {
  if (line.length === 0) {
    return 'There is nobody waiting to be served!'
  } else {
    var first = line[0]
    line.shift()
    return `Currently serving ${first}.`
  }
}

function currentLine(line) {
    if (line.length === 0) {
    return 'The line is currently empty'
    } else {
      var msgStart = 'The line is currently: '
      for (i = 0; i < line.length; i++) {
        var msg = msgStart + `${i}. ${line[i]},`
      }
      return msg
    }
} 