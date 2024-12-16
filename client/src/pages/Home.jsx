import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditBooksModal from "../components/EditBooksModal";
import Spinner from "../components/Spinner";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import { AiOutlineEdit, AiOutlineEye } from "react-icons/ai";
import DeleteConfirmationModal from "../components/DeleteConfirmationModal";
import CreateBooksModal from "../components/CreateBooksModal";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [selectedBookId, setSelectedBookId] = useState(null);

  // Fetch books from API
  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = () => {
    setLoading(true);
    axios
      .get("http://localhost:3000/api/book")
      .then((response) => {
        setBooks(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
        toast.error("Failed to load books.");
        setLoading(false);
      });
  };

  // Open the Edit Book modal
  const handleOpenEditModal = (book) => {
    setSelectedBook(book);
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setSelectedBook(null);
  };

  const handleEditBook = (data) => {
    setLoading(true);
    return axios
      .put(`http://localhost:3000/api/book/${selectedBook._id}`, data)
      .then(() => {
        setBooks((prev) =>
          prev.map((book) =>
            book._id === selectedBook._id ? { ...book, ...data } : book
          )
        );
        setLoading(false);
        toast.success("Book updated successfully!");
      })
      .catch((error) => {
        setLoading(false);
        toast.error("Error updating book.");
        console.error(error);
      });
  };

  // Open Delete Confirmation modal
  const handleOpenDeleteModal = (id) => {
    setSelectedBookId(id);
    setShowDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setSelectedBookId(null);
  };

  // Delete the selected book
  const handleDelete = () => {
    setDeleteLoading(true);
    axios
      .delete(`http://localhost:3000/api/book/${selectedBookId}`)
      .then(() => {
        setBooks((prev) => prev.filter((book) => book._id !== selectedBookId));
        setDeleteLoading(false);
        handleCloseDeleteModal();
        toast.success("Book deleted successfully!");
      })
      .catch((error) => {
        setDeleteLoading(false);
        toast.error("An error occurred. Please try again.");
        console.error(error);
      });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Books List</h1>
        <button
          onClick={() => setShowCreateModal(true)}
          className="flex items-center justify-center bg-blue-600 text-white rounded-md px-4 py-2 shadow-md hover:bg-blue-700"
        >
          <MdOutlineAddBox className="text-2xl mr-2" />
          Add Book
        </button>
      </div>

      {loading ? (
        <Spinner />
      ) : (
        <div className="overflow-x-auto shadow-lg rounded-md">
          <table className="min-w-full bg-white border-collapse">
            <thead>
              <tr className="bg-gray-200 text-left text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6">#</th>
                <th className="py-3 px-6">Title</th>
                <th className="py-3 px-6 max-md:hidden">Author</th>
                <th className="py-3 px-6 max-md:hidden">Publish Year</th>
                <th className="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {books.map((book, index) => (
                <tr
                  key={book._id}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-6">{index + 1}</td>
                  <td className="py-3 px-6">{book.title}</td>
                  <td className="py-3 px-6 max-md:hidden">{book.author}</td>
                  <td className="py-3 px-6 max-md:hidden">
                    {book.publishYear}
                  </td>
                  <td className="py-3 px-6 text-center">
                    <div className="flex items-center justify-center gap-x-4">
                      <Link
                        to={`/books/show/${book._id}`}
                        className="text-blue-500 hover:text-blue-600"
                      >
                        <AiOutlineEye className="text-xl" />
                      </Link>

                      <button
                        onClick={() => handleOpenEditModal(book)}
                        className="text-yellow-500 hover:text-yellow-600"
                      >
                        <AiOutlineEdit className="text-xl" />
                      </button>
                      <button
                        onClick={() => handleOpenDeleteModal(book._id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <MdOutlineDelete className="text-xl" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <ToastContainer position="top-right" autoClose={3000} />

      <CreateBooksModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        refreshBooks={fetchBooks}
      />
      <EditBooksModal
        isOpen={showEditModal}
        onClose={handleCloseEditModal}
        bookData={selectedBook}
        onSave={handleEditBook}
      />
      <DeleteConfirmationModal
        isOpen={showDeleteModal}
        onClose={handleCloseDeleteModal}
        onConfirm={handleDelete}
        loading={deleteLoading}
      />
    </div>
  );
};

export default Home;
