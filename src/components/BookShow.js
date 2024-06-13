import {  useState } from "react";
import BookEdit from "./BookEdit";
import useBooksContext from "../hooks/useBooksContext";

export default function BookShow({ book }) {
  const {deleteBookById} = useBooksContext();
  const [showEdit, setShowEdit] = useState(false);

  const handleDelete = () => deleteBookById(book.id);
  const handleEdit = () => setShowEdit(!showEdit);
  const handleEditClose = () => {
    handleEdit();
   // onEdit(id, title);
  };

  let content = <h3>{book.title}</h3>;

  if (showEdit) {
    content = <BookEdit onEdit={handleEditClose} book={book} />;
  }

  return (
    <div className="book-show">
      <div>{content}</div>
      <div className="actions">
        <button onClick={handleDelete} className="delete">
          Delete
        </button>
        <button onClick={handleEdit} className="edit">
          Edit
        </button>
      </div>
    </div>
  );
}
