import {addressService} from "./addressService";

const street = 'Kulas Light';
const suite = 'Apt. 556';
const city = 'Gwenborough';
const zipcode = '92998-3874';

describe('getAddressString', () => {
  it('should be a function', () => {
    expect(typeof addressService.getAddressString).toBe('function');
  })

  it('should return a string', () => {
      expect(typeof addressService.getAddressString(street, suite, city, zipcode))
        .toBe('string');
    });

  it('should return an appropriate address, when zipcode passed', () => {
    expect(addressService.getAddressString(street, suite, city, zipcode))
      .toBe('92998-3874, Gwenborough, Kulas Light, Apt. 556');
  });

  it('should return an appropriate address, when zipcode is not passed', () => {
    expect(addressService.getAddressString(street, suite, city))
      .toBe('Gwenborough, Kulas Light, Apt. 556');
  });
})
