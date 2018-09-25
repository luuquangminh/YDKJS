/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { SearchBox, BookList } from './components';
import { getBookRepos } from './api'
import { loadBookRepos, loadBookReposSuccess } from './actions';
export class BookPage extends Component {

  async searchClick(term) {
    const payload = await getBookRepos(term);
    this.props.loadBookReposSuccess(payload);
    // this.props.actions.loadBookRepos(term);
  }

  render() {
    return (
      <div>
        <SearchBox search={(term) => this.searchClick(term)} loading={this.props.isLoading} />
        <BookList books={this.props.books} />
      </div>

    );
  }
}
BookPage.propTypes = {
  isLoading: PropTypes.bool,
  isLoaded: PropTypes.bool,
  books: PropTypes.array,
  term: PropTypes.string,
  actions: PropTypes.object,
  books: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  loadBookReposSuccess
}, dispatch)
const mapStateToProps = ({ books }) => {
  const { bookData, termSearch, isLoading, isLoaded } = books;
  return {
    books: bookData,
    term: termSearch,
    isLoading,
    isLoaded,
  }
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(BookPage);
