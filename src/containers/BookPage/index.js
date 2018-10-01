/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React, { Component } from "react";
import { connect } from "react-redux";
import { compose, bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { SearchBox, ListBooks, Pagination } from "./components";
import { getBookRepos } from "./api";
import { setSearchTerm, loadBookReposSuccess, setStartIndex } from "./actions";
export class BookPage extends Component {
  async searchClick(term) {
    const payload = await getBookRepos({ term });
    this.props.loadBookReposSuccess(payload);
    this.props.setSearchTerm(term);
  }

  async onChangePage(startIndex) {
    console.log(startIndex);
    const payload = await getBookRepos({ term: this.props.term, startIndex });
    this.props.loadBookReposSuccess(payload);
    this.props.setStartIndex(startIndex);
  }

  render() {
    const { books, isLoading, startIndex, maxIndex } = this.props;
    console.log("fdfdf", maxIndex);
    return (
      <div>
        <SearchBox
          search={term => this.searchClick(term)}
          loading={isLoading}
        />
        <Pagination
          maxIndex={maxIndex}
          currentIdex={startIndex + 1}
          onStartIndexChange={startIndex => this.onChangePage(startIndex)}
        />
        <ListBooks books={books} />
      </div>
    );
  }
}
BookPage.propTypes = {
  isLoading: PropTypes.bool,
  isLoaded: PropTypes.bool,
  term: PropTypes.string,
  actions: PropTypes.object,
  startIndex: PropTypes.number,
  maxIndex: PropTypes.number,
  books: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      loadBookReposSuccess,
      setSearchTerm,
      setStartIndex
    },
    dispatch
  );
const mapStateToProps = ({ books }) => {
  const { bookData, termSearch, maxIndex, startIndex } = books;
  return {
    books: bookData,
    term: termSearch,
    startIndex,
    maxIndex
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(BookPage);
