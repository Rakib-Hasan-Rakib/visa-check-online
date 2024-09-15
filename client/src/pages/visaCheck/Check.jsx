import Lottie from "lottie-react";
import loginAnim from "../../../public/login_animation.json";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const Check = () => {
  const [showPass, setShowPass] = useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="w-full bg-gry-400 flex flex-col lg:flex-row-reverse items-center gap-4 lg:gap-8">
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
              <label className="md:text-lg">
                Passport Number<span className="text-red-600">*</span>
              </label>
              <input
                {...register("passport")}
                placeholder="Passport Number"
                className="input-box md:my-1"
              />
            </div>
            <div>
              <label className="md:text-lg">
                Password<span className="text-red-600">*</span>
              </label>
              <input
                type={showPass ? "text" : "password"}
                {...register("password", { required: true })}
                placeholder="******"
                className="input-box md:my-1"
              />
            </div>
            {/* <span className="italic underline text-red-600 text-sm">Forgot Password?</span> */}

            <div className="flex justify-center items-center cursor-pointer relative">
              <input type="submit" value="Login" className="btn_one" />
              <div className="absolute -top-6 lg:-top-9 -translate-y-1/2 right-2">
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
          </form>
        </div>
      </div>
    </>
  );
};
export default Check;
