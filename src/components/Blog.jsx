import React from 'react';
import Header from './Header';

const Blog = () => {

    return (
        <div>
            <Header />
            <ul>
                <li className='fw-bold'>When should use context API ?</li>
                <span className='fw-bolder'>Ans :</span>  <span>
                Context API is a feature in React that allows you to share data between components without having to pass props down through each component. It's useful when you have data that needs to be accessed by multiple components in your application, such as a theme object. Using Context API can make your code more organized and easier to maintain, but it's important to use it judiciously and only when it makes sense for your specific use case.
                </span>
                <li className='fw-bold'>What is custom hook ?</li>
                <span className='fw-bolder'>Ans :</span>  <span>
                A custom hook is a reusable function that encapsulates logic and returns values that can be used in multiple components. Custom hooks are created by using existing React hooks and can make your code more organized and easier to maintain.
                </span>
                <li className='fw-bold'>What is useRef ?</li>
                <span className='fw-bolder'>Ans :</span>  <span>
                useRef is a hook in React that allows you to create a mutable ref object that can be used to access and manipulate DOM elements or other values. It's a useful tool for interacting with the DOM from a React component..
                </span>
                <li className='fw-bold'>What is useMemo ?</li>
                <span className='fw-bolder'>Ans :</span>  <span>
                useMemo is a hook in React that allows you to memoize the result of a function and cache it for future renders, as long as the input arguments to the function have not changed. It's a useful tool for optimizing performance by preventing unnecessary re-execution of expensive calculations or operations.
                </span>
            </ul>



        </div>
    );
};

export default Blog;