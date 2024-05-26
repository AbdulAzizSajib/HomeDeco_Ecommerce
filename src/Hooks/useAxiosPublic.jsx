import axios from "axios";

export const axiosPublic = axios.create({
  baseURL: "https://homedeco-server.vercel.app",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
