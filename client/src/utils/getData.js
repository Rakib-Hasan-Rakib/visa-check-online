import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpin from "../components/LoadingSpin";

const getData = (passNum) => {
  const sendReq = () => {
    return axios.get(`${import.meta.env.VITE_BASE_URL}/docs/${passNum}`);
  };
  const { data, error, isLoading } = useQuery({
    queryKey: ["docs"],
    queryFn: sendReq,
  });
  const response = data?.data?.data;
  return { response, error, isLoading };
};
export default getData;
