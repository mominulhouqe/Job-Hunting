import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation, faCircleDollarToSlot } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const FeaturesData = ({ feature, handleViewDetails }) => {
    const { id, brand, title, img, location, salary, job_type_1, job_type_2 } = feature;
    const [filter, setFilter] = useState(null);

    const filteredJobTypes = [job_type_1, job_type_2].filter(jobType => !filter || jobType === filter);

    return (
        <div className='card rounded' >
            <img src={img} className='img-fluid w-25 h-25' alt="" />
            <h3>{title}</h3>
            <p>{brand}</p>
            <div className='d-flex mb-2 gap-3'>
                <div className="dropdown d-flex gap-2">
                    <button
                        className="btn btn-outline-primary "
                       
                    >
                        {job_type_1}
                    </button>
                    <button
                        className="btn btn-outline-primary"
                        
                    >
                        {job_type_2}
                    </button>
                    
                </div>
            </div>
            <div className='d-flex gap-5'>
                <p> <FontAwesomeIcon icon={faLocation} /> {location}</p>
                <p> <FontAwesomeIcon icon={faCircleDollarToSlot} />  Salary: {salary}</p>
            </div>
            <Link className='text-white text-decoration-none' to={`/views/${id}`}>
                <button onClick={() => { handleViewDetails(feature) }} className='btn btn-primary'>View Details</button>
            </Link>
        </div>
    );
};

export default FeaturesData;
