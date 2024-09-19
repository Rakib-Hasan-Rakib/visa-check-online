import ContactForm from "./ContactForm";
import "./Contact.css";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { AiFillMail } from "react-icons/ai"
import { BsFillTelephoneInboundFill } from "react-icons/bs"
import {HiOutlineMailOpen} from 'react-icons/hi'
import Container from "../../components/Container";
const Contact = () => {
  return (
    <Container>
      <h1 className="section_title pb-8 lg:pb-20">contact us</h1>
      <div className="contact-container flex flex-col lg:flex-row justify-between gap-20 lg:gap-10">
        <div className="bg-transparent backdrop-blur-3xl basis-1/2 space-y-3 md:space-y-6">
          <h2 className="capitalize text-center text-lg md:text-2xl font-semibold text-blue-600">
            fill up this form to contact with us
          </h2>
          <ContactForm />
        </div>
        <div className="space-y-3 md:space-y-6 basis-1/2">
          <h2 className="capitalize text-center text-xl md:text-2xl font-semibold text-blue-600 mb-2 md:mb-6">
            contact info
          </h2>

          <div className="flex gap-6 items-center">
            <HiOutlineBuildingStorefront className="h-12 w-12 text-blue-500 border border-blue-500  p-2 rounded-full" />
            <p>
              <span className="font-semibold text-lg md:text-xl">Visit Us</span>
              <br />
              36 FOWLER ROAD, <br /> HAINAULT BUSINESS PARK, ILFORD, IG6 3UT, GB
            </p>
          </div>

          <div className="flex gap-6  items-center">
            <AiFillMail className="h-12 w-12 text-blue-500 border border-blue-500 p-2 rounded-full" />
            <p>
              <span className="font-semibold text-lg md:text-xl">Mail Us</span>
              <br />
              sales@dnhfashions.com
            </p>
          </div>
          <div className="flex gap-6  items-center">
            <BsFillTelephoneInboundFill className="h-12 w-12 text-blue-500 border border-blue-500 p-2 rounded-full" />
            <p>
              <span className="font-semibold text-lg md:text-xl">Call Us</span>{" "}
              <br />
              +44 20 8500 2265
            </p>
          </div>
          <div className="flex gap-6 items-center">
            <HiOutlineMailOpen className="h-12 w-12 text-blue-500 border border-blue-500  p-2 rounded-full" />
            <p>
              <span className="font-semibold text-lg md:text-xl">Fax Us</span>{" "}
              <br />
              N/A
            </p>
          </div>
        </div>
      </div>
      <div className="my-8 md:my-12 lg:my-16"></div>
    </Container>
  );
};

export default Contact;
