import { useState, useEffect } from "react";

const URL = "https://openlibrary.org/search.json";

export function useBook(query) {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      const controller = new AbortController();

      async function fetchBooks() {
        try {
          setIsLoading(true);
          setError("");

          const res = await fetch(
            `${URL}?q=${query}&limit=10&page=1&fields=title,edition_count,ratings_average,key`,
            {
              signal: controller.signal,
            }
          );

          if (!res.ok)
            throw new Error(
              "Something went wrong! Check your network connection"
            );

          const data = await res.json();

          if (data.numFound === 0) throw new Error("Book not found");

          setBooks(data.docs);
          setError("");
        } catch (err) {
          if (err.name !== "AbortError") setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 2) {
        setBooks([]);
        setError("");
        return;
      }

      // handleCloseMovie();
      fetchBooks();

      return function () {
        controller.abort();
      };
    },
    [query]
  );

  return { books, isLoading, error };
}
