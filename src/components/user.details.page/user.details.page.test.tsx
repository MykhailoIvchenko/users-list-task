import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import {MemoryRouter, Route, Routes} from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import UserDetailsPage from './user.details.page';

const userData = {
  id: 2,
  name: 'Ervin Howell',
  username: 'Antonette',
  email: 'Shanna@melissa.tv',
  address: {
    street: 'Kulas Light',
    suite: 'Apt. 556',
    city: 'Gwenborough',
    zipcode: '92998-3874',
    geo: {
      lat: '40',
      lng: '30'
    }
  },
  phone: '010-692-6593 x09125',
  website: 'anastasia.net',
  company: {
    name: 'Deckow-Crist',
    catchPhrase: 'Proactive didactic contingency',
    bs: 'synergize scalable supply-chains',
  },
};

const mockStore = configureStore();

describe('UserDetailsPage component', () => {
  it('renders UserDetails when selectedUser is present in the store',() => {
    const initialState = { selectedUser: userData };
    const store = mockStore(initialState);

    render(
      <MemoryRouter>
        <Provider store={store}>
          <UserDetailsPage />
        </Provider>
      </MemoryRouter>
    );

    const userDetailsElement = screen.getByTestId('UserDetails');
    expect(userDetailsElement).toBeInTheDocument();
  });
});
