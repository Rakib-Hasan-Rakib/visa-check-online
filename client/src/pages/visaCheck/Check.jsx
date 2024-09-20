import Lottie from "lottie-react";
import loginAnim from "../../../public/login_animation.json";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import { ImSpinner9 } from "react-icons/im";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import brandLogo from "../../assets/brand_icon.jpg"
import Container from "../../components/Container";
import './check.css'

const Check = () => {
  const [showPass, setShowPass] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    setIsLoading(true);

    axios
      .put(`${import.meta.env.VITE_BASE_URL}/user`, data)
      .then((response) => {
        if (response.status == 200) {
          toast.success("Login successful!");
          navigate(`/primary/${data?.passport}`);
          reset();
        }
      })
      .catch((error) => {
        if (error?.response?.status == 401) {
          toast.error(error?.response?.data?.message);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <Container>
        <div className="bg-blue-600 w-full py-4 lg:py-8 flex flex-col items-center">
          <img
            src={brandLogo}
            alt="brand logo"
            className="w-20 lg:w-40 rounded-full "
          />
          <p className="text-white md:text-xl p-2 lg:p-4">
            Offceal Visa Check Site We Provide Visa & Immigration Service From
            Experienced Lawyers
          </p>
        </div>
        <div className="custom w-full bg-gry-400 flex flex-col lg:flex-row-reverse items-center gap-4 lg:gap-8 my-4 lg:my-6">
          <Lottie
            animationData={loginAnim}
            loop={true}
            className="w-60 basis-1/2"
          />
          <div>
            <h2 className="text-center text-xl lg:text-3xl xl:text-4xl capitalize font-semibold my-4 lg:my-8  text-blue-600">
              check your visa status
            </h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-1 lg:space-y-4"
            >
              <div>
                <label className="md:text-lg text-white font-semibold">
                  Passport Number<span className="text-red-600">*</span>
                </label>
                <input
                  {...register("passport", { required: true })}
                  placeholder="Passport Number"
                  className="input-box md:my-1"
                />
              </div>
              <div className="relative">
                <label className="md:text-lg text-white font-semibold">
                  Password<span className="text-red-600">*</span>
                </label>
                <input
                  type={showPass ? "text" : "password"}
                  {...register("password", { required: true })}
                  placeholder="******"
                  className="input-box md:my-1"
                />
                <div className="absolute top-8 md:top-10 right-2">
                  {showPass ? (
                    <FaEyeSlash
                      onClick={() => setShowPass(false)}
                      className="text-blue-600"
                    />
                  ) : (
                    <FaEye
                      onClick={() => setShowPass(true)}
                      className="text-blue-600"
                    />
                  )}
                </div>
              </div>
              {/* <span className="italic underline text-red-600 text-sm">Forgot Password?</span> */}

              <div className="flex justify-center items-center">
                {isLoading ? (
                  <div className="btn_one cursor-not-allowed">
                    <ImSpinner9
                      size={20}
                      className="text-white animate-spin cursor-not-allowed"
                    />
                  </div>
                ) : (
                  <>
                    <input type="submit" value="Check" className="btn_one" />
                  </>
                )}
              </div>
            </form>
          </div>
        </div>
        <div className="bg-blue-600 w-full py-12 lg:py-20 flex flex-col items-center">
          <img
            src={brandLogo}
            alt="brand logo"
            className="w-20 lg:w-40 rounded-full "
          />
          <p className="text-white md:text-xl p-2 lg:p-4">
            Offceal Visa Check Site We Provide Visa & Immigration Service From
            Experienced Lawyers
          </p>
        </div>
      </Container>
    </>
  );
};
export default Check;
