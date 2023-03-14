import React from 'react';
import { Link } from 'react-router-dom';
import "../css/NotFound.css";
import { IoIosArrowBack } from "react-icons/io"

function NotFound() {
    return (
      <div className='main-404'>
        <div className='fof'>
          <h1>404 Page Not found</h1>
          <Link to='/' className='back'><IoIosArrowBack className='svg' />Back to Charity Finder</Link>
        </div>
      </div>
    )
}

export default NotFound;
