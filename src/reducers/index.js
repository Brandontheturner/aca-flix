import CombineReducers, { combineReducers } from "redux";

function movieSearch(state = [], action) {
  if (action.type === "MY_MOVIE_LIST_LOADED") {
    return action.value;
  }
  return state;
}
// function searchResults(state = [], action) {
//   if (action.type === "SEARCH_RESULTS_LOADED") {
//     return action.value;
//   }
//   return state;
// }

const rootReducer = combineReducers({
  movieSearch
  // searchResults
});

export default rootReducer;
