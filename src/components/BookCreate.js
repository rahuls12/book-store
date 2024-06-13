import { useState } from "react";
import useBooksContext from "../hooks/useBooksContext";

export default function BookCreate() {

  const {createBook} = useBooksContext();
  const [title, setTitle] = useState("");
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createBook(title);
    setTitle("");
  };
  return (
    <div className="book-create">
        <h1 className="title">Add a Book</h1>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button">Create!</button>
      </form>
    </div>
  );
}
