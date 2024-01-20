interface IGeo {
  lat: string,
  lng: string,
}

interface ICompany {
  name: string,
  catchPhrase: string,
  bs: string,
}

interface IAddress {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: IGeo,
}

interface IUser {
  id: number,
  name: string,
  username: string,
  email: string,
  address: IAddress,
  phone: string,
  website: string,
  company: ICompany,
}

interface IUsersState {
  users: IUser[] | [];
  status: 'idle' | 'loading' | 'failed';
}

type UserDataProps = {
  user: IUser | null,
}

type PersonDataProps = {
  addClasses: string,
  name: string,
  username: string,
  email: string,
}

type ContactsDataProps = {
  addClasses: string,
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  phone: string,
  website: string,
}

type CompanyDataProps = {
  addClasses: string,
  name: string,
  catchPhrase: string,
  services: string,
}
