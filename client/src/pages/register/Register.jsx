import { useContext, useState } from "react";
import Container from "../../components/Container";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import { ImSpinner9 } from "react-icons/im";
import axios from "axios";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { signInWithGoogle, createUser, updateUserProfile } =
    useContext(AuthContext);

  const requiredSymbol = <span className="text-red-600">*</span>;

  const onSubmit = (data) => {
    setIsLoading(true);
    const name = data?.name;
    const email = data?.email;
    const photo = data?.photo[0];
    const password = data?.password;

    const formData = new FormData();
    formData.append("userPhoto", photo);

    axios
      .post(`${import.meta.env.VITE_BASE_URL}/userImage`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.status == 200) {
          let imageUrl = response?.data?.data;
          createUser(email, password)
            .then((result) => {
              updateUserProfile(name, imageUrl)
                .then(() => {
                  navigate("/", { replace: true });
                  toast.success("you account created successfully");
                  reset();
                })
                .catch((err) => {
                  setIsLoading(false);
                  toast.error(err.message);
                });
            })
            .catch((err) => {
              setIsLoading(false);
              toast.error(err.message);
            });
        }
      })
      .catch((error) => toast.error(error?.message))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        navigate("/", { replace: true });
        toast.success("you logged in successfully");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <>
      <Container>
        <h1 className="section_title">registration here</h1>
        <div className="w-full md:w-3/5 lg:w-2/5 2xl:1/5 mx-auto">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-1 lg:space-y-4"
          >
            <div>
              <label className="md:text-lg">Full Name{requiredSymbol}</label>
              <input
                {...register("name", { required: true })}
                placeholder="Full Name"
                className="input-box md:my-1"
              />
            </div>
            <div>
              <label className="md:text-lg">
                Email Address{requiredSymbol}
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Email Address"
                className="input-box md:my-1"
              />
            </div>
            <div>
              <label className="md:text-lg">
                Profile Photo{requiredSymbol}
              </label>
              <input
                type="file"
                id="image"
                accept="image/*"
                {...register("photo", { required: true })}
                className="w-full px-2 py-[2px] focus:outline-none text-black border rounded-md border-blue-600 md:my-1"
              />
            </div>
            <div className="relative">
              <label className="md:text-lg">Password{requiredSymbol}</label>
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
                  <input type="submit" value="Register" className="btn_one" />
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
          <div className="text-center">
            Already have account?{" "}
            <Link to="/login" className="text-blue-600 underline">
              Login
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
};
export default Register;
