import axios from 'axios';

export const getDogs = async () => {
  try {
    return await axios.get("https://dog.ceo/api/breeds/image/random/50");
  } catch (err) {
    console.log(err);
  }
}
export const getUserDetails = () => {
  return {
    userName: 'SethVilla',
    email: 'sethvilla@gmail.com',
    firstName: 'Seth',
    lastName: 'Villavicencio',
    token: 'token',
  };
};