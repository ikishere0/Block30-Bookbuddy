import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setBooks } from "../slices/booksSlice";
import api from "../api";
import SingleBook from "./SingleBook";

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  useEffect(() => {
    const fetchBooks = async () => {
      const books = await api.fetchAllBooks();
      dispatch(setBooks(books));
    };
    fetchBooks();
  }, [dispatch]);

  return (
    <div>
      <h1 className="books-page-title">Books</h1>
      <ul className="books-list">
        {books.map((book) => (
          <li key={book.id} className="book-item">
            <SingleBook book={book} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
