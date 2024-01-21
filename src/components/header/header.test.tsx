import React from 'react';
import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from "./header";

describe('Header component ', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it('should contain the tag header (banner role)', () => {
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeInTheDocument();
  });

  it('should contain the header element with Header class', () => {
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toHaveClass('Header');
  });

  it('should contain an image', () => {
    const logoElement = screen.getByRole('img');

    expect(logoElement).toBeInTheDocument();
  });

  it('should contain logo image (with alt logo)', () => {
    const logoElement = screen.getByAltText('logo');

    expect(logoElement).toBeInTheDocument();
  });

  it('should contain an element with to main title', () => {
    const linkToMain = screen.getByTitle('На головну');

    expect(linkToMain).toBeInTheDocument();
  });

  it('should contain logo image with to main title', () => {
    const logoElement = screen.getByAltText('logo');
    const linkToMain = screen.getByTitle('На головну');

    expect(logoElement).toEqual(linkToMain);
  });

  it('should navigate to the home route on logo click', () => {
    const logoElement = screen.getByAltText('logo');

    fireEvent.click(logoElement);

    expect(window.location.pathname).toBe('/');
  });
});
