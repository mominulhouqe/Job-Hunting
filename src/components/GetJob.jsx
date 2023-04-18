import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation, faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const GetJob = ({ job }) => {
  const {
    id,
    img,
    address,
    brand,
    description,
    education,
    email,
    experience,
    location,
    phone,
    responsibilities,
    salary,
    title,job_type_1,
    job_type_2
  } = job;
  return (
    <div>
      <div className=" d-flex p-5 bg-light mb-2 container rounded justify-content-evenly align-items-center border">
        <img src={img} className="img-fluid w-25 rounded" alt="" />

        <div className=" align-items-center">
          <h3>{title}</h3>
          <h6>{brand} </h6>
          <div className="d-flex gap-3 mb-2">
            <button className="btn btn-outline-primary">{job_type_1}</button>
            <button className="btn btn-outline-primary">{job_type_2}</button>
          </div>
          <div className="">
            <p>
              {" "}
              <FontAwesomeIcon icon={faLocation} />{" "}
              <span className="fw-bold">Address:</span> {address}
            </p>
            <p>
              {" "}
              <FontAwesomeIcon icon={faSackDollar} />{" "}
              <span className="fw-bold">Salary : </span> {salary}
            </p>
            <Link to={`/views/${id}`}>
            <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetJob;
