import React from 'react';
import {cleanup, render, screen} from '@testing-library/react';
import CompanyData from "./company.data";

const addClasses = 'SomeClass';
const name = 'Keebler LLC';
const catchPhrase = 'User-centric fault-tolerant solution';
const services = 'revolutionize end-to-end systems';

describe('CompanyData component ', () => {
  beforeEach(() => {
    render(
        <CompanyData
          addClasses={addClasses}
          name={name}
          catchPhrase={catchPhrase}
          services={services}
        />
    );
  });

  afterEach(() => {
    cleanup();
  });

  it('should contain the html-element with CompanyData class', () => {
    const companyElement = screen.getByTestId('CompanyData');

    expect(companyElement).toHaveClass('CompanyData');
  });

  it('should contain an image', () => {
    const imageElement = screen.getByRole('img');

    expect(imageElement).toBeInTheDocument();
  });

  it('should contain information about company text', () => {
    const titleText = screen.getByText('Інформація про компанію');

    expect(titleText).toBeInTheDocument();
  });

  it('should add passed in addClasses class to the CompanyData element', () => {
    const companyElement = screen.getByTestId('CompanyData');

    expect(companyElement).toHaveClass(addClasses);
  });

  it('should render an appropriate company name', () => {
    const companyNameElement = screen.getByText(name);

    expect(companyNameElement).toBeInTheDocument();
  });

  it('should render an appropriate catchPhrase', () => {
    const phraseElement = screen.getByText(catchPhrase);

    expect(phraseElement).toBeInTheDocument();
  });

  it('should render an appropriate services text', () => {
    const servicesElement = screen.getByText(services);

    expect(servicesElement).toBeInTheDocument();
  });
});
