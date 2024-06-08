import { Link } from "react-router-dom";

function BookShelf() {
  const storedValue = localStorage.getItem("bookshelf");
  const books = JSON.parse(storedValue);

  return (
    <div className="box">
      <div className="nav">
        <button className="button">
          <Link to="/" className="text">
            Go Back
          </Link>
        </button>
      </div>
      <div className="container">
        {books.map((item) => (
          <div className="card">
            <p>Title : {item.title}</p>
            <p>Edition Count : {item.edition_count}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookShelf;
