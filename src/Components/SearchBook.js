import { useState } from "react";
import { useBook } from "../Hook/useBook";
import Loding from "./Loding";
import Books from "./Books";
import Error from "./Error";
import { Link } from "react-router-dom";

function SearchBook() {
  const [query, setQuery] = useState("");
  const { books, isLoading, error } = useBook(query);

  return (
    <div className="box">
      <h1>Search by book name</h1>
      <div className="nav">
        <input
          className="search"
          type="text"
          placeholder="Search book name...."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button">
          <Link className="text" to="personalbookshelf">
            My BookShelf
          </Link>
        </button>
      </div>
      <div className="conatiner">
        {isLoading && <Loding />}
        {error && <Error message={error} />}
        {!error && !isLoading && <Books books={books} />}
      </div>
    </div>
  );
}

export default SearchBook;
