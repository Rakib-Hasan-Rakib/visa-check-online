import { ImSpinner4 } from "react-icons/im";

const LoadingSpin = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full h-[80vh]">
        <ImSpinner4 size={40} className="animate-spin text-blue-700 w-full" />
      </div>
    </>
  );
};
export default LoadingSpin;
