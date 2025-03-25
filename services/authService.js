import { account } from './appwrite';
import { ID } from 'react-native-appwrite';

const authService = {
  //Register a user
  async register(email, password) {
    try {
      const response = await account.create(ID.unique(), email, password);
      return response;
    } catch (error) {
      return {
        error: error.message || 'Registration failed',
      };
    }
  },
  //Login
  async login(email, password) {
    try {
      const response = await account.createEmailPasswordSession(
        email,
        password
      );
      return response;
    } catch (error) {
      return {
        error: error.message || 'Login failed',
      };
    }
  },
  //get logged in user
  async getUser(email, password) {
    try {
      const response = await account.get();
      return response;
    } catch (error) {
      return null;
    }
  },
  //Logout user
  async logout() {
    try {
      await account.deleteSession('current');
    } catch (error) {
      return {
        error: error.message || 'Logout failed',
      };
    }
  },
};

export default authService;
