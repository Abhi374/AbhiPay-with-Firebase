import React from 'react';
import { NavLink } from 'react-router-dom';

const Error404 = () => {
  return (

    <>
    <div id="notfound">
        <div className="notfound">
            <div className="notfound-404">
                <h1>404</h1>
            </div>
            <h2>WE ARE SORRY , PAGE NOT FOUND!</h2>
            <p>
                The page you are looking for might have been removed had its Name
                change or is temporarily unavailable.
            </p>
            <NavLink to="/">Back to home page!</NavLink>
        </div>
    </div>
    </>


  )
};

export default Error404;