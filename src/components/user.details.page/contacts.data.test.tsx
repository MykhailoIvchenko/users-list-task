import React from 'react';
import {cleanup, render, screen} from '@testing-library/react';
import ContactsData from "./contacts.data";
import {addressService} from "../../services/addressService";

const addClasses = 'SomeClass';
const street = 'Keebler LLC';
const suite = 'User-centric fault-tolerant solution';
const city = 'revolutionize end-to-end systems';
const zipcode = '33263';
const phone = '(254)954-1289';
const website = 'demarco.info';

describe('CompanyData component ', () => {
  beforeEach(() => {
    render(
      <ContactsData
        addClasses={addClasses}
        street={street}
        suite={suite}
        city={city}
        zipcode={zipcode}
        phone={phone}
        website={website}
      />
    );
  });

  afterEach(() => {
    cleanup();
  });

  it('should contain the html-element with ContactsData class', () => {
    const contactsElement = screen.getByTestId('ContactsData');

    expect(contactsElement).toHaveClass('ContactsData');
  });

  it('should contain an image', () => {
    const imageElement = screen.getByRole('img');

    expect(imageElement).toBeInTheDocument();
  });

  it('should contain contact information text', () => {
    const titleText = screen.getByText('Контактна інформація');

    expect(titleText).toBeInTheDocument();
  });

  it('should add passed in addClasses class to the ContactsData element', () => {
    const contactsDataElement = screen.getByTestId('ContactsData');

    expect(contactsDataElement).toHaveClass(addClasses);
  });

  it('should render an appropriate address string', () => {
    const addressElement = screen.getByText(addressService
      .getAddressString(street, suite, city, zipcode));

    expect(addressElement).toBeInTheDocument();
  });

  it('should render an appropriate phone', () => {
    const phoneElement = screen.getByText(phone);

    expect(phoneElement).toBeInTheDocument();
  });

  it('should render an appropriate website', () => {
    const websiteElement = screen.getByText(website);

    expect(websiteElement).toBeInTheDocument();
  });
});
