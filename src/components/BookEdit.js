import { useState, useContext } from "react";
import BooksContext from "../context/books";

export default function BookEdit({ book, onEdit }) {
  const { editBookById } = useContext(BooksContext);

  const [title, setTitle] = useState(book.title);

  const handleChange = (e) => setTitle(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    onEdit();
    editBookById(book.id, title);
  };

  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <label>Title</label>
      <input value={title} className="input" onChange={handleChange} />
      <button className="button is-primary"> Save </button>
    </form>
  );
}
