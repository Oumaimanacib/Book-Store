const mongoose = require("mongoose");
const bookSchema = mongoose.Schema({
  title: {
    type: String,
  },

  author: {
    type: String,
  },

  publishYear: {
    type: Number,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Book = mongoose.model("Book", bookSchema);
module.exports = { Book };
