// import axios from "axios";
// import axios from "../__mocks__/axios";
//
// jest.mock('axios');

import {usersService} from "./users.service";

describe('getUsers', () => {
  // let mockResponse = {
  //   data: [{
  //     name: 'Ervin Howell',
  //     username: 'Antonette',
  //     email: 'Shanna@melissa.tv',
  //     address: {
  //       street: 'Kulas Light',
  //       suite: 'Apt. 556',
  //       city: 'Gwenborough',
  //       zipcode: '92998-3874',
  //       geo: {
  //         lat: '40',
  //         lng: '30'
  //       }
  //     },
  //     phone: '010-692-6593 x09125',
  //     website: 'anastasia.net',
  //     company: {
  //       name: 'Deckow-Crist',
  //       catchPhrase: 'Proactive didactic contingency',
  //       bs: 'synergize scalable supply-chains',
  //     },
  //   }]
  // }
  //
  // axios.get = jest.fn().mockResolvedValue(mockResponse);

  it('should be a function', () => {
    expect(usersService.getUsers).toBeInstanceOf(Function);
  })

  it('should return an array', async () => {
    const users = await usersService.getUsers();

    expect(users).toBeInstanceOf(Array);
  });

  it('should return not empty array', async () => {
    const users = await usersService.getUsers();

    expect(users.length).toBeGreaterThan(0);
  });
})
