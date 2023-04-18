import React from 'react';
import Header from './Header';
import { useLoaderData, useParams } from 'react-router-dom';
import JobDetails from './JobDetails';

const ViewDetails = () => {
  const { id } = useParams();
  const features = useLoaderData();
  const data = features.find((feature) => feature.id === parseInt(id));

  return (
    <div>
      <Header> </Header>
      <h1 className='text-center fw-bold p-5 bg-light container'>Job Details</h1>
      <div className='row mb-5 container'>
        <div className='mb-3'>

          {/* Use the `data` for the id that matches the `id` parameter */}
          
          <JobDetails data={data} />
        </div>
       
      </div>
    </div>
  );
};

export default ViewDetails;
