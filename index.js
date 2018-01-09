function iterativeLog(array) {
  var index = 0;
  array.forEach(function(index, element) {
    console.log(`${index}: ${array[index]}`)
    index++;
  })
}
