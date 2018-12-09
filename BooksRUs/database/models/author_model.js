const mongoose = require('mongoose');
const AuthorSchema = require("./../schemas/author_schema");

//where "author" is a collection in a database
const AuthorModel = mongoose.model("author", AuthorSchema);

module.exports = AuthorModel;