function BookItem({ added, book, handleDelete, handleAdd }) {
  // function handleDelete() {
  //   setAdded((watched) => watched.filter((movie) => !isEqual(movie, book)));
  // }

  const haveAdded = added.some((item) => item.key === book.key);

  return (
    <div className="card">
      <p>Title : {book.title}</p>
      <p>Edition Count : {book.edition_count}</p>
      {haveAdded ? (
        <button onClick={() => handleDelete(book)} className="button ">
          Delete
        </button>
      ) : (
        <button onClick={() => handleAdd(book)} className="button">
          Add to BookShelf
        </button>
      )}
    </div>
  );
}

export default BookItem;
