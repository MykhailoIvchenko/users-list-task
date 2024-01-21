import React from 'react';
import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NotFoundPage from "./not.found.page";

describe('NotFoundPage component ', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it('should contain the tag with NotFoundPage class', () => {
    const containerElement = screen.getByTestId('NotFoundPage');
    expect(containerElement).toHaveClass('NotFoundPage');
  });

  it('should contain page does not exist text', () => {
    const titleElement = screen.getByText('На жаль, такої сторінки не існує');
    expect(titleElement).toBeInTheDocument();
  });

  it('should contain an image', () => {
    const imageElement = screen.getByRole('img');

    expect(imageElement).toBeInTheDocument();
  });

  it('should contain image with alt Sag face', () => {
    const imageElement = screen.getByAltText('Sad face');

    expect(imageElement).toBeInTheDocument();
  });

  it('should contain a link element', () => {
    const link = screen.getByRole('link');

    expect(link).toBeInTheDocument();
  });

  it('should contain an element with to main text', () => {
    const textToMain = screen.getByText('На головну');

    expect(textToMain).toBeInTheDocument();
  });

  it('should contain link with to main text', () => {
    const link = screen.getByRole('link');

    expect(link).toHaveTextContent('На головну');
  });

  test('should navigate to the home route on link click', () => {
    const linkElement = screen.getByRole('link');

    fireEvent.click(linkElement);

    expect(window.location.pathname).toBe('/');
  });
});
