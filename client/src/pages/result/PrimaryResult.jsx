import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpin from "../../components/LoadingSpin";
import getData from "../../utils/getData";
import { replace, useNavigate, useParams } from "react-router-dom";
import Container from "../../components/Container";
import { useForm } from "react-hook-form";
import { useState } from "react";
import toast from "react-hot-toast";
import { ImSpinner9 } from "react-icons/im";

const PrimaryResult = () => {
  const { passNum } = useParams();
  const { response, error, isLoading } = getData(passNum);
  const [pending, setPending] = useState(false);
  const [updateLoading, setUpdateLoading] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  if (isLoading) {
    return <LoadingSpin />;
  }
  if (!response) {
    return (
      <div className="flex justify-center items-center h-[80vh] w-full">
        <h1 className="text-red-600 text-xl lg:text-3xl 2xl:text-5xl font-semibold capitalize">
          You don't have any information here
        </h1>
      </div>
    );
  }
  const {
    _id,
    finalCloudDoc,
    surname,
    givenName,
    dob,
    gender,
    fatherName,
    motherName,
    phoneNum,
    email,
    visaNum,
    nid,
    education,
    passportNum,
    marrital,
    religion,
    present,
    permanent,
  } = response;
  const cloudDoc = finalCloudDoc?.slice(1);

  const handleLogout = () => {
    navigate("/", { replace: true });
  };

  const handleDelete = (id) => {
    setPending(true);
    axios
      .delete(`${import.meta.env.VITE_BASE_URL}/deleteDoc/${id}`)
      .then((response) => {
        if (response?.status == 200) {
          navigate("/", { replace: true });
          toast.success(response?.data?.message);
        }
      })
      .catch((error) => {
        toast.error(error?.message);
      })
      .finally(() => {
        () => setPending(false);
      });
  };

  const onSubmit = (data) => {
    setUpdateLoading(true)
    const formData = new FormData();
    formData.append("image7", data?.image_7[0]);
    formData.append("image8", data?.image_8[0]);
    formData.append("image9", data?.image_9[0]);
    axios
      .put(`${import.meta.env.VITE_BASE_URL}/upload/${passportNum}`, formData, {
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
        setUpdateLoading(false);
      });
    console.log(data);
  };

  return (
    <>
      <Container>
        <h1 className="section_title">visa authorise</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          <div className="md:col-span-2 capitalize">
            <p>
              <span className="data_key">Name :</span> {givenName} {surname}
            </p>
            <p>
              <span className="data_key">Father's Name :</span> {fatherName}
            </p>
            <p>
              <span className="data_key">Mother's Name :</span> {motherName}
            </p>
            <p>
              <span className="data_key">Phone :</span> {phoneNum}
            </p>
            <p>
              <span className="data_key">Email :</span> {email}
            </p>
            <p>
              <span className="data_key">Date of Birth :</span> {dob}
            </p>
            <p>
              <span className="data_key">NID :</span> {nid}
            </p>
            <p>
              <span className="data_key">passport :</span> {passportNum}
            </p>
            <p>
              <span className="data_key">E-visa No :</span> {visaNum}
            </p>
            <p>
              <span className="data_key">Education :</span> {education}
            </p>
            <p>
              <span className="data_key">marrital status :</span> {marrital}
            </p>
            <p>
              <span className="data_key">gender :</span> {gender}
            </p>
            <p>
              <span className="data_key">Religion :</span> {religion}
            </p>
            <p>
              <span className="data_key">Present Address :</span> {present}
            </p>
            <p>
              <span className="data_key">Permanent Address :</span> {permanent}
            </p>
          </div>
          <div className="flex flex-col justify-start items-end gap-3 lg:gap-4">
            <div className="flex gap-2">
              <button className="btn_one" onClick={handleLogout}>
                Logout
              </button>
              <div className="">
                {pending ? (
                  <div className="px-4 md:px-8 py-1 md:py-2 rounded-md tracking-wider text-white bg-red-600 capitalize hover:bg-red-500 cursor-not-allowed">
                    <ImSpinner9
                      size={20}
                      className="text-white animate-spin cursor-not-allowed"
                    />
                  </div>
                ) : (
                  <button
                    onClick={() => handleDelete(_id)}
                    className="px-4 md:px-8 py-1 md:py-2 rounded-md tracking-wider text-white bg-red-600 cursor-pointer capitalize hover:bg-red-500"
                  >
                    Delete
                  </button>
                )}
              </div>
            </div>
            <img
              src={finalCloudDoc[0]?.fileUrl}
              alt="user photo"
              className="w-24 md:w-32 lg:w-40 h-24 md:h-32 lg:h-40 rounded-sm object-center object-cover"
            />
          </div>
        </div>
        <h3 className="text-center text-xl lg:text-4xl font-semibold tracking-widest text-blue-600 my-4 lg:my-8">
          Attachments
        </h3>
        <div className="grid lg:grid-cols-2 gap-4">
          {cloudDoc?.length > 0 &&
            cloudDoc.map((data, i) => {
              if (data) {
                return (
                  <img
                    key={i}
                    src={data?.fileUrl}
                    alt="documents"
                    className="w-full h-full rounded-sm object-cover object-center"
                  />
                );
              }
            })}
        </div>

        <h3 className="text-center text-xl lg:text-4xl font-semibold text-blue-600 my-4 lg:my-8 capitalize">
          Need to upload more files?
        </h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-1 lg:space-y-4"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
            <div>
              <label className="md:text-lg">Attachment One</label>
              <input
                type="file"
                id="image"
                accept="image/*"
                {...register("image_7")}
                className="input-box"
              />
            </div>
            <div>
              <label className="md:text-lg">Attachment Two</label>
              <input
                type="file"
                id="image"
                accept="image/*"
                {...register("image_8")}
                className="input-box"
              />
            </div>
            <div>
              <label className="md:text-lg">Attachment Three</label>
              <input
                type="file"
                id="image"
                accept="image/*"
                {...register("image_9")}
                className="input-box"
              />
            </div>
          </div>

          <div className="flex justify-center items-center">
            {updateLoading ? (
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
export default PrimaryResult;
