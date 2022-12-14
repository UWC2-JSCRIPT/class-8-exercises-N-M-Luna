let colorIndex = 255

//let/const setInterval( function-that-executes-every-x-ms, x)
const darknessComes = setInterval(function() {
  if(colorIndex > 0) {
    colorIndex--
    document.body.style.backgroundColor = `rgb(${colorIndex}, ${colorIndex}, ${colorIndex})`
  } else {
    clearInterval(darknessComes)
  }
}, 500)

/*
recurring-function {
  //in a conditional, include
    //clearInterval()
}
*/