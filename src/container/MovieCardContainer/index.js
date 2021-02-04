import React from "react";

import { MovieCard } from "../../components/MovieCard";
import { MovieCardPlaceholder } from "../../components/MovieCardPlaceholder";
import { SearchInput } from "../../components/SearchInput";
import { MovieList } from "../../components/MovieList";

export class MovieCardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieData: "",
      searchKeyword: "",
      notFound: false,
      searchType: "movie",
      isLoading: false,
      movieDetailData: "",
    };
    this.getMovieDetails = this.getMovieDetails.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleResponse = this.handleResponse.bind(this);
    this.handleMovieTypeChange = this.handleMovieTypeChange.bind(this);
    this.linkClick = this.linkClick.bind(this);
  }
  componentWillMount() {}
  componentDidMount() {}
  componentDidUpdate() {}
  getMoviebyID(id) {
    const apiUrl = "https://www.omdbapi.com/?";
    const apiKey = "7c5d79b";
    const searchType = this.state.searchType;
    const finalUrl =
      apiUrl +
      "apiKey=" +
      apiKey +
      "&i=" +
      id +
      "&type=" +
      searchType +
      "&page=1" +
      "&plot=full";
    this.setState({ isLoading: true }, () => {
      fetch(finalUrl)
        .then((response) => response.json())
        .then(this.handleResponse)
        .then(
          // data => console.log(data),
          (data) =>
            this.setState({
              isLoading: false,
              movieDetailData: data,
            })
        )
        .catch((error) => console.log(error));
    });
  }
  getMovieDetails(movieName, returnMultiple) {
    const apiUrl = "https://www.omdbapi.com/?";
    const apiKey = "7c5d79b";
    const searchReturnMultiple = returnMultiple ? "&s=" : "&t=";
    const searchType = this.state.searchType;
    const finalUrl =
      apiUrl +
      "apiKey=" +
      apiKey +
      searchReturnMultiple +
      movieName +
      "&type=" +
      searchType +
      "&page=1" +
      "&plot=full";
    this.setState({ isLoading: true }, () => {
      fetch(finalUrl)
        .then((response) => response.json())
        .then(this.handleResponse)
        .then(
          // data => console.log(data),
          (data) =>
            this.setState({
              isLoading: false,
              movieData: data,
            })
        )
        .catch((error) => console.log(error));
    });
  }
  handleResponse(response) {
    if (response.Response === "False") {
      console.log("inside");
      this.setState({
        notFound: true,
      });
    } else {
      this.setState({
        notFound: false,
      });
    }
    return response;
  }
  handleSubmit(e) {
    e.preventDefault();
    let searchKeyword = this.state.searchKeyword;
    console.log(searchKeyword.length);
    if (searchKeyword.length > 0) {
      this.getMovieDetails(this.state.searchKeyword, true);
    }
  }
  handleChange(e) {
    console.log(e.target.value);
    // this.setState({
    //   searchKeyword: e.target.value,
    // });
    let value = e.target.value;
    this.setState((searchKeyword) => {
      return { searchKeyword: value };
    });
    console.log("test1", e.target.value.length);
    console.log("test2", this.state.searchKeyword.length);
    if (e.target.value.length >= 3) {
      this.getMovieDetails(e.target.value, true);
    }
  }
  handleMovieTypeChange(e) {
    console.log(e.target.value);
    this.setState({
      searchType: e.target.value,
    });
  }
  linkClick(e) {
    let movieId = e.target.id;
    this.getMoviebyID(movieId);
    this.setState({
      movieData: "",
    });
  }
  render() {
    return (
      <div class="container">
        <SearchInput
          handleChange={this.handleChange}
          handleMovieTypeChange={this.handleMovieTypeChange}
          handleSubmit={this.handleSubmit}
          fullData={this.state.movieData}
          handleLinkClick={this.linkClick}
        ></SearchInput>
        {this.state.isLoading ? (
          <MovieCardPlaceholder></MovieCardPlaceholder>
        ) : this.state.movieDetailData !== "" ? (
          <MovieCard fullData={this.state.movieDetailData}></MovieCard>
        ) : null}
      </div>
    );
  }
}
