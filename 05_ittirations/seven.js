const books = [
  {
    title: "The Lord of the Rings",
    genre: "Fantasy",
    publish: 1954,
    edition: "Revised",
  },
  {
    title: "To Kill a Mockingbird",
    genre: "Southern Gothic",
    publish: 1960,
    edition: "Paperback",
  },
  {
    title: "1984",
    genre: "Dystopian",
    publish: 1949,
    edition: "Modern Library",
  },
  {
    title: "Pride and Prejudice",
    genre: "Romance",
    publish: 1813,
    edition: "Dover Thrift Editions",
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    genre: "Science Fiction",
    publish: 1979,
    edition: "Illustrated",
  },
  {
    title: "The Catcher in the Rye",
    genre: "Coming-of-age",
    publish: 1951,
    edition: "Vintage",
  },
  {
    title: "The Great Gatsby",
    genre: "Tragedy",
    publish: 1925,
    edition: "Scribner Classic",
  },
  {
    title: "The Hobbit",
    genre: "Fantasy",
    publish: 1937,
    edition: "Illustrated",
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    genre: "Fantasy",
    publish: 1997,
    edition: "Bloomsbury",
  },
  {
    title: "The Chronicles of Narnia",
    genre: "Fantasy",
    publish: 1950,
    edition: "Macmillan Collector's Library",
  },
];

// console.log(books);

function genre_selector(g) {
    const userBooks = books.filter((bk) => bk.genre === g)
    console.log(userBooks)
}

genre_selector("Tragedy")


