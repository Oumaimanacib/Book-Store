import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "./Spinner";

const EditBooksModal = ({ isOpen, onClose, bookData, onSave }) => {
  const [title, setTitle] = useState(bookData?.title || "");
  const [author, setAuthor] = useState(bookData?.author || "");
  const [publishYear, setPublishYear] = useState(bookData?.publishYear || "");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (bookData) {
      setTitle(bookData.title);
      setAuthor(bookData.author);
      setPublishYear(bookData.publishYear);
    }
  }, [bookData]);

  const handleSave = () => {
    if (!title || !author || !publishYear) {
      toast.error("All fields are required!");
      return;
    }

    const data = { title, author, publishYear };

    setLoading(true);
    onSave(data)
      .then(() => {
        toast.success("Book updated successfully!");
        setLoading(false);
        onClose(); // Close modal after success
      })
      .catch((error) => {
        toast.error("An error occurred. Please try again.");
        setLoading(false);
      });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="bg-white rounded-lg shadow-lg p-6 w-[400px] relative">
        <h2 className="text-lg font-bold mb-4">Edit Book</h2>
        {loading ? (
          <div className="flex justify-center items-center h-20">
            <Spinner />
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 px-3 py-2"
                placeholder="Enter book title"
              />
            </div>
            <div>
              <label
                htmlFor="author"
                className="block text-sm font-medium text-gray-700"
              >
                Author
              </label>
              <input
                id="author"
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 px-3 py-2"
                placeholder="Enter author's name"
              />
            </div>
            <div>
              <label
                htmlFor="publishYear"
                className="block text-sm font-medium text-gray-700"
              >
                Publish Year
              </label>
              <input
                id="publishYear"
                type="number"
                value={publishYear}
                onChange={(e) => setPublishYear(e.target.value)}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 px-3 py-2"
                placeholder="Enter publish year"
              />
            </div>
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={onClose}
                className="text-gray-600 bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Save Changes
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditBooksModal;
