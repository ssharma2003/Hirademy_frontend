// App.js

import React from "react";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import BookDetailsPage from "./components/BookDetailsPage";
import BooksPage from "./components/BooksPage";

const App = () => {
  return (
    <Router>
     <Routes>
        <Route exact path="/" element={<BooksPage />} />
        <Route path="/book/:id" element={<BookDetailsPage />} />
      
     </Routes>
    </Router>
  );
};

export default App;
