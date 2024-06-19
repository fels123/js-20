// const person = {
//   name: "Max",
//   age: 30,
//   hobbies: ["sports", "cooking"],
//   greet: function () {
//     alert("Hi there!");
//   },
// };

// // adding
// person.age = 31;

// // modifying
// person.isAdmin = true;

// // delete/remove
// delete person.age;

// *******************Demo-App************************

const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

const movies = [];

const renderMovies = (filter = "") => {
  const movieList = document.getElementById("movie-list");

  if (movies.length === 0) {
    movieList.classList.remove("visible");
    return;
  } else {
    movieList.classList.add("visible");
  }
  movieList.innerHTML = "";

  const filteredMovies = !filter
    ? movies
    : movies.filter((movie) => movie.info.title.includes(filter));

  filteredMovies.forEach((movie) => {
    const movieEl = document.createElement("li");
    // object destructuring
    // const {info} = movies can use this only if we have a key named info in movies object
    // const { info, ...otherProps } = movies; ##only id shown##
    // movie.info = {info} so we can also shorthern this more by
    // adding $%%%%%const {title} = info
    // simply write let text = title + '-';
    let text = movie.info.title + " - "; //destructuring can use info where ther is movie.info by replacing the const we just declared  // chaining concept on properties
    for (const key in movie.info) {
      //for(const key in info)##like this
      if (key !== "title") {
        text = text + `${key}: ${movie.info[key]}`;
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
};

const addMovieHandler = () => {
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;

  if (
    title.trim() === "" ||
    extraName.trim() === "" ||
    extraValue.trim() === ""
  ) {
    return;
  }

  const newMovie = {
    info: {
      title, // only title here since name are same title:title
      [extraName]: extraValue,
    },
    id: Math.random(),
  };

  movies.push(newMovie);
  renderMovies();
};

const searchMovieHandler = () => {
  const filterTerm = document.getElementById("filter-title").value;
  renderMovies(filterTerm);
};

addMovieBtn.addEventListener("click", addMovieHandler);
searchBtn.addEventListener("click", searchMovieHandler);
