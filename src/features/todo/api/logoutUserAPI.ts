import axios from 'axios';


export const logoutUserAPI = async () => {
  console.log(process.env.NEXT_PUBLIC_API_URL);
  await axios
    .post(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
