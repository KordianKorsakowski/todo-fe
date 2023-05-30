import axios from 'axios';

export const logoutUserAPI = async () => {
  console.log(process.env.NEXT_PUBLIC_API_URL);
  const res = await axios
    .post(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response.data;
    });
  return res;
};
