import { useParams } from "react-router-dom";
import getData from "../../utils/getData";
import LoadingSpin from "../../components/LoadingSpin";
import Container from "../../components/Container";

const FinalResult = () => {
  const { passNum } = useParams();
  const { response, error, isLoading } = getData(passNum);

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
    finalCloudDoc,
    surname,
    givenName,
    dob,
    gender,
    fatherName,
    motherName,
    phoneNum,
    email,
    nid,
    education,
    status,
    visaCountry,
    passportNum,
    marrital,
    religion,
    present,
    permanent,
  } = response;

  return (
    <>
      <Container>
        <h1 className="text-xl section_title">
          high commission of {visaCountry}
        </h1>
        <div className="flex justify-between items-center">
          <h3 className="text-center text-xl lg:text-3xl font-semibold tracking-widest text-blue-600">
            Visa application form
          </h3>
          <img
            src={finalCloudDoc[0]?.fileUrl}
            alt="user image"
            className="w-24 md:w-32 lg:w-40 h-24 md:h-32 lg:h-40 rounded-sm object-center object-cover"
          />
        </div>
        <table className="min-w-full bg-white border border-gray-300 text-lg">
          <tbody>
            <tr>
              <td
                colSpan={6}
                className="text-center font-semibold bg-green-300 py-1"
              >
                Personal details
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-2 border-b text-sm text-gray-700 font-semibold">
                Surname
              </td>
              <td className="px-6 py-2 border-b text-sm text-gray-700">
                {surname}
              </td>
              <td className="px-6 py-2 border-b text-sm text-gray-700 font-semibold">
                Given Name
              </td>
              <td className="px-6 py-2 border-b text-sm text-gray-700">
                {givenName}
              </td>
              <td className="px-6 py-2 border-b text-sm text-gray-700 font-semibold">
                Gender
              </td>
              <td className="px-6 py-2 border-b text-sm text-gray-700">
                {gender}
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-2 border-b text-sm text-gray-700 font-semibold">
                Given Name
              </td>
              <td className="px-6 py-2 border-b text-sm text-gray-700">
                {givenName}
              </td>
            </tr>

            <tr>
              <td className="px-6 py-2 border-b text-sm text-gray-700 font-semibold">
                Gender
              </td>
              <td className="px-6 py-2 border-b text-sm text-gray-700">
                {gender}
              </td>
              <td className="px-6 py-2 border-b text-sm text-gray-700 font-semibold">
                Passport Number
              </td>
              <td className="px-6 py-2 border-b text-sm text-gray-700">
                {passportNum}
              </td>
              <td className="px-6 py-2 border-b text-sm text-gray-700 font-semibold">
                Date of Birth
              </td>
              <td className="px-6 py-2 border-b text-sm text-gray-700">
                {dob}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-2 border-b text-sm text-gray-700 font-semibold">
                Place of Birth
              </td>
              <td className="px-6 py-2 border-b text-sm text-gray-700">
                {permanent}
              </td>
              <td className="px-6 py-2 border-b text-sm text-gray-700 font-semibold">
                Mobile Number
              </td>
              <td className="px-6 py-2 border-b text-sm text-gray-700">
                {phoneNum}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-2 border-b text-sm text-gray-700 font-semibold">
                Nationality
              </td>
              <td className="px-6 py-2 border-b text-sm text-gray-700">
                {present}
              </td>
              <td className="px-6 py-2 border-b text-sm text-gray-700 font-semibold">
                National ID
              </td>
              <td className="px-6 py-2 border-b text-sm text-gray-700">
                {nid}
              </td>
            </tr>
            {/* <tr>
              <td
                colSpan={4}
                className="text-center font-semibold bg-green-300 py-1"
              >
                Company details
              </td>
            </tr>
            <tr>
              <td className="px-6 py-2 border-b text-sm text-gray-700 font-semibold">
                Company Name
              </td>
              <td className="px-6 py-2 border-b text-sm text-gray-700">
                {companyName}
              </td>
              <td className="px-6 py-2 border-b text-sm text-gray-700 font-semibold">
                Job Title
              </td>
              <td className="px-6 py-2 border-b text-sm text-gray-700">
                {jobTitle}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-2 border-b text-sm text-gray-700 font-semibold">
                Duty Duration
              </td>
              <td className="px-6 py-2 border-b text-sm text-gray-700">
                {dutyDuration} hours
              </td>
              <td className="px-6 py-2 border-b text-sm text-gray-700 font-semibold">
                Salary
              </td>
              <td className="px-6 py-2 border-b text-sm text-gray-700">
                $ {salary}
              </td>
            </tr>
            <tr>
              <td
                colSpan={4}
                className="text-center font-semibold bg-green-300 py-1"
              >
                Passport Details
              </td>
            </tr>
            <tr>
              <td className="px-6 py-2 border-b text-sm text-gray-700 font-semibold">
                Passport Number
              </td>
              <td className="px-6 py-2 border-b text-sm text-gray-700">
                {passportNum}
              </td>
              <td className="px-6 py-2 border-b text-sm text-gray-700 font-semibold">
                Issued Country
              </td>
              <td className="px-6 py-2 border-b text-sm text-gray-700">
                {issuedCountry}
              </td>
            </tr>
            <tr>
              <td
                colSpan={4}
                className="text-center font-semibold bg-green-300 py-1"
              >
                Applicant's Contact Details
              </td>
            </tr>
            <tr>
              <td className="px-6 py-2 border-b text-sm text-gray-700 font-semibold">
                Phone
              </td>
              <td className="px-6 py-2 border-b text-sm text-gray-700">
                {phoneNum}
              </td>
              <td className="px-6 py-2 border-b text-sm text-gray-700 font-semibold">
                Email
              </td>
              <td className="px-6 py-2 border-b text-sm text-gray-700">
                {email}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-2 border-b text-sm text-gray-700 font-semibold">
                Note
              </td>
              <td className="px-6 py-2 border-b text-sm text-gray-700">
                {note}
              </td>
            </tr> */}
          </tbody>
        </table>
      </Container>
    </>
  );
};
export default FinalResult;
