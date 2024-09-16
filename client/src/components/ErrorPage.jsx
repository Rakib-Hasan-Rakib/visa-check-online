import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import errorAnim from "../../public/error_animation.json";

const ErrorPage = () => {
  return (
    <>
      <Lottie
        animationData={errorAnim}
        loop={true}
        className="h-[80vh] w-full"
      />
      <div className="flex justify-center items-center">
        <button className="btn_one my-4 lg:my-6">
          <Link to="/">Back To Home</Link>
        </button>
      </div>
    </>
  );
};

export default ErrorPage;
