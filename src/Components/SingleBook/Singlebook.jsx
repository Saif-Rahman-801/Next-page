import React from "react";
import { Link } from "react-router-dom";

const Singlebook = ({ book }) => {
  return (
    <Link to={`/books/${book.isbn13}`}>
      <div>
        <div className="overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded-lg shadow-md hover:shadow-2xl ">
          <img
            src={book.image}
            alt="book cover"
            className="object-cover w-full h-65 md:h-64 xl:h-80"
          />

          <div className="px-6 py-4 bg-black text-gray-300 bg-opacity-75 absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 flex flex-col">
            <p>{book.title} </p>
            <br></br>
            <p>{book.subtitle.substring(0, 50)}... </p>
            <br />
            <p className="mt-auto">Price :{book.price} </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Singlebook;
