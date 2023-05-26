import axios from 'axios';
import { SignupInterface } from '../types/types';

export const SignupUserAPI = async (payload: SignupInterface) => {
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
