/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React, { Component } from "react";
import { connect } from "react-redux";
import { compose, bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { SearchBox, ListBooks } from "./components";
import { getBookRepos } from "./api";
import { loadBookReposSuccess, loadBookReposPage } from "./actions";
export class BookPage extends Component {
  async searchClick(term) {
    const payload = await getBookRepos(term, 0);
    this.props.loadBookReposSuccess(payload);
  }

  render() {
    const { books, isLoading } = this.props;
    return (
      <div>
        <SearchBox
          search={term => this.searchClick(term)}
          loading={isLoading}
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
  books: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      loadBookReposSuccess,
      loadBookReposPage
    },
    dispatch
  );
const mapStateToProps = ({ books }) => {
  const { bookData, termSearch, isLoading, isLoaded, startIndex } = books;
  return {
    books: bookData,
    term: termSearch,
    startIndex,
    isLoading,
    isLoaded
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(BookPage);
