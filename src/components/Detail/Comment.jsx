import React from 'react';
import styled from 'styled-components';
import { Form, FormGroup } from 'reactstrap';
import { Ayudia } from '../../assets/img';

const Section = styled.section`
  margin: 0 auto;
  margin-top: 40px;
  max-width: 900px;
`;

const Textarea = styled.textarea`
  background-color: #f6f5f4;
  border: none;
  font-family: 'Airbnb Cereal App Medium';
  border-radius: 10px;
  color: #666666;
  height: 350px;
  @media screen and (max-width: 576px) {
    height: 200px;
  }
`;

const Button = styled.button`
  width: 35%;
  height: 50px;
  border: 0;
  border-radius: 7px;
  background-color: #efc81a;
  color: #ffffff;
  margin: 30px 0 10px 0;
  &:hover {
    background-color: #cea905;
    box-shadow: var(--shadow-black-300);
  }
  @media screen and (max-width: 576px) {
    width: 60%;
  }
`;

const Profile = styled.img`
  max-width: 65px;
  min-width: 65px;
  max-height: 65px;
  min-height: 65px;
  object-fit: cover;
  object-position: center;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;
`;

const Detail = styled.div`
  margin: 0 auto;
  margin-top: 40px;
  max-width: 900px;
`;

const Item = styled.h3`
  font-family: 'Airbnb Cereal App Medium';
  color: var(--color-3);
  margin-bottom: 20px;
`;

function Comment() {
  return (
    <>
      <Section>
        <Form>
          <FormGroup>
            <Textarea
              className="form-control px-4 py-4"
              placeholder="Comment :"
              style={{
                backgroundColor: '#f6f5f4',
                border: 'none',
                outline: 'none',
                boxShadow: 'none',
              }}
            />
            <div className="d-flex justify-content-center">
                <Button type="submit">Send</Button>
            </div>
          </FormGroup>
        </Form>
      </Section>
      <Detail>
        <Item>Comment</Item>
            <div className="d-flex align-items-center mb-3">
              <Profile
                src={Ayudia}
                alt="Ayudia"
                className="rounded-circle"
              />
              <Info className="h-100">
                <h6>Ayudia</h6>
                <span>Nice Recipe, Simple And Delicious, Thank you</span>
              </Info>
            </div>
      </Detail>
    </>
  );
}

export default Comment;
