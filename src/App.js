import React from 'react';
import Router from './router';
import GlobalStyles from './assets/styles/GlobalStyles';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';

// Fonts
import './App.css';
import './assets/fonts/AirbnbCerealBold.woff';
import './assets/fonts/AirbnbCerealLight.woff';
import './assets/fonts/AirbnbCerealMedium.woff';

// Aos
import 'aos/dist/aos.css';
import 'aos/dist/aos.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <GlobalStyles />
          <Router />
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
