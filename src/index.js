import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import ArtistService from './services/artist-service';
import { ArtistServiceProvider } from './components/artist-service-context';
import store from './store';



const artistService = new ArtistService();

ReactDOM.render(
  <Provider store = {store}>
    <ErrorBoundry>
      <ArtistServiceProvider value = {artistService}>
        <Router>
          <App />
        </Router>
      </ArtistServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);