import React from "react";
import _ from "lodash";

export class MovieList extends React.Component {
  render() {
    const { fullData } = this.props;
    console.log(fullData);
    let newData = _.values(fullData.Search);
    console.log(newData);
    let displayList = newData.map(function (item, key) {
      console.log(item, key);
      return <li>{item.Title}</li>;
    });
    return (
      <>
        <div class="list">{displayList}</div>
      </>
    );
  }
}
