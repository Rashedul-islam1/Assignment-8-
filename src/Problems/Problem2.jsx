const Problem2 = () => {
  // Array of book objects
  const books = [
    { title: "Book1", author: "writer1", year: 2000 },
    { title: "Book2", author: "writer2", year: 2001 },
    { title: "Book3", author: "writer3", year: 2002 },
    { title: "Book4", author: "writer4", year: 20003 },
  ];

  const getBookTitles = (booksArray) => {
    return booksArray.map((book) => book.title);
  };

  console.log(getBookTitles(books));

  return <div></div>;
};

export default Problem2;
