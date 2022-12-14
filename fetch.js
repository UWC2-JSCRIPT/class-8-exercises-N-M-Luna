//  Take the user submission for year, month, and day.
let year, month, date
const searchForm = document.querySelector('form')
const dateRequest = document.querySelector('#date-requested')

searchForm.addEventListener('submit', (e) => {
  e.preventDefault()
  year = dateRequest.value.slice(0,4)
  month = dateRequest.value.slice(5,7)
  day = dateRequest.value.slice(8)
  /* */
  console.log(year)
  console.log(month)
  console.log(day)

  // Calls the New York Times API to find the best selling hardcover fiction books for that date
  const BASE_URL = 'https://api.nytimes.com/svc/books/v3/lists/'
  const API_KEY = 'F3ZxMDRAxZbFGmLbA6AYOI8KYYpGMnxX'
  const url = `${BASE_URL}${year}-${month}-${day}/hardcover-fiction.json?api-key=${API_KEY}`

  // Document elements
  const titleDisplay = document.querySelectorAll('.book-title')
  const authorDisplay = document.querySelectorAll('.book-author')
  const descriptionDisplay = document.querySelectorAll('.book-description')
  console.log(titleDisplay)

  // Grab {title, author, and description} of the first five books and display it on the browser
  fetch(url)
    .then(function(data) {
      return data.json();
    })
    .then(function(responseJson) {
      console.log(responseJson);
      let title, author, description

      //For the first five books
      for (let i = 0; i < 5; i++) {

        //Gather the title,
        title = responseJson.results.books[i].title;
        titleDisplay[i].innerHTML = title
        console.log(`Title: ${title}`);

        //author, and 
        author = responseJson.results.books[i].author;
        authorDisplay[i].innerHTML = author
        console.log(`Author: ${author}`);

        //description
        description = responseJson.results.books[i].description;
        descriptionDisplay[i].innerHTML = description
        console.log(`Description: ${description}`);
      }
    }); 
  })