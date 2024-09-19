import { useRef } from "react";
import { useForm } from "react-hook-form";
// import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs
    //   .sendForm(
    //     "service_5w04vhh",
    //     "template_2a4uzsc",
    //     form.current,
    //     "B3LwMq8Mp7dvEUPpS"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
    // e.target.reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-1 lg:space-y-4"
      >
        <div className="flex gap-4 items-center">
          <div className="space-y-2 md:space-y-4">
            <input
              {...register("name")}
              placeholder="Your Name"
              className="input-box md:my-1"
            />
            <input
              type="email"
              {...register("email")}
              placeholder="Your Email address"
              className="input-box md:my-1"
            />
          </div>
          <div className="space-y-2 md:space-y-4">
            <input
              type="number"
              {...register("phone")}
              placeholder="Your Phone Number"
              className="input-box md:my-1"
            />
            <input
              {...register("subject")}
              placeholder="Your Subject"
              className="input-box md:my-1"
            />
          </div>
        </div>
        <textarea
          {...register("message")}
          className="input-box md:my-1"
          rows="5"
          placeholder="Your message here"
        ></textarea>
        <div className="flex justify-center items-center cursor-pointer">
          <input type="submit" value="Submit" className="btn_one" />
        </div>
      </form>
    </>
  );
};

export default ContactForm;
