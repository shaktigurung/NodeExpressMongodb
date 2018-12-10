const mongoose = require('mongoose');
const BookSchema = require("./../schemas/book_schema");

//where "Book" is a collection in a database
const BookModel = mongoose.model("book", BookSchema);

module.exports = BookModel;