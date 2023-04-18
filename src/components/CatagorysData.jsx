import React from 'react';

const CatagorysData = ({data}) => {
const {id,img,name,jobs} = data

    return (
        <div>
            <div className='bg-light p-4 mb-5 rounded'>
                <img className='mb-3 bg-info-subtle p-3'  src={img} alt="" />
                <h4>{name}</h4>
                <p><small>{jobs}</small></p>
            </div>
        </div>
    );
};

export default CatagorysData;