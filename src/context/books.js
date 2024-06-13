import { createContext, useState, useEffect, useCallback } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const res = await axios.get("http://localhost:3001/books");
    setBooks(res.data);
  };

  const stableFetchBooks = useCallback(fetchBooks, []);

  useEffect(fetchBooks, []);
  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });

    setBooks([...books, response.data]);
  };

  const deleteBookById = async (id) => {
    const res = await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBooks = books.filter((b) => b.id !== id);
    setBooks(updatedBooks);
  };

  /**
   * const editBookById = (id, title) => {
    
    const updatedBooks = books.map((b) => {
      console.log("I am here")
      if (b.id === id) {
        b.title = title;
      }
    });
    setBooks(updatedBooks);
    console.log(books)
  }; */

  const editBookById = async (id, newTitle) => {
    const res = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    console.log(res);

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...res.data };
      }

      return book;
    });

    setBooks(updatedBooks);
  };

  const valueToShare = {
    books,
    deleteBookById,
    editBookById,
    createBook,
    fetchBooks,
  };
  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
