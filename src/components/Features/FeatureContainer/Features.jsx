import React, { useEffect, useState } from "react";
import FeaturesData from "../FeaturesData/FeaturesData";
import "./Features.css";
import { useNavigate } from "react-router-dom";

const Features = () => {
  const [features, setFeatures] = useState([]);
  const [numCards, setNumCards] = useState(4); // initially show 4 cards
  const navigate = useNavigate();

  useEffect(() => {
    fetch("features.json")
      .then((res) => res.json())
      .then((features) => setFeatures(features));
  }, []);

  const handleViewDetails = (id) => {
    navigate(`/views/${id}`);
  };

  const handleSeeMore = () => {
    setNumCards(features.length); // show all cards
  };

  return (
    <div className="">
      <div className="mb-5 text-center">
        <h1 className="mb-3 fw-bold">Featured Jobs</h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="features">
        {features.slice(0, numCards).map((feature) => (
          <FeaturesData
            key={feature.id}
            feature={feature}
            handleViewDetails={handleViewDetails}
          ></FeaturesData>
        ))}
      </div>
      {numCards < features.length && (
        <div className="d-flex justify-content-center mb-4 mt-3">
          <button className="btn btn-primary " onClick={handleSeeMore}>
            See All Jobs
          </button>
        </div>
      )}
    </div>
  );
};

export default Features