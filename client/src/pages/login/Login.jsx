import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Container from "../../components/Container";
import toast from "react-hot-toast";
import { AuthContext } from "../../providers/AuthProvider";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { signInWithGoogle, signIn } = useContext(AuthContext);

  const onSubmit = (data) => {
    signIn(data?.email, data?.password)
      .then((result) => {
        navigate("/", { replace: true });
        toast.success("you logged in successfully");
      })
      .catch((err) => {
        //   setLoading(false);
        toast.error(err.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        navigate("/", { replace: true });
        toast.success("you logged in successfully");
      })
      .catch((err) => {
        // setLoading(false);
        toast.error(err.message);
      });
  };

  return (
    <>
      <Container>
        <h1 className="section_title">Please login here</h1>
        <div className="w-full md:w-3/5 lg:w-2/5 2xl:1/5 mx-auto">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-1 lg:space-y-4"
          >
            <div>
              <label className="md:text-lg">
                Email Address<span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                {...register("email")}
                placeholder="Email Address"
                className="input-box md:my-1"
              />
            </div>
            <div className="relative">
              <label className="md:text-lg">
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
                  <input type="submit" value="Login" className="btn_one" />
                </>
              )}
            </div>
          </form>
          <div className="flex items-center gap-3 my-2 md:my-4">
            <hr className="w-full" />
            <span>or</span>
            <hr className="w-full" />
          </div>
          <div
            onClick={handleGoogleSignIn}
            className="btn-two flex justify-center my-2 items-center rounded-md cursor-pointer border border-blue-600 py-1"
          >
            <FcGoogle size={32} />

            <p>Continue with Google</p>
          </div>
        </div>
        <div className="text-center">
          Already have account? <Link to="/register" className="text-blue-600 underline">Register</Link>
        </div>
      </Container>
    </>
  );
};
export default Login;
