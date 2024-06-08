import { useLocalStorageState } from "../Hook/useLocalStorage";
import BookItem from "./BookItem";

function Books({ books }) {
  const [added, setAdded] = useLocalStorageState([], "bookshelf");

  function handleAdd(item) {
    setAdded((prev) => [...prev, item]);
  }

  function handleDelete(book) {
    setAdded((prev) => prev.filter((item) => item.key !== book.key));
  }
  console.log(books);
  return (
    <div className="container">
      {books.map((book, i) => (
        <BookItem
          book={book}
          added={added}
          handleDelete={handleDelete}
          handleAdd={handleAdd}
          key={i}
        />
      ))}
    </div>
  );
}

export default Books;
