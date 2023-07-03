import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Row } from 'reactstrap';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Left = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 100px;
  @media screen and (max-width: 576px) {
    margin-left: 0;
  }
`;

const IFrame = styled.div`
  margin-top: 150px;
  width: 100%;
  @media screen and (max-width: 576px) {
    margin-top: 80px;
  }
`;

const Title = styled.h2`
  width: 80%;
  margin-top: 40px;
  font-size: 35px;
  line-height: 30px;
  font-family: 'Airbnb Cereal App Medium';
  @media screen and (max-width: 576px) {
    font-size: 20px;
    margin-top: 10px;
  }
`;

const Subtitle = styled.h2`
  width: 70%;
  margin-top: 20px;
  font-size: 18px;
  color: #aaaaaa;
  line-height: 30px;
  font-family: 'Airbnb Cereal App Medium';
  @media screen and (max-width: 576px) {
    font-size: 12px;
    margin-top: 0px;
  }
`;

function Video() {
  const [recipes, setRecipes] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async (req, res) => {
      try {
        const getRecipe = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/recipe-detail/${id}`
        );
        setRecipes(getRecipe.data.data);
        console.log(getRecipe);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <main className="col-12 col-lg-8">
      <Row className="vh-100">
        <Left className="col-12">
          <IFrame className="mx-1 mx-sm-3 mx-md-5">
            {recipes.map((recipe) => (
              <ReactPlayer url={recipe.video} controls={true} />
            ))}
            {/* <iframe
              src={recipe.video}
              title="video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            /> */}
            {recipes.map((recipe) => (
              <div key={id}>
                <Title>How to make {recipe.title}</Title>
                <Subtitle>HanaLohana - 3 month ago</Subtitle>
              </div>
            ))}
          </IFrame>
        </Left>
      </Row>
    </main>
  );
}

export default Video;
