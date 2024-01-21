import React from 'react';
import {cleanup, render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from "../../redux/store";
import MainPage from "./main.page";

jest.mock('../users.list/users.list',
  () => () => <div data-testid="mocked-users-list"></div>);

describe('MainPage component ', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <MainPage />
        </Provider>
      </MemoryRouter>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it('should contain an html-element MainPage class', () => {
    const mainPageElement = screen.getByTestId('MainPage');
    expect(mainPageElement).toHaveClass('MainPage');
  });

  it('should contain users text', () => {
    const titleElement = screen.getByText('Користувачі');
    expect(titleElement).toBeInTheDocument();
  });
});
