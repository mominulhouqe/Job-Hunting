import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faDollar, faJournalWhills, faMailBulk, faPhone, faTicketSimple, faVoicemail } from '@fortawesome/free-solid-svg-icons';
import { addToDb } from '../utilities/fakeDb';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const JobDetails = ({data}) => {

    const {id, img,address,brand,description,education,email,experience,location,phone,responsibilities,salary,title}=data;



    const handleAddToCart = (data) => {
      const existingCart = localStorage.getItem('cart');
      let cart = [];
    
      if (existingCart) {
        cart = JSON.parse(existingCart);
      }
    
      const isItemAlreadyAdded = cart.some((item) => item.id === data.id);
    
      if (isItemAlreadyAdded) {

        toast.error('You are already applied. You can not apply more !');
      } else {
        toast.success('Your apply is succesfully done!');
        cart.push(data);
        addToDb(data);
        localStorage.setItem('cart', JSON.stringify(cart));
      }
    };
    

    return (
        <div className='row mt-5'>
            <ToastContainer />
            <div className='col-md-8 p-2'>
                <p><span className='fw-bold'>Job Description : </span> {description} </p>
                <p><span className='fw-bold'>Job Responsibility :</span> {responsibilities} </p>
                <p><span className='fw-bold'>Educational Requirements : </span>  {education} </p>
                <p><span className='fw-bold'>Expriences : </span>  {experience} </p>
                

            </div>

            <div className='col-md-4 p-3 bg-light border'>
          <h5>Job Details </h5> <hr className='bg-warning' />
          <h6>Salary <FontAwesomeIcon icon={faDollar} /> : <small>{salary}</small></h6>

          <h6><FontAwesomeIcon icon={faJournalWhills} />  Job title  : <small>{title}</small></h6>
            <h5>Contact information</h5> <hr className='bg-warning' />
          <h6> <FontAwesomeIcon icon={faPhone} />  Phone: <small>{phone}</small></h6>

          <h6><FontAwesomeIcon icon={faMailBulk} />  Email : <small>{email}</small></h6>

          <h6> <FontAwesomeIcon icon={faAddressBook} />  Address : <small className='text-center'>{address}</small></h6>
          <div className='d-flex justify-content-center'>

            <button onClick={()=>handleAddToCart(data)} className='btn btn-primary '> Apply Now</button>
            
            </div>
      

          
        </div>
        </div>
    );
};

export default JobDetails;