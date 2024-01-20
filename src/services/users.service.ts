import axios, {AxiosResponse} from "axios";
const API_URL: string = 'https://jsonplaceholder.typicode.com/users'

const getUsers = async (): Promise<IUser[]> => {
  try {
    const users: AxiosResponse<IUser[]> = await axios.get(API_URL);

    return users.data;
  } catch (error) {
    return []
  }
}

const getUserById = async (id: number | undefined): Promise<IUser | null> => {
  try {
    if (id) {
      const user: AxiosResponse<IUser> = await axios.get(`${API_URL}/${id}`);

      return user.data;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
}

export const usersService = {getUsers, getUserById}

