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
import { register } from '../../store/actions/user';
import Banner from '../../components/Banner';
import AuthStyles from '../../assets/styles/AuthStyles';

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    passwordConfirmation: '',
  });

  useEffect(() => {
    document.title = `Mama Recipe - Register Page`;
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(form);

    const handleSuccess = () => {
      navigate('/auth/login');
      return true;
    };
    if (
      form.name === '' ||
      form.email === '' ||
      form.phone === '' ||
      form.password === '' ||
      form.passwordConfirmation === ''
    ) {
      alert('All data must be filled');
    } else {
      dispatch(
        register(
          {
            name: form.name,
            email: form.email,
            phone: form.phone,
            password: form.password,
          },
          handleSuccess
        )
      );
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
            className="custom d-flex justify-content-center align-items-center"
          >
            <div className="col-10 col-md-8 col-xl-6 d-flex flex-column justify-content-center align-items-center p-0">
              <h2 className="main-color title">Let&apos;s Get Started !</h2>
              <span className="secondary-color description mt-4 mb-4">
                Create new account to access all features
              </span>
              <hr className="separator w-100 mb-0 mt-1" />
              <Form
                className="w-100 mb-3 mt-3"
                method="post"
                encType="multipart/form-data"
                onSubmit={(e) => onSubmit(e)}
              >
                <FormGroup className="mb-3 label">
                  <Label for="name" className="mb-2">
                    Name
                  </Label>
                  <Input
                    type="text"
                    placeholder="Enter Name"
                    id="name"
                    className="form-control pt-3 pb-3 pl-3 pr-0 input-auth"
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </FormGroup>
                <FormGroup className="mb-3 label">
                  <Label for="email" className="mb-2">
                    Email Address
                  </Label>
                  <Input
                    type="email"
                    placeholder="Enter email address"
                    id="email"
                    className="form-control pt-3 pb-3 pl-3 pr-0 input-auth"
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    required
                  />
                </FormGroup>
                <FormGroup className="mb-3 label">
                  <Label for="phone" className="mb-2">
                    Phone Number
                  </Label>
                  <Input
                    type="text"
                    placeholder="08xxxxxxxxxx"
                    id="phone"
                    className="form-control pt-3 pb-3 pl-3 pr-0 input-auth"
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    required
                  />
                </FormGroup>
                <FormGroup className="mb-3 label">
                  <Label htmlFor="password" className="mb-2">
                    Create New Password
                  </Label>
                  <Input
                    type="password"
                    placeholder="Create New Password"
                    id="password"
                    className="form-control pt-3 pb-3 pl-3 pr-0 input-auth"
                    onChange={(e) =>
                      setForm({ ...form, password: e.target.value })
                    }
                    required
                  />
                </FormGroup>
                <FormGroup className="mb-3 label">
                  <Label htmlFor="passwordConfirmation" className="mb-2">
                    New Password
                  </Label>
                  <Input
                    type="password"
                    placeholder="New Password"
                    id="passwordConfirmation"
                    className="form-control pt-3 pb-3 pl-3 pr-0 input-auth"
                    onChange={(e) =>
                      setForm({ ...form, passwordConfirmation: e.target.value })
                    }
                    required
                  />
                </FormGroup>
                <FormGroup className="mb-4 terms">
                  <Input
                    type="checkbox"
                    className="checkbox"
                    id="checkbox"
                    required
                  />
                  <Label for="checkbox" className="label">
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
                    Register Account
                  </Button>
                )}
              </Form>
              <div className="w-100 d-flex flex-column">
                <div className="w-100 d-flex justify-content-center align-items-center">
                  <span className="alternative">
                    Already have account?{' '}
                    <Link
                      to="/auth/login"
                      className="main-color clicked text-decoration-none"
                    >
                      Log In Here
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

export default Register;
