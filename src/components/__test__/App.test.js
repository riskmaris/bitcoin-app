import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from '../../App';
import store from '../../redux/store';

test('renders learn react link', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
