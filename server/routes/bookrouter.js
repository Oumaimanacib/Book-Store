const express = require("express");
const router = express.Router();
const {
  getbook,
  getbookById,
  createbook,
  updatebook,
  deletebook,
} = require("../controller/bookcontroller");

// get all books
router.get("/book", getbook);

// get a book by id
router.get("/book/:id", getbookById);

// create a book
router.post("/book", createbook);

// update a book by id
router.put("/book/:id", updatebook);

// delete a book by id
router.delete("/book/:id", deletebook);

module.exports = router;
