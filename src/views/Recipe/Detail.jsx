import React, { useEffect } from 'react';
import { Container } from 'reactstrap';
import Navbar from '../../components/Navbar';
import Detail from '../../components/Detail/Detail';
import Comment from '../../components/Detail/Comment';
import Footer from '../../components/Footer';

const DetailRecipe = () => {
  useEffect(() => {
    document.title = `Detail Recipe Page`;
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        <Detail />
        <Comment />
      </Container>
      <Footer />
    </>
  );
};

export default DetailRecipe;
