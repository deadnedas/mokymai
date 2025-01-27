const { sql } = require("../dbConnection");

exports.getAllAuthors = async () => {
  const authors = await sql`
    SELECT authors.*, 
           (
             SELECT json_agg(json_build_object('id', books.id, 'title', books.title, 'summary', books.summary, 'isbn', books.isbn))
             FROM books
             WHERE books.author_id = authors.id
           ) AS books
    FROM authors;
  `;
  return authors;
};

exports.getAuthorById = async (id) => {
  const authors = await sql`
    SELECT authors.*, 
           (
             SELECT json_agg(json_build_object('id', books.id, 'title', books.title, 'summary', books.summary, 'isbn', books.isbn))
             FROM books
             WHERE books.author_id = authors.id
           ) AS books
    FROM authors
    WHERE authors.id = ${id};
  `;
  return authors[0];
};

exports.createAuthor = async ({ name, birthdate, biography }) => {
  try {
    const newAuthor = await sql`
      INSERT INTO authors (name, birthDate, biography)
      VALUES (${name}, ${birthdate}, ${biography})
      RETURNING *;
    `;
    return newAuthor;
  } catch (error) {
    console.error("Database error:", error);
    throw new Error("Failed to create a new author.");
  }
};

exports.updateAuthor = async (id, author) => {
  const { name, birthdate, biography } = author;
  const newAuthor = await sql`
    UPDATE authors
    SET name = ${name}, birthDate = ${birthdate}, biography = ${biography}
    WHERE id = ${id}
    RETURNING *;
  `;

  return newAuthor[0];
};

exports.deleteAuthor = async (id) => {
  const deletedAuthor = await sql`
    DELETE FROM authors
    WHERE id = ${id}
    RETURNING *;
  `;

  return deletedAuthor[0];
};

exports.getAllBooks = async (limit, offset) => {
  const books = await sql`
    SELECT books.*, authors.name AS author_name, authors.birthDate AS author_birthDate, authors.biography AS author_biography
    FROM books
    JOIN authors ON books.author_id = authors.id
    ${
      limit !== undefined && offset !== undefined
        ? sql`LIMIT ${limit} OFFSET ${offset}`
        : sql``
    } 
  `;
  return books;
};

exports.getBookById = async (id) => {
  const books = await sql`
    SELECT books.*, authors.name AS author_name, authors.birthDate AS author_birthDate, authors.biography AS author_biography
    FROM books
    JOIN authors ON books.author_id = authors.id
    WHERE books.id = ${id};
  `;
  return books[0];
};
exports.createBook = async ({ title, summary, isbn, author_id }) => {
  const newBook = await sql`
    INSERT INTO books (title, summary, isbn, author_id)
    VALUES (${title}, ${summary}, ${isbn}, ${author_id})
    RETURNING *;
  `;
  return newBook[0];
};

exports.updateBook = async (id, book) => {
  const { title, summary, isbn, author_id } = book;
  const updatedBook = await sql`
    UPDATE books
    SET title = ${title}, summary = ${summary}, isbn = ${isbn}, author_id = ${author_id}
    WHERE id = ${id}
    RETURNING *;
  `;
  return updatedBook[0];
};

exports.deleteBook = async (id) => {
  const deletedBook = await sql`
    DELETE FROM books
    WHERE id = ${id}
    RETURNING *;
  `;
  return deletedBook[0];
};
//
