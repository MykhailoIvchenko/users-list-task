import mockAxios from "../__mocks__/axios";
import {usersService} from "./users.service";

const mockUser = {
  id: 1,
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
}

const mockResponseGetUsers = {
  data: [mockUser],
}

const mockResponseGetUserById = {
  data: mockUser,
}

describe('getUsers', () => {

  it('should be a function', () => {
    expect(usersService.getUsers).toBeInstanceOf(Function);
  })

  it('should return an array', async () => {
    const users = await usersService.getUsers();

    expect(users).toBeInstanceOf(Array);
  });

  it('should return not empty array if it has got data from API', async () => {
    mockAxios.get.mockImplementationOnce(() => Promise.resolve(mockResponseGetUsers))

    const users = await usersService.getUsers();

    expect(users.length).toBeGreaterThan(0);
  });
});

describe('getUserById', () => {
  it('should be a function', () => {
    expect(usersService.getUserById).toBeInstanceOf(Function);
  })

  it('should return an object when correct id was passed', async () => {
    mockAxios.get.mockImplementationOnce(() => Promise.resolve(mockResponseGetUserById))

    const user = await usersService.getUserById(1);

    expect(typeof user).toEqual('object');
  });

  it('should return null if something went wrong', async () => {
    mockAxios.get.mockImplementationOnce(() => Promise.reject());

    const user = await usersService.getUserById(1);

    expect(user).toBeNull();
  });

  it('should return null if id is undefined', async () => {
        const user = await usersService.getUserById(undefined);

    expect(user).toBeNull();
  });
});
