export default {
  get: jest.fn(() => Promise.resolve<{ data: IUser[] | IUser}>({ data: [] }))
}
