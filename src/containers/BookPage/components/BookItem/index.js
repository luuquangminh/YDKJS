import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-materialize";
import { Col } from "react-bootstrap";
import LinesEllipsis from "react-lines-ellipsis";

const BookItem = ({ book }) => (
  <Col md={4}>
    <Card className="medium">
      <LinesEllipsis
        text={book.volumeInfo.title}
        maxLine="2"
        ellipsis="..."
        trimRight
        basedOn="letters"
      />
      <h5>
        {" "}
        <a href={book.infoLink} target="_blank">
          {" "}
          {book.volumeInfo.subtitle}{" "}
        </a>
      </h5>
      <h5>
        {" "}
        publishedDate: <strong> {book.volumeInfo.publishedDate} </strong>
      </h5>{" "}
      {book.volumeInfo.authors && (
        <p>
          {" "}
          Authors:{" "}
          {book.volumeInfo.authors.map(author => (
            <span key={author}> {author} </span>
          ))}
        </p>
      )}{" "}
      {book.volumeInfo.imageLinks &&
        book.volumeInfo.imageLinks.thumbnail && (
          <img
            className="book-wrapper__image"
            src={book.volumeInfo.imageLinks.thumbnail}
            alt={book.volumeInfo.title}
          />
        )}{" "}
    </Card>{" "}
  </Col>
);

BookItem.propTypes = {
  book: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

export default BookItem;
