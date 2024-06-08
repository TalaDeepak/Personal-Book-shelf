import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SearchBook from "./Components/SearchBook";
import BookShelf from "./Components/BookShelf";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<SearchBook />} />
        <Route path="personalbookshelf" element={<BookShelf />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
