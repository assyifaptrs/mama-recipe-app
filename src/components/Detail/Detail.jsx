import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import axios from 'axios';
import { detailRecipe, deleteRecipe } from '../../store/actions/recipe';
import { Broccoli } from '../../assets/img';
import { Bookmark, Liked, Deleted, Play } from '../../assets/icon';

const Section = styled.section`
  margin: 0 auto;
  margin-top: 150px;
  max-width: 800px;
  @media screen and (max-width: 576px) {
    margin-top: 90px;
  }
`;

const Title = styled.h1`
  font-family: 'Airbnb Cereal App Medium';
  color: var(--color-2);
  text-align: center;
  margin-bottom: 60px;
  @media screen and (max-width: 576px) {
    margin-bottom: 0px;
  }
`;

const Image = styled.img`
  min-width: 100%;
  min-height: 200px;
  max-height: 500px;
  object-fit: cover;
  object-position: center;
  margin: 0 auto;
  border-radius: 15px !important;
  margin-top: 40px;
  @media screen and (max-width: 576px) {
    margin-top: 0px;
  }
`;

const Icon = styled.div`
  z-index: 2;
  right: 30px;
  bottom: 30px;
  position: absolute;
  display: flex;
  width: 130px;
  /* width: 40px; */
  align-items: center;
  justify-content: center;
  gap: 10px;
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 576px) {
    right: 15px;
    bottom: 15px;
  }
`;

const Item = styled.div`
  margin: 0 auto;
  margin-top: 40px;
  max-width: 900px;
`;

const Heading = styled.h3`
  font-family: 'Airbnb Cereal App Medium';
  color: var(--color-3);
  margin-bottom: 20px;
  @media screen and (max-width: 576px) {
    margin: 5px;
    margin-bottom: 15px;
  }
`;

const Ingredients = styled.p`
  margin: 0;
  font-family: 'Airbnb Cereal App Light';
  white-space: pre-line;
  text-transform: capitalize;
  @media screen and (max-width: 576px) {
    font-size: 14px;
    margin: 5px;
  }
`;

const Video = styled.button`
  width: 30%;
  height: 50px;
  border: 0;
  border-radius: 10px;
  background-color: #efc81a;
  color: #ffffff;
  &:hover {
    color: #cea905;
    box-shadow: var(--shadow-black-300);
  }
  @media screen and (max-width: 576px) {
    width: 60%;
  }
`;

function Detail() {

  // Get Detail Using Redux
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { id } = useParams();
  // const recipes = useSelector((state) => {
  //   return state.recipes;
  // });

  // console.log(recipes);

  // useEffect(() => {
  //   dispatch(detailRecipe(id));
  // }, [id]);

  // Get Detail Using Axios
  const [recipes, setRecipes] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getIdRecipe = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/recipe-detail/${id}`
        );
        setRecipes(getIdRecipe.data.data);
        console.log(getIdRecipe);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);

  // Delete Recipe
  const onClick = (id) => {
    Swal.fire({
      title: 'Are you sure delete this recipe?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
    }).then((result) => {
      if (result.isConfirmed) {
        deleteRecipe(id)
          .then((response) => {
            // Swal(result.message)
            Swal.fire({
              title: response.message,
              icon: 'success',
            });
            navigate('/');
            return true;
            // dispatch(deleteRecipe());
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
      <Section>
        {recipes.map((item, index) => (
          <div key={index}>
            <Title>{item.title}</Title>
            <div className="position-relative mb-5 text-center"></div>
            <Image
              // src={item.image}
              // src={`url(${process.env.REACT_APP_BACKEND_URL}/${recipe.image})`}
              // src={`http://localhost:3001/get-image/${id}`}
              src={Broccoli}
              alt={item.title}
            />
          </div>
        ))}
        <div className="position-relative mb-5 text-center">
          <Icon>
            <div>
              <img src={Bookmark} alt="Bookmark" />
            </div>
            <div>
              <img src={Liked} alt="Like" />
            </div>
            <div onClick={() => onClick(id)}>
              <img src={Deleted} alt="Deleted" />
            </div>
          </Icon>
        </div>
      </Section>
      <Item>
        <Heading>Ingredients</Heading>
        {recipes.map((item, index) => (
          <div key={index}>
            <Ingredients>{item.ingredients}</Ingredients>
          </div>
        ))}
      </Item>
      <Item>
        <Heading>Video Step</Heading>
        <Link to={`/recipe/video/${id}`}>
          <Video>
            <img src={Play} alt="Play" />
          </Video>
        </Link>
      </Item>
    </>
  );
}

export default Detail;
