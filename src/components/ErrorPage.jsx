import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const { error, status } = useRouteError()
  return (
    <section className='d-flex '>
      <div className='container my-5'>
       
        <div className=' text-center'>
          <h2 className='text-danger'>
            <span className=''>Error</span> {status || 404}
          </h2>
          <p className=''>
            {error?.message}
          </p>
          <Link
            to='/'
            className=''
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage
