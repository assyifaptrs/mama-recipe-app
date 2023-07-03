import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'reactstrap';
import AOS from 'aos';
import axios from 'axios';
import Button from './Button';
import { Cheescake } from '../../assets/img';

const Section = styled.section`
  margin-top: 80px;
  @media screen and (max-width: 576px) {
    margin-top: -80px;
  }
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

const NewRecipe = styled.img`
  position: absolute;
  width: 500px;
  height: 500px;
  margin: 40px 0 0 50px;
  object-fit: cover;
  object-position: center;
  border-radius: 15px;
  @media screen and (max-width: 576px) {
    margin: 30px 0 0 40px;
    width: 300px;
    height: 300px;
  }
`;

const Box = styled.div`
  position: absolute;
  margin-top: -10px;
  width: 500px;
  height: 500px;
  background-color: var(--secondary-color);
  @media screen and (max-width: 576px) {
    width: 300px;
    height: 300px;
  }
`;

const TitleNew = styled.h1`
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
    margin-top: 270px;
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

export default function LatestPage() {
  const [loading, setLoading] = useState(true);
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
          `${process.env.REACT_APP_BACKEND_URL}/last/recipe`
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
    <Section
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <TitleSection className="mb-4 mb-md-5">New Recipe</TitleSection>
      {/* {loading ? (
        <div>Loading...</div>
      ) : ( */}
        <Row>
          <Col md="6" className="position-relative">
            <Box />
            <NewRecipe
              src={Cheescake}
              alt="Healthy Bone Broth Ramen (Quick & Easy)"
            />
          </Col>
          <Col
            md="6"
            className="d-flex flex-column justify-content-center full"
          >
            <TitleNew>Ready to cook? Let's jump to the latest recipe!</TitleNew>
            <Border />
            <DetailRecipe>
              Mama Recipe is here to help you cook delicious meals with less
              stress and more joy.
            </DetailRecipe>
            {recipes.map((recipe) => (
              <Button text="learn more" link={`/recipe/detail/${recipe.id}`} />
            ))}
          </Col>
        </Row>
      {/* )} */}
    </Section>
  );
}
