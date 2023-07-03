import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'reactstrap';
import AOS from 'aos';
import axios from 'axios';
import Button from './Button';
import { Miso } from '../../assets/img';
import { Bullet } from '../../assets/icon';

const Section = styled.section`
  height: 100vh;
`;

const TitleSection = styled.h2`
  border-left: 12px solid var(--secondary-color);
  margin: 0 0 0 50px;
  padding: 15px;
  display: flex;
  font-family: 'Airbnb Cereal App Medium';
  color: var(--color-3);
  @media screen and (max-width: 576px) {
    margin-left: 10px;
  }
`;

const Square = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 15px;
  border: 3px solid var(--secondary-color);
  right: 80px;
  bottom: -35px;
  z-index: -2;
  @media screen and (max-width: 1200px) {
    width: 450px;
    height: 450px;
    right: 10px;
  }
  @media screen and (max-width: 940px) {
    width: 400px;
    height: 400px;
    right: -15px;
  }
  @media screen and (max-width: 576px) {
    width: 300px;
    height: 300px;
    right: 40px;
    bottom: -25px;
  }
`;

const Vector = styled.img`
  position: absolute;
  margin: 30px 0 0 5px;
  width: 320px;
  height: auto;
  z-index: -1;
  @media screen and (max-width: 576px) {
    width: 250px;
  }
`;

const PopularRecipe = styled.img`
  width: 500px;
  height: 500px;
  margin-left: 50px;
  object-fit: cover;
  object-position: center;
  border-radius: 15px;
  @media screen and (max-width: 1200px) {
    width: 450px;
    height: 450px;
  }
  @media screen and (max-width: 940px) {
    width: 400px;
    height: 400px;
  }
  @media screen and (max-width: 576px) {
    width: 300px;
    height: 300px;
    margin-left: 28px;
  }
`;

const TitleRecipe = styled.h1`
  margin-left: 50px;
  font-family: 'Airbnb Cereal App Medium';
  color: var(--color-3);
  width: 70%;
  @media screen and (max-width: 1200px) {
    font-size: 40px;
    width: 80%;
  }
  @media screen and (max-width: 940px) {
    font-size: 27px;
  }
  @media screen and (max-width: 576px) {
    font-size: 25px;
    text-align: center;
    margin-top: 35px;
  }
`;

const Border = styled.hr`
  width: 100px;
  border: 1.5px solid var(--color-5);
  margin-left: 50px;
  @media screen and (max-width: 576px) {
    width: 50%;
    margin-left: 25% !important;
    margin-right: 25% !important;
  }
`;

const DetailRecipe = styled.p`
  margin-left: 50px;
  font-family: 'Airbnb Cereal App Light';
  color: var(--color-3);
  width: 65%;
  font-size: 18px;
  @media screen and (max-width: 1200px) {
    font-size: 16px;
    width: 75%;
  }
  @media screen and (max-width: 940px) {
    font-size: 14px;
  }
  @media screen and (max-width: 576px) {
    text-align: center;
  }
`;

export default function PopularPage() {
  // const [loading, setLoading] = useState(true);
  // const recipe = recipes.data[0];
  const [recipes, setRecipes] = useState([]);
  const [image, setImage] = useState('');

  useEffect(() => {
    AOS.init();
    // if (recipe) {
    //   setLoading(false);
    // }
  }, []);

  useEffect(() => {
    const fetchData = async (req, res) => {
      try {
        const getRecipe = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/recipe-detail/4`
        );
        let result = (res && res.data && res.data[0].file) || [];
        setImage(result[0]);
        console.log(getRecipe);
        setRecipes(getRecipe.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Section data-aos="zoom-in-down">
      <TitleSection className="mb-4 mb-md-5">Popular For You!</TitleSection>
      {/* {loading ? (
        <div />
      ) : ( */}
      <Row>
        <Col md="6" className="position-relative">
          <Square />
          <Vector src={Bullet} alt="Vector" />
          <PopularRecipe
            src={Miso}
            // src={`http://localhost:3001/get-image/${id}`}
            alt="Popular"
          />
        </Col>
        {recipes.map((recipe) => (
          // <div key={recipe.id}>
          <Col md="6" className="d-flex flex-column justify-content-center">
            <TitleRecipe>{recipe.title}</TitleRecipe>
            <Border />
            <DetailRecipe>
              A creamy miso sauce and mushrooms give this easy, super simple
              pasta tons of umami flavor.
            </DetailRecipe>
            <Button text="learn more" link={`/recipe/detail/4`} />
          </Col>
          // </div>
        ))}
      </Row>
      {/* )} */}
    </Section>
  );
}
