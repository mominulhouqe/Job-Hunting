import React from 'react';

const Banner = () => {
    return (
        <>
              {/*banner section added  */}
      <section>
        <div className="row bg-light mx-1">
          <div className="col-md-6">
            <h1 className='fw-bold'>
              One Step <br /> Closer To Your <br />
              <span className="text-primary">Dream Job</span>
            </h1>
            <p>
             <small> Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.</small>
            </p>
            <button className="btn btn-primary ">Get Started</button>
          </div>
            <div className="col-md-6">
              <img src="./L.png" className="img-fluid " alt="" />
              
              </div>    
        </div>
      </section>
        </>
    );
};

export default Banner;