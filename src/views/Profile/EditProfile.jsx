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
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import swal from 'sweetalert';
import Banner from '../../components/Banner';
import AuthStyles from '../../assets/styles/AuthStyles';
import { updateUser } from '../../store/actions/user';

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    document.title = `Mama Recipe - Edit Profile Page`;
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(form);

    const handleSuccess = () => {
      swal('Update Profile Success');
      navigate('/profile');
      return true;
    };

    if (form.name === '' || form.email === '' || form.phone === '') {
      alert('All data must be filled');
    } else {
      dispatch(
        updateUser(
          {
            name: form.name,
            email: form.email,
            phone: form.phone,
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
              <h2 className="main-color title">Edit Profile</h2>
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
                    placeholder="Enter new name"
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
                    placeholder="Enter new email address"
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
                <br />
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
                    Save
                  </Button>
                )}
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Register;
