export const loadMyMovieList() {
  return function(dispatch) {
    dispatch[
      {
        type: "LOAD_MY_MOVIE_LIST"
      }
    ];
    fetch("/movies")
      .then(response => {
        return response.json();
      })
      .then(movies => {
        dispatch(myMovieListLoaded(movies));
      });
  };
}

export const myMovieListLoaded = movies =>  {
  return function(dispatch) {
    dispatch[{
      type: "MY_MOVIE_LIST_LOADED",
      value: "/movies"  
    }]
  }
}

export const loadSearch = searchTerm => {
  return function(dispatch) {
    dispatch[{
      type: "LOAD_SEARCH"
    }];
    fetch("https://api.themoviedb.org/3/search/multi?query=searchTerm&api_key=yourkey")
  }
}