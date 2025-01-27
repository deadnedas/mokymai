const express = require("express");
const bookstoreController = require("../controllers/bookstoreController");
const { checkAdmin } = require("../middlewares/routeMiddlewares");

const {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
  getAllAuthors,
  getAuthor,
  createAuthor,
  updateAuthor,
  deleteAuthor,
} = bookstoreController;

const bookstoreRouter = express.Router();

// Define book routes
bookstoreRouter.route("/books").get(getAllBooks); // Get all books
bookstoreRouter.route("/books/:id").get(getBookById); // Get book by ID
bookstoreRouter.route("/books").post(checkAdmin, createBook); // Create new book (admin only)
bookstoreRouter.route("/books/:id").patch(checkAdmin, updateBook); // Update book (admin only)
bookstoreRouter.route("/books/:id").delete(checkAdmin, deleteBook); // Delete book (admin only)

// Define author routes
bookstoreRouter.route("/authors").get(getAllAuthors); // Get all authors
bookstoreRouter.route("/authors/:id").get(getAuthor); // Get author by ID
bookstoreRouter.route("/authors").post(checkAdmin, createAuthor); // Create new author (admin only)
bookstoreRouter.route("/authors/:id").patch(checkAdmin, updateAuthor); // Update author (admin only)
bookstoreRouter.route("/authors/:id").delete(checkAdmin, deleteAuthor); // Delete author (admin only)

module.exports = bookstoreRouter;
