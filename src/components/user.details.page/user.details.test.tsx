import React from 'react';
import {cleanup, render, screen} from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import UserDetails from "./user.details";
import { MemoryRouter } from 'react-router-dom';

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

describe('UserDetails component ', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render NotFoundPage if selected user is null (has no any id)', () => {
    const initialState = { selectedUser: null };
    const store = mockStore(initialState);

    render(
      <MemoryRouter>
        <Provider store={store}>
          <UserDetails />
        </Provider>
      </MemoryRouter>
    );

    const notFoundPageElement = screen.getByTestId('NotFoundPage');
    expect(notFoundPageElement).toBeInTheDocument();
  });

  it('should render user details if selected user has an id', () => {
    const initialState = { selectedUser: userData };
    const store = mockStore(initialState);

    render(
      <MemoryRouter>
        <Provider store={store}>
          <UserDetails />
        </Provider>
      </MemoryRouter>
    );

    const userDetailsElement = screen.getByTestId('UserDetails');
    expect(userDetailsElement).toBeInTheDocument();
  });

  it('should contain html-element with UserDetails class', () => {
    const initialState = { selectedUser: userData };
    const store = mockStore(initialState);

    render(
      <MemoryRouter>
        <Provider store={store}>
          <UserDetails />
        </Provider>
      </MemoryRouter>
    );

    const userDetailsElement = screen.getByTestId('UserDetails');

    expect(userDetailsElement).toHaveClass('UserDetails');
  });

  it('should display appropriate user name, if the user exists', () => {
    const initialState = { selectedUser: userData };
    const store = mockStore(initialState);

    render(
      <MemoryRouter>
        <Provider store={store}>
          <UserDetails />
        </Provider>
      </MemoryRouter>
    );

    const userNameElement = screen.getByTestId('UserDetails-Title');

    expect(userNameElement).toHaveTextContent(userData.name);
  });
});
