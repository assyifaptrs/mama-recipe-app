import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Container } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
// import { getDetailUser } from '../../store/actions/user';
import Navbar from '../../components/Navbar';
import Button from '../../components/Profile/Button';
import Tabs from '../../components/Profile/Tabs';
import Footer from '../../components/Footer';
import { Default } from '../../assets/img';
import { EditPhoto } from '../../assets/icon';

const Section = styled.section`
  margin: 0 auto;
  margin-top: 150px;
  max-width: 800px;
  @media screen and (max-width: 576px) {
    margin-top: 90px;
  }
`;

const Photo = styled.img`
  height: 150px;
  width: 150px;
  background-position: center;
  background-size: cover;
  border-radius: 50%;
`;

const Icon = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  &:hover {
    cursor: pointer;
  }
`;

const Username = styled.p`
  font-size: 24px;
  font-family: 'Airbnb Cereal App Medium';
  font-weight: 500;
  text-align: center;
  margin-top: 15px;
`;

const Text = styled.p`
  font-size: 14px;
  color: #aaa;
  font-family: 'Airbnb Cereal App Medium';
  text-align: center;
  margin-top: -10px;
`;

function ProfilePage() {
  const dispatch = useDispatch();
  const [user, setUser] = useState([]);
  const { id } = useParams();

  const hiddenFileInput = useRef(null);
  const [photoLoading, setPhotoLoading] = useState(false);

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  // const users = useSelector((state) => {
  //   return state.users;
  // });

  useEffect(() => {
    document.title = `Mama Recipe - Profile`;
    // dispatch(getDetailUser());
  }, []);

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   const fetchData = async () => {
  //     try {
  //       const getUser = await axios.get(
  //         `${process.env.REACT_APP_BACKEND_URL}/detail/${id}`,
  //         token
  //       );
  //       // setUser(getUser.data.data[0]);
  //       console.log(getUser);
  //       setUser(getUser.data.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchData();
  // }, [id]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const fetchData = async () => {
      try {
        const getUser = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/last/user`,
          token
        );
        // setUser(getUser.data.data[0]);
        console.log(getUser);
        setUser(getUser.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <>
      <Navbar />
      <Container fluid>
        <Section>
          <div className="d-flex justify-content-center">
            <div className="position-relative">
              <Photo
                src={Default}
                // src={`url(${process.env.REACT_APP_BACKEND_URL}/${item.image})`}
                // alt={item.name}
                alt="Profile Photo"
              />
              <Icon src={EditPhoto} alt="Icon" onClick={handleClick} />
              <input
                type="file"
                ref={hiddenFileInput}
                // onChange={handleChange}
                style={{ display: 'none' }}
              />
            </div>
          </div>
          {user.map((item) => (
            <div key={item.id}>
              <Username>{item.name}</Username>
              <Text>{item.email}</Text>
              <Text>{item.phone}</Text>
            </div>
          ))}
          <Button />
        </Section>
        <Tabs />
      </Container>
      <Footer />
    </>
  );
}

export default ProfilePage;
