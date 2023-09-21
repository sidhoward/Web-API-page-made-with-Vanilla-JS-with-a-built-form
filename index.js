




function contact(event) {
  event.preventDefault()
  const loading = document.querySelector('.modal__overlay--loading')
  const success = document.querySelector('.modal__overlay--success')
  loading.classList += " modal__overlay--visible"
  emailjs
     .sendForm(
       'service_m94kevb',
       'template_7i4amia',
       event.target,
       'ZSH00TNpxb6JleyvL'
     ).then(() => {
      loading.classList.remove('modal__overlay--visible')
      success.classList += " modal__overlay--visible"
     }).catch(() => {
      loading.classList.remove('modal__overlay--visible')
      alert(
        "The email service is temporarily unavailable. Please contact me directly on SIDHOWARD1988@GMAIL.COM"
      )
     })
}

// let isModalOpen = false
// function toggleModal() {
//   if (isModalOpen) {
//     isModalOpen = false
//     return document.body.classList.remove("modal--open")
//   }
//   isModalOpen = true
//   document.body.classList += " modal--open"

// }



const movieListEl = document.querySelector(" .movie-card");

async function main() {
  const movies = await fetch(
    "https://www.omdbapi.com/?apikey=bbc2645&s=terminator"
  );
  const movieData = await movies.json();
  movieListEl.innerHTML = movieData.Search.map((movie) =>
    movieHTML(movie)
  ).join("");
}
main();

function movieHTML(movie) {
  return `
    <div class="movie-card" ${movie.Search})">
    <div class="movie-card__container">
     <h3 class="movie__title"><b>${movie.Title}</b></h3>
     <p class="movie__year"><b>${movie.Year}</b></p>
     <img class="movie__img" src="${movie.Poster}" alt="">
    </div>
   </div>`;
}

let isModalOpen = false;
function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
}


let isContactOpen = false;
function toggleContact() {
  if (isContactOpen) {
    isContactOpen = false;
    return document.body.classList.remove("contact--open");
  }
  isContactOpen = true;
  document.body.classList += " contact--open";
}



// HAND WRITTEN API FAKE DATA 


let modal

async function renderMovies(filter) {
  const moviesWrapper = document.querySelector(".modal");

  moviesWrapper.classList += ' movies__loading'

  if (!movie) {
    movie = await getMovies()
  }}


  const moviesHtml = modal
    .map((movie) => {

    return `
    <div class="modal">
     <h3 class="movie__title"><b>${movie.Title}</b></h3>
     <p class="movie__year"><b>${movie.Year}</b></p>
     <img class="movie__img" src="${movie.Poster}" alt="">
    </div>
   </div>`;
;
    })
    .join("");

  moviesWrapper.innerHTML = moviesHtml;


function filterMovies(event) {
  renderMovies(event.target.value);
}

setTimeout(() => {
  renderMovies();
});


// FAKE DATA
function getMovies() {
  return new Promise((resolve) => {
    setTimeout (() => {
      resolve([
      {
    "Title": "Terminator 2: Judgment Day",
    "Year": "1991",
    "imdbID": "tt0103064",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
    },
    {
    "Title": "The Terminator",
    "Year": "1984",
    "imdbID": "tt0088247",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYTViNzMxZjEtZGEwNy00MDNiLWIzNGQtZDY2MjQ1OWViZjFmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
    "Title": "Terminator 3: Rise of the Machines",
    "Year": "2003",
    "imdbID": "tt0181852",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTk5NzM1ODgyN15BMl5BanBnXkFtZTcwMzA5MjAzMw@@._V1_SX300.jpg"
    },
    {
    "Title": "Terminator Salvation",
    "Year": "2009",
    "imdbID": "tt0438488",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BODBlOTJhZjItMGRmYS00YzM1LWFmZTktOTJmNDMyZTBjMjBkXkEyXkFqcGdeQXVyMjMwNDgzNjc@._V1_SX300.jpg"
    },
    {
    "Title": "Terminator Genisys",
    "Year": "2015",
    "imdbID": "tt1340138",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjM1NTc0NzE4OF5BMl5BanBnXkFtZTgwNDkyNjQ1NTE@._V1_SX300.jpg"
    },
    {
    "Title": "Terminator: Dark Fate",
    "Year": "2019",
    "imdbID": "tt6450804",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzhlYjE5MjMtZDJmYy00MGZmLTgwN2MtZGM0NTk2ZTczNmU5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
    },
    {
    "Title": "Terminator: The Sarah Connor Chronicles",
    "Year": "2008-2009",
    "imdbID": "tt0851851",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZGE2ZDgyOWUtNzdiNS00OTI3LTkwZGQtMTMwNzM4YWUxNGNhXkEyXkFqcGdeQXVyNjU2NjA5NjM@._V1_SX300.jpg"
    },
    {
    "Title": "Terminator 3: Rise of the Machines",
    "Year": "2003",
    "imdbID": "tt0364056",
    "Type": "game",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjA5OTk4MTQwNV5BMl5BanBnXkFtZTgwMzkxNTEwMTE@._V1_SX300.jpg"
    },
    {
    "Title": "Lady Terminator",
    "Year": "1989",
    "imdbID": "tt0095483",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTg5NTA1NzEtNWNiNy00ZTc4LWJhZTgtYmJkODZhYWI3NmQ4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
    "Title": "Terminator II",
    "Year": "1989",
    "imdbID": "tt0098321",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNDNlMWExNTMtMmJkYi00OTg2LTlmY2EtZThjYzA1ZWI2NzFkXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_SX300.jpg"
    }
      ]);
    }, 1000);
  });
}




// let books

// async function renderMooks(filter) {
//   const booksWrapper = document.querySelector(".books");

//   booksWrapper.classList += ' books__loading'

//   if (!books) {
//     books = await getBooks()
//   }

//   booksWrapper.classList.remove('books__loading')





// {
//    
//     

//     ],
//     "totalResults": "130",
//     "Response": "True"
//     }
