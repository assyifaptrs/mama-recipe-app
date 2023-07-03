import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Row } from 'reactstrap';
import AOS from 'aos';
import Card from './Card';

const Section = styled.section`
  margin-top: 80px;
  @media screen and (max-width: 576px) {
    margin-top: -10px;
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

const Button = styled.button`
  background-color: var(--secondary-color);
  color: var(--color-1);
  padding: 10px;
  border: none;
  border-radius: 7px;
  font-size: 16px;
  text-transform: capitalize;
  transition: all 0.5 ease;
  font-weight: 500;
  text-decoration: none;
  width: 50px;
  text-align: center;
  margin: 10px 0 0 50px;
  &:focus {
    box-shadow: var(--shadow-black-300);
  }
  &:hover {
    cursor: pointer;
    color: var(--main-color);
    background-color: #cea905;
  }
  @media screen and (max-width: 576px) {
    margin: 10px 20px;
    display: block;
  }
`;

export default function ListPage({ recipes }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Section
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1000"
    >
      <TitleSection className="mb-4 mb-md-5">Latest Recipe</TitleSection>
      <Card recipes={recipes} />

      <Row style={{marginTop: '30px', justifyContent: 'center', width: '100%'}}>
        <Button>3</Button>
        <Button>2</Button>
        <Button>1</Button>
      </Row>
    </Section>
  );
}
