import axios from "axios";

export const myMovieListLoaded = movies => {
  console.log("myMovieListLoadedActions", movies);
  return {
    type: "MY_MOVIE_LIST_LOADED",
    value: movies
  };
};

export const searchLoaded = movies => {
  console.log("searchLoadedActions", movies);
  return {
    type: "SEARCH_RESULTS_LOADED",
    value: movies
  };
};

export const loadSearch = searchTerm => dispatch => {
  console.log("myloadSearch", searchTerm);
  return {
    type: "LOAD_SEARCH",
    value: axios
      .get(
        "https://api.themoviedb.org/3/search/multi?query=" +
          searchTerm +
          "&api_key=a4db712041cfa608d5edfe7e80b0d63d"
      )
      .then(response => dispatch(searchLoaded(response.data.results)))
      .catch(error => console.log(error))
  };
};

export const loadMyMovieList = () => dispatch => {
  console.log("loadyMovieList");
  axios
    .get("/movies")
    .then(response => dispatch(myMovieListLoaded(response.data)))
    .catch(error => console.log("loadMyMOvieList error", error));
};

export const saveMyMovie = movie => dispatch => {
  {
    axios
      .post("/movies", movie)
      .then(response => {
        dispatch(loadMyMovieList());
      })
      .catch(error => {
        console.log(error);
      });
  }
};
export const removeMyMovie = id => dispatch => {
  console.log("removeMyMovie", id);
  axios
    .delete("/movies/" + id)
    .then(response => {
      dispatch(loadMyMovieList());
    })
    .catch(error => {
      console.log(error);
    });
};
