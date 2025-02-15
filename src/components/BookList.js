import BookShow from "./BookShow";
import useBooksContext from "../hooks/useBooksContext";

export default function BookList() {
  const { books } = useBooksContext();
  const renderBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });
  return <div className="book-list">{renderBooks}</div>;
}
