import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpin from "../../components/LoadingSpin";

const PrimaryResult = () => {
  const sendReq = () => {
    return axios.get(`${import.meta.env.VITE_BASE_URL}/users`);
  };
  const { data, error, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: sendReq,
  });
  console.log(data?.data?.data);
  if (isLoading) {
    return <LoadingSpin />;
  }
  return <>Hello</>;
};
export default PrimaryResult;
