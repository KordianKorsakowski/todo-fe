import axios from 'axios';
import { SignupInterface } from '../../features/signup/types/types';

export const SignupUserAPI = async (payload: SignupInterface) => {
  console.log(process.env.NEXT_PUBLIC_API_URL);
  const res = await axios
    .post(`${process.env.NEXT_PUBLIC_API_URL}/auth/signup`, {
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
