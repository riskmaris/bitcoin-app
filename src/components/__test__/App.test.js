import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../App';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import { BrowserRouter } from 'react-router-dom';

test('renders learn react link', () => {
  const {asFragment} = render( <Provider store={store}>
     <BrowserRouter>
        <App />
      </BrowserRouter>
  </Provider>);
  expect(asFragment()).toMatchSnapshot();
});
