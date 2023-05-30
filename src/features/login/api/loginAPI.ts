import axios from 'axios';
import { LoginInterface } from '../types/types';

export const loginAPI = async (payload: LoginInterface) => {
  console.log(process.env.NEXT_PUBLIC_API_URL);
  const res = await axios
    .post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
      ...payload,
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response.data;
    });
  return res;
};
