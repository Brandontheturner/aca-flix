import React, { Component } from "react";
import { connect } from "react-redux";
import { loadSearch } from "../actions";

class SearchBox extends Component {
  state = {
    searchTerm: ""
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <div id="search" className="Search">
        <input
          onChange={e => this.setState({ searchTerm: e.target.value })}
          onKeyUp={e => {
            /* this is so th search will only be done on enter key */
            if (
              this.props.loadSearch &&
              e.key === "Enter" &&
              this.state.searchTerm
            ) {
              this.props.loadSearch(this.state.searchTerm);
            }
          }}
          type="search"
          placeholder="Search for a title..."
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadSearch: searchTerm => dispatch(loadSearch(searchTerm))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SearchBox);
