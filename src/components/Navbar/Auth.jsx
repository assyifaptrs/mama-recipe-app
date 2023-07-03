import React, { useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import jwt_decode from 'jwt-decode';
import { getDetailUser } from '../../store/actions/user';
import { UserIcon } from '../../assets/icon';

function Auth({ isLogin }) {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const { detailUser } = useSelector((state) => state);

  // Decoded Token
  let decoded = '';
  if (isLogin) {
    decoded = jwt_decode(localStorage.getItem('token'));
    console.log(decoded)
  }

  const logout = () => {
    localStorage.clear();
    navigate('/auth/login');
  };

  useEffect(() => {
    dispatch(getDetailUser(decoded.id));
  }, [dispatch, decoded]);

  return (
    <>
      {isLogin ? (
        <div className={location.pathname === '/' ? 'nav-auth' : 'nav-inverse'}>
          <button title="Logout" onClick={logout}>
            <i className="fa-solid fa-right-from-bracket" />
          </button>
        </div>
      ) : (
      <div className="nav-auth">
        <img src={UserIcon} alt="User Icon" />
        <Link to="/auth/login">Login</Link>
      </div>
      )}
    </>
  );
}

export default Auth;
