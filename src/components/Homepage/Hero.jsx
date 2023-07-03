import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import TypeWriter from './TypeWritterText';
import { Home } from '../../assets/img';
import { ISearch } from '../../assets/icon';

const Section = styled.section`
  display: flex;
  align-items: center;
  height: 100vh;
  padding: 100px 0;
`;

const Search = styled.div`
  border-radius: 10px;
  max-width: 500px;
  display: flex;
  align-items: center;
  background-color: #efefef;
`;

const Icon = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 400px;
  height: 400px;
  object-fit: cover;
  object-position: center;
  box-shadow: var(--shadow-black-100);
  border-radius: 15px;
  animation: bounceTop_01 3s ease infinite;
  @media screen and (max-width: 1110px) {
    width: 350px;
    height: 350px;
  }
  @media screen and (max-width: 991px) {
    margin-left: 55px;
  }
  @media screen and (max-width: 845px) {
    margin: 0 20px;
  }
  @media screen and (max-width: 772px) {
    margin-top: 70px;
    width: 300px;
    height: 300px;
  }
`;

export default function HeroSection() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const search = (e, query) => {
    e.preventDefault();

    return navigate(`/recipe?search=${query}`);
  };
  // const [query, setQuery] = useState('');
  return (
    <Section>
      <Container>
        <Row className="align-items-center">
          <Col lg="7" md="7">
            <TypeWriter />
            <form onSubmit={(e) => search(e, searchQuery)}>
              <Search className="p-3 pl-4">
                <Icon>
                  <img src={ISearch} alt="Search" />
                </Icon>
                <input
                  type="search"
                  className="form-control"
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    outline: 'none',
                    boxShadow: 'none',
                  }}
                  placeholder="Search Restaurant, Food"
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </Search>
            </form>
          </Col>
          <Col lg="5" md="5" className="text-center">
            <Image src={Home} alt="Mama Recipe" />
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
