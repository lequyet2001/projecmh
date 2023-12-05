import axios from 'axios';
import {ip} from '../Component/ip'
export const login = async (username:string, password:string) => {
  try {
    const response = await axios.get(`http://${ip}:3000/api/users/Login?username=${username}&password=${password}`);
    // Handle the response as needed
    return response;
  } catch (error) {
    // Handle errors
    console.error('Login failed:', error);
    throw error;
  }
};
