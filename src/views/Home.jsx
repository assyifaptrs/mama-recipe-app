import React, { useEffect } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Hero from '../components/Homepage/Hero';
import Popular from '../components/Homepage/Popular';
import Latest from '../components/Homepage/Latest';
import List from '../components/Homepage/List';
import Footer from '../components/Footer';

const RightBar = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  height: 740px;
  width: 350px;
  background-color: var(--secondary-color);
  z-index: -1;
  @media screen and (max-width: 991px) {
    width: 250px;
  }
  @media screen and (max-width: 767px) {
    width: 150px;
  }
  @media screen and (max-width: 450px) {
    width: 50px;
  }
`;

const Home = () => {
  useEffect(() => {
    document.title = `Mama Recipe - Landing Page`;
  }, []);

  return (
    <>
      <Navbar />
      <RightBar />
      <Hero />
      <Popular />
      <Latest />
      <List />
      <Footer />
    </>
  );
};

export default Home;
