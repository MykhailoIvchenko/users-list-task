import axios, {AxiosResponse} from "axios";

const API_URL: string = 'https://jsonplaceholder.typicode.com/users'

const getUsers = async (): Promise<IUser[]> => {
  try {
    const result: AxiosResponse<IUser[]> = await axios.get(API_URL);

    return result.data;
  } catch (error) {
    return [];
  }
}

const getUserById = async (id: number | undefined): Promise<IUser | null> => {
  try {
    if (id) {
      const result: AxiosResponse<IUser> = await axios.get(`${API_URL}/${id}`);

      return result.data;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
}

export const usersService = {getUsers, getUserById}

