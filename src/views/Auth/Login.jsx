import React, { useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { login } from '../../store/actions/user';
import Banner from '../../components/Banner';
import AuthStyles from '../../assets/styles/AuthStyles';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    document.title = `Mama Recipe - Login Page`;
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(form);

    const handleSuccess = (data) => {
      localStorage.setItem('token', data.token);

      console.log(data);
      const check =
        data.token === null
          ? alert('email or password is wrong')
          : navigate('/');
      return check;
    };

    if (form.email === '' || form.password === '') {
      alert('All data must be filled');
    } else {
      dispatch(login(form, handleSuccess));
    }
  };

  return (
    <>
      <AuthStyles />
      <Container fluid>
        <Row>
          <Banner />
          <Col
            md="8"
            lg="6"
            className="full d-flex justify-content-center align-items-center"
          >
            <div className="col-10 col-md-8 col-xl-6 d-flex flex-column justify-content-center align-items-center p-0">
              <h2 className="main-color title">Welcome</h2>
              <span className="secondary-color description mt-4 mb-4">
                Log In into your existing account
              </span>
              <hr className="separator w-100 mb-0 mt-1" />
              <Form className="w-100 mb-3 mt-3" onSubmit={(e) => onSubmit(e)}>
                <FormGroup className="mb-3">
                  <Label for="email" className="mb-2 label">
                    E-mail
                  </Label>
                  <Input
                    type="email"
                    placeholder="Enter Email"
                    id="email"
                    className="form-control pt-3 pb-3 pl-3 pr-0 input-auth"
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    required
                  />
                </FormGroup>
                <FormGroup className="mb-3">
                  <Label for="password" className="mb-2 label">
                    Password
                  </Label>
                  <Input
                    type="password"
                    placeholder="Password"
                    id="password"
                    className="form-control pt-3 pb-3 pl-3 pr-0 input-auth"
                    onChange={(e) =>
                      setForm({ ...form, password: e.target.value })
                    }
                    required
                  />
                </FormGroup>
                <FormGroup className="mb-4 terms">
                  <Input
                    type="checkbox"
                    className="checkbox"
                    id="terms"
                    required
                  />
                  <Label htmlFor="terms" className="label">
                    I agree to terms & conditions
                  </Label>
                </FormGroup>
                {loading ? (
                  <Button type="submit" disabled>
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    />
                  </Button>
                ) : (
                  <Button type="submit" className="w-100 btn-main pt-3 pb-3">
                    Login
                  </Button>
                )}
              </Form>
              <div className="w-100 d-flex flex-column">
                <div className="w-100 d-flex justify-content-end mb-3">
                  <Link to="/auth/forgot" className="forgot">
                    Forgot Password?
                  </Link>
                </div>
                <div className="w-100 d-flex justify-content-center align-items-center">
                  <span className="alternative">
                    Don&apos;t have an account?{' '}
                    <Link
                      to="/auth/register"
                      className="main-color clicked text-decoration-none"
                    >
                      Sign Up
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
