import axios from 'axios';
import { CreateInterface } from '../types/types';

export const createUserAPI = async (payload: CreateInterface) => {
  console.log(process.env.NEXT_PUBLIC_API_URL);
  await axios
    .post(`${process.env.NEXT_PUBLIC_API_URL}/auth/signup`, {
      ...payload,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
