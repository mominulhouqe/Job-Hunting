import React, { useEffect, useState } from 'react';
import CatagorysData from './CatagorysData';

const Catagorys = () => {
    const [datas, setData] = useState([])
    
        useEffect(() => {
            fetch('catagorys.json')
                .then(res => res.json())
                .then(datas => setData(datas))
        }, []);

    return (
        <div>
           <div className='text-center mt-5 mb-5'>
            <h1 className='fw-bold'>Job Category List</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
           </div>
          <div className='d-flex flex-wrap gap-5 justify-content-center'>
          {
            datas.map(data => <CatagorysData
                key={data.id}
                data = {data}

                />)
            }
          </div>

        </div>
    );
};

export default Catagorys;