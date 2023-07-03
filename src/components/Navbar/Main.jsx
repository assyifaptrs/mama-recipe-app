import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link, useLocation } from 'react-router-dom';

function Main({ isLogin }) {
  const location = useLocation();

  return (
    <Nav className="me-auto" navbar>
      <NavItem>
        <NavLink tag={Link} to="/" active={location.pathname === '/'}>
          Home
        </NavLink>
      </NavItem>
      {isLogin && (
        <>
          <NavItem>
            <NavLink
              tag={Link}
              to="/recipe/add"
              active={location.pathname === '/recipe/add'}
            >
              Add Recipe
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              tag={Link}
              to={`/profile`}
              active={location.pathname === `/profile`}
            >
              My Profile
            </NavLink>
          </NavItem>
        </>
      )}
    </Nav>
  );
}

export default Main;
