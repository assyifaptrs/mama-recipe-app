import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { getLatestRecipe } from '../../store/actions/recipe';
import { Miso, Cherry } from '../../assets/img';

const Item = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 50px;
  gap: 28px;
  @media screen and (max-width: 576px) {
    margin-left: 0;
    gap: 10px;
    justify-content: center;
  }
`;

const Card = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  min-height: 300px;
  max-height: 500px;
  border-radius: 15px;
  overflow: hidden;
  transition: ease-in-out 150ms;
  &:hover {
    box-shadow: 0 0 12px -2px #000000a0;
    transition: ease-in-out 150ms;
    cursor: pointer;
  }
  @media screen and (max-width: 576px) {
    width: 350px;
    height: 350px;
  }
`;

const CardTitle = styled.h2`
  color: var(--color-3);
  text-transform: capitalize;
  background-color: var(--secondary-color);
  border-radius: 5px;
  padding: 0 5px;
`;

const CardImage = styled.img`
  position: absolute;
  z-index: -2;
  top: 0;
  left: 0;
  object-fit: cover;
  object-position: center;
`;

function Cards() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState();
  const [recipes, setRecipes] = useState([]);

  // Get Latest Recipe
  const latestRecipe = useSelector((state) => {
    return state.latestRecipe;
  });

  useEffect(() => {
    dispatch(getLatestRecipe());
  }, [dispatch]);

  useEffect(() => {
    const fetchData = async (req, res) => {
      try {
        const getRecipe = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/recipe-desc`
        );
        console.log(getRecipe);
        setRecipes(getRecipe.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Item>
      {recipes.slice(0, 3).map((recipe) => (
        <div className="d-flex justify-content-center">
          <Link
            to={`/recipe/detail/${recipe.id}`}
            style={{ textDecoration: 'none' }}
          >
            <Card key={recipe.id}>
              <div className="w-100 h-100 p-4 d-flex align-items-end">
                <CardTitle>{recipe.title}</CardTitle>
                <CardImage
                  // src={recipe.image}
                  src={Miso}
                  // src={`url(${process.env.REACT_APP_BACKEND_URL}/${recipe.image})`}
                  alt={recipe.title}
                  className="w-100 h-100"
                />
              </div>
            </Card>
          </Link>
        </div>
      ))}
      {/* {latestRecipe.loading ? (
        <h1>Loading...</h1>
      ) : (
        latestRecipe.data.slice(0, 3).map((recipe, index) => (
          <div key={index} className="d-flex justify-content-center">
            <Link
              to={`/recipe/detail/${recipe.id}`}
              style={{ textDecoration: 'none' }}
            >
              <Card key={recipe.id}>
                <div className="w-100 h-100 p-4 d-flex align-items-end">
                  <CardTitle>{recipe.title}</CardTitle>
                  <CardImage
                    // src={recipe.image}
                    src={Miso}
                    // src={`url(${process.env.REACT_APP_BACKEND_URL}/${recipe.image})`}
                    alt={recipe.title}
                    className="w-100 h-100"
                  />
                </div>
              </Card>
            </Link>
          </div>
        ))
      )} */}
      {recipes.slice(3, 6).map((recipe) => (
        <div className="d-flex justify-content-center" key={1}>
          <Link
            to={`/recipe/detail/${recipe.id}`}
            style={{ textDecoration: 'none' }}
          >
            <Card key={recipe.id}>
              <div className="w-100 h-100 p-4 d-flex align-items-end">
                <CardTitle>{recipe.title}</CardTitle>
                <CardImage
                  // src={recipe.image}
                  // src={`url(${process.env.REACT_APP_BACKEND_URL}/${recipe.image})`}
                  src={Cherry}
                  alt={recipe.title}
                  className="w-100 h-100"
                />
              </div>
            </Card>
          </Link>
        </div>
      ))}
    </Item>
  );
}

export default Cards;
