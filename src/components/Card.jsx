import React from "react";
import { Link } from "react-router-dom";

const Card = ({headline,description,btnlabel}) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold">{headline}</h2>
      <p className="mt-2 mb-4">
        {description}
      </p>
      <Link
        to="/jobs"
        className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
      >
        {btnlabel}
      </Link>
    </div>
  );
};

export default Card;
