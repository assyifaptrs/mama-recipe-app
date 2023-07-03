import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Card, CardBody } from 'reactstrap';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { Broccoli } from '../../assets/img/index.js';

const Side = styled.div`
  margin-top: 150px;
  margin-left: -30px;
  @media screen and (max-width: 576px) {
    margin-left: 0;
  }
`;

const Other = styled.h4`
  font-family: 'Airbnb Cereal App Bold';
`;

const Image = styled.img`
  border-radius: 7px;
  object-fit: cover;
  object-position: center;
  width: 300px;
  height: 200px;
  @media screen and (max-width: 576px) {
    margin: 0px;
  }
`;

const Name = styled.h5`
  margin-top: 7px;
  margin-left: -15px;
  font-size: 22px;
  line-height: 0px;
  font-family: 'Airbnb Cereal App Medium';
  &:hover {
    cursor: pointer;
    color: var(--secondary-color);
  }
  @media screen and (max-width: 576px) {
    margin: 0px;
  }
`;

const Author = styled.p`
  margin-top: 15px;
  margin-left: -15px;
  font-size: 13px;
  color: #aaaaaa;
  font-family: 'Airbnb Cereal App Medium';
`;

function List() {
  const [loading, setLoading] = useState(true);
  const [recipes, setRecipes] = useState([]);
  // const { id } = useParams();

  useEffect(() => {
    if (recipes) {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const fetchData = (req, res) => {
      try {
        const getRecipe = axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/recipe-detail/2`
        );
        // let result = (res && res.data && res.data[0].file) || [];
        // setImage(result[0]);
        // getRecipe(res.data.url);
        setRecipes(getRecipe.data.data);
        console.log(getRecipe);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <aside className="col-lg-4 d-none d-lg-block">
      <Side>
        <Other>Other Recipe</Other>
        {/* {loading ? (
          <div>Loading</div>
        ) : ( */}
        {/* recipe.data.map((item, index) => ( */}
        <Card
          className="border-0"
          // key={index}
        >
          <Link to={`/recipe/video/2`}>
          <Image
            // src={`https://drive.google.com/uc?export=view&id=${item.image}`}
            src={Broccoli}
            // alt={recipe.title}
            alt={'Recipe'}
          />
          </Link>

          <CardBody>
            {/* <Link
                  to={`/recipe/${item.id}`}
                  style={{ color: '#000', textDecoration: 'none' }}
                > */}
            {/* <Link to={`/recipe/video/2`} style={{color: '#000'}}> */}
              <Name>Broccoli Salad</Name>
            {/* </Link> */}
            {/* {recipes.map((recipe) => (
              <div key={1}>
                <Link
                  to={`/recipe/video/${recipe.id}`}
                  style={{ color: '#000', textDecoration: 'none' }}
                >
                  <Name>{recipe.title}</Name>
                </Link>
              </div>
            ))} */}
            <Author>HanaLohana - 3 month ago</Author>
          </CardBody>
        </Card>
        {/* ))
        )} */}
      </Side>
    </aside>
  );
}

export default List;
