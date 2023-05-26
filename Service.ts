import axios from 'axios';
import UserData from './types';

const getUsersData = async (): Promise<UserData[]> => {
  try {
    const response = await axios.get<UserData[]>(
      'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users'
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching users data:', error);
    return [];
  }
};

const getUserById = async (id: string | null): Promise<UserData | null> => {
  if (!id) {
    return null;
  }

  const cachedUser = localStorage.getItem(`user_${id}`);
  
  if (cachedUser !== null) {
    return JSON.parse(cachedUser);
  }

  try {
    const response = await axios.get<UserData>(
      `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
    );
    const user = response.data;
    localStorage.setItem(`user_${id}`, JSON.stringify(user));
    return user;
  } catch (error) {
    console.error(`Error fetching user with ID ${id}:`, error);
    return null;
  }
};

export { getUsersData, getUserById };
