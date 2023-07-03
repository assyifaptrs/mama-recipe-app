import React, { useState } from 'react';
import styled from 'styled-components';
import { Nav, NavItem, NavLink, TabContent } from 'reactstrap';
import MyRecipe from './MyRecipe';
import SavedRecipe from './SavedRecipe';
import LikedRecipe from './LikedRecipe';

const Menu = styled.div`
  margin-top: 10px;
  margin-bottom: -70px;
  display: block;
  width: 100%;
  padding: 80px;
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 576px) {
    margin-top: 30px;
    padding: 0px;
  }
`;

function Tabs() {
  const [tab, setTab] = useState('');

  return (
    <Menu>
      <Nav>
        <NavItem>
          <NavLink style={{ color: '#efc81a' }} onClick={() => setTab('my')}>
            My Recipe
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink style={{ color: '#efc81a' }} onClick={() => setTab('saved')}>
            Saved Recipe
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink style={{ color: '#efc81a' }} onClick={() => setTab('liked')}>
            Liked Recipe
          </NavLink>
        </NavItem>
      </Nav>
      <hr />
      <TabContent activeTab={tab}>
        {tab === 'my' && <MyRecipe />}
        {tab === 'saved' && <SavedRecipe />}
        {tab === 'liked' && <LikedRecipe />}
      </TabContent>
    </Menu>
  );
}

export default Tabs;
