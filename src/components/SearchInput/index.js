import React from "react";
import _ from "lodash";

export class SearchInput extends React.Component {
  render() {
    const {
      handleChange,
      handleMovieTypeChange,
      handleSubmit,
      fullData,
      handleLinkClick,
    } = this.props;
    let newData = _.values(fullData.Search).sort();
    let displayList = newData.map(function (item, key) {
      return (
        <li>
          <a onClick={handleLinkClick} id={item.imdbID}>
            {item.Title}
          </a>
        </li>
      );
    });
    return (
      <>
        <form onSubmit={handleSubmit} className="search-box">
          <input
            autoFocus
            className="search"
            type="search"
            id="search"
            autoComplete="off"
            onInput={handleChange}
            placeholder="Search"
          />
          <select onChange={handleMovieTypeChange}>
            <option>movie</option>
            <option>series</option>
            <option>episodes</option>
          </select>
          <button className="btn" type="submit">
            SEARCH
          </button>
          <div class="search-autocomplete">
            <ul>{displayList}</ul>
          </div>
        </form>
      </>
    );
  }
}
