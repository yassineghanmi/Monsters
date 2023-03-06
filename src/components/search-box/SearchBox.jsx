import React, { Component } from "react";
import "./SearchBox.css";
export class SearchBox extends Component {
  render() {
    const { onSearchChange } = this.props;
    return (
      <div>
        <input
          type="text"
          className="search-box"
          placeholder="monster name"
          onChange={onSearchChange}
        />
      </div>
    );
  }
}

export default SearchBox;
