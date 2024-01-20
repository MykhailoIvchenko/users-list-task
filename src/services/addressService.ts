const getAddressString = (
  street: string,
  suite: string,
  city: string,
  zipcode?: string
): string => {
  const address = `${zipcode ? zipcode + ', ' : ''}${city}, ${street}, ${suite}`;

  return address;
}

export const addressService = { getAddressString }
