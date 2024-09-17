import { useForm } from "react-hook-form";
import Container from "../../components/Container";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { ImSpinner9 } from "react-icons/im";

const UploadData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const requiredSymbol = <span className="text-red-600">*</span>;
  const requiredMsg = (
    <span className="text-red-600 text-sm italic">This field is required</span>
  );
  const imageFields = [0, 1, 2, 3, 4, 5];

  const onSubmit = (data) => {
    setIsLoading(true);

    const formData = new FormData();
    formData.append("surname", data?.surname);
    formData.append("givenName", data?.givenName);
    formData.append("gender", data?.gender);
    formData.append("fatherName", data?.fatherName);
    formData.append("motherName", data?.motherName);
    formData.append("phoneNum", data?.phoneNum);
    formData.append("email", data?.email);
    formData.append("passportNum", data?.passportNum);
    formData.append("nid", data?.nid);
    formData.append("education", data?.education);
    formData.append("dob", data?.dob);
    formData.append("marrital", data?.marrital);
    formData.append("religion", data?.religion);
    formData.append("present", data?.present);
    formData.append("permanent", data?.permanent);
    formData.append("status", data?.status);
    formData.append("visaNum", data?.visaNum);

    formData.append("photo", data?.photo[0]);
    formData.append("image_1", data?.image_1[0]);
    formData.append("image_2", data?.image_2[0]);
    formData.append("image_3", data?.image_3[0]);
    formData.append("image_4", data?.image_4[0]);
    formData.append("image_5", data?.image_5[0]);
    formData.append("image_6", data?.image_6[0]);

    axios
      .post(`${import.meta.env.VITE_BASE_URL}/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response?.status == 200) {
          toast.success(response?.data?.message);
          reset();
        }
      })
      .catch((error) => {
        if (error?.response?.status == 400) {
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
        <h1 className="section_title">upload client's visa information</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4"
        >
          <div>
            <label className="md:text-lg">Surname{requiredSymbol}</label>
            <input
              {...register("surname")}
              placeholder="Surname"
              className="input-box md:my-1"
            />
            {errors.surname && requiredMsg}
          </div>
          <div>
            <label className="md:text-lg">Given Name{requiredSymbol}</label>
            <input
              {...register("givenName")}
              placeholder="Given Name"
              className="input-box md:my-1"
            />
            {errors.givenName && requiredMsg}
          </div>
          <div className="flex flex-col">
            <label className="md:text-lg">Gender{requiredSymbol}</label>
            <select
              {...register("gender", { required: "gender is required" })}
              className="input-box md:my-1"
            >
              <option value="">Select...</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>
            {errors.gender && requiredMsg}
          </div>
          <div>
            <label className="md:text-lg">Father's Name{requiredSymbol}</label>
            <input
              {...register("fatherName")}
              placeholder="Father's Name"
              className="input-box md:my-1"
            />
            {errors.fatherName && requiredMsg}
          </div>
          <div>
            <label className="md:text-lg">Mother's Name{requiredSymbol}</label>
            <input
              {...register("motherName")}
              placeholder="Mother's Name"
              className="input-box md:my-1"
            />
            {errors.motherName && requiredMsg}
          </div>
          <div>
            <label className="md:text-lg">Phone Number{requiredSymbol}</label>
            <input
              type="number"
              {...register("phoneNum")}
              placeholder="Phone Number"
              className="input-box md:my-1"
            />
            {errors.phoneNum && requiredMsg}
          </div>
          <div>
            <label className="md:text-lg">Email Address{requiredSymbol}</label>
            <input
              type="email"
              {...register("email")}
              placeholder="Email Address"
              className="input-box md:my-1"
            />
            {errors.email && requiredMsg}
          </div>
          <div>
            <label className="md:text-lg">
              Passport Number{requiredSymbol}
            </label>
            <input
              {...register("passportNum")}
              placeholder="Passport Number"
              className="input-box md:my-1"
            />
            {errors.passportNum && requiredMsg}
          </div>
          <div>
            <label className="md:text-lg">NID{requiredSymbol}</label>
            <input
              {...register("nid")}
              placeholder="National ID"
              className="input-box md:my-1"
            />
            {errors.nid && requiredMsg}
          </div>
          <div className="flex flex-col">
            <label className="md:text-lg">
              Educational Qualification{requiredSymbol}
            </label>
            <select
              {...register("education", { required: "education is required" })}
              className="input-box md:my-1"
            >
              <option value="">Select...</option>
              <option value="psc">PSC</option>
              <option value="jsc">JSC</option>
              <option value="ssc">SSC</option>
              <option value="hsc">HSC</option>
              <option value="bachelors">Bachelor's</option>
              <option value="masters">Master's</option>
              <option value="none">N/A</option>
            </select>
            {errors.education && requiredMsg}
          </div>
          <div>
            <label className="md:text-lg">Date of Birth{requiredSymbol}</label>
            <input
              type="date"
              id="date"
              {...register("dob", { required: true })}
              className="input-box md:my-1"
            />
            {errors.dob && requiredMsg}
          </div>
          <div className="flex flex-col">
            <label className="md:text-lg">Marital Status{requiredSymbol}</label>
            <select
              {...register("marrital", { required: true })}
              className="input-box md:my-1"
            >
              <option value="">Select...</option>
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="divorced">Divorced</option>
              <option value="none">N/A</option>
            </select>
            {errors.marrital && requiredMsg}
          </div>
          <div>
            <label className="md:text-lg">Religion{requiredSymbol}</label>
            <input
              {...register("religion")}
              placeholder="eg. Islam"
              className="input-box md:my-1"
            />
            {errors.religion && requiredMsg}
          </div>
          <div>
            <label className="md:text-lg">
              Present Address{requiredSymbol}
            </label>
            <input
              {...register("present")}
              placeholder="Present Address"
              className="input-box md:my-1"
            />
            {errors.present && requiredMsg}
          </div>
          <div>
            <label className="md:text-lg">
              Permanent Address{requiredSymbol}
            </label>
            <input
              {...register("permanent")}
              placeholder="Permanent Address"
              className="input-box md:my-1"
            />
            {errors.permanent && requiredMsg}
          </div>
          <div className="flex flex-col">
            <label className="md:text-lg">Visa Status</label>
            <select {...register("status")} className="input-box md:my-1">
              <option value="">Select...</option>
              <option value="approved">Approved</option>
              <option value="pending">Pending</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
          <div>
            <label className="md:text-lg">E-visa Number</label>
            <input
              {...register("visaNum")}
              placeholder="Visa Number"
              className="input-box md:my-1"
            />
          </div>
          <div>
            <label className="md:text-lg">Profile Photo{requiredSymbol}</label>
            <input
              type="file"
              id="image"
              accept="image/*"
              {...register("photo", { required: true })}
              className="w-full px-2 py-[2px] focus:outline-none text-black border rounded-md border-blue-600 md:my-1"
            />
            {errors.photo && requiredMsg}
          </div>
          <h2 className="md:col-span-2 lg:col-span-3 flex justify-center items-center text-blue-600 font-semibold text-xl md:text-2xl lg:text-4xl tracking-widest">
            Attachments
          </h2>
          {/* <div className="md:col-span-2 lg:col-span-3">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {imageFields.map((_, index) => (
                <div key={index} className="relative">
                  <label htmlFor={`image_${index}`} className="md:text-lg">
                    Upload Image {index + 1}
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    id={`image_${index}`}
                    {...register(`image_${index}`)}
                    className="input-box"
                  />
                </div>
              ))}
            </div>
          </div> */}

          <div>
            <label className="md:text-lg">Attachment One</label>
            <input
              type="file"
              id="image"
              accept="image/*"
              {...register("image_1")}
              className="w-full px-2 py-[2px] focus:outline-none text-black border rounded-md border-blue-600 md:my-1"
            />
          </div>
          <div>
            <label className="md:text-lg">Attachment Two</label>
            <input
              type="file"
              id="image"
              accept="image/*"
              {...register("image_2")}
              className="w-full px-2 py-[2px] focus:outline-none text-black border rounded-md border-blue-600 md:my-1"
            />
          </div>
          <div>
            <label className="md:text-lg">Attachment Three</label>
            <input
              type="file"
              id="image"
              accept="image/*"
              {...register("image_3")}
              className="w-full px-2 py-[2px] focus:outline-none text-black border rounded-md border-blue-600 md:my-1"
            />
          </div>
          <div>
            <label className="md:text-lg">Attachment Four</label>
            <input
              type="file"
              id="image"
              accept="image/*"
              {...register("image_4")}
              className="w-full px-2 py-[2px] focus:outline-none text-black border rounded-md border-blue-600 md:my-1"
            />
          </div>
          <div>
            <label className="md:text-lg">Attachment Five</label>
            <input
              type="file"
              id="image"
              accept="image/*"
              {...register("image_5")}
              className="w-full px-2 py-[2px] focus:outline-none text-black border rounded-md border-blue-600 md:my-1"
            />
          </div>
          <div>
            <label className="md:text-lg">Attachment Six</label>
            <input
              type="file"
              id="image"
              accept="image/*"
              {...register("image_6")}
              className="w-full px-2 py-[2px] focus:outline-none text-black border rounded-md border-blue-600 md:my-1"
            />
          </div>
          <div className="md:col-span-2 lg:col-span-3 flex justify-center items-center">
            {isLoading ? (
              <div className="btn_one cursor-not-allowed">
                <ImSpinner9
                  size={20}
                  className="text-white animate-spin cursor-not-allowed"
                />
              </div>
            ) : (
              <>
                <input type="submit" value="Upload" className="btn_one" />
              </>
            )}
          </div>
        </form>
      </Container>
    </>
  );
};
export default UploadData;
