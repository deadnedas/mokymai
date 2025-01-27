const {
  // AUTHORS
  getAllAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor,
  // BOOKS
  getBooksByTitle,
  getBooksByAuthor,
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
} = require("../models/bookstoreModel");

exports.getAllAuthors = async (req, res) => {
  try {
    const authors = await getAllAuthors();

    res.status(200).json({
      status: "success",
      data: authors,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.getAuthor = async (req, res) => {
  try {
    const { id } = req.params;
    const author = await getAuthorById(id);

    if (!author) {
      return res.status(404).json({
        status: "fail",
        message: "Invalid ID",
      });
    }
    res.status(200).json({
      status: "success",
      data: author,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

// fix
exports.createAuthor = async (req, res) => {
  try {
    const { name, birthdate, biography } = req.body;

    if (!name || name.length < 2) {
      return res.status(400).json({
        status: "fail",
        message: "Invalid or missing name",
      });
    }

    if (!birthdate || !/^\d{4}-\d{2}-\d{2}$/.test(birthdate)) {
      return res.status(400).json({
        status: "fail",
        message: "Invalid or missing birth date",
      });
    }

    const newAuthor = await createAuthor({ name, birthdate, biography });
    console.log(newAuthor);
    res.status(201).json({
      status: "success",
      data: newAuthor,
    });
  } catch (error) {
    console.error("Error creating author:", error);
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.updateAuthor = async (req, res) => {
  try {
    const { id } = req.params;
    const author = req.body;

    const newAuthor = await updateAuthor(id, author);

    res.status(200).json({
      status: "success",
      data: newAuthor,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
exports.deleteAuthor = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedAuthor = await deleteAuthor(id);

    if (!deletedAuthor) {
      return res.status(404).json({
        status: "fail",
        message: "Author not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: deletedAuthor,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

// BOOKS

exports.getAllBooks = async (req, res) => {
  try {
    const filter = req.query;

    let page = parseInt(filter.page);
    let limit = parseInt(filter.limit);

    const offSet = (page - 1) * limit;

    if (page < 1 || limit < 1) {
      return res.status(400).json({
        status: "fail",
        message: "invalid page or limit value",
      });
    }

    const authors = await getAllBooks(limit, offSet);

    res.status(200).json({
      status: "success",
      data: authors,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.getBook = async (req, res) => {
  try {
    const { id } = req.params;
    const author = await getBookById(id);

    if (!author) {
      return res.status(404).json({
        status: "fail",
        message: "Invalid ID",
      });
    }
    res.status(200).json({
      status: "success",
      data: author,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

// fix
exports.getAllBooks = async (req, res) => {
  try {
    const filter = req.query;

    let page = parseInt(filter.page) || 1;
    let limit = parseInt(filter.limit) || 10;

    let offset = (page - 1) * limit;
    console.log(`Page: ${page}, Limit: ${limit}, Offset: ${offset}`);

    const books = await getAllBooks(limit, offset);

    res.status(200).json({
      status: "success",
      data: books,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await getBookById(id);

    if (!book) {
      return res.status(404).json({
        status: "fail",
        message: "Invalid ID",
      });
    }
    res.status(200).json({
      status: "success",
      data: book,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.createBook = async (req, res) => {
  try {
    const { title, summary, isbn, author_id } = req.body;

    if (!title || title.length < 3) {
      return res.status(400).json({
        status: "fail",
        message: "Invalid or missing title",
      });
    }

    if (!isbn || !/^[0-9-]{10}$/.test(isbn)) {
      return res.status(400).json({
        status: "fail",
        message: "Invalid or missing ISBN",
      });
    }

    // Check if the author exists
    const author = await getAuthorById(author_id);
    if (!author) {
      return res.status(400).json({
        status: "fail",
        message: "Author not found",
      });
    }

    const newBook = await createBook({ title, summary, isbn, author_id });
    res.status(201).json({
      status: "success",
      data: newBook,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = req.body;

    const updatedBook = await updateBook(id, book);

    res.status(200).json({
      status: "success",
      data: updatedBook,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedBook = await deleteBook(id);

    if (!deletedBook) {
      return res.status(404).json({
        status: "fail",
        message: "Book not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: deletedBook,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
