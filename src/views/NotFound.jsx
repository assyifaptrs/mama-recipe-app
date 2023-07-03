import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/style.css';

function NotFound() {
  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h1>404</h1>
        </div>
        <h2>Oops, The Page you are looking for can&apos;t be found!</h2>
        <Link to="/">
          <span className="arrow" />
          Return To Homepage
        </Link>
      </div>
    </div>
  );
}

export default NotFound;