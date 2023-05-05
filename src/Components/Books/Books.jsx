import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Singlebook from "../SingleBook/Singlebook";
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";

const Books = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <LoadingSpinner />;
  }

  const { books } = useLoaderData(); // distructured
  //   const booksData  = useLoaderData();->// not-distructured
  //   console.log(books);
  return (
    <div className="my-container">
      <div className="grid gap-6 mb-8 lg:grid-cols-4 sm:grid-cols-2 font-semibold">
        {books.map((book) => (
          <Singlebook key={book.isbn13} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
