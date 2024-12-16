import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const Showbooks = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/api/book/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching book:", error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <BackButton />
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Book Details</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            {book.title}
          </h2>
          <ul className="space-y-3">
            <li>
              <strong className="text-gray-600">Author:</strong>{" "}
              <span className="text-gray-800">{book.author}</span>
            </li>
            <li>
              <strong className="text-gray-600">Publish Year:</strong>{" "}
              <span className="text-gray-800">{book.publishYear}</span>
            </li>
            <li>
              <strong className="text-gray-600">Created At:</strong>{" "}
              <span className="text-gray-800">
                {new Date(book.createdAt).toLocaleString()}
              </span>
            </li>
            <li>
              <strong className="text-gray-600">Last Updated:</strong>{" "}
              <span className="text-gray-800">
                {new Date(book.updatedAt).toLocaleString()}
              </span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Showbooks;
