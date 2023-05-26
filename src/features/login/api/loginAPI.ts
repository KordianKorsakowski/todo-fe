import axios from 'axios';
import { LoginInterface } from '../types/types';

export const loginAPI = async (payload: LoginInterface) => {
  console.log(process.env.NEXT_PUBLIC_API_URL);
  await axios
    .post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
      ...payload,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
