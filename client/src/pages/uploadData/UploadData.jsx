import { useForm } from "react-hook-form";
import Container from "../../components/Container";
import { useState } from "react";
import UploadImage from "./UploadImage";

const UploadData = () => {
  const { register, handleSubmit, setValue } = useForm();
  const [imagePreview, setImagePreview] = useState(null);

  const onSubmit = (data) => console.log(data);

  const requiredSymbol = <span className="text-red-600">*</span>;

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <>
      <Container>
        <h1 className="section_title">upload client's visa information</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4"
        >
          {/* {imagePreview && (
            <div>
              <p>Image Preview:</p>
              <img
                src={imagePreview}
                alt="Selected Preview"
                style={{ width: "150px", height: "150px" }}
              />
            </div>
          )} */}
          <div>
            <label className="md:text-lg">Surname{requiredSymbol}</label>
            <input
              {...register("surname")}
              placeholder="Surname"
              className="input-box md:my-1"
            />
          </div>
          <div>
            <label className="md:text-lg">Given Name{requiredSymbol}</label>
            <input
              {...register("givenName")}
              placeholder="Given Name"
              className="input-box md:my-1"
            />
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
          </div>
          <div>
            <label className="md:text-lg">Father's Name{requiredSymbol}</label>
            <input
              {...register("fatherName")}
              placeholder="Father's Name"
              className="input-box md:my-1"
            />
          </div>
          <div>
            <label className="md:text-lg">Mother's Name{requiredSymbol}</label>
            <input
              {...register("motherName")}
              placeholder="Mother's Name"
              className="input-box md:my-1"
            />
          </div>
          <div>
            <label className="md:text-lg">Phone Number{requiredSymbol}</label>
            <input
              type="number"
              {...register("phoneNum")}
              placeholder="Phone Number"
              className="input-box md:my-1"
            />
          </div>
          <div>
            <label className="md:text-lg">Email Address{requiredSymbol}</label>
            <input
              type="email"
              {...register("email")}
              placeholder="Email Address"
              className="input-box md:my-1"
            />
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
          </div>
          <div>
            <label className="md:text-lg">NID{requiredSymbol}</label>
            <input
              {...register("nid")}
              placeholder="National ID"
              className="input-box md:my-1"
            />
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
          </div>
          <div>
            <label className="md:text-lg">Date of Birth{requiredSymbol}</label>
            <input
              type="date"
              id="date"
              {...register("dob", { required: true })}
              className="input-box md:my-1"
            />
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
          </div>
          <div>
            <label className="md:text-lg">Religion{requiredSymbol}</label>
            <input
              {...register("religion")}
              placeholder="eg. Islam"
              className="input-box md:my-1"
            />
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
          </div>
          <div>
            <label className="md:text-lg">Profile Photo{requiredSymbol}</label>
            <input
              type="file"
              id="image"
              accept="image/*"
              {...register("photo", { required: true })}
              className="w-full px-2 py-[2px] focus:outline-none text-black border rounded-md border-blue-600 md:my-1"
              onChange={(e) => {
                handleImageChange(e);
                setValue("photo", e.target.files[0]);
              }}
            />
          </div>
          <h2 className="md:col-span-2 lg:col-span-3 flex justify-center items-center text-blue-600 font-semibold text-xl md:text-2xl lg:text-4xl tracking-widest">
            Attachments
          </h2>
          <UploadImage/>
          <div className="md:col-span-2 lg:col-span-3 flex justify-center items-center">
            <input type="submit" value="Upload" className="btn_one" />
          </div>
        </form>
      </Container>
    </>
  );
};
export default UploadData;
