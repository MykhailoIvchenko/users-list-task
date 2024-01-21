import React from 'react';
import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter, Router } from 'react-router-dom';
import UserShortInfo from "./user.short.info";
import {setUser} from "../../redux/slices/userSlice";

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

const initialState = { selectedUser: userData };
const store = mockStore(initialState);

describe('UserShortInfo component ', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <UserShortInfo user={userData} />
        </Provider>
      </MemoryRouter>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it('should contain the html-element with UserShortInfo class', () => {
    const infoElement = screen.getByTestId('UserShortInfo');

    expect(infoElement).toHaveClass('UserShortInfo');
  });

  it('should render appropriate user name', () => {
    const nameElement = screen.getByText(userData.name);

    expect(nameElement).toBeInTheDocument();
  });

  it('should render appropriate user city', () => {
    const cityElement = screen.getByText(userData.address.city);

    expect(cityElement).toBeInTheDocument();
  });

  it('should render appropriate user email', () => {
    const emailElement = screen.getByText(userData.email);

    expect(emailElement).toBeInTheDocument();
  });

  it('should have a button', () => {
    const buttonElement = screen.getByRole('button');

    expect(buttonElement).toBeInTheDocument();
  });

  it('should have a button with details text', () => {
    const buttonElement = screen.getByRole('button');

    expect(buttonElement).toHaveTextContent('Деталі');
  });

  it('should set the selected user in the store on details button click', () => {
    const buttonElement = screen.getByRole('button');

    fireEvent.click(buttonElement);

    expect(store.getActions()).toContainEqual(setUser(userData));
  });
});
