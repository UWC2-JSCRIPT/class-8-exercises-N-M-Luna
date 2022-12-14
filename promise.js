let myPromise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve();
  }, 1000);
});

myPromise
  .then(function() {
    return 99;
  })
  .then(function(number) {
    console.log(number);
  });

let newPromise = new Promise(function(resolve, reject) {
  setTimeout(() => {
    //After a second, flip a coin
    if(Math.random() > 0.5){
      resolve()
    } else {
      reject()
    }
  }, 1000)
})

newPromise
  .then(() => { //when resolve() is called
    console.log('success')
  })
  .catch(() => { //when reject() is called
    console.log('failure')
  })
  .then(() => { //after the body of the promise finished...??? *confused*
    console.log('complete')
  })