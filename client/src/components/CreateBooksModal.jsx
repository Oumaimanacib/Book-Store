import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const CreateBooksModal = ({ isOpen, onClose, refreshBooks }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSaveBook = async () => {
    if (!title || !author || !publishYear) {
      toast.error("All fields are required!");
      return;
    }

    try {
      setLoading(true);
      await axios.post("http://localhost:3000/api/book", {
        title,
        author,
        publishYear,
      });
      setLoading(false);
      toast.success("Book created successfully!");
      refreshBooks(); // Refresh book list
      onClose(); // Close modal
    } catch (error) {
      setLoading(false);
      toast.error("Failed to create book. Please try again.");
      console.error(error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[400px] relative">
        <h2 className="text-lg font-bold mb-4">Create Book</h2>

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
              onClick={handleSaveBook}
              disabled={loading}
              className={`${
                loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
              } text-white px-4 py-2 rounded-md`}
            >
              {loading ? "Saving..." : "Save Book"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBooksModal;
