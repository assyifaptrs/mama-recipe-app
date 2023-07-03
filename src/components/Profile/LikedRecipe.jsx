import React from 'react';
import styled from 'styled-components';
import { TabPane, Row, Col, Card, CardBody } from 'reactstrap';
import { Broccoli } from '../../assets/img';

const Image = styled.img`
  width: 270px;
  height: 180px;
  object-fit: cover;
  object-position: center;
  border-radius: 10px;
`;

const Title = styled.p`
  font-size: 24px;
  font-family: 'Airbnb Cereal App Medium';
  color: var(--color-1);
  background-color: var(--secondary-color);
  position: absolute;
  bottom: 0;
  left: 15px;
`;

const Option = styled.div`
  position: absolute;
  top: 10px;
  right: 30px;
  @media screen and (max-width: 576px) {
    top: 10px;
    right: 100px;
  }
`;

function LikedRecipe() {
  return (
    <TabPane tabId="liked">
      <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gy-2 gx-4 mt-4 ml-5">
        <Col>
          <Card className="border-0">
            <CardBody className="p-0">
              <Image src={Broccoli} alt="Recipe" />
              <Title className="p-1 rounded">Broccoli</Title>
              <Option>
                <button className="btn-delete">
                  <i className="far fa-trash-can" title="Delete Recipe" />
                </button>
              </Option>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </TabPane>
  );
}

export default LikedRecipe;
