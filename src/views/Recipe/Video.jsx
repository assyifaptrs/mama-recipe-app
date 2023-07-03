import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Container, Row } from 'reactstrap';
import Navbar from '../../components/Navbar';
import Video from '../../components/Video/Video';
import Lists from '../../components/Video/List';

const Leftbar = styled.div`
  position: fixed;
  left: 0;
  top: 700px;
  bottom: 0;
  width: 100%;
  background-color: #efc81a;
  z-index: -1;
  @media screen and (max-width: 576px) {
    top: 580px;
    width: 100%;
  }
`;

const Videos = () => {
  useEffect(() => {
    document.title = `Detail Video Page`;
  }, []);

  return (
    <>
      <Navbar />
      <Leftbar />
      <Container fluid>
        <Row>
          <Video />
          <Lists />
        </Row>
      </Container>
    </>
  );
};

export default Videos;
