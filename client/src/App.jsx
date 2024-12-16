import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BookDetails from "./pages/Showbooks";
import CreateBook from "./components/CreateBooksModal";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/create" element={<CreateBook />} />
        <Route path="/books/show/:id" element={<BookDetails />} />
      </Routes>
    </div>
  );
};

export default App;
