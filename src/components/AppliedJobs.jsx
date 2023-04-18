import React, { useEffect, useState } from "react";
import Header from "./Header";
import GetJob from "./GetJob";

const AppliedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState("");
  const [selectedJobType, setSelectedJobType] = useState(null);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setJobs(cart);
  }, []);

  const filteredJobs = jobs.filter((job) => {
    if (filter === "") {
      return true;
    }
    return job.type === filter;
  });

  return (
    <div>
      <Header></Header>
      <div>
        <h1 className="text-center mb-5 bg-light p-5">Applied Jobs</h1>
      </div>

      <div className="dropdown mb-3">
        <button
          className="btn btn-outline-secondary dropdown-toggle"
          type="button"
          id="job-type-dropdown"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {selectedJobType || "Job Type"}
        </button>
        <ul className="dropdown-menu" aria-labelledby="job-type-dropdown">
          <li>
            <button
              className="dropdown-item"
              onClick={() => setSelectedJobType(null)}
            >
              All
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              onClick={() => setSelectedJobType("Full Time")}
            >
              Full Time
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              onClick={() => setSelectedJobType("Remote")}
            >
              Remote
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              onClick={() => setSelectedJobType("Onsite")}
            >
              Onsite
            </button>
          </li>
        </ul>
      </div>

      <ul>
        {/* {filteredJobs.map((job) => (
          <GetJob key={job.id} job={job}></GetJob>
        ))} */}
        {jobs
          .filter(
            (job) =>
              !selectedJobType ||
              job.job_type_1 === selectedJobType ||
              job.job_type_2 === selectedJobType
          )
          .map((job) => (
            <GetJob key={job.id} job={job}>
              ...
            </GetJob>
          ))}
      </ul>
    </div>
  );
};

export default AppliedJobs;
