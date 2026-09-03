import React from "react";
import { useParams } from "react-router-dom";

const EditMovie = () => {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold">Edit Movie</h1>
      <p>Movie ID: {id}</p>
    </div>
  );
};

export default EditMovie;