import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose, bindActionCreators } from "redux";
import { Card } from "react-materialize";
import { Col } from "react-bootstrap";
import LinesEllipsis from "react-lines-ellipsis";
import { getBookDetailRepos } from "./api";
import { loadBookDetailRepos } from "./actions";

class BookDetail extends Component {
  async componentWillMount() {
    const payload = await getBookDetailRepos(this.props.match.params.id);
    this.props.loadBookDetailRepos(payload);
  }

  render() {
    const { book } = this.props;
    if (!book) {
      return <div>loading...</div>;
    }
    return (
      <Col md={12}>
        <Card className="large">
          <strong>
            <LinesEllipsis
              text={book.title}
              maxLine="2"
              ellipsis="..."
              trimRight
              basedOn="letters"
            />
          </strong>
          <h5>
            <a href={book.infoLink} target="_blank">
              {book.subtitle}
            </a>
          </h5>
          <h5>
            publishedDate: <strong>{book.publishedDate}</strong>
          </h5>
          {book.authors && (
            <p>
              Authors:{" "}
              {book.authors.map(author => (
                <span key={author}>{author}</span>
              ))}
            </p>
          )}
          {book.imageLinks &&
            book.imageLinks.thumbnail && (
              <img
                className="book-wrapper__image"
                src={book.imageLinks.thumbnail}
                alt={book.title}
              />
            )}
          <LinesEllipsis
            text={book.description}
            maxLine="6"
            ellipsis="..."
            trimRight
            basedOn="letters"
          />
          <br />
        </Card>
      </Col>
    );
  }
}
BookDetail.propTypes = {
  isLoading: PropTypes.bool,
  actions: PropTypes.object,
  book: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  match: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ loadBookDetailRepos }, dispatch);
const mapStateToProps = ({ details }) => {
  const { book, isLoading, isLoaded } = details;
  return {
    book: book,
    isLoading,
    isLoaded
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(BookDetail);
