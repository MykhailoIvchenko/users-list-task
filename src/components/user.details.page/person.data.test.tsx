import React from 'react';
import {cleanup, render, screen} from '@testing-library/react';
import PersonData from "./person.data";

const addClasses = 'SomeClass';
const name = 'Chelsey Dietrich';
const username = 'Kamren';
const email = 'Lucio_Hettinger@annie.ca';

describe('CompanyData component ', () => {
  beforeEach(() => {
    render(
      <PersonData
        addClasses={addClasses}
        name={name}
        username={username}
        email={email}
      />
    );
  });

  afterEach(() => {
    cleanup();
  });

  it('should contain the html-element with PersonData class', () => {
    const contactsElement = screen.getByTestId('PersonData');

    expect(contactsElement).toHaveClass('PersonData');
  });

  it('should contain an image', () => {
    const imageElement = screen.getByRole('img');

    expect(imageElement).toBeInTheDocument();
  });

  it('should contain main information text', () => {
    const titleText = screen.getByText('Основна інформація');

    expect(titleText).toBeInTheDocument();
  });

  it('should add passed in addClasses class to the PersonData element', () => {
    const personDataElement = screen.getByTestId('PersonData');

    expect(personDataElement).toHaveClass(addClasses);
  });

  it('should render an appropriate name', () => {
    const nameElement = screen.getByText(name);

    expect(nameElement).toBeInTheDocument();
  });

  it('should render an appropriate username', () => {
    const usernameElement = screen.getByText(username);

    expect(usernameElement).toBeInTheDocument();
  });

  it('should render an appropriate email', () => {
    const emailElement = screen.getByText(email);

    expect(emailElement).toBeInTheDocument();
  });
});
