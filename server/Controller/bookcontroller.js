const { Book } = require("../models/bookmodel");

const getbook = async (req, res) => {
  try {
    const book = await Book.find();
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getbookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createbook = async (req, res) => {
  try {
    const { title, author, publishYear } = req.body;
    const book = await Book.create({ title, author, publishYear });
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updatebook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByIdAndUpdate(id, req.body);
    if (!book) {
      return res.status(404).json({ message: "book not found" });
    }
    const updatebook = await Book.findById(id);
    res.status(200).json(updatebook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deletebook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByIdAndDelete(id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getbook,
  getbookById,
  createbook,
  updatebook,
  deletebook,
};
