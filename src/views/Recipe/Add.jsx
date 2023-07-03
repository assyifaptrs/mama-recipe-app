import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Container, Form } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import swal from 'sweetalert';
import { createRecipe } from '../../store/actions/recipe';
import Navbar from '../../components/Navbar';
import File from '../../components/Recipe/File';
import Text from '../../components/Recipe/Text';
import Textarea from '../../components/Recipe/Textarea';
import Footer from '../../components/Footer';

const Section = styled.div`
  margin: 0 auto;
  margin-top: 150px;
  max-width: 1000px;
  @media screen and (max-width: 576px) {
    margin-top: 90px;
  }
`;

const Button = styled.button`
  margin-top: 100px;
  margin-bottom: 20px;
  height: 64px;
  width: 426px;
  border-radius: 6px;
  border: none;
  background-color: var(--secondary-color);
  color: var(--color-1);
  font-family: 'Inter', sans-serif;
  &:hover {
    background-color: #cea905;
  }
  @media screen and (max-width: 576px) {
    margin-top: 50px;
    margin-bottom: 0;
  }
`;

const Add = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const hiddenFileInput = useRef(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    document.title = `Mama Recipe - Add Recipe Page`;
    if (createRecipe) {
      setLoading(false);
    }
    dispatch(createRecipe);
  }, []);

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    document.getElementById('customBtn').innerHTML = fileUploaded.name;
    setImage(fileUploaded);
  };

  const [form, setForm] = useState({
    title: '',
    ingredients: '',
    video: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();

    const body = new FormData();
    body.append('title', form.title);
    body.append('ingredients', form.ingredients);
    body.append('image', image);
    body.append('video', form.video);

    dispatch(
      createRecipe(body)
        .then((response) => {
          console.log(response);
          setImage('');
          if (response.data.status !== 'success') {
            alert(response.data.message);
          } else {
            // alert('create recipe successfully');
            swal('Create Recipe Success');
            console.log(response.data);
            return navigate('/');
          }
        })
        .catch((err) => {
          console.error(err);
        })
    );
  };

  return (
    <>
      <Navbar />
      <Container fluid>
        <Section>
          <Form
            method="post"
            encType="multipart/form-data"
            onSubmit={(e) => onSubmit(e)}
          >
            <File
              id="image"
              handleChange={handleChange}
              hiddenFileInput={hiddenFileInput}
              handleClick={handleClick}
            />
            <Text
              name="Title"
              id="title"
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
            <Textarea
              id="ingredients"
              onChange={(e) =>
                setForm({ ...form, ingredients: e.target.value })
              }
            />
            <Text
              name="Video"
              id="video"
              onChange={(e) => setForm({ ...form, video: e.target.value })}
            />
            <div className="d-flex justify-content-center align-items-center pl-5">
              {loading ? (
                <Button type="submit" disabled>
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  />
                </Button>
              ) : (
                <Button type="submit">Post</Button>
              )}
            </div>
          </Form>
        </Section>
      </Container>

      <Footer />
    </>
  );
};

export default Add;
