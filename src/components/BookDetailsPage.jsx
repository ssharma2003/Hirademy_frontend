import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookDetailsPage = () => {
  const { id } = useParams();
  const [bookDetails, setBookDetails] = useState(null);

  const fetchBookDetails = async () => {
    try {
      const res = await fetch(`https://softwium.com/api/books/${id}`);
      const data = await res.json();
      setBookDetails(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBookDetails();
  }, [id]);

  if (!bookDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Book Details</h2>
      <p><strong>Title:</strong> {bookDetails.title}</p>
      <p><strong>Author:</strong> {bookDetails.authors.join(",")}</p>
      <p><strong>Page Count:</strong> {bookDetails.pageCount}</p>
      <p><strong>ISBN:</strong> {bookDetails.isbn}</p>
    </div>
  );
};

export default BookDetailsPage;
