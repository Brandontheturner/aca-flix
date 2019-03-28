import axios from "axios";

export const loadMyMovieList = () => {
  return function(dispatch) {
    dispatch[
      {
        type: "LOAD_MY_MOVIE_LIST"
      }
    ];
    axios
      .get("/movies")
      .then(response => {
        return response.json();
      })
      .then(movies => {
        dispatch(myMovieListLoaded(movies));
      });
  };
};

export const myMovieListLoaded = movies => {
  return function(dispatch) {
    dispatch[
      {
        type: "MY_MOVIE_LIST_LOADED",
        value: movies
      }
    ];
  };
};

export const loadSearch = searchTerm => dispatch => {
  axios
    .get(
      "https://api.themoviedb.org/3/search/multi?query=" +
        searchTerm +
        "&api_key=a4db712041cfa608d5edfe7e80b0d63d"
    )
    .then(movies => {
      dispatch({
        type: "SEARCH_RESULTS_LOADED",
        value: movies.results
      });
    });
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
