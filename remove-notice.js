const notice = document.querySelector('#maintenance-notice')

//setTimeout( function-that-happens-after-x-ms, x)
setTimeout(() => {
  notice.classList.add('hidden') // or notice.style.display = 'none'
}, 5000)
