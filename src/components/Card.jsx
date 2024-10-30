import React from "react";

const Card = ({headline,description,btnlabel}) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold">{headline}</h2>
      <p className="mt-2 mb-4">
        {description}
      </p>
      <a
        href="/jobs.html"
        className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
      >
        {btnlabel}
      </a>
    </div>
  );
};

export default Card;
