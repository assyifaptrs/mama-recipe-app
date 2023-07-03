import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import ScrollToTop from '../utils/scrollToTop';

// Main
import Home from '../views/Home';

// Auth
import Login from '../views/Auth/Login';
import Register from '../views/Auth/Register';

// User
import Profile from '../views/Profile/Profile.jsx';
import EditProfile from '../views/Profile/EditProfile.jsx';

// Recipe
import Add from '../views/Recipe/Add';
import Edit from '../views/Recipe/Edit';
import Detail from '../views/Recipe/Detail';
import Video from '../views/Recipe/Video';

// Not Found
import NotFound from '../views/NotFound';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
        </Route>
        <Route path="auth/" element={<PublicRoute />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="recipe/" element={<PrivateRoute />}>
          <Route path="add" element={<Add />} />
          <Route path="edit/:id" element={<Edit />} />
          <Route path="detail/:id" element={<Detail />} />
          <Route path="video/:id" element={<Video />} />
        </Route>
        <Route path="profile/" element={<PrivateRoute />}>
          <Route index element={<Profile />} />
          {/* <Route path=":id" element={<Profile />} /> */}
          <Route path="edit" element={<EditProfile />} />
          {/* <Route path="edit/:id" element={<EditProfile />} /> */}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default Router;
