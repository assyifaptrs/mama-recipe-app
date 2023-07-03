import React from 'react';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import AuthStyles from '../assets/styles/AuthStyles';
import { Background } from '../assets/img';
import { Logo } from '../assets/icon';

function Banner() {
  return (
    <>
      <AuthStyles />
      <Col lg="6" md="4" className="position-relative d-none d-md-block p-0">
        <img src={Background} alt="Banner" className="w-100 full banner" />
        <div className="mask h-100 w-100 d-flex justify-content-center align-items-center">
          <Link to="/">
            <img src={Logo} alt="Mama Recipe" />
          </Link>
        </div>
      </Col>
    </>
  );
}

export default Banner;
