import React from 'react';
import {cleanup, render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from "./redux/store";
import App from './App';

jest.mock('./components/users.list/users.list',
  () => () => <div data-testid="mocked-users-list"></div>);

describe('App component ', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it('should contain tag main', () => {
    const mainElement = screen.getByRole('main');
    expect(mainElement).toBeInTheDocument();
  });

  it('should contain html-element with App class', () => {
    const appElement = screen.getByTestId('App');

    expect(appElement).toHaveClass('App');
  });
});
