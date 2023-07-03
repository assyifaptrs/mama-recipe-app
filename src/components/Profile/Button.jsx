import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { deleteUser } from '../../store/actions/user';

const Action = styled.div`
  margin: 0 auto;
  width: 320px;
  height: 80px;
  border-radius: 15px;
  /* background-color: #e7e7e7; */
  position: relative;
  transition: 0.5s;
`;

const Btn = styled.button`
  border: none;
  width: 320px;
  height: 40px;
  background-color: none;
  color: #3f3a3a;
  font-size: 14px;
  border-radius: 15px;
  margin-top: 10px;
  &:hover {
    background-color: #e7e7e7;
  }
`;

const BtnDelete = styled.button`
  border: none;
  width: 320px;
  height: 40px;
  background-color: none;
  color: #3f3a3a;
  font-size: 14px;
  border-radius: 15px;
  margin-top: 10px;
  &:hover {
    color: #f1f1f1;
    background-color: #f82b2b;
  }
`;

function Button() {
  const navigate = useNavigate();

  const onClick = (e) => {
    e.preventDefault();

    Swal.fire({
      title: 'Are you sure you want to delete this account?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUser()
          .then((response) => {
            Swal.fire({
              title: 'Your account has been deleted',
              icon: 'success',
            });
            localStorage.clear();
            navigate('/auth/login');
            return true;
          })
          .catch((err) => {
            Swal.fire({
              title: 'Delete failed',
              icon: 'error',
            });
          });
      }
    });
  };

  return (
    <>
      <Action className="mx-auto">
        <Link to="/profile/edit" style={{ textDecoration: 'none' }}>
          <Btn className="d-block">Edit Profile</Btn>
        </Link>
        <Link to="/profile" style={{ textDecoration: 'none' }}>
          <BtnDelete className="d-block" onClick={(e) => onClick(e)}>
            Delete Account
          </BtnDelete>
        </Link>
      </Action>
    </>
  );
}

export default Button;
