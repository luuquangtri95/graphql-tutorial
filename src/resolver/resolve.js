const { books, authors } = require("../mock/static");

const resolvers = {
  Query: {
    books: () => books,
    book: (parent, args) =>
      books.find((book) => parseInt(book.id) === parseInt(args.id)),
    authors: () => authors,
    author: (parent, args) =>
      authors.find((author) => parseInt(author.id) === parseInt(args.id)),
  },

  Book: {
    author: (parent, args) => {
      return authors.find((author) => author.id === parent.authorId);
    },
  },
};

module.exports = resolvers;
