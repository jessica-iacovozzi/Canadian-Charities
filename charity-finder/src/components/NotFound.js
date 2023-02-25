import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
      <div>
      <h1>404: Not found</h1>
      <button as={Link} to='/'>Back to home</button>
      </div>
    )
}

export default NotFound;
