function iterativeLog(array) {
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  var array = ['Christmas', 'New Years', 'Chelsie\'s Birthday', 'V-Day', 'April 21']
  array.forEach(callback)
}