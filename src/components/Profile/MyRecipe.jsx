import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { TabPane, Row, Col, Card, CardBody } from 'reactstrap';
import Swal from 'sweetalert2';
import axios from 'axios';
import { deleteRecipe } from '../../store/actions/recipe';
import { Lasagna } from '../../assets/img';

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

function MyRecipe() {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([]);
  const [image, setImage] = useState('');

  const onClick = (id) => {
    Swal.fire({
      title: 'Are you sure delete this recipe?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
    }).then((result) => {
      if (result.isConfirmed) {
        deleteRecipe(id)
          .then((response) => {
            // Swal(result.message)
            Swal.fire({
              title: response.message,
              icon: 'success',
            });
            navigate('/');
            return true;
            // dispatch(deleteRecipe());
          })
          .catch((err) => {
            Swal.fire({
              title: 'Delete failed',
              icon: 'error',
            });
          });
      }
    });
  };

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
    <TabPane tabId="my">
      <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gy-2 gx-4 mt-4 ml-5">
        {recipes.map((recipe) => (
          <Col>
            <Card className="border-0">
              <CardBody className="p-0">
                <Image src={Lasagna} alt="Recipe" />
                <Title className="p-1 rounded">{recipe.title}</Title>
                <Option>
                  <button className="btn-delete" onClick={() => onClick()}>
                    <i className="far fa-trash-can" title="Delete Recipe" />
                  </button>
                </Option>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </TabPane>
  );
}

export default MyRecipe;
